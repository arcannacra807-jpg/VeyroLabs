import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import FooterButtons from './FooterButtons';

export default async function Footer() {
  const t = await getTranslations('footer');
  const locale = await getLocale();

  return (
    <footer className="relative z-10 py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href={`/${locale}`} className="font-display text-white font-bold text-lg tracking-tight">
            Veyro Labs
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 text-muted text-sm">
            <Link href={`/${locale}#leistungen`} className="hover:text-white transition-colors">{t('services')}</Link>
            <Link href={`/${locale}#ablauf`} className="hover:text-white transition-colors">{t('process')}</Link>
            <Link href={`/${locale}#preis`} className="hover:text-white transition-colors">{t('pricing')}</Link>
            <Link href={`/${locale}#kontakt`} className="hover:text-white transition-colors">{t('contact')}</Link>
            {locale === 'de' && (
              <>
                <Link href="/de/website-erstellen-lassen" className="hover:text-white transition-colors">
                  Website erstellen lassen
                </Link>
                <Link href="/de/webdesigner-hamburg" className="hover:text-white transition-colors">
                  Webdesigner Hamburg
                </Link>
              </>
            )}
            {locale === 'en' && (
              <Link href="/en/hire-nextjs-developer" className="hover:text-white transition-colors">
                Hire a Next.js Developer
              </Link>
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
