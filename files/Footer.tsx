import React from 'react';

export default function Footer({ locale }: { locale: string }) {
  const content = {
    en: {
      tagline: 'Creative strategy, intentionally crafted.',
      copyright: '© 2026 Aiyoflow Media. All rights reserved.',
    },
    zh: {
      tagline: '有意图的创意策略设计。',
      copyright: '© 2026 Aiyoflow Media。版权所有。',
    },
  };

  const text = content[locale as keyof typeof content] || content.en;

  return (
    <footer className="bg-deep-black text-cream py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-cream border-opacity-20 pt-8">
          <p className="text-lg font-serif mb-4">{text.tagline}</p>
          <p className="text-sm opacity-70">{text.copyright}</p>
          <div className="flex gap-6 mt-8">
            <a href="#" className="no-underline text-cream opacity-70 hover:opacity-100 text-sm">Instagram</a>
            <a href="#" className="no-underline text-cream opacity-70 hover:opacity-100 text-sm">Twitter</a>
            <a href="#" className="no-underline text-cream opacity-70 hover:opacity-100 text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}