'use client';

import React from 'react';

export default function Gallery() {
  // Gallery images from the public/content directory
  const galleryImages = [
    '/content/konut_projeleri.jpg',
    '/content/ticari_yapilar.jpeg',
    '/content/endustriel_tesisler.jpeg',
    '/content/egitim_ve_saglik_kurumlari.jpg',
    '/content/tadilat_ve_yenileme_projeleri.jpg',
    '/content/yapi_malzeme_tedarikcileri.jpg',
    '/content/teknik_ekipman_saglayicilari.jpg',
    '/content/muhendislik_ve_mimari_ofisleri.jpg',
    '/content/taseron_ve_usta_ekipleri.jpg',
    '/content/logistik_ve_nakliye_firmalari.jpg',
  ];

  return (
    <section className="relative h-[170px] sm:h-[220px] md:h-[280px] lg:h-[370px] overflow-hidden bg-secondary">
      {/* Drifting Images Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="flex animate-scroll-right gap-4 min-w-max">
          {/* First set of images */}
          {galleryImages.map((image, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 h-[130px] sm:h-[160px] md:h-[200px] lg:h-[280px] w-[180px] sm:w-[220px] md:w-[280px] lg:w-[400px] rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
                style={{
                  minWidth: '100%',
                  minHeight: '100%'
                }}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {galleryImages.map((image, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 h-[130px] sm:h-[160px] md:h-[200px] lg:h-[280px] w-[180px] sm:w-[220px] md:w-[280px] lg:w-[400px] rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
                style={{
                  minWidth: '100%',
                  minHeight: '100%'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left Fade Gradient */}
      <div className="absolute left-0 top-0 h-full w-8 sm:w-10 md:w-12 lg:w-16 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      
      {/* Right Fade Gradient */}
      <div className="absolute right-0 top-0 h-full w-8 sm:w-10 md:w-12 lg:w-16 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

    </section>
  );
}

// Add CSS animations via Tailwind configuration or custom CSS
// The animation class 'animate-scroll-left' needs to be defined 