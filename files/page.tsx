import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import ProcessStep from '@/components/ProcessStep';
import CTABlock from '@/components/CTABlock';
import SectionWrapper from '@/components/SectionWrapper';
import en from '@/i18n/en.json';
import zh from '@/i18n/zh.json';

export default function HomePage({ params }: { params: { locale: string } }) {
  const content = params.locale === 'zh' ? zh : en;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar locale={params.locale} />
      
      <Hero 
        title={content.home.heroTitle}
        subtitle={content.home.heroSubtitle}
        ctaText={content.home.heroCTA}
      />

      <SectionWrapper className="pt-20">
        <h2 className="section-title">{content.home.whatWeDo}</h2>
        <div className="grid-responsive">
          {content.home.capabilities.map((cap, i) => (
            <Card key={i} title={cap.title} description={cap.description} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-20 pb-20">
        <h2 className="section-title mb-12">{content.home.howWeWork}</h2>
        <div className="grid-responsive">
          {content.home.process.map((step, i) => (
            <ProcessStep key={i} number={step.number} title={step.title} description={step.description} />
          ))}
        </div>
      </SectionWrapper>

      <CTABlock 
        title={content.home.ctaTitle}
        buttonText={content.home.ctaButton}
        buttonHref={`/${params.locale}/contact`}
      />

      <Footer locale={params.locale} />
    </div>
  );
}