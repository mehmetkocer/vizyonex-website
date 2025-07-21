'use client';

import React, { useState } from 'react';

interface TabContent {
  id: string;
  title: string;
  projects?: Array<{
    id: number;
    title: string;
    image: string;
    description: string;
  }>;
  partners?: Array<{
    id: number;
    name: string;
    logo: string;
  }>;
}

interface MarkdownProject {
  name: string;
  type: string;
  area?: string;
  completion?: string;
  features: string;
}

interface MarkdownProjects {
  [category: string]: MarkdownProject[];
}

interface ShowcaseProps {
  projects?: MarkdownProjects;
}

export default function Showcase({ projects: markdownProjects = {} }: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState('industrial');

  const tabsData: TabContent[] = [
    {
      id: 'industrial',
      title: 'Endüstriyel Tesisler',
      projects: [
        {
          id: 1,
          title: 'Otomotiv Fabrikası',
          image: '/projects/industrial-1.jpg',
          description: 'Modern otomotiv üretim tesisi'
        },
        {
          id: 2,
          title: 'Gıda İşleme Tesisi',
          image: '/projects/industrial-2.jpg',
          description: 'Hijyenik gıda üretim kompleksi'
        },
        {
          id: 3,
          title: 'Tekstil Fabrikası',
          image: '/projects/industrial-3.jpg',
          description: 'Sürdürülebilir tekstil üretimi'
        },
        {
          id: 4,
          title: 'Kimya Tesisi',
          image: '/projects/industrial-4.jpg',
          description: 'Güvenli kimyasal üretim'
        }
      ]
    },
    {
      id: 'commercial',
      title: 'Ticari Yapılar',
      projects: [
        {
          id: 1,
          title: 'AVM Çelik Konstrüksiyon',
          image: '/projects/commercial-1.jpg',
          description: 'Modern alışveriş merkezi'
        },
        {
          id: 2,
          title: 'Ofis Kompleksi',
          image: '/projects/commercial-2.jpg',
          description: 'Çok katlı ofis binası'
        },
        {
          id: 3,
          title: 'Otel Projesi',
          image: '/projects/commercial-3.jpg',
          description: 'Lüks otel inşaatı'
        },
        {
          id: 4,
          title: 'Spor Kompleksi',
          image: '/projects/commercial-4.jpg',
          description: 'Çok amaçlı spor tesisi'
        }
      ]
    },
    {
      id: 'steel',
      title: 'Mimari Çelik',
      projects: [
        {
          id: 1,
          title: 'Cam Fasad Sistemi',
          image: '/projects/steel-1.jpg',
          description: 'Modern cam cephe tasarımı'
        },
        {
          id: 2,
          title: 'Çelik Köprü',
          image: '/projects/steel-2.jpg',
          description: 'Estetik çelik köprü yapısı'
        },
        {
          id: 3,
          title: 'Havalandırma Sistemi',
          image: '/projects/steel-3.jpg',
          description: 'Endüstriyel havalandırma'
        },
        {
          id: 4,
          title: 'Dekoratif Çelik',
          image: '/projects/steel-4.jpg',
          description: 'Sanatsal çelik işçiliği'
        }
      ]
    },
    {
      id: 'partners',
      title: 'Çözüm Ortaklarımız',
      partners: [
        { id: 1, name: 'Yapı Kredi', logo: '/partners/yapikredi.png' },
        { id: 2, name: 'Akbank', logo: '/partners/akbank.png' },
        { id: 3, name: 'İş Bankası', logo: '/partners/isbank.png' },
        { id: 4, name: 'Garanti BBVA', logo: '/partners/garanti.png' },
        { id: 5, name: 'Halkbank', logo: '/partners/halkbank.png' },
        { id: 6, name: 'Vakıfbank', logo: '/partners/vakifbank.png' },
        { id: 7, name: 'Ziraat Bankası', logo: '/partners/ziraat.png' },
        { id: 8, name: 'QNB Finansbank', logo: '/partners/qnb.png' }
      ]
    }
  ];

  // Convert markdown projects to tab format
  const convertMarkdownProjectsToTabs = (projects: MarkdownProjects): TabContent[] => {
    const categoryMap: { [key: string]: string } = {
      'Endüstriyel Tesisler': 'industrial',
      'Ticari Yapılar': 'commercial',
      'Mimari Çelik Projeler': 'steel'
    };

    const convertedTabs: TabContent[] = Object.entries(projects).map(([category, projectList]) => {
      const tabId = categoryMap[category] || category.toLowerCase().replace(/\s+/g, '-');
      
      return {
        id: tabId,
        title: category,
        projects: projectList.map((project, index) => ({
          id: index + 1,
          title: project.name,
          image: `/projects/${tabId}-${index + 1}.jpg`,
          description: project.features || project.type
        }))
      };
    });

    // Add partners tab
    convertedTabs.push({
      id: 'partners',
      title: 'Çözüm Ortaklarımız',
      partners: [
        { id: 1, name: 'Yapı Kredi', logo: '/partners/yapikredi.png' },
        { id: 2, name: 'Akbank', logo: '/partners/akbank.png' },
        { id: 3, name: 'İş Bankası', logo: '/partners/isbank.png' },
        { id: 4, name: 'Garanti BBVA', logo: '/partners/garanti.png' },
        { id: 5, name: 'Halkbank', logo: '/partners/halkbank.png' },
        { id: 6, name: 'Vakıfbank', logo: '/partners/vakifbank.png' },
        { id: 7, name: 'Ziraat Bankası', logo: '/partners/ziraat.png' },
        { id: 8, name: 'QNB Finansbank', logo: '/partners/qnb.png' }
      ]
    });

    return convertedTabs;
  };

  // Use markdown projects if available, otherwise use hardcoded tabs
  const tabsToDisplay = Object.keys(markdownProjects).length > 0
    ? convertMarkdownProjectsToTabs(markdownProjects)
    : tabsData;

  const activeTabData = tabsToDisplay.find(tab => tab.id === activeTab);

  return (
    <section id="projects" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Çalışma Alanlarımız ve Çözüm Ortaklarımız
          </h2>
          <p className="text-lg text-text-default max-w-3xl mx-auto leading-relaxed">
            Farklı sektörlerdeki deneyimimiz ve güçlü iş ortaklıklarımızla, 
            projelerinize en uygun çözümleri sunuyoruz.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-md">
            {tabsToDisplay.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 mx-1 my-1 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-text-light shadow-lg transform scale-105'
                    : 'text-text-default hover:bg-gray-100 hover:text-accent'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {activeTabData?.projects && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeTabData.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200 overflow-hidden">
                    <div
                      className="w-full h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('${project.image}')`,
                        backgroundColor: '#e5e7eb' // Fallback color
                      }}
                    >
                      {/* Overlay for better text readability */}
                      <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-default text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTabData?.partners && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {activeTabData.partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center group"
                >
                  <div
                    className="w-full h-16 bg-contain bg-center bg-no-repeat opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url('${partner.logo}')`,
                    }}
                    title={partner.name}
                  >
                    {/* Fallback text if image doesn't load */}
                    <div className="w-full h-full flex items-center justify-center text-text-default font-medium text-sm">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-default mb-6">
            Sizin de projenizde yer almak isteriz
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-text-light font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Proje Teklifi Alın
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}