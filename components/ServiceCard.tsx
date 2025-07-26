"use client";

import React, { useEffect, useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  isActive: boolean;
}

export default function ServiceCard({ title, description, isActive }: ServiceCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldHighlight = isMobile && isActive;

  if (isMobile) {
    // Mobile version with scroll highlighting
    return (
      <div 
        className="rounded-lg px-8 py-6 border transition-all duration-300"
        style={{ backgroundColor: '#FCFCFC', borderColor: '#e5e5e5' }}
      >
        <h3 className={`text-xl font-semibold text-center mb-4 transition-all duration-300 ${
          shouldHighlight ? 'text-accent transform scale-105' : 'text-primary'
        }`}>
          {title}
        </h3>
        <p className={`text-center leading-relaxed transition-all duration-300 ${
          shouldHighlight ? 'text-gray-700 font-medium' : 'text-text-default'
        }`}>
          {description}
        </p>
      </div>
    );
  }

  // Desktop version with simple hover
  return (
    <div 
      className="group rounded-lg px-8 py-6 border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
      style={{ backgroundColor: '#FCFCFC', borderColor: '#e5e5e5' }}
    >
      <h3 className="text-xl font-semibold text-center mb-4 text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-105 transform">
        {title}
      </h3>
      <p className="text-center leading-relaxed text-text-default transition-all duration-300 group-hover:text-gray-700 group-hover:font-medium">
        {description}
      </p>
    </div>
  );
}