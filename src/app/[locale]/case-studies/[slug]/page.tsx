import { getTranslations } from '@/lib/translations';
import Section from '@/components/Section';
import CTABlock from '@/components/CTABlock';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function CaseStudyPage(props: PageProps) {
  const params = await props.params;
  const { locale, slug } = params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const translations = await getTranslations(locale);
  const caseStudy = translations.caseStudies.cases.find((c: any) => c.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-max px-4 md:px-8 py-6">
          <Link
            href={`/${locale}/case-studies`}
            className="text-sky-500 hover:text-sky-600 font-medium"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>

      <Section>
        <div className="max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full mb-4">
            {caseStudy.category}
          </span>
          <h1 className="mb-6">{caseStudy.title}</h1>
        </div>
      </Section>

      <Section bgColor="cream">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-charcoal-900">Challenge</h3>
            <p className="prose-base text-charcoal-800">{caseStudy.challenge}</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-charcoal-900">Insight</h3>
            <p className="prose-base text-charcoal-800">{caseStudy.insight}</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-charcoal-900">Strategy</h3>
            <p className="prose-base text-charcoal-800">{caseStudy.strategy}</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-charcoal-900">Execution</h3>
            <p className="prose-base text-charcoal-800">{caseStudy.execution}</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6">The Result</h2>
          <p className="prose-base text-charcoal-800 text-lg leading-relaxed">
            {caseStudy.result}
          </p>
        </div>
      </Section>

      <CTABlock
        headline="Interested in working together?"
        subheading="We'd love to discuss how we can apply similar strategic thinking to your brand."
        ctaText="Get in Touch"
        ctaHref={`/${locale}/contact`}
        variant="dark"
      />
    </>
  );
}
