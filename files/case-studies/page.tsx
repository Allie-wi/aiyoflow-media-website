import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import CaseCard from '@/components/CaseCard';
import en from '@/i18n/en.json';
import zh from '@/i18n/zh.json';

const caseStudies = [
  {
    slug: 'case-1',
    title: 'Brand Launch Campaign',
    category: 'Campaign Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
  {
    slug: 'case-2',
    title: 'Creator Network Program',
    category: 'Influencer Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
  {
    slug: 'case-3',
    title: 'Cultural Moment Activation',
    category: 'Experience Design',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
];

export default function CaseStudiesPage({ params }: { params: { locale: string } }) {
  const content = params.locale === 'zh' ? zh : en;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar locale={params.locale} />
      
      <SectionWrapper className="pt-40 pb-20">
        <h1 className="section-title mb-8">{content.caseStudies.pageTitle}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseCard 
              key={study.slug}
              title={study.title}
              category={study.category}
              image={study.image}
              slug={study.slug}
              locale={params.locale}
            />
          ))}
        </div>
      </SectionWrapper>

      <Footer locale={params.locale} />
    </div>
  );
}