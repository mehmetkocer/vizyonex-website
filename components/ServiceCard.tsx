import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-8 transform hover:-translate-y-1">
      {/* Title */}
      <h3 className="text-xl font-semibold text-primary text-center mb-4 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-default text-center leading-relaxed">
        {description}
      </p>

      {/* Hover Effect Bottom Border */}
      <div className="w-0 h-0.5 bg-accent mx-auto mt-6 group-hover:w-8 transition-all duration-300"></div>
    </div>
  );
}