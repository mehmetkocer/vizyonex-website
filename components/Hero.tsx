import React from 'react';

interface HeroProps {
  headline?: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ 
  headline = "Geleceği Vizyonla İnşa Ediyoruz",
  tagline = "Hayalinizdeki projeleri, mühendislik uzmanlığımızla gerçeğe dönüştürüyoruz.",
  ctaText = "Projelerimizi Keşfedin",
  ctaLink = "#projects"
}: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`, // You'll need to add this image to public folder
            backgroundPosition: 'center center',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6 leading-tight">
            {headline}
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-text-light mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
            {tagline}
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href={ctaLink}
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-text-light font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {ctaText}
              <svg 
                className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-text-light opacity-70">
            <span className="text-sm mb-2">Aşağı Kaydırın</span>
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern/Overlay for additional visual interest */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
}