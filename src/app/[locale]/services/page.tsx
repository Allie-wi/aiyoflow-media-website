import { getTranslations } from '@/lib/translations';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTABlock from '@/components/CTABlock';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage(props: PageProps) {
  const params = await props.params;
  const { locale } = params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const translations = await getTranslations(locale);
  const servicesContent = translations.services;

  return (
    <>
      <Hero
        headline={servicesContent.hero.headline}
        subheading={servicesContent.hero.subheading}
        backgroundStyle="clean"
      />

      <Section title="Our Services">
        <div className="space-y-12 md:space-y-16">
          {servicesContent.services.map((service: any, idx: number) => (
            <div key={idx} className="border-t border-cream-200 pt-12 md:pt-16">
              <h3 className="text-3xl font-bold mb-4 text-charcoal-900">
                {service.title}
              </h3>
              <p className="prose-base text-charcoal-800 mb-8 max-w-2xl">
                {service.description}
              </p>
              <div>
                <h4 className="text-lg font-semibold text-charcoal-900 mb-4">
                  Key Outcomes
                </h4>
                <ul className="space-y-3">
                  {service.outcomes.map((outcome: string, outIdx: number) => (
                    <li key={outIdx} className="flex gap-3 items-start">
                      <span className="text-sky-500 font-bold">→</span>
                      <span className="text-charcoal-800">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock
        headline="Ready to build something meaningful?"
        subheading="Let's discuss how our approach aligns with your brand goals."
        ctaText="Start a Project"
        ctaHref={`/${locale}/contact`}
        variant="dark"
      />
    </>
  );
}
