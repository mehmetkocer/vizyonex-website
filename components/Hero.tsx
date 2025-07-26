'use client';
import React from 'react';

interface HeroProps {
  headline?: string;
  tagline?: string;
}

export default function Hero({ 
  headline = "Geleceği Vizyonla İnşa Ediyoruz",
  tagline = "Hayalinizdeki projeleri, mühendislik uzmanlığımızla gerçeğe dönüştürüyoruz."
}: HeroProps) {
  return (
    <section id="home" className="relative h-[340px] md:h-[380px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/image1.jpg')`,
            backgroundPosition: 'center center',
          }}
        >
          {/* 50% Transparency Overlay */}
          <div className="absolute inset-0 bg-primary/50"></div>
          
          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4 leading-tight">
            {headline}
          </h1>
          
          {/* Tagline */}
          <p className="text-base md:text-lg lg:text-xl text-text-light mb-6 leading-relaxed opacity-90 max-w-3xl mx-auto">
            {tagline}
          </p>
          
        </div>
      </div>

      {/* Scroll Down Button - Positioned at bottom of hero section */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => {
            const heroHeight = window.innerWidth >= 768 ? 380 : 340;
            window.scrollTo({ top: heroHeight, behavior: 'smooth' });
          }}
          className="w-12 h-12 md:w-16 md:h-16 bg-accent/20 hover:bg-accent/30 border-2 border-accent rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
          aria-label="Scroll down"
        >
          <svg 
            className="w-6 h-6 md:w-8 md:h-8 text-accent" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}