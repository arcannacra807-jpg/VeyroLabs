import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { DatenschutzContent } from '@/components/LegalContent';
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
    title: isEn ? 'Privacy Policy — Veyro Labs' : 'Datenschutzerklärung — Veyro Labs',
    description: isEn
      ? 'Privacy policy and GDPR information for Veyro Labs (Arcan Bereket, Hamburg).'
      : 'Datenschutzerklärung und Informationen gemäß DSGVO & TDDDG von Veyro Labs (Arcan Bereket, Hamburg).',
    robots: 'noindex, follow',
    alternates: {
      canonical: `https://veyro-labs.com/${locale}/datenschutz`,
    },
  };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-transparent relative z-10 flex flex-col">
      <header className="border-b border-border bg-bg/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
          <Link href={`/${locale}`} className="font-display text-xl font-bold tracking-tight text-white">
            Veyro Labs
          </Link>
          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-muted hover:text-white transition-colors"
          >
            {locale === 'en' ? '← Back to home' : '← Zurück zur Startseite'}
          </Link>
        </div>
      </header>
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 sm:px-8 py-16">
        <DatenschutzContent locale={locale} />
      </main>
      <Footer />
    </div>
  );
}
