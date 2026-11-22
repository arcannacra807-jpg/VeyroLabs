'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function FooterButtons() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <div className="flex items-center gap-4 text-subtle text-xs">
      <a
        href={`/${locale}/impressum`}
        onClick={(e) => {
          e.preventDefault();
          document.dispatchEvent(new CustomEvent('open-impressum'));
        }}
        className="hover:text-white transition-colors"
      >
        {t('impressum')}
      </a>
      <span className="text-subtle" aria-hidden="true">&middot;</span>
      <a
        href={`/${locale}/datenschutz`}
        onClick={(e) => {
          e.preventDefault();
          document.dispatchEvent(new CustomEvent('open-datenschutz'));
        }}
        className="hover:text-white transition-colors"
      >
        {t('datenschutz')}
      </a>
      <span className="text-subtle" aria-hidden="true">&middot;</span>
      <a
        href={`/${locale}/impressum`}
        onClick={(e) => {
          e.preventDefault();
          document.dispatchEvent(new CustomEvent('open-widerruf'));
        }}
        className="hover:text-white transition-colors"
      >
        {locale === 'en' ? 'Withdrawal' : 'Widerruf'}
      </a>
    </div>
  );
}
