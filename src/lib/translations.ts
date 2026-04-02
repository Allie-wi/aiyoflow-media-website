import { Locale } from './i18n';

type DeepObject = {
  [key: string]: string | number | DeepObject;
};

export function getNestedValue(obj: DeepObject, path: string): any {
  return path.split('.').reduce((current: any, prop: string) => current?.[prop], obj);
}

export async function getTranslations(locale: Locale) {
  try {
    const content = await import(`@/content/${locale}.json`);
    return content.default;
  } catch {
    const content = await import(`@/content/en.json`);
    return content.default;
  }
}

export function createTranslator(translations: any) {
  return function t(key: string, defaultValue = ''): string {
    const value = getNestedValue(translations, key);
    if (typeof value === 'string') {
      return value;
    }
    return defaultValue;
  };
}
