import React from 'react';

interface CTABlockProps {
  title: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABlock({ title, buttonText, buttonHref }: CTABlockProps) {
  return (
    <section className="py-section px-6 md:px-12 bg-gradient-soft rounded-lg max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-display-md font-serif font-bold mb-8">{title}</h2>
        <a href={buttonHref} className="btn btn-primary text-lg">
          {buttonText}
        </a>
      </div>
    </section>
  );
}