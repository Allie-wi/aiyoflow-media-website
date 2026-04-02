import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import Card from '@/components/Card';
import en from '@/i18n/en.json';
import zh from '@/i18n/zh.json';

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const content = params.locale === 'zh' ? zh : en;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar locale={params.locale} />
      
      <SectionWrapper className="pt-40 pb-20">
        <h1 className="section-title mb-6">{content.services.pageTitle}</h1>
        <p className="section-subtitle mb-16">{content.services.pageSubtitle}</p>
        
        <div className="space-y-12">
          {content.services.servicesList.map((service, i) => (
            <div key={i} className="card">
              <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.outcomes.map((outcome, j) => (
                  <p key={j} className="text-gray-600 flex items-start">
                    <span className="mr-3">✓</span>
                    <span>{outcome}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Footer locale={params.locale} />
    </div>
  );
}