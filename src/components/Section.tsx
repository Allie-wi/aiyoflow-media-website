interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  bgColor?: 'cream' | 'white' | 'charcoal';
}

export default function Section({ title, subtitle, children, bgColor = 'white' }: SectionProps) {
  const bgClass =
    bgColor === 'cream'
      ? 'bg-cream-100'
      : bgColor === 'charcoal'
        ? 'bg-charcoal-900 text-cream-50'
        : 'bg-white';

  return (
    <section className={`${bgClass} py-section md:py-section-lg`}>
      <div className="container-max px-4 md:px-8">
        {/* Header */}
        {title && (
          <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            <h2 className={bgColor === 'charcoal' ? 'text-cream-50' : 'text-charcoal-900'}>
              {title}
            </h2>
            {subtitle && (
              <p className={`prose-base mt-4 ${bgColor === 'charcoal' ? 'text-cream-200' : 'text-charcoal-800'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </section>
  );
}

