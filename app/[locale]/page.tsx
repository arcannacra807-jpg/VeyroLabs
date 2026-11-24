import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSlideLoader from '@/components/ContactSlideLoader';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function getFaqJsonLd(locale: string) {
  if (locale === 'en') {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a website cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A landing page starts from €1,200, a multi-page website runs €2,500–€4,500. Premium Custom with branding from €6,000. You always get a fixed quote before I start — no overrun.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long until my website is live?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A landing page is typically done in 5–7 business days. A full website takes 2–4 weeks depending on scope. You see progress throughout — no months of radio silence.',
          },
        },
        {
          '@type': 'Question',
          name: "What if I don't like the design?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We work in feedback rounds. You see real drafts, give feedback, I implement it. This continues until it's right — revisions are included in the price.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I really get the code afterwards?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — completely and without restrictions. No subscription, no lock-in, no monthly fee. The code is yours from the day of handover. You can host it anywhere.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to provide copy and images myself?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "It helps, but it's not required. If you don't have copy, I'll help write it. We'll source images together. We sort this out in the first call.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I reach you after launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. I'm available after launch for changes, new pages or questions. No maintenance contract needed — just write when something's needed.",
          },
        },
      ],
    };
  }

  return {
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
}

async function HeroSlide() {
  const t = await getTranslations('hero');
  return (
    <section className="slide relative" data-slide="hero">
      <div
        className="hero-content container relative z-10 text-center"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
      >
        <div className="hero-label label justify-center mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          {t('label')}
        </div>
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.95] tracking-tight mb-8"
          style={{ perspective: '1200px' }}
        >
          <span className="hero-h1-line1 block">{t('line1')}</span>
          <span className="hero-h1-line2 block gradient-text">{t('line2')}</span>
        </h1>
        <p className="hero-desc text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          {t('desc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#kontakt" className="hero-cta btn-primary magnetic-btn">{t('cta1')}</a>
          <a href="#leistungen" className="hero-cta btn-ghost magnetic-btn">{t('cta2')}</a>
        </div>
      </div>
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-subtle" aria-hidden="true">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce" aria-hidden="true">
          <path d="M8 4v16m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}

async function ProofSlide() {
  const t = await getTranslations('proof');
  return (
    <section className="slide relative" data-slide="proof" id="beweis">
      <div className="container relative z-10">
        <span className="label mb-4 pop-in">{t('label')}</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl split-reveal">
          {t('h2a')}<br /><span className="gradient-text">{t('h2b')}</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-4 pop-in">{t('p1')}</p>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-12 pop-in">{t('p2')}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { v: '100', count: 100, suffix: '', l: t('m1label'), s: t('m1sub') },
            { v: '60fps', count: 60, suffix: 'fps', l: t('m2label'), s: t('m2sub') },
            { v: '0.5s', count: null, suffix: '', l: t('m3label'), s: t('m3sub') },
            { v: '0', count: null, suffix: '', l: t('m4label'), s: t('m4sub') },
          ].map((m) => (
            <div key={m.l} className="card p-5 tilt-card pop-in">
              <div
                className="font-display text-3xl font-bold text-accent mb-1"
                data-count={m.count ?? undefined}
                data-suffix={m.suffix}
              >
                {m.v}
              </div>
              <div className="text-white text-sm font-semibold">{m.l}</div>
              <div className="text-muted text-xs mt-1 leading-snug">{m.s}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pop-in">
          <p className="text-muted text-base">{t('ctaText')}</p>
          <a
            href="#kontakt"
            className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-accent/40 text-accent font-display font-bold text-sm hover:bg-accent/[0.06] transition-all duration-300 flex-shrink-0"
          >
            {t('cta')}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

async function ServicesSlide() {
  const t = await getTranslations('services');
  const items = [
    { t: t('s1t'), d: t('s1d') },
    { t: t('s2t'), d: t('s2d') },
    { t: t('s3t'), d: t('s3d') },
    { t: t('s4t'), d: t('s4d') },
    { t: t('s5t'), d: t('s5d') },
    { t: t('s6t'), d: t('s6d') },
  ];
  return (
    <section className="slide relative" data-slide="services" id="leistungen">
      <div className="container relative z-10">
        <span className="label mb-4 pop-in">{t('label')}</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl split-reveal">
          {t('h2a')}<br />
          <span className="text-muted font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {t('h2b')}
          </span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-12">
          {items.map((s) => (
            <div key={s.t} className="card p-6 group tilt-card pop-in">
              <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {s.t}
              </h3>
              <p className="text-muted text-base leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function ProcessSlide() {
  const t = await getTranslations('process');
  const steps = [
    { n: '01', t: t('step1t'), d: t('step1d') },
    { n: '02', t: t('step2t'), d: t('step2d') },
    { n: '03', t: t('step3t'), d: t('step3d') },
    { n: '04', t: t('step4t'), d: t('step4d') },
  ];
  return (
    <section className="slide relative" data-slide="process" id="ablauf">
      <div className="container relative z-10">
        <span className="label mb-4 pop-in">{t('label')}</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 split-reveal">
          {t('h2')}
        </h2>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-12 pop-in">{t('desc')}</p>
        <div className="space-y-4 max-w-3xl">
          {steps.map((step) => (
            <div
              key={step.n}
              className="group flex gap-6 md:gap-10 p-6 rounded-2xl border border-border bg-surface/50 hover:border-accent/30 transition-all duration-300 pop-in tilt-card"
            >
              <div
                aria-hidden="true"
                className="font-display text-4xl font-bold text-white/45 group-hover:text-accent/70 transition-colors leading-none flex-shrink-0"
              >
                {step.n}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">{step.t}</h3>
                <p className="text-muted text-base leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function PricingSlide() {
  const t = await getTranslations('pricing');
  const plans = [
    {
      name: t('p1name'),
      price: t('p1price'),
      desc: t('p1desc'),
      features: [t('p1f1'), t('p1f2'), t('p1f3'), t('p1f4')],
      highlight: false,
      cta: t('p1cta'),
      ctaNote: t('p1note'),
    },
    {
      name: t('p2name'),
      price: t('p2price'),
      desc: t('p2desc'),
      features: [t('p2f1'), t('p2f2'), t('p2f3'), t('p2f4'), t('p2f5')],
      highlight: true,
      cta: t('p2cta'),
      ctaNote: null,
    },
    {
      name: t('p3name'),
      price: t('p3price'),
      desc: t('p3desc'),
      features: [t('p3f1'), t('p3f2'), t('p3f3'), t('p3f4'), t('p3f5')],
      highlight: false,
      cta: t('p3cta'),
      ctaNote: t('p3note'),
    },
  ];
  const trustItems = [t('trust1'), t('trust2'), t('trust3'), t('trust4')];

  return (
    <section className="slide relative" data-slide="pricing" id="preis">
      <div className="container relative z-10">
        <span className="label mb-3 pop-in">{t('label')}</span>
        <div className="mb-5 pop-in">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/30 bg-accent/[0.06] text-accent text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            {t('badge')}
          </span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 split-reveal">
          {t('h2a')}<br />
          <span className="gradient-text">{t('h2b')}</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-12 pop-in">{t('desc')}</p>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 flex flex-col tilt-card pop-in ${
                p.highlight ? 'border-accent/40 bg-accent/[0.03]' : 'border-border bg-surface/50'
              }`}
            >
              {p.highlight && (
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent mb-3">
                  {t('mostPopular')}
                </span>
              )}
              <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">{p.name}</div>
              <div className="font-display text-2xl font-bold text-white mb-1">{p.price}</div>
              <p className="text-muted text-sm mb-5 leading-relaxed">{p.desc}</p>
              <div className="space-y-2.5 flex-1 mb-6">
                {p.features.map((f) => (
                  <div key={f} className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="#kontakt"
                  className={`magnetic-btn inline-flex items-center justify-center px-5 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 ${
                    p.highlight
                      ? 'bg-accent text-bg hover:shadow-glow'
                      : 'border border-border-light text-white hover:border-accent/40'
                  }`}
                >
                  {p.cta}
                </a>
                {p.ctaNote && (
                  <span className="text-center text-subtle text-xs">{p.ctaNote}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pop-in">
          {trustItems.map((item) => (
            <span key={item} className="flex items-center gap-2 text-muted text-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                <path d="M2.5 7l3 3 6-6" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
        </div>
        <p className="text-subtle text-xs mt-6 text-center pop-in">{t('vat')}</p>
      </div>
    </section>
  );
}

async function FAQSlide() {
  const t = await getTranslations('faq');
  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') },
  ];
  return (
    <section className="slide relative" data-slide="faq" id="faq">
      <div className="container relative z-10">
        <span className="label mb-4 pop-in">{t('label')}</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 split-reveal">
          {t('h2')}
        </h2>
        <div className="space-y-3 max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.q} className="card p-6 pop-in">
              <h3 className="font-display text-base font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const faqJsonLd = getFaqJsonLd(locale);

  return (
    <div className="min-h-screen bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="relative z-10">
        <HeroSlide />
        <ProofSlide />
        <ServicesSlide />
        <ProcessSlide />
        <PricingSlide />
        <FAQSlide />
        <ContactSlideLoader />
      </main>
      <Footer />
    </div>
  );
}
