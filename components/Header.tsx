import React from 'react';

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-text-light py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            {/* Left Side - Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+902123456789" className="hover:text-accent transition-colors">
                  +90 (212) 345 67 89
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@vizyonex.com" className="hover:text-accent transition-colors">
                  info@vizyonex.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
            
            {/* Right Side - Social Media & Language */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.462 6.161a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-2.34 3.84a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <button className="px-2 py-1 text-xs bg-accent text-white rounded hover:bg-accent/90 transition-colors">
                  TR
                </button>
                <button className="px-2 py-1 text-xs border border-text-light text-text-light rounded hover:bg-text-light hover:text-primary transition-colors">
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">
                VIZYONEX
              </h1>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#home" 
                className="text-text-default hover:text-accent transition-colors font-medium"
              >
                Ana Sayfa
              </a>
              <a 
                href="#corporate" 
                className="text-text-default hover:text-accent transition-colors font-medium"
              >
                Kurumsal
              </a>
              <a 
                href="#services" 
                className="text-text-default hover:text-accent transition-colors font-medium"
              >
                Hizmetlerimiz
              </a>
              <a 
                href="#projects" 
                className="text-text-default hover:text-accent transition-colors font-medium"
              >
                Projelerimiz
              </a>
              <a 
                href="#contact" 
                className="text-text-default hover:text-accent transition-colors font-medium"
              >
                İletişim
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex items-center justify-center w-8 h-8 text-text-default hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}