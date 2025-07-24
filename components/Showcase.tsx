'use client';

import React, { useState } from 'react';

interface WorkAreaItem {
  name: string;
  description: string;
  image?: string;
}

interface SolutionPartnerItem {
  name: string;
  description: string;
  image?: string;
}

interface WorkAreasAndPartnersData {
  workAreas: {
    slogan: string;
    description: string;
    items: WorkAreaItem[];
  };
  solutionPartners: {
    slogan: string;
    description: string;
    items: SolutionPartnerItem[];
  };
}

interface ShowcaseProps {
  workAreasAndPartners?: WorkAreasAndPartnersData;
}

export default function Showcase({ workAreasAndPartners }: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState('work-areas');

  // Default data if not provided
  const defaultData: WorkAreasAndPartnersData = {
    workAreas: {
      slogan: 'Her yapıya özel uzmanlık.',
      description: 'Vizyonex Yapı olarak, küçük çaplı tadilat projelerinden büyük ölçekli inşaatlara kadar geniş bir yelpazede hizmet sunuyoruz. Deneyimli ekibimizle hem bireysel hem kurumsal müşterilere çözüm üretiyoruz.',
      items: [
        {
          name: 'Konut Projeleri',
          description: 'Daire, villa, rezidans gibi yaşam alanlarında iç ve dış yapı uygulamaları.',
          image: '/content/konut_projeleri.jpg'
        },
        {
          name: 'Ticari Yapılar',
          description: 'Ofisler, mağazalar, AVM\'ler ve iş merkezlerinde modern ve işlevsel çözümler.',
          image: '/content/ticari_yapilar.jpeg'
        },
        {
          name: 'Endüstriyel Tesisler',
          description: 'Fabrika, depo ve üretim alanlarında dayanıklı yapı uygulamaları.',
          image: '/content/endustriel_tesisler.jpeg'
        },
        {
          name: 'Eğitim ve Sağlık Kurumları',
          description: 'Okul, hastane, klinik gibi toplumsal yapılarda güvenli ve hijyenik yapı çözümleri.',
          image: '/content/egitim_ve_saglik_kurumlari.jpg'
        },
        {
          name: 'Tadilat ve Yenileme Projeleri',
          description: 'Mevcut yapıların modernize edilmesi, bakım ve onarımı.',
          image: '/content/tadilat_ve_yenileme_projeleri.jpg'
        }
      ]
    },
    solutionPartners: {
      slogan: 'Kalite, iş birliğiyle başlar.',
      description: 'Proje başarımızın arkasında yalnızca kendi uzmanlığımız değil, aynı zamanda güçlü ve güvenilir çözüm ortaklarımız da yer alıyor. Malzeme kalitesinden uygulama sürecine kadar her aşamada birlikte hareket ettiğimiz iş ortaklarımızla en iyi sonucu hedefliyoruz.',
      items: [
        {
          name: 'Yapı Malzemeleri Tedarikçileri',
          description: 'Kaliteli sıva, boya, alçıpan, yalıtım ve seramik malzemelerini temin ettiğimiz güvenilir markalar.',
          image: '/content/yapi_malzeme_tedarikcileri.jpg'
        },
        {
          name: 'Teknik Ekipman Sağlayıcıları',
          description: 'İnşaat makineleri, sıva makineleri ve şantiye ekipmanları konusunda uzman iş ortakları.',
          image: '/content/teknik_ekipman_saglayicilari.jpg'
        },
        {
          name: 'Mühendislik ve Mimarlık Ofisleri',
          description: 'Projelerimizin teknik planlama ve görselleştirme aşamalarında birlikte çalıştığımız profesyonel ekipler.',
          image: '/content/muhendislik_ve_mimari_ofisleri.jpg'
        },
        {
          name: 'Taşeron ve Usta Ekipleri',
          description: 'İhtiyaca göre destek aldığımız, iş disiplini yüksek uygulama ekipleri.',
          image: '/content/taseron_ve_usta_ekipleri.jpg'
        },
        {
          name: 'Lojistik ve Nakliye Firmaları',
          description: 'Malzeme ve ekipmanların zamanında şantiye alanlarına ulaştırılmasını sağlayan lojistik partnerlerimiz.',
          image: '/content/logistik_ve_nakliye_firmalari.jpg'
        }
      ]
    }
  };

  // Image mapping for items that don't have image property
  const getImageForItem = (itemName: string, isWorkArea: boolean): string => {
    const imageMap: { [key: string]: string } = {
      // Work Areas
      'Konut Projeleri': '/content/konut_projeleri.jpg',
      'Ticari Yapılar': '/content/ticari_yapilar.jpeg',
      'Endüstriyel Tesisler': '/content/endustriel_tesisler.jpeg',
      'Eğitim ve Sağlık Kurumları': '/content/egitim_ve_saglik_kurumlari.jpg',
      'Eğitim & Sağlık Kurumları': '/content/egitim_ve_saglik_kurumlari.jpg',
      'Tadilat ve Yenileme Projeleri': '/content/tadilat_ve_yenileme_projeleri.jpg',
      // Solution Partners
      'Yapı Malzemeleri Tedarikçileri': '/content/yapi_malzeme_tedarikcileri.jpg',
      'Teknik Ekipman Sağlayıcıları': '/content/teknik_ekipman_saglayicilari.jpg',
      'Mühendislik ve Mimarlık Ofisleri': '/content/muhendislik_ve_mimari_ofisleri.jpg',
      'Mühendislik & Mimarlık Ofisleri': '/content/muhendislik_ve_mimari_ofisleri.jpg',
      'Taşeron ve Usta Ekipleri': '/content/taseron_ve_usta_ekipleri.jpg',
      'Lojistik ve Nakliye Firmaları': '/content/logistik_ve_nakliye_firmalari.jpg'
    };
    
    return imageMap[itemName] || (isWorkArea ? '/content/konut_projeleri.jpg' : '/content/yapi_malzeme_tedarikcileri.jpg');
  };

  // Ensure items have image property
  const ensureImageProperty = (items: (WorkAreaItem | SolutionPartnerItem)[], isWorkArea: boolean) => {
    return items.map(item => ({
      ...item,
      image: item.image || getImageForItem(item.name, isWorkArea)
    }));
  };

  const data = workAreasAndPartners || defaultData;
  
  // Process data to ensure all items have image property
  const processedData = {
    workAreas: {
      ...data.workAreas,
      items: ensureImageProperty(data.workAreas.items, true)
    },
    solutionPartners: {
      ...data.solutionPartners,
      items: ensureImageProperty(data.solutionPartners.items, false)
    }
  };

  const isWorkAreasActive = activeTab === 'work-areas';
  const currentData = isWorkAreasActive ? processedData.workAreas : processedData.solutionPartners;

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

        {/* Tabs Navigation */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-2 shadow-md inline-flex gap-2">
              <button
                onClick={() => setActiveTab('work-areas')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 whitespace-nowrap ${
                  isWorkAreasActive
                    ? 'bg-accent text-text-light shadow-lg transform scale-105'
                    : 'text-text-default hover:bg-gray-100 hover:text-accent'
                }`}
              >
                Çalışma Alanlarımız
              </button>
              <button
                onClick={() => setActiveTab('solution-partners')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 whitespace-nowrap ${
                  !isWorkAreasActive
                    ? 'bg-accent text-text-light shadow-lg transform scale-105'
                    : 'text-text-default hover:bg-gray-100 hover:text-accent'
                }`}
              >
                Çözüm Ortaklarımız
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {/* Slogan and Description */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-xl md:text-2xl font-bold text-accent italic">
                {currentData.slogan}
              </span>
            </div>
            <p className="text-base md:text-lg text-text-default leading-relaxed">
              {currentData.description}
            </p>
          </div>

          {/* Items Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {currentData.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group w-full max-w-sm"
                >
                  {/* Item Image */}
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200 overflow-hidden">
                    <div
                      className="w-full h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundColor: '#e5e7eb'
                      }}
                    >
                      {/* Overlay for better text readability */}
                      <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-lg text-center px-4">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Item Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {item.name}
                    </h3>
                    <p className="text-text-default text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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