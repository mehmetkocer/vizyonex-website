'use client';

import React, { useState } from 'react';

interface TabContent {
  id: string;
  title: string;
  shortTitle?: string;
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
      shortTitle: 'Endüstriyel',
      projects: [
        {
          id: 1,
          title: 'Otomotiv Fabrikası',
          image: '/image2.jpg',
          description: 'Modern otomotiv üretim tesisi'
        },
        {
          id: 2,
          title: 'Gıda İşleme Tesisi',
          image: '/image2.jpg',
          description: 'Hijyenik gıda üretim kompleksi'
        },
        {
          id: 3,
          title: 'Tekstil Fabrikası',
          image: '/image2.jpg',
          description: 'Sürdürülebilir tekstil üretimi'
        },
        {
          id: 4,
          title: 'Kimya Tesisi',
          image: '/image2.jpg',
          description: 'Güvenli kimyasal üretim'
        }
      ]
    },
    {
      id: 'commercial',
      title: 'Ticari Yapılar',
      shortTitle: 'Ticari',
      projects: [
        {
          id: 1,
          title: 'AVM Çelik Konstrüksiyon',
          image: '/image3.jpg',
          description: 'Modern alışveriş merkezi'
        },
        {
          id: 2,
          title: 'Ofis Kompleksi',
          image: '/image3.jpg',
          description: 'Çok katlı ofis binası'
        },
        {
          id: 3,
          title: 'Otel Projesi',
          image: '/image3.jpg',
          description: 'Lüks otel inşaatı'
        },
        {
          id: 4,
          title: 'Spor Kompleksi',
          image: '/image3.jpg',
          description: 'Çok amaçlı spor tesisi'
        }
      ]
    },
    {
      id: 'steel',
      title: 'Mimari Çelik',
      shortTitle: 'Çelik',
      projects: [
        {
          id: 1,
          title: 'Cam Fasad Sistemi',
          image: '/image4.jpg',
          description: 'Modern cam cephe tasarımı'
        },
        {
          id: 2,
          title: 'Çelik Köprü',
          image: '/image4.jpg',
          description: 'Estetik çelik köprü yapısı'
        },
        {
          id: 3,
          title: 'Havalandırma Sistemi',
          image: '/image4.jpg',
          description: 'Endüstriyel havalandırma'
        },
        {
          id: 4,
          title: 'Dekoratif Çelik',
          image: '/image4.jpg',
          description: 'Sanatsal çelik işçiliği'
        }
      ]
    },
    {
      id: 'partners',
      title: 'Çözüm Ortaklarımız',
      shortTitle: 'Ortaklar',
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
    const categoryMap: { [key: string]: { id: string; shortTitle: string } } = {
      'Endüstriyel Tesisler': { id: 'industrial', shortTitle: 'Endüstriyel' },
      'Ticari Yapılar': { id: 'commercial', shortTitle: 'Ticari' },
      'Mimari Çelik Projeler': { id: 'steel', shortTitle: 'Çelik' }
    };

    const convertedTabs: TabContent[] = Object.entries(projects).map(([category, projectList]) => {
      const mappedCategory = categoryMap[category];
      const tabId = mappedCategory?.id || category.toLowerCase().replace(/\s+/g, '-');
      const shortTitle = mappedCategory?.shortTitle || category;
      
      return {
        id: tabId,
        title: category,
        shortTitle: shortTitle,
        projects: projectList.map((project, index) => ({
          id: index + 1,
          title: project.name,
          image: `/image${(index % 4) + 2}.jpg`,
          description: project.features || project.type
        }))
      };
    });

    // Add partners tab
    convertedTabs.push({
      id: 'partners',
      title: 'Çözüm Ortaklarımız',
      shortTitle: 'Ortaklar',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Çalışma Alanlarımız ve Çözüm Ortaklarımız
          </h2>
          <p className="text-base md:text-lg text-text-default max-w-3xl mx-auto leading-relaxed">
            Farklı sektörlerdeki deneyimimiz ve güçlü iş ortaklıklarımızla, 
            projelerinize en uygun çözümleri sunuyoruz.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        {/* Tabs Navigation - Mobile First Design */}
        <div className="mb-12">
          {/* Mobile: Vertical Stack */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
              {tabsToDisplay.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-accent text-text-light shadow-lg'
                      : 'bg-white text-text-default hover:bg-gray-100 hover:text-accent shadow-sm'
                  }`}
                >
                  {tab.shortTitle || tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal */}
          <div className="hidden md:flex justify-center">
            <div className="bg-white rounded-lg p-2 shadow-md inline-flex flex-wrap gap-2">
              {tabsToDisplay.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 whitespace-nowrap ${
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
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {activeTabData?.projects && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
                {activeTabData.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group w-full max-w-sm"
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
            </div>
          )}

          {activeTabData?.partners && (
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-items-center">
                {activeTabData.partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 flex items-center justify-center group min-h-[100px] w-full max-w-[120px]"
                  >
                    <div
                      className="w-full h-12 bg-contain bg-center bg-no-repeat opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        backgroundImage: `url('${partner.logo}')`,
                      }}
                      title={partner.name}
                    >
                      {/* Fallback text if image doesn't load */}
                      <div className="w-full h-full flex items-center justify-center text-text-default font-medium text-xs text-center">
                        {partner.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-base md:text-lg text-text-default mb-6">
            Sizin de projenizde yer almak isteriz
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-accent hover:bg-accent/90 text-text-light font-semibold text-base md:text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Proje Teklifi Alın
            <svg className="ml-3 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}