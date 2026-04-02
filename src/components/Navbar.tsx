'use client';

import Link from 'next/link';
import { Locale, locales } from '@/lib/i18n';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavbarProps {
  locale: Locale;
  translations: any;
}

export default function Navbar({ locale, translations }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const basePathname = `/${locale}`;
  const nav = translations.nav || {};

  const navItems = [
    { key: 'home', href: basePathname, label: nav.home || 'Home' },
    { key: 'services', href: `${basePathname}/services`, label: nav.services || 'Services' },
    { key: 'about', href: `${basePathname}/about`, label: nav.about || 'About' },
    { key: 'caseStudies', href: `${basePathname}/case-studies`, label: nav.caseStudies || 'Case Studies' },
    { key: 'contact', href: `${basePathname}/contact`, label: nav.contact || 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-cream-200">
      <div className="container-max px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={basePathname} className="font-display text-2xl font-bold">
            <span className="text-charcoal-900">Aiyoflow</span>
            <span className="gradient-text"> Media</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-sky-500 border-b-2 border-sky-500'
                    : 'text-charcoal-900 hover:text-sky-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="language-switcher">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}${pathname.replace(`/${locale}`, '')}`}
                  className={`px-2 py-1 text-sm font-medium transition-colors duration-300 ${
                    locale === loc
                      ? 'active text-sky-500 border-b-2 border-sky-500'
                      : 'text-charcoal-800 hover:text-sky-500'
                  }`}
                >
                  {loc.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-charcoal-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-charcoal-900 hover:bg-cream-200 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

