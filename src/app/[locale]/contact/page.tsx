'use client';

import { getTranslations } from '@/lib/translations';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { useState, useEffect } from 'react';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ContactPage(props: PageProps) {
  const [translations, setTranslations] = useState<any>(null);
  const [locale, setLocale] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    props.params.then(async (params) => {
      const { locale: paramLocale } = params;

      if (!isValidLocale(paramLocale)) {
        notFound();
      }

      setLocale(paramLocale);
      const trans = await getTranslations(paramLocale);
      setTranslations(trans);
    });
  }, [props]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!translations) {
    return <div>Loading...</div>;
  }

  const contactContent = translations.contact;

  return (
    <>
      <Hero
        headline={contactContent.title}
        subheading={contactContent.subtitle}
        backgroundStyle="clean"
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal-900 mb-2">
                {contactContent.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal-900 mb-2">
                {contactContent.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-charcoal-900 mb-2">
                {contactContent.form.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal-900 mb-2">
                {contactContent.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-cream-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : contactContent.form.submit}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-sage-100 text-sage-700 rounded-lg text-sm">
                {contactContent.form.successMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg text-sm">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}
