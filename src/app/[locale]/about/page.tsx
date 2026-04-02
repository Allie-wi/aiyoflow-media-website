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

export default async function AboutPage(props: PageProps) {
  const params = await props.params;
  const { locale } = params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const translations = await getTranslations(locale);
  const aboutContent = translations.about;

  return (
    <>
      <Hero
        headline={aboutContent.hero.headline}
        subheading={aboutContent.hero.subheading}
        backgroundStyle="clean"
      />

      <Section title={aboutContent.story.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <p className="prose-base text-charcoal-800 whitespace-pre-line">
              {aboutContent.story.content}
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-2">{aboutContent.story.founder.name}</h3>
            <p className="text-sky-500 font-semibold mb-4">{aboutContent.story.founder.role}</p>
            <p className="text-charcoal-800 text-sm leading-relaxed">
              {aboutContent.story.founder.bio}
            </p>
          </div>
        </div>
      </Section>

      <Section title={aboutContent.approach.title} bgColor="cream">
        <div className="grid-auto">
          {aboutContent.approach.principles.map((principle: any, idx: number) => (
            <Card
              key={idx}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </Section>

      <Section title={aboutContent.team.title}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="prose-base text-charcoal-800 mb-8">
            {aboutContent.team.description}
          </p>
          <p className="text-charcoal-800 italic">
            We collaborate with the right people, at the right time, for the right reasons.
          </p>
        </div>
      </Section>

      <CTABlock
        headline="Let's work together"
        subheading="We're looking for brands and projects that challenge us to think differently."
        ctaText="Get in Touch"
        ctaHref={`/${locale}/contact`}
        variant="dark"
      />
    </>
  );
}
