'use client';

import { useTranslations } from 'next-intl';

export default function FooterButtons() {
  const t = useTranslations('footer');
  return (
    <div className="flex items-center gap-4 text-subtle text-xs">
      <button
        onClick={() => document.dispatchEvent(new CustomEvent('open-impressum'))}
        className="hover:text-white transition-colors"
      >
        {t('impressum')}
      </button>
      <span className="text-subtle">&middot;</span>
      <button
        onClick={() => document.dispatchEvent(new CustomEvent('open-datenschutz'))}
        className="hover:text-white transition-colors"
      >
        {t('datenschutz')}
      </button>
    </div>
  );
}
