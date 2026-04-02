import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import en from '@/i18n/en.json';
import zh from '@/i18n/zh.json';

export default function CaseStudyDetail({ params }: { params: { locale: string; slug: string } }) {
  const content = params.locale === 'zh' ? zh : en;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar locale={params.locale} />
      
      <SectionWrapper className="pt-40 pb-20">
        <h1 className="section-title mb-8">{params.slug}</h1>
        
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="h-96 bg-soft-gradient rounded-lg"></div>
          
          <div className="card">
            <h2 className="text-2xl font-serif font-bold mb-3">{content.caseStudies.challenge}</h2>
            <p className="text-gray-700">Add your challenge content here...</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-serif font-bold mb-3">{content.caseStudies.insight}</h2>
            <p className="text-gray-700">Add your insight content here...</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-serif font-bold mb-3">{content.caseStudies.strategy}</h2>
            <p className="text-gray-700">Add your strategy content here...</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-serif font-bold mb-3">{content.caseStudies.execution}</h2>
            <p className="text-gray-700">Add your execution content here...</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-serif font-bold mb-3">{content.caseStudies.result}</h2>
            <p className="text-gray-700">Add your result content here...</p>
          </div>
        </div>
      </SectionWrapper>

      <Footer locale={params.locale} />
    </div>
  );
}