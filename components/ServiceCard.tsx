import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2">
      {/* Icon Container */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
          <div className="text-accent text-3xl">
            {icon}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-primary text-center mb-4 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-default text-center leading-relaxed">
        {description}
      </p>

      {/* Hover Effect Bottom Border */}
      <div className="w-0 h-1 bg-accent mx-auto mt-6 group-hover:w-12 transition-all duration-300"></div>
    </div>
  );
}