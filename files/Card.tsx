import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export default function Card({ title, description, icon, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`}>
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3 font-serif">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}