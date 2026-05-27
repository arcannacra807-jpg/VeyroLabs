import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en', 'es', 'fr', 'pt', 'ar', 'zh', 'ja', 'ru', 'nl', 'it', 'tr'],
  defaultLocale: 'de',
});
