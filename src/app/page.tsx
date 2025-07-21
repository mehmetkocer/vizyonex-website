import Header from '../../components/Header';
import Hero from '../../components/Hero';
import VisionMission from '../../components/VisionMission';
import Services from '../../components/Services';
import Showcase from '../../components/Showcase';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';
import { getMarkdownContent, parseStatistics, parseServiceCards, parseProjects } from '../../lib/markdown';
import fs from 'fs';
import path from 'path';

async function getPageData() {
  try {
    // Get vision mission data
    const visionMissionData = await getMarkdownContent('vision-mission');
    const stats = parseStatistics(visionMissionData.content);
    
    // Extract vision and mission sections from raw content
    const filePath = path.join(process.cwd(), 'content', 'vision-mission.md');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const rawContent = fileContent.split('---').slice(2).join('---').trim();
    
    const visionMatch = rawContent.match(/# Vizyonumuz\s*([\s\S]*?)(?=# Misyonumuz|$)/);
    const missionMatch = rawContent.match(/# Misyonumuz\s*([\s\S]*?)(?=## [^#]|$)/);
    
    // Clean up the extracted content
    const cleanVision = visionMatch ? visionMatch[1].replace(/##[^#][\s\S]*$/, '').trim() : '';
    const cleanMission = missionMatch ? missionMatch[1].replace(/##[^#][\s\S]*$/, '').trim() : '';

    // Get services data
    const servicesData = await getMarkdownContent('services');
    const services = parseServiceCards(servicesData.content);

    // Get projects data
    const projectsData = await getMarkdownContent('projects');
    const projects = parseProjects(projectsData.content);
    
    return {
      visionMission: {
        visionContent: cleanVision || 'Endüstriyel çelik konstrüksiyon alanında Türkiye\'nin lider şirketi olmak ve uluslararası pazarlarda güçlü bir marka haline gelerek, sürdürülebilir ve yenilikçi çözümlerle sektörün geleceğini şekillendirmek.',
        missionContent: cleanMission || 'Modern mühendislik anlayışı ve deneyimli kadromuzla, endüstriyel tesisler, ticari yapılar ve mimari çelik projelerinde müşterilerimize güvenilir, kaliteli ve ekonomik çözümler sunarak, onların başarısına ortak olmak.',
        stats: stats.length > 0 ? stats : [
          { value: '15', label: 'Yıllık Deneyim' },
          { value: '50+', label: 'Tamamlanan Proje' },
          { value: '%100', label: 'Müşteri Memnuniyeti' },
          { value: '25+', label: 'Uzman Personel' }
        ]
      },
      services: services.length > 0 ? services : [],
      projects: projects
    };
  } catch (error) {
    console.error('Error loading page data:', error);
    return {
      visionMission: {
        visionContent: 'Endüstriyel çelik konstrüksiyon alanında Türkiye\'nin lider şirketi olmak ve uluslararası pazarlarda güçlü bir marka haline gelerek, sürdürülebilir ve yenilikçi çözümlerle sektörün geleceğini şekillendirmek.',
        missionContent: 'Modern mühendislik anlayışı ve deneyimli kadromuzla, endüstriyel tesisler, ticari yapılar ve mimari çelik projelerinde müşterilerimize güvenilir, kaliteli ve ekonomik çözümler sunarak, onların başarısına ortak olmak.',
        stats: [
          { value: '15', label: 'Yıllık Deneyim' },
          { value: '50+', label: 'Tamamlanan Proje' },
          { value: '%100', label: 'Müşteri Memnuniyeti' },
          { value: '25+', label: 'Uzman Personel' }
        ]
      },
      services: [],
      projects: {}
    };
  }
}

export default async function Home() {
  const pageData = await getPageData();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VisionMission
        visionContent={pageData.visionMission.visionContent}
        missionContent={pageData.visionMission.missionContent}
        stats={pageData.visionMission.stats}
      />
      <Services services={pageData.services} />
      <Showcase projects={pageData.projects} />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
