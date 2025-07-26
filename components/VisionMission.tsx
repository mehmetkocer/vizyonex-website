import React from 'react';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

interface VisionMissionProps {
  visionContent?: string;
  missionContent?: string;
  visionTitle?: string;
  missionTitle?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export default function VisionMission({ 
  visionContent = 'Endüstriyel çelik konstrüksiyon alanında Türkiye\'nin lider şirketi olmak ve uluslararası pazarlarda güçlü bir marka haline gelerek, sürdürülebilir ve yenilikçi çözümlerle sektörün geleceğini şekillendirmek.',
  missionContent = 'Modern mühendislik anlayışı ve deneyimli kadromuzla, endüstriyel tesisler, ticari yapılar ve mimari çelik projelerinde müşterilerimize güvenilir, kaliteli ve ekonomik çözümler sunarak, onların başarısına ortak olmak.',
  visionTitle = 'Vizyonumuz',
  missionTitle = 'Misyonumuz',
  stats = [
    { value: '15', label: 'Yıllık Deneyim' },
    { value: '50+', label: 'Tamamlanan Proje' },
    { value: '%100', label: 'Müşteri Memnuniyeti' },
    { value: '25+', label: 'Uzman Personel' }
  ]
}: VisionMissionProps) {
  const tagClassName = "bg-[#e5e5e5] text-gray-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300";

  return (
    <section id="corporate" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Vision Card */}
          <div className="rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {visionTitle}
              </h2>
            </div>
            
            <div className="text-gray-700 leading-relaxed prose max-w-none">
              <p>{visionContent}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className={tagClassName}>İnovasyón</span>
              <span className={tagClassName}>Sürdürülebilirlik</span>
              <span className={tagClassName}>Teknoloji</span>
              <span className={tagClassName}>Kalite</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {missionTitle}
              </h2>
            </div>
            
            <div className="text-gray-700 leading-relaxed prose max-w-none">
              <p>{missionContent}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className={tagClassName}>Güvenilirlik</span>
              <span className={tagClassName}>Şeffaflık</span>
              <span className={tagClassName}>Mükemmellik</span>
              <span className={tagClassName}>Müşteri Odaklılık</span>
            </div>
          </div>
        </div>

        {/* Bottom Statistics - HIDDEN FOR NOW */}
        {/*
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl font-bold text-accent">{stat.value}</div>
                  <div className="text-text-default font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}