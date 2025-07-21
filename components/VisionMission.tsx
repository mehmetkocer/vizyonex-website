import React from 'react';

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
  return (
    <section id="corporate" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Vision Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {visionTitle}
              </h2>
            </div>
            
            <div className="text-text-default text-lg leading-relaxed prose prose-lg max-w-none">
              <p>{visionContent}</p>
            </div>

            {/* Vision Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-default font-medium">İnovasyón</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-default font-medium">Sürdürülebilirlik</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-default font-medium">Teknoloji</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-default font-medium">Kalite</span>
              </div>
            </div>
          </div>

          {/* Mission Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {missionTitle}
              </h2>
            </div>
            
            <div className="text-text-default text-lg leading-relaxed prose prose-lg max-w-none">
              <p>{missionContent}</p>
            </div>

            {/* Mission Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-default font-medium">Güvenilirlik</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-default font-medium">Şeffaflık</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-default font-medium">Mükemmellik</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-default font-medium">Müşteri Odaklılık</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics - Centered on Large Screens */}
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
      </div>
    </section>
  );
}