import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veyro-labs.com'),
  title: 'Veyro Labs — Websites die wirken',
  description:
    'Design, Code und Strategie aus einer Hand. Kein Agentur-Overhead, keine Wartezeiten, kein Copy-Paste. Von jemandem der das hier selbst gebaut hat.',
  keywords: ['Webdesign', 'Webentwicklung', 'Hamburg', 'Freelancer', 'React', 'Next.js', 'Veyro Labs'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Veyro Labs — Websites die wirken',
    description:
      'Design, Code und Strategie aus einer Hand. Kein Agentur-Overhead, keine Wartezeiten, kein Copy-Paste.',
    url: 'https://veyro-labs.com',
    siteName: 'Veyro Labs',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veyro Labs — Websites die wirken',
    description: 'Design, Code und Strategie aus einer Hand. Kein Agentur-Overhead, keine Wartezeiten.',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${syne.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
