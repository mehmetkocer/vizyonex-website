import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownData {
  slug: string;
  title: string;
  description?: string;
  content: string;
  [key: string]: string | number | boolean | undefined;
}

export async function getMarkdownContent(filename: string): Promise<MarkdownData> {
  const fullPath = path.join(contentDirectory, `${filename}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Markdown file not found: ${filename}.md`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process markdown content to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug: filename,
    title: data.title || filename,
    description: data.description || '',
    content: contentHtml,
    ...data,
  };
}

export async function getAllMarkdownFiles(): Promise<string[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(contentDirectory);
  return filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace('.md', ''));
}

export async function getMultipleMarkdownContent(filenames: string[]): Promise<MarkdownData[]> {
  const contents = await Promise.all(
    filenames.map(async (filename) => {
      try {
        return await getMarkdownContent(filename);
      } catch (error) {
        console.warn(`Could not load markdown file: ${filename}`, error);
        return null;
      }
    })
  );

  return contents.filter((content): content is MarkdownData => content !== null);
}

// Specific utility functions for our content types
export async function getVisionMissionContent(): Promise<MarkdownData> {
  return getMarkdownContent('vision-mission');
}

export async function getServicesContent(): Promise<MarkdownData> {
  return getMarkdownContent('services');
}

export async function getProjectsContent(): Promise<MarkdownData> {
  return getMarkdownContent('projects');
}

// Utility to extract sections from markdown content
export function extractSections(content: string): { [key: string]: string } {
  const sections: { [key: string]: string } = {};
  
  // Split content by headers and create sections
  const parts = content.split(/(?=<h[1-6])/);
  
  parts.forEach((part) => {
    const headerMatch = part.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/);
    if (headerMatch) {
      const title = headerMatch[1].trim();
      const sectionContent = part.replace(headerMatch[0], '').trim();
      
      // Create a slug-like key from the title
      const key = title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');
      
      sections[key] = sectionContent;
    }
  });
  
  return sections;
}

// Extract specific data from markdown frontmatter
export function extractFrontmatterData(data: MarkdownData, key: string, defaultValue: string | number | boolean | null = null): string | number | boolean | undefined | null {
  return data[key] || defaultValue;
}

// Parse statistics from content (for vision-mission stats)
export function parseStatistics(content: string): Array<{ label: string; value: string }> {
  const stats: Array<{ label: string; value: string }> = [];
  
  // Look for patterns like "**50+** Tamamlanan Proje"
  const statPattern = /<strong>([^<]+)<\/strong>\s+([^<\n]+)/g;
  let match;
  
  while ((match = statPattern.exec(content)) !== null) {
    stats.push({
      value: match[1].trim(),
      label: match[2].trim(),
    });
  }
  
  return stats;
}

// Parse service cards from services content
export function parseServiceCards(content: string): Array<{
  title: string;
  description: string;
  features: string[];
  applications: string[];
}> {
  const services: Array<{
    title: string;
    description: string;
    features: string[];
    applications: string[];
  }> = [];
  
  // Split by main headers (h1)
  const sections = content.split(/<h1[^>]*>([^<]+)<\/h1>/);
  
  for (let i = 1; i < sections.length; i += 2) {
    const title = sections[i].trim();
    const sectionContent = sections[i + 1];
    
    if (!sectionContent) continue;
    
    // Extract description (first paragraph)
    const descriptionMatch = sectionContent.match(/<p>([^<]+)<\/p>/);
    const description = descriptionMatch ? descriptionMatch[1] : '';
    
    // Extract features (under Özellikler)
    const featuresSection = sectionContent.match(/<h2[^>]*>Özellikler<\/h2>([\s\S]*?)(?=<h2|$)/);
    const features = featuresSection ? extractListItems(featuresSection[1]) : [];
    
    // Extract applications (under Uygulama Alanları)
    const applicationsSection = sectionContent.match(/<h2[^>]*>Uygulama Alanları<\/h2>([\s\S]*?)(?=<h2|$)/);
    const applications = applicationsSection ? extractListItems(applicationsSection[1]) : [];
    
    if (title && description) {
      services.push({ title, description, features, applications });
    }
  }
  
  return services;
}

// Helper function to extract list items from HTML
function extractListItems(htmlContent: string): string[] {
  const items: string[] = [];
  const listItemPattern = /<li>([^<]+)<\/li>/g;
  let match;
  
  while ((match = listItemPattern.exec(htmlContent)) !== null) {
    items.push(match[1].trim());
  }
  
  return items;
}

