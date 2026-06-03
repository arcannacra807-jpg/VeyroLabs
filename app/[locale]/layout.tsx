import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
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

const baseUrl = 'https://veyro-labs.com';
const locales = ['de', 'en', 'es', 'fr', 'pt', 'ar', 'zh', 'ja', 'ru', 'nl', 'it', 'tr'] as const;

const localeCanonical = (locale: string) =>
  locale === 'de' ? baseUrl : `${baseUrl}/${locale}`;

const hreflangAlternates = Object.fromEntries([
  ...locales.map((l) => [l, localeCanonical(l)]),
  ['x-default', baseUrl],
]);

const localeMeta: Record<string, { title: string; description: string; ogLocale: string }> = {
  de: {
    title: 'Veyro Labs — Du bekommst die Aufmerksamkeit die du verdienst',
    description: 'Websites für Gründer und Brands die keine Kompromisse machen. Design, Code, 3D und Strategie — in einer Person. Kein Template, kein Junior, kein Ping-Pong.',
    ogLocale: 'de_DE',
  },
  en: {
    title: 'Veyro Labs — You get the attention you deserve',
    description: 'Websites for founders and brands that make no compromises. Design, code, 3D and strategy — one person. No template, no junior, no ping-pong.',
    ogLocale: 'en_US',
  },
  es: {
    title: 'Veyro Labs — Obtienes la atención que mereces',
    description: 'Sitios web para fundadores y marcas que no hacen compromisos. Diseño, código, 3D y estrategia — una persona. Sin plantillas, sin juniors, sin intermediarios.',
    ogLocale: 'es_ES',
  },
  fr: {
    title: "Veyro Labs — Tu obtiens l'attention que tu mérites",
    description: "Sites web pour les fondateurs et marques qui ne font aucun compromis. Design, code, 3D et stratégie — une personne. Pas de template, pas de junior, pas de ping-pong.",
    ogLocale: 'fr_FR',
  },
  pt: {
    title: 'Veyro Labs — Você recebe a atenção que merece',
    description: 'Sites para fundadores e marcas que não fazem concessões. Design, código, 3D e estratégia — uma pessoa. Sem template, sem junior, sem enrolação.',
    ogLocale: 'pt_PT',
  },
  ar: {
    title: 'Veyro Labs — تحصل على الاهتمام الذي تستحقه',
    description: 'مواقع ويب للمؤسسين والعلامات التجارية التي لا تتسامح مع التنازلات. تصميم، كود، ثلاثي الأبعاد واستراتيجية — شخص واحد.',
    ogLocale: 'ar_AR',
  },
  zh: {
    title: 'Veyro Labs — 你得到你应得的关注',
    description: '为不妥协的创始人和品牌打造网站。设计、代码、3D与策略——一个人完成。没有模板，没有初级人员，没有中间商。',
    ogLocale: 'zh_CN',
  },
  ja: {
    title: 'Veyro Labs — あなたは応じるに値する注目を得る',
    description: '妥協しない創業者やブランドのためのウェブサイト。デザイン、コード、3Dとストラテジー——一人で。テンプレートなし、ジュニアなし。',
    ogLocale: 'ja_JP',
  },
  ru: {
    title: 'Veyro Labs — Вы получаете внимание, которого заслуживаете',
    description: 'Сайты для основателей и брендов, которые не идут на компромисс. Дизайн, код, 3D и стратегия — один человек. Без шаблонов, без джуниоров.',
    ogLocale: 'ru_RU',
  },
  nl: {
    title: 'Veyro Labs — Je krijgt de aandacht die je verdient',
    description: 'Websites voor oprichters en merken die geen compromissen sluiten. Design, code, 3D en strategie — één persoon. Geen template, geen junior, geen ping-pong.',
    ogLocale: 'nl_NL',
  },
  it: {
    title: "Veyro Labs — Ottieni l'attenzione che meriti",
    description: 'Siti web per fondatori e brand che non fanno compromessi. Design, codice, 3D e strategia — una persona. Nessun template, nessun junior, nessun ping-pong.',
    ogLocale: 'it_IT',
  },
  tr: {
    title: 'Veyro Labs — Hak ettiğin ilgiyi alıyorsun',
    description: 'Uzlaşma yapmayan kurucular ve markalar için web siteleri. Tasarım, kod, 3D ve strateji — tek kişi. Şablon yok, acemi yok, ping-pong yok.',
    ogLocale: 'tr_TR',
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
    keywords: ['Webdesign', 'Web Development', 'SaaS Website', 'Startup Website', 'Premium Webdesign', 'React', 'Next.js', 'Veyro Labs', 'Arcan'],
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
      name: 'Arcan',
      url: baseUrl,
      jobTitle: 'Web Designer & Developer',
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
      description: 'Premium web design and development for founders and brands that make no compromises.',
      areaServed: 'Worldwide',
      serviceType: ['Web Design', 'Web Development', '3D Design', 'Strategy'],
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet eine Website bei dir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Landing Page beginnt ab 1.200 €, eine mehrseitige Website liegt zwischen 2.500 und 4.500 €. Premium Custom mit Branding ab 6.000 €. Du bekommst immer ein festes Angebot bevor ich anfange — kein Overrun.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert es bis meine Website live ist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Landingpage ist typisch in 5–7 Werktagen fertig. Eine komplette Website dauert 2–4 Wochen je nach Umfang. Du siehst den Fortschritt laufend — kein monatelanger Blindflug.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was wenn mir der Entwurf nicht gefällt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir arbeiten in Feedback-Runden. Du siehst echte Entwürfe, gibst mir Feedback, ich baue es ein. Das geht so lange bis es passt — Revisionen sind im Preis inbegriffen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bekomme ich den Code danach wirklich?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja — vollständig und uneingeschränkt. Kein Abo, kein Lock-in, kein monatlicher Beitrag. Der Code gehört dir ab dem Tag der Übergabe. Du kannst ihn jederzeit woanders hosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Muss ich Texte und Bilder selbst liefern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es hilft, ist aber keine Pflicht. Wenn du keine Texte hast, unterstütze ich beim Schreiben. Bilder beschaffen wir gemeinsam. Wir klären das im ersten Gespräch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich dich auch nach dem Launch noch kontaktieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Ich bin auch nach Launch erreichbar für Änderungen, neue Seiten oder Fragen. Kein Wartungsvertrag nötig — einfach schreiben wenn etwas gebraucht wird.',
      },
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

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${syne.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#080808" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wyh2ojt0lx");`}
        </Script>
      </body>
    </html>
  );
}
