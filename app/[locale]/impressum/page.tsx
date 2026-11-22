import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ImpressumContent, WiderrufContent } from '@/components/LegalContent';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'Legal Notice (Impressum) — Veyro Labs' : 'Impressum & Widerruf — Veyro Labs',
    description: isEn
      ? 'Legal disclosure pursuant to Section 5 DDG and right of withdrawal for Veyro Labs (Arcan Bereket, Hamburg).'
      : 'Impressum gemäß § 5 DDG und Widerrufsbelehrung von Veyro Labs (Arcan Bereket, Hamburg).',
    robots: 'noindex, follow',
    alternates: {
      canonical: `https://veyro-labs.com/${locale}/impressum`,
    },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <header className="border-b border-border bg-bg/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
          <a href={`/${locale}`} className="font-display text-xl font-bold tracking-tight text-white">
            Veyro Labs
          </a>
          <a
            href={`/${locale}`}
            className="text-sm font-medium text-muted hover:text-white transition-colors"
          >
            {locale === 'en' ? '← Back to home' : '← Zurück zur Startseite'}
          </a>
        </div>
      </header>
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 sm:px-8 py-16 space-y-16">
        <ImpressumContent locale={locale} />
        <div className="pt-12 border-t border-border">
          <WiderrufContent locale={locale} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
