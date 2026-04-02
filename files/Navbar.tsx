import React from 'react';

export default function Navbar({ locale }: { locale: string }) {
  return (
    <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm border-b border-gray-200 border-opacity-20 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href={`/${locale}`} className="text-2xl font-serif font-bold no-underline hover:opacity-70 transition-opacity">
          Aiyoflow
        </a>
        <div className="flex gap-8 items-center">
          <a href={`/${locale}`} className="no-underline text-sm font-medium hover:opacity-70">
            {locale === 'en' ? 'Home' : '首页'}
          </a>
          <a href={`/${locale}/services`} className="no-underline text-sm font-medium hover:opacity-70">
            {locale === 'en' ? 'Services' : '服务'}
          </a>
          <a href={`/${locale}/about`} className="no-underline text-sm font-medium hover:opacity-70">
            {locale === 'en' ? 'About' : '关于'}
          </a>
          <a href={`/${locale}/case-studies`} className="no-underline text-sm font-medium hover:opacity-70">
            {locale === 'en' ? 'Case Studies' : '案例'}
          </a>
          <a href={`/${locale}/contact`} className="no-underline text-sm font-medium hover:opacity-70">
            {locale === 'en' ? 'Contact' : '联系'}
