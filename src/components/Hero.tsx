interface HeroProps {
  headline: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundStyle?: 'gradient' | 'clean';
}

export default function Hero({
  headline,
  subheading,
  ctaText,
  ctaHref = '#',
  secondaryCtaText,
  secondaryCtaHref = '#',
  backgroundStyle = 'gradient',
}: HeroProps) {
  return (
    <div className={`relative py-section-lg md:py-24 overflow-hidden ${
      backgroundStyle === 'gradient' 
        ? 'bg-gradient-to-br from-cream-100 via-cream-50 to-sky-100' 
        : 'bg-cream-50'
    }`}>
      {/* Decorative gradient blob */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sage-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative container-max px-4 md:px-8 text-center">
        <h1 className="mb-6 animate-slide-up">{headline}</h1>
        
        {subheading && (
          <p className="prose-base max-w-2xl mx-auto mb-8 text-charcoal-800 animate-slide-up">
            {subheading}
          </p>
        )}

        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            {ctaText && (
              <a href={ctaHref} className="btn btn-primary">
                {ctaText}
              </a>
            )}
            {secondaryCtaText && (
              <a href={secondaryCtaHref} className="btn btn-secondary">
                {secondaryCtaText}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
