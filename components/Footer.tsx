import { getTranslations } from 'next-intl/server';
import FooterButtons from './FooterButtons';

export default async function Footer() {
  const t = await getTranslations('footer');
  return (
    <footer className="relative z-10 py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-white font-bold text-lg tracking-tight">Veyro Labs</span>

          <div className="flex items-center gap-6 text-muted text-sm">
            <a href="#leistungen" className="hover:text-white transition-colors">{t('services')}</a>
            <a href="#ablauf" className="hover:text-white transition-colors">{t('process')}</a>
            <a href="#preis" className="hover:text-white transition-colors">{t('pricing')}</a>
            <a href="#kontakt" className="hover:text-white transition-colors">{t('contact')}</a>
          </div>

          <FooterButtons />
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center space-y-2">
          <p className="text-subtle text-xs">
            {t('euText')}{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              ec.europa.eu/consumers/odr
            </a>
            {t('euSuffix')}
          </p>
          <p className="text-subtle text-xs">
            &copy; {new Date().getFullYear()} Veyro Labs. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
