export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];
export const defaultLocale: Locale = 'en';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split('/').filter(Boolean);
  const potentialLocale = segments[0];
  return isValidLocale(potentialLocale) ? potentialLocale : defaultLocale;
}
