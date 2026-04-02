import { getTranslations } from '@/lib/translations';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CaseCard from '@/components/CaseCard';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CaseStudiesPage(props: PageProps) {
  const params = await props.params;
  const { locale } = params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const translations = await getTranslations(locale);
  const caseStudiesContent = translations.caseStudies;

  return (
    <>
      <Hero
        headline={caseStudiesContent.title}
        subheading={caseStudiesContent.subtitle}
        backgroundStyle="clean"
      />

      <Section>
        <div className="grid-auto">
          {caseStudiesContent.cases.map((caseStudy: any, idx: number) => (
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
      </Section>
    </>
  );
}