// Parse projects from projects content
export function parseProjects(content: string): {
  [category: string]: Array<{
    name: string;
    type: string;
    area?: string;
    completion?: string;
    features: string;
  }>;
} {
  const projectsByCategory: {
    [category: string]: Array<{
      name: string;
      type: string;
      area?: string;
      completion?: string;
      features: string;
    }>;
  } = {};
  
  // Split by main category headers (h1)
  const sections = content.split(/<h1[^>]*>([^<]+)<\/h1>/);
  
  for (let i = 1; i < sections.length; i += 2) {
    const category = sections[i].trim();
    const sectionContent = sections[i + 1];
    
    if (!sectionContent || category.includes('Çözüm Ortakları') || category.includes('Başarı Hikayeleri')) {
      continue;
    }
    
    const projects: Array<{
      name: string;
      type: string;
      area?: string;
      completion?: string;
      features: string;
    }> = [];
    
    // Split by project headers (h2)
    const projectSections = sectionContent.split(/<h2[^>]*>([^<]+)<\/h2>/);
    
    for (let j = 1; j < projectSections.length; j += 2) {
      const projectName = projectSections[j].trim();
      const projectContent = projectSections[j + 1];
      
      if (!projectContent) continue;
      
      // Extract project details
      const typeMatch = projectContent.match(/<strong>Proje Türü<\/strong>:\s*([^<\n]+)/);
      const areaMatch = projectContent.match(/<strong>Alan<\/strong>:\s*([^<\n]+)/);
      const completionMatch = projectContent.match(/<strong>Tamamlanma<\/strong>:\s*([^<\n]+)/);
      const featuresMatch = projectContent.match(/<strong>Özellik(?:ler)?<\/strong>:\s*([^<\n]+)/);
      
      projects.push({
        name: projectName,
        type: typeMatch ? typeMatch[1].trim() : '',
        area: areaMatch ? areaMatch[1].trim() : undefined,
        completion: completionMatch ? completionMatch[1].trim() : undefined,
        features: featuresMatch ? featuresMatch[1].trim() : '',
      });
    }
    
    if (projects.length > 0) {
      projectsByCategory[category] = projects;
    }
  }
  
  return projectsByCategory;
}

