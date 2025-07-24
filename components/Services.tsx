import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface MarkdownService {
  title: string;
  description: string;
  features: string[];
  applications: string[];
}

interface ServicesProps {
  services?: MarkdownService[];
}

export default function Services({ services: markdownServices = [] }: ServicesProps) {
  const services: Service[] = [
    {
      id: 1,
      title: "Endüstriyel Proje Yönetimi",
      description: "Fabrika ve endüstriyel tesislerin tasarımından üretime kadar tüm süreçlerde uzman proje yönetimi hizmetleri sunuyoruz. Kalite, zaman ve bütçe hedeflerini karşılayarak projelerinizi başarıyla tamamlıyoruz.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Mimari Çelik Tasarımı",
      description: "Modern mimari ve estetik anlayışla çelik yapı tasarımları gerçekleştiriyoruz. Dayanıklılık ve görsel çekicilik bir arada sunarak, projelerinize değer katıyoruz.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Anahtar Teslim Çözümler",
      description: "Projelerinizi baştan sona yönetiyoruz. Tasarımdan uygulamaya, montajdan devreye alma işlemlerine kadar tüm süreçlerde tek nokta çözüm ortağınızız.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="15 7a2 2 0 012 2m0 0a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2zM7 7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-6a2 2 0 00-2-2H7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Yapı Denetimi & Kalite Kontrol",
      description: "İnşaat ve montaj süreçlerinde titiz kalite kontrol hizmetleri sunuyoruz. Güvenlik standartlarına uygunluğu sağlayarak, projelerinizin en yüksek kalitede tamamlanmasını garanti ediyoruz.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Teknik Danışmanlık",
      description: "Mühendislik problemlerinin çözümünde uzman danışmanlık hizmetleri veriyoruz. Teknik analizler, fizibilite çalışmaları ve optimizasyon önerileri ile projelerinizi destekliyoruz.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Sürdürülebilir Çözümler",
      description: "Çevre dostu ve enerji verimli çözümler geliştiriyoruz. Yeşil bina standartlarına uygun tasarımlar ile hem çevreyi koruyor hem de maliyetlerinizi optimize ediyoruz.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  // Generate service icons for markdown services
  const getServiceIcon = (title: string): React.ReactNode => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Endüstriyel Proje Yönetimi': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      'Mimari Çelik Tasarımı': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      'Anahtar Teslim Çözümler': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="15 7a2 2 0 012 2m0 0a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2zM7 7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-6a2 2 0 00-2-2H7z" />
        </svg>
      ),
      'Yapı Denetimi & Kalite Kontrol': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'Teknik Danışmanlık': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      'Sürdürülebilir Çözümler': (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    };

    return iconMap[title] || (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  // Convert markdown services to the Service interface
  const convertedMarkdownServices: Service[] = markdownServices.map((service, index) => ({
    id: 1000 + index, // Ensure unique IDs
    title: service.title,
    description: service.description,
    icon: getServiceIcon(service.title)
  }));

  // Use markdown services if available, otherwise use hardcoded services
  const servicesToDisplay = convertedMarkdownServices.length > 0 ? convertedMarkdownServices : services;

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sunduğumuz Hizmetler
          </h2>
          <p className="text-lg text-text-default max-w-3xl mx-auto leading-relaxed">
            Mühendislik alanındaki geniş deneyimimiz ve uzman ekibimizle, 
            projelerinizin her aşamasında yanınızdayız. Kalite ve güvenilirlik 
            odaklı hizmetlerimizle fark yaratıyoruz.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToDisplay.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-default mb-6">
            Özel ihtiyaçlarınız için detaylı bilgi almak ister misiniz?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-text-light font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            İletişime Geçin
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}