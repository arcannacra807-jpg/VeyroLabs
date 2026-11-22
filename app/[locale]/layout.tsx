import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { routing } from '@/i18n/routing';
import '../globals.css';

const syne = Syne({
  subsets: ['latin', 'latin-ext'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const baseUrl = 'https://veyro-labs.com';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const localeCanonical = (locale: string) => `${baseUrl}/${locale}`;

const hreflangAlternates = {
  de: `${baseUrl}/de`,
  en: `${baseUrl}/en`,
  'x-default': `${baseUrl}/de`,
};

const localeMeta: Record<string, { title: string; description: string; ogLocale: string }> = {
  de: {
    title: 'Veyro Labs — Du bekommst die Aufmerksamkeit die du verdienst',
    description:
      'Websites für Gründer und Brands die keine Kompromisse machen. Design, Code, 3D und Strategie — in einer Person. Kein Template, kein Junior, kein Ping-Pong.',
    ogLocale: 'de_DE',
  },
  en: {
    title: 'Veyro Labs — You get the attention you deserve',
    description:
      'Websites for founders and brands that make no compromises. Design, code, 3D and strategy — one person. No template, no junior, no ping-pong.',
    ogLocale: 'en_US',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = localeMeta[locale] ?? localeMeta['de'];
  const canonical = localeCanonical(locale);

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.description,
    keywords: [
      'Webdesign',
      'Web Development',
      'Website erstellen lassen',
      'Webdesigner Hamburg',
      'Next.js Developer',
      'SaaS Website',
      'Startup Website',
      'Premium Webdesign',
      'React',
      'Next.js',
      'Three.js',
      'Veyro Labs',
      'Arcan Bereket',
    ],
    verification: {
      google: 'EZYNLtif_r7dS5P-hF0nzHT_r_ZVcv4qi1tyoD-G3jM',
    },
    other: {
      'msvalidate.01': '46F3793F1EAFF4DDE0BE96B0BDFD81C4',
    },
    alternates: {
      canonical,
      languages: hreflangAlternates,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: 'Veyro Labs',
      locale: meta.ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#arcan`,
      name: 'Arcan Bereket',
      url: baseUrl,
      jobTitle: 'Web Designer & Developer',
      knowsAbout: [
        'Webdesign',
        'Webentwicklung',
        'Next.js',
        'React',
        'TypeScript',
        'Three.js',
        'Conversion-Optimierung',
        'SEO',
      ],
      worksFor: { '@id': `${baseUrl}/#organization` },
      sameAs: [
        'https://www.linkedin.com/in/arcan-bereket-561181412/',
        'https://x.com/veyrolabs',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${baseUrl}/#organization`,
      name: 'Veyro Labs',
      url: baseUrl,
      logo: `${baseUrl}/favicon.svg`,
      founder: { '@id': `${baseUrl}/#arcan` },
      priceRange: '€€€',
      description:
        'Premium web design and development for founders and brands that make no compromises.',
      areaServed: 'Worldwide',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Im grünen Grunde 9',
        addressLocality: 'Hamburg',
        postalCode: '22337',
        addressCountry: 'DE',
      },
      serviceType: ['Web Design', 'Web Development', '3D Design', 'Strategy'],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'veyro-labs@gmx.de',
        telephone: '+49-176-5590599',
        contactType: 'customer service',
        availableLanguage: ['de', 'en'],
      },
      sameAs: [
        'https://www.linkedin.com/in/arcan-bereket-561181412/',
        'https://x.com/veyrolabs',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Veyro Labs',
      publisher: { '@id': `${baseUrl}/#organization` },
    },
  ],
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

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${syne.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#080808" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
