import React from 'react';

interface CaseCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  locale: string;
}

export default function CaseCard({ title, category, image, slug, locale }: CaseCardProps) {
  return (
    <a href={`/${locale}/case-studies/${slug}`} className="no-underline group">
      <div className="card card-hover">
        <div className="h-48 bg-soft-gradient rounded-lg overflow-hidden mb-4">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{category}</p>
        <h3 className="text-xl font-serif font-semibold">{title}</h3>
      </div>
    </a>
  );
}