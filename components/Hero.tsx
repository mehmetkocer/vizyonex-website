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
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/image1.jpg')`, // Main background image
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
          
        </div>
      </div>

      {/* Scroll Down Button - Positioned at very bottom of hero section */}
      <div className="absolute bottom-20 sm:bottom-60 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
          className="w-16 h-16 bg-accent/20 hover:bg-accent/30 border-2 border-accent rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
          aria-label="Scroll down"
        >
          <svg 
            className="w-8 h-8 text-accent" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Background Pattern/Overlay for additional visual interest */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-secondary via-secondary/50 to-transparent"></div>
      </div>
    </section>
  );
}