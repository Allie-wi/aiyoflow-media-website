'use client';

import Link from 'next/link';
import { Locale } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
  translations: any;
}

export default function Footer({ locale, translations }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const basePathname = `/${locale}`;
  const footer = translations.footer || {};
  const nav = translations.nav || {};

  return (
    <footer className="bg-charcoal-900 text-cream-50 py-section md:py-section-lg">
      <div className="container-max px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4 gradient-text">Aiyoflow</h3>
            <p className="text-cream-200 text-sm leading-relaxed">
              {footer.about || ''}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4 text-cream-50">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={basePathname} className="text-cream-200 hover:text-sky-400 transition-colors duration-300">
                  {nav.home || 'Home'}
                </Link>
              </li>
              <li>
                <Link href={`${basePathname}/services`} className="text-cream-200 hover:text-sky-400 transition-colors duration-300">
                  {nav.services || 'Services'}
                </Link>
              </li>
              <li>
                <Link href={`${basePathname}/about`} className="text-cream-200 hover:text-sky-400 transition-colors duration-300">
                  {nav.about || 'About'}
                </Link>
              </li>
              <li>
                <Link href={`${basePathname}/case-studies`} className="text-cream-200 hover:text-sky-400 transition-colors duration-300">
                  {nav.caseStudies || 'Case Studies'}
                </Link>
              </li>
              <li>
                <Link href={`${basePathname}/contact`} className="text-cream-200 hover:text-sky-400 transition-colors duration-300">
                  {nav.contact || 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-cream-50">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-cream-200 hover:text-sky-400 transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-200 hover:text-sky-400 transition-colors duration-300">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-200 hover:text-sky-400 transition-colors duration-300">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold mb-4 text-cream-50">Get in Touch</h4>
            <p className="text-cream-200 text-sm mb-4">
              Tell us about your project.
            </p>
            <Link href={`${basePathname}/contact`} className="btn btn-gradient text-sm">
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal-800 pt-8">
          <p className="text-center text-cream-200 text-sm">
            © {currentYear} Aiyoflow Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
