import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import en from '@/i18n/en.json';
import zh from '@/i18n/zh.json';

export default function AboutPage({ params }: { params: { locale: string } }) {
  const content = params.locale === 'zh' ? zh : en;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar locale={params.locale} />
      
      <SectionWrapper className="pt-40 pb-20">
        <h1 className="section-title mb-8">{content.about.pageTitle}</h1>
        
        <div className="max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed">{content.about.intro}</p>
          <div className="border-l-2 border-deep-black pl-6 py-2">
            <p className="text-lg font-semibold italic">{content.about.founderModel}</p>
          </div>
          <p className="text-lg leading-relaxed">{content.about.network}</p>
          <div className="card">
            <p className="text-lg">{content.about.philosophy}</p>
          </div>
        </div>
      </SectionWrapper>

      <Footer locale={params.locale} />
    </div>
  );
}