// Parse work areas and solution partners from projects content
export function parseWorkAreasAndPartners(content: string): {
  workAreas: {
    slogan: string;
    description: string;
    items: Array<{
      name: string;
      description: string;
    }>;
  };
  solutionPartners: {
    slogan: string;
    description: string;
    items: Array<{
      name: string;
      description: string;
    }>;
  };
} {
  const result = {
    workAreas: {
      slogan: '',
      description: '',
      items: [] as Array<{ name: string; description: string; }>
    },
    solutionPartners: {
      slogan: '',
      description: '',
      items: [] as Array<{ name: string; description: string; }>
    }
  };

  // Split content by h2 headers
  const h2Sections = content.split(/<h2[^>]*>/);
  
  h2Sections.forEach((section) => {
    const cleanSection = section.trim();
    
    // Check for work areas section
    if (cleanSection.includes('Çalışma Alanlarımız') || cleanSection.includes('🏗️')) {
      // Extract slogan (text between <em> tags with *)
      const sloganMatch = cleanSection.match(/<em>\*([^*]+)\*<\/em>/);
      if (sloganMatch) {
        result.workAreas.slogan = sloganMatch[1].trim();
      }
      
      // Extract description paragraph after slogan
      const paragraphs = cleanSection.match(/<p>([^<]+)<\/p>/g);
      if (paragraphs && paragraphs.length > 1) {
        // Skip the first paragraph (usually contains title text) and get the description
        const descMatch = paragraphs[1].match(/<p>([^<]+)<\/p>/);
        if (descMatch) {
          result.workAreas.description = descMatch[1].trim();
        }
      }
      
      // Extract list items with strong tags
      const listItemsMatch = cleanSection.match(/<ul>([\s\S]*?)<\/ul>/);
      if (listItemsMatch) {
        const listContent = listItemsMatch[1];
        const itemMatches = listContent.matchAll(/<li><strong>([^<]+)<\/strong><br\s*\/?>\s*([^<]+)<\/li>/g);
        
        for (const match of itemMatches) {
          result.workAreas.items.push({
            name: match[1].trim(),
            description: match[2].trim()
          });
        }
      }
    }
    
    // Check for solution partners section  
    if (cleanSection.includes('Çözüm Ortaklarımız') || cleanSection.includes('🤝')) {
      // Extract slogan
      const sloganMatch = cleanSection.match(/<em>\*([^*]+)\*<\/em>/);
      if (sloganMatch) {
        result.solutionPartners.slogan = sloganMatch[1].trim();
      }
      
      // Extract description
      const paragraphs = cleanSection.match(/<p>([^<]+)<\/p>/g);
      if (paragraphs && paragraphs.length > 1) {
        const descMatch = paragraphs[1].match(/<p>([^<]+)<\/p>/);
        if (descMatch) {
          result.solutionPartners.description = descMatch[1].trim();
        }
      }
      
      // Extract list items
      const listItemsMatch = cleanSection.match(/<ul>([\s\S]*?)<\/ul>/);
      if (listItemsMatch) {
        const listContent = listItemsMatch[1];
        const itemMatches = listContent.matchAll(/<li><strong>([^<]+)<\/strong><br\s*\/?>\s*([^<]+)<\/li>/g);
        
        for (const match of itemMatches) {
          result.solutionPartners.items.push({
            name: match[1].trim(),
            description: match[2].trim()
          });
        }
      }
    }
  });

  // If parsing failed, use fallback data based on raw markdown structure
  if (result.workAreas.items.length === 0) {
    result.workAreas = {
      slogan: 'Her yapıya özel uzmanlık.',
      description: 'Vizyonex Yapı olarak, küçük çaplı tadilat projelerinden büyük ölçekli inşaatlara kadar geniş bir yelpazede hizmet sunuyoruz. Deneyimli ekibimizle hem bireysel hem kurumsal müşterilere çözüm üretiyoruz.',
      items: [
        {
          name: 'Konut Projeleri',
          description: 'Daire, villa, rezidans gibi yaşam alanlarında iç ve dış yapı uygulamaları.'
        },
        {
          name: 'Ticari Yapılar',
          description: 'Ofisler, mağazalar, AVM\'ler ve iş merkezlerinde modern ve işlevsel çözümler.'
        },
        {
          name: 'Endüstriyel Tesisler',
          description: 'Fabrika, depo ve üretim alanlarında dayanıklı yapı uygulamaları.'
        },
        {
          name: 'Eğitim & Sağlık Kurumları',
          description: 'Okul, hastane, klinik gibi toplumsal yapılarda güvenli ve hijyenik yapı çözümleri.'
        },
        {
          name: 'Tadilat ve Yenileme Projeleri',
          description: 'Mevcut yapıların modernize edilmesi, bakım ve onarımı.'
        }
      ]
    };
  }

  if (result.solutionPartners.items.length === 0) {
    result.solutionPartners = {
      slogan: 'Kalite, iş birliğiyle başlar.',
      description: 'Proje başarımızın arkasında yalnızca kendi uzmanlığımız değil, aynı zamanda güçlü ve güvenilir çözüm ortaklarımız da yer alıyor. Malzeme kalitesinden uygulama sürecine kadar her aşamada birlikte hareket ettiğimiz iş ortaklarımızla en iyi sonucu hedefliyoruz.',
      items: [
        {
          name: 'Yapı Malzemeleri Tedarikçileri',
          description: 'Kaliteli sıva, boya, alçıpan, yalıtım ve seramik malzemelerini temin ettiğimiz güvenilir markalar.'
        },
        {
          name: 'Teknik Ekipman Sağlayıcıları',
          description: 'İnşaat makineleri, sıva makineleri ve şantiye ekipmanları konusunda uzman iş ortakları.'
        },
        {
          name: 'Mühendislik & Mimarlık Ofisleri',
          description: 'Projelerimizin teknik planlama ve görselleştirme aşamalarında birlikte çalıştığımız profesyonel ekipler.'
        },
        {
          name: 'Taşeron ve Usta Ekipleri',
          description: 'İhtiyaca göre destek aldığımız, iş disiplini yüksek uygulama ekipleri.'
        },
        {
          name: 'Lojistik ve Nakliye Firmaları',
          description: 'Malzeme ve ekipmanların zamanında şantiye alanlarına ulaştırılmasını sağlayan lojistik partnerlerimiz.'
        }
      ]
    };
  }

  return result;
}

// Utility to check if markdown files exist
export function checkMarkdownFilesExist(): { [key: string]: boolean } {
  const requiredFiles = ['vision-mission', 'services', 'projects'];
  const existingFiles: { [key: string]: boolean } = {};
  
  requiredFiles.forEach((filename) => {
    const fullPath = path.join(contentDirectory, `${filename}.md`);
    existingFiles[filename] = fs.existsSync(fullPath);
  });
  
  return existingFiles;
}