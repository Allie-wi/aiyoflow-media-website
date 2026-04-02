import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  image?: string;
}

export default function Hero({ title, subtitle, ctaText, image }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-display-lg font-serif font-bold mb-6 text-balance">
            {title}
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
            {subtitle}
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">
              {ctaText}
            </button>
          </div>
        </div>
        {image && (
          <div className="h-96 bg-soft-gradient rounded-lg overflow-hidden">
            <img src={image} alt="Hero" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}