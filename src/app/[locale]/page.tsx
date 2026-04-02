import { getTranslations, createTranslator } from '@/lib/translations';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Process from '@/components/Process';
import CTABlock from '@/components/CTABlock';
import CaseCard from '@/components/CaseCard';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home(props: PageProps) {
  const params = await props.params;
  const { locale } = params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const translations = await getTranslations(locale);
  const t = createTranslator(translations);

  const homeContent = translations.home;
  const caseStudies = (translations.caseStudies.cases || []).filter((c: any) => c.featured);

  return (
    <>
      <Hero
        headline={homeContent.hero.headline}
        subheading={homeContent.hero.subheading}
        ctaText={homeContent.hero.cta}
        ctaHref={`/${locale}/contact`}
      />

      <Section
        title={homeContent.whatWeDo.title}
        subtitle={homeContent.whatWeDo.intro}
      >
        <div className="grid-auto">
          {homeContent.whatWeDo.capabilities.map((cap: any, idx: number) => (
            <Card
              key={idx}
              title={cap.title}
              description={cap.description}
              hover
            />
          ))}
        </div>
      </Section>

      <Section
        title={homeContent.selectedWork.title}
        subtitle={homeContent.selectedWork.subtitle}
        bgColor="cream"
      >
        <div className="grid-auto">
          {caseStudies.map((caseStudy: any, idx: number) => (
            <CaseCard
              key={idx}
              slug={caseStudy.slug}
              title={caseStudy.title}
              category={caseStudy.category}
              image={caseStudy.image}
              href={`/${locale}/case-studies/${caseStudy.slug}`}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={`/${locale}/case-studies`} className="btn btn-secondary">
            View All Cases →
          </a>
        </div>
      </Section>

      <Section
        title={homeContent.whyAiyoflow.title}
      >
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {homeContent.whyAiyoflow.points.map((point: string, idx: number) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="text-sky-500 font-bold text-lg flex-shrink-0">✓</span>
                <span className="prose-base text-charcoal-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        title={homeContent.howWeWork.title}
        bgColor="cream"
      >
        <Process steps={homeContent.howWeWork.steps} />
      </Section>

      <CTABlock
        headline={homeContent.cta.headline}
        subheading={homeContent.cta.subheading}
        ctaText={homeContent.cta.button}
        ctaHref={`/${locale}/contact`}
        variant="gradient"
      />
    </>
  );
}
