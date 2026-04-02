'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import en from '@/i18n/en.json';
import zh from '@/i18n/zh.json';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const content = params.locale === 'zh' ? zh : en;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar locale={params.locale} />
      
      <SectionWrapper className="pt-40 pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="section-title mb-8 text-center">{content.contact.pageTitle}</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder={content.contact.formName}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-black"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder={content.contact.formEmail}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-black"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder={content.contact.formCompany}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-black"
              />
            </div>
            <div>
              <textarea 
                placeholder={content.contact.formMessage}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-black"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              {content.contact.formSubmit}
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 bg-soft-green rounded-lg text-center">
              <p className="text-deep-black">{content.contact.formSuccess}</p>
            </div>
          )}
        </div>
      </SectionWrapper>

      <Footer locale={params.locale} />
    </div>
  );
}