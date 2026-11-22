import { getTranslations, getLocale } from 'next-intl/server';
import FooterButtons from './FooterButtons';

export default async function Footer() {
  const t = await getTranslations('footer');
  const locale = await getLocale();

  return (
    <footer className="relative z-10 py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href={`/${locale}`} className="font-display text-white font-bold text-lg tracking-tight">
            Veyro Labs
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-muted text-sm">
            <a href={`/${locale}#leistungen`} className="hover:text-white transition-colors">{t('services')}</a>
            <a href={`/${locale}#ablauf`} className="hover:text-white transition-colors">{t('process')}</a>
            <a href={`/${locale}#preis`} className="hover:text-white transition-colors">{t('pricing')}</a>
            <a href={`/${locale}#kontakt`} className="hover:text-white transition-colors">{t('contact')}</a>
            {locale === 'de' && (
              <>
                <a href="/de/website-erstellen-lassen" className="hover:text-white transition-colors">
                  Website erstellen lassen
                </a>
                <a href="/de/webdesigner-hamburg" className="hover:text-white transition-colors">
                  Webdesigner Hamburg
                </a>
              </>
            )}
            {locale === 'en' && (
              <a href="/en/hire-nextjs-developer" className="hover:text-white transition-colors">
                Hire a Next.js Developer
              </a>
            )}
          </div>

          <FooterButtons />
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center space-y-2">
          <p className="text-subtle text-xs">
            &copy; {new Date().getFullYear()} Veyro Labs. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
