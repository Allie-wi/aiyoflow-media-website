import Link from 'next/link';

interface CTABlockProps {
  headline: string;
  subheading: string;
  ctaText: string;
  ctaHref: string;
  variant?: 'light' | 'dark' | 'gradient';
}

export default function CTABlock({
  headline,
  subheading,
  ctaText,
  ctaHref,
  variant = 'light',
}: CTABlockProps) {
  const containerClass =
    variant === 'dark'
      ? 'bg-charcoal-900 text-cream-50'
      : variant === 'gradient'
        ? 'bg-gradient-to-r from-sky-500 to-sage-500 text-white'
        : 'bg-cream-100 text-charcoal-900';

  return (
    <div className={`${containerClass} py-section md:py-20`}>
      <div className="container-max px-4 md:px-8 text-center">
        <h2 className="mb-4">{headline}</h2>
        <p className="prose-base max-w-xl mx-auto mb-8">
          {subheading}
        </p>
        <Link href={ctaHref}>
          <button
            className={
              variant === 'gradient'
                ? 'btn bg-white text-sky-600 hover:bg-cream-100'
                : variant === 'dark'
                  ? 'btn btn-gradient'
                  : 'btn btn-primary'
            }
          >
            {ctaText}
          </button>
        </Link>
      </div>
    </div>
  );
}
