import { isValidLocale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export async function generateMetadata(props: LayoutProps): Promise<Metadata> {
  const params = await props.params;
  return {
    title: 'Aiyoflow Media - Creative Strategy Studio',
    description: 'Founder-led creative strategy studio blending editorial thinking, influencer strategy, and cultural insight.',
  };
}

export default async function LocaleLayout(props: LayoutProps) {
  const params = await props.params;
  const { locale: paramLocale } = params;

  if (!isValidLocale(paramLocale)) {
    notFound();
  }

  const translations = await getTranslations(paramLocale);

  return (
    <html lang={paramLocale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-50">
        <Navbar locale={paramLocale} translations={translations} />
        <main className="min-h-screen">
          {props.children}
        </main>
        <Footer locale={paramLocale} translations={translations} />
      </body>
    </html>
  );
}
