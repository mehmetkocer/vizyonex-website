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