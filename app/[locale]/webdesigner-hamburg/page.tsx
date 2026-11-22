import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Grain from '@/components/Grain';
import ClientShell from '@/components/ClientShell';
import ContactSlide from '@/components/ContactSlide';
import Footer from '@/components/Footer';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'de' }];
}

export const metadata: Metadata = {
  metadataBase: new URL('https://veyro-labs.com'),
  title: "Webdesigner Hamburg — Custom-Code, Solo",
  description: "Webdesigner aus Hamburg: handgeschriebener Code statt WordPress, ein Ansprechpartner, persönlich erreichbar. Kostenloses Erstgespräch — Antwort in 24 h.",
  keywords: ["Webdesigner Hamburg", "Webdesign Hamburg", "Webdesign Agentur Hamburg", "Homepage erstellen lassen Hamburg", "Webentwickler Hamburg", "Website erstellen lassen Hamburg"],
  robots: 'index, follow',
  alternates: {
    canonical: "https://veyro-labs.com/de/webdesigner-hamburg",
  },
  openGraph: {
    title: "Webdesigner Hamburg — Custom-Code, Solo",
    description: "Webdesigner aus Hamburg: handgeschriebener Code statt WordPress, ein Ansprechpartner, persönlich erreichbar. Kostenloses Erstgespräch — Antwort in 24 h.",
    url: "https://veyro-labs.com/de/webdesigner-hamburg",
    siteName: 'Veyro Labs',
    locale: "de_DE",
    type: 'website',
    images: [
      {
        url: '/de/webdesigner-hamburg/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Webdesigner aus Hamburg — Custom-Code statt WordPress, ein Ansprechpartner, ab 1.200 €",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Webdesigner Hamburg — Custom-Code, Solo",
    description: "Webdesigner aus Hamburg: handgeschriebener Code statt WordPress, ein Ansprechpartner, persönlich erreichbar. Kostenloses Erstgespräch — Antwort in 24 h.",
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://veyro-labs.com/de/webdesigner-hamburg#webpage",
      "url": "https://veyro-labs.com/de/webdesigner-hamburg",
      "name": "Webdesigner Hamburg",
      "description": "Webdesigner aus Hamburg: handgeschriebener Code statt WordPress, ein Ansprechpartner, persönlich erreichbar. Kostenloses Erstgespräch — Antwort in 24 h.",
      "inLanguage": "de-DE",
      "isPartOf": {
        "@id": "https://veyro-labs.com/#website"
      },
      "about": {
        "@id": "https://veyro-labs.com/de/webdesigner-hamburg#service"
      },
      "mainEntity": {
        "@id": "https://veyro-labs.com/de/webdesigner-hamburg#service"
      },
      "breadcrumb": {
        "@id": "https://veyro-labs.com/de/webdesigner-hamburg#breadcrumb"
      },
      "author": {
        "@id": "https://veyro-labs.com/#arcan"
      },
      "datePublished": "2026-06-14",
      "dateModified": "2026-06-14",
      "primaryImageOfPage": "https://veyro-labs.com/de/webdesigner-hamburg/opengraph-image",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "#lokal-answer",
          "#preise-answer"
        ]
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://veyro-labs.com/de/webdesigner-hamburg#service",
      "name": "Webdesigner Hamburg — Veyro Labs",
      "serviceType": "Webdesign & Webentwicklung",
      "description": "Individuell programmierte Websites (Next.js, React, TypeScript) von einem Solo-Webdesigner aus Hamburg — persönlich erreichbar, fester Preis, Code-Eigentum, kein Abo.",
      "url": "https://veyro-labs.com/de/webdesigner-hamburg",
      "provider": {
        "@id": "https://veyro-labs.com/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Hamburg"
        },
        {
          "@type": "City",
          "name": "Norderstedt"
        },
        {
          "@type": "City",
          "name": "Pinneberg"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pakete",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Landing Page",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR",
              "minPrice": 1200
            }
          },
          {
            "@type": "Offer",
            "name": "Website",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR",
              "minPrice": 2500,
              "maxPrice": 4500
            }
          },
          {
            "@type": "Offer",
            "name": "Premium Custom",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR",
              "minPrice": 6000
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://veyro-labs.com/de/webdesigner-hamburg#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Startseite",
          "item": "https://veyro-labs.com/de"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Webdesigner Hamburg",
          "item": "https://veyro-labs.com/de/webdesigner-hamburg"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://veyro-labs.com/de/webdesigner-hamburg#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Arbeitest du nur in Hamburg oder auch deutschlandweit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Beides. Ich sitze in Hamburg und bin hier persönlich erreichbar — viele Kunden schätzen die Nähe und das direkte Treffen. Bauen kann ich deine Website aber von überall: Der komplette Ablauf funktioniert genauso gut per Video-Call und Live-Link. Hamburg ist mein Zuhause, kein Limit."
          }
        },
        {
          "@type": "Question",
          "name": "Treffen wir uns persönlich oder läuft alles remote?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wie du willst. In Hamburg treffe ich dich gern persönlich zum Erstgespräch — an einem Ort deiner Wahl oder bei dir. Genauso gut läuft alles per Video-Call, wenn dir das lieber ist. Ich empfange keine Kunden an einer festen Büroadresse, sondern komme zu dir oder wir machen es digital."
          }
        },
        {
          "@type": "Question",
          "name": "Was kostet ein Webdesigner in Hamburg bei dir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Richtwerte: eine Landing Page ab 1.200 €, eine mehrseitige Website 2.500–4.500 €, eine Premium-Seite ab 6.000 €. Den festen Preis bekommst du im Angebot, bevor etwas startet — kein Overrun. Als Kleinunternehmer nach §19 UStG ohne Umsatzsteuer. Details findest du auf meiner Preisseite."
          }
        },
        {
          "@type": "Question",
          "name": "Wie lange dauert es, bis meine Hamburger Website fertig ist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eine Landing Page ist meist in 5–7 Werktagen fertig, eine komplette Website in 2–4 Wochen — je nach Umfang. Du siehst den Fortschritt laufend per Link, kein monatelanger Blindflug. Weil ich solo arbeite, gibt es kein Agentur-Pingpong, das alles ausbremst."
          }
        },
        {
          "@type": "Question",
          "name": "Arbeitest du auch mit Unternehmen aus dem Hamburger Umland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, klar. Ob Altona, Eppendorf, Winterhude, HafenCity oder ein Betrieb aus Norderstedt, Pinneberg oder dem Umland — die Entfernung ist kein Thema. Für ein persönliches Treffen bin ich im Großraum Hamburg flexibel, der Rest läuft bequem per Call und Link."
          }
        },
        {
          "@type": "Question",
          "name": "Baust du mit WordPress oder programmierst du individuell?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ich programmiere individuell — Next.js, React, TypeScript, von Hand für dein Projekt. Kein WordPress, kein Wix, kein Theme aus dem Baukasten. Das macht deine Seite schneller, einzigartig und unabhängig von fremden Plattformen. Genau hier unterscheide ich mich vom Hamburger Standard-Angebot."
          }
        },
        {
          "@type": "Question",
          "name": "Gehört mir die Website nach der Erstellung?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dir — vollständig, ab dem Tag der Übergabe. Kein Abo, kein Lock-in, kein monatlicher Beitrag an mich. Du kannst jederzeit woanders hosten, und weil der Code sauber geschrieben ist, kann ihn jeder Entwickler übernehmen. Du besitzt deinen Code, Punkt."
          }
        }
      ]
    }
  ]
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== 'de') notFound();
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Grain />
      <ClientShell />
      <header className="fixed top-0 left-0 right-0 z-[100] bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-[72px]">
          <a href="/de" className="font-display text-xl font-bold tracking-tight text-white">Veyro Labs</a>
          <div className="flex items-center gap-4">
            <a href="#preise" className="hidden sm:block text-sm font-medium text-muted hover:text-white transition-colors">Preise</a>
            <a href="#kontakt" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-display font-bold rounded-xl bg-accent text-bg transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5">Kostenloses Erstgespräch</a>
          </div>
        </div>
      </header>
      <main className="relative z-10">
        <section className="slide relative" data-slide="hero">
          <div className="container relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-subtle">
                <li>
                  <a href="/de" className="hover:text-muted transition-colors">Startseite</a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-muted">Webdesigner Hamburg</li>
              </ol>
            </nav>
            <div className="hero-label label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />Webdesign &amp; Webentwicklung · Hamburg</div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight mb-7 max-w-4xl">Webdesigner aus Hamburg — <span className="gradient-text">ein Mensch, kein Briefing-Pingpong.</span></h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-9">Ich bin Arcan — Webdesigner aus Hamburg. Ich baue deine Website von Hand: Design, Code und Strategie aus einer Hand. Kein Junior, der dein Briefing weiterleitet. Kein WordPress-Theme, das tausend andere auch haben. In Hamburg ansässig, vor Ort oder per Call erreichbar — ganz wie du willst.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <a href="#kontakt" className="btn-primary magnetic-btn">Kostenloses Erstgespräch</a>
              <a href="#preise" className="btn-ghost magnetic-btn">Preise ansehen</a>
            </div>
            <p className="text-subtle text-sm">Kostenlos · unverbindlich · Antwort in 24 h</p>
          </div>
        </section>
        <section id="definition-lokal" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">Was bringt dir ein Webdesigner aus Hamburg statt einer anonymen Agentur?</h2>
            <p id="lokal-answer" className="text-muted text-lg leading-relaxed max-w-2xl mb-5 pop-in">Ein Webdesigner aus Hamburg heißt: ein fester Ansprechpartner statt Account-Manager-Kette. Du redest direkt mit dem, der baut — auf Augenhöhe, in deiner Zeitzone, bei Bedarf persönlich vor Ort. Kein Briefing, das durch fünf Hände geht.</p>
            <p className="text-muted text-lg leading-relaxed max-w-2xl pop-in">Die meisten Hamburger Anbieter liefern WordPress oder Baukasten. Ich baue individuell programmiert — das ist der unbesetzte Slot im Hamburger Markt. Für viele Selbstständige, Handwerksbetriebe, Praxen und kleine Unternehmen reicht heute keine Seite mehr, die nur existiert. Sie muss Kunden gewinnen.</p>
          </div>
        </section>
        <section id="warum-solo" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Solo statt Agentur</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 max-w-3xl split-reveal">Warum ein Hamburger Solo statt Agentur?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Ein Mensch für alles</h3>
                <p className="text-muted text-base leading-relaxed">Kein Account-Manager, kein Junior. Du redest direkt mit Arcan — vom ersten Call bis zur Übergabe.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Hamburg, persönlich erreichbar</h3>
                <p className="text-muted text-base leading-relaxed">Treffen in Hamburg möglich, sonst Video-Call. Schnelle, direkte Abstimmung statt Ticket-System.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Individuell programmiert, kein WordPress</h3>
                <p className="text-muted text-base leading-relaxed">Next.js, React, TypeScript — handgeschrieben für dich. Schneller und einzigartiger als jedes Theme aus dem Hamburger Standard-Angebot.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Du besitzt deinen Code</h3>
                <p className="text-muted text-base leading-relaxed">Nach Übergabe gehört jede Zeile dir. Kein Abo, kein Lock-in.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Ehrlich statt Marketing-Blabla</h3>
                <p className="text-muted text-base leading-relaxed">Wenn ein Baukasten für dich reicht, sage ich dir das — statt dir etwas zu verkaufen.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Wenige Projekte gleichzeitig</h3>
                <p className="text-muted text-base leading-relaxed">Damit deins die Aufmerksamkeit bekommt, für die du zahlst.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="leistungen" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Was du bekommst</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 max-w-3xl split-reveal">Was du bekommst, wenn ein Hamburger Webdesigner deine Seite baut.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Design, das in Hamburg auffällt</h3>
                <p className="text-muted text-base leading-relaxed">Premium, dark, animiert (Three.js/GSAP, wenn es passt) — ein Look, den der WordPress-Lokalmarkt nicht liefert.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Schnelle Seite — prüfbar</h3>
                <p className="text-muted text-base leading-relaxed">Ich behaupte keine Zahl. Miss die Ladezeit selbst bei Google PageSpeed — die Adresse steht oben.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">SEO-Fundament &amp; lokale Sichtbarkeit</h3>
                <p className="text-muted text-base leading-relaxed">Saubere Struktur, Core Web Vitals, Schema. Die technische Basis, damit Google dich in Hamburg findet.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">DSGVO &amp; BFSG sauber im Code</h3>
                <p className="text-muted text-base leading-relaxed">Barrierefrei und rechtssicher direkt im Code statt per Plugin — ab 2025 ein echter Hebel.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">CMS, wenn du selbst pflegen willst</h3>
                <p className="text-muted text-base leading-relaxed">Texte ändern ohne Programmierkenntnisse — wenn du es brauchst.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Erreichbar nach dem Launch</h3>
                <p className="text-muted text-base leading-relaxed">Für Änderungen, neue Seiten, Fragen. Kein Verschwinden nach der Rechnung.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="ablauf" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">So läuft das</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 split-reveal">Wie läuft die Zusammenarbeit mit einem Webdesigner in Hamburg ab?</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12 pop-in">In vier Schritten — eine Landing Page meist in 5–7 Werktagen, eine komplette Website in 2–4 Wochen. Das Erstgespräch in Hamburg persönlich oder per Call, ganz wie du willst.</p>
            <ol className="space-y-4 max-w-3xl">
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">01</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Erstgespräch</h3>
                  <p className="text-muted text-base leading-relaxed">30 Minuten, kostenlos — in Hamburg persönlich oder per Video-Call. Du erzählst, was du brauchst; ich sage ehrlich, ob und wie ich helfen kann.</p>
                </div>
              </li>
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">02</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Entwurf</h3>
                  <p className="text-muted text-base leading-relaxed">In wenigen Tagen ein echtes, klickbares Design — kein 40-seitiges PDF.</p>
                </div>
              </li>
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">03</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Bau</h3>
                  <p className="text-muted text-base leading-relaxed">Sauberer Code, responsive, schnell. Laufend ein Link zum Anschauen, dein Feedback fließt direkt ein. Revisionen sind drin.</p>
                </div>
              </li>
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">04</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Launch &amp; Übergabe</h3>
                  <p className="text-muted text-base leading-relaxed">Kurze Einweisung, dann gehört der Code dir. Kein Abo. Brauchst du später etwas, bin ich in Hamburg gut erreichbar.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section id="preise" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-3 pop-in">Preise</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 split-reveal">Was kostet ein Webdesigner in Hamburg?</h2>
            <p id="preise-answer" className="text-muted text-lg leading-relaxed max-w-2xl mb-3 pop-in">Richtwerte: eine Landing Page ab 1.200 €, eine mehrseitige Website 2.500–4.500 €, eine komplett individuelle Premium-Seite ab 6.000 €. Den festen Preis bekommst du im Angebot, bevor irgendetwas startet — kein Overrun. Als Kleinunternehmer nach §19 UStG ohne Umsatzsteuer.</p>
            <p className="text-muted text-base leading-relaxed max-w-2xl mb-12 pop-in">Hamburger Agenturen liegen schnell bei 5.000–20.000 € plus Account-Manager. Festpreis-Anbieter sind billiger, liefern aber Baukasten-Standard. Hier bekommst du handgeschriebenen Code zum fairen Preis — und einen echten Ansprechpartner.</p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mb-8">
              <div className="rounded-2xl border border-border bg-surface/50 p-6 tilt-card pop-in">
                <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">Landing Page</div>
                <div className="font-display text-2xl font-bold text-white mb-1">ab 1.200 €</div>
                <p className="text-muted text-sm leading-relaxed mb-2">Eine Seite, die wirkt. Fokussiert, schnell.</p>
                <span className="text-subtle text-xs">meist in 5–7 Werktagen</span>
              </div>
              <div className="rounded-2xl border border-border bg-surface/50 p-6 tilt-card pop-in">
                <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">Website</div>
                <div className="font-display text-2xl font-bold text-white mb-1">2.500 – 4.500 €</div>
                <p className="text-muted text-sm leading-relaxed mb-2">Volle Präsenz, bis zu 5 Seiten. Kein Template-Look.</p>
                <span className="text-subtle text-xs">für Projekte mit mehr als einer Seite</span>
              </div>
              <div className="rounded-2xl border border-border bg-surface/50 p-6 tilt-card pop-in">
                <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">Premium Custom</div>
                <div className="font-display text-2xl font-bold text-white mb-1">ab 6.000 €</div>
                <p className="text-muted text-sm leading-relaxed mb-2">Marke + Web + 3D + Strategie, alles handgeschrieben.</p>
                <span className="text-subtle text-xs">Fixpreis nach Briefing</span>
              </div>
            </div>
            <a href="/de/website-erstellen-lassen" className="magnetic-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-bg font-display font-bold text-sm hover:shadow-glow transition-all duration-300">Alle Preise &amp; Pakete im Detail ansehen<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
  <path d="M2 7h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg></a>
            <p className="text-subtle text-xs mt-4 pop-in">Alle Preise sind Endpreise. Als Kleinunternehmer gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.</p>
          </div>
        </section>
        <section id="vergleich" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Custom-Code vs. WordPress</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">Individuell programmiert oder WordPress — was solltest du in Hamburg erstellen lassen?</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-10 pop-in">Kurz: Baukasten reicht für eine einfache Visitenkarte. WordPress ist im Hamburger Markt Standard, erzeugt aber oft trägen Code. Handgeschriebener Code gewinnt, wo die Seite schnell, einzigartig und wirklich deine sein soll.</p>
            <div className="overflow-x-auto rounded-2xl border border-border pop-in">
              <table className="w-full text-left text-sm border-collapse min-w-[680px]">
                <caption className="sr-only">Vergleich Baukasten, WordPress-Agentur Hamburg und handgeschriebener Custom-Code</caption>
                <thead>
                  <tr className="border-b border-border bg-surface/50">
                    <th scope="col" className="p-4 font-display font-bold text-white">Merkmal</th>
                    <th scope="col" className="p-4 font-display font-semibold text-muted">Baukasten (Wix/Jimdo)</th>
                    <th scope="col" className="p-4 font-display font-semibold text-muted">WordPress-Agentur Hamburg</th>
                    <th scope="col" className="p-4 font-display font-semibold text-accent">Custom-Code (Veyro)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Ladezeit / Core Web Vitals</th>
                    <td className="p-4 text-muted align-top">Mittel — Theme-Ballast</td>
                    <td className="p-4 text-muted align-top">Oft langsam — viele Plugins</td>
                    <td className="p-4 text-white align-top">Schnell — handgeschrieben</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Wem gehört der Code?</th>
                    <td className="p-4 text-muted align-top">Der Plattform</td>
                    <td className="p-4 text-muted align-top">Teilweise (Theme-Lizenz)</td>
                    <td className="p-4 text-white align-top">Dir, komplett</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Laufende Kosten</th>
                    <td className="p-4 text-muted align-top">Abo ab ~10–16 €/Monat</td>
                    <td className="p-4 text-muted align-top">Hosting + oft Wartungsvertrag</td>
                    <td className="p-4 text-white align-top">Nur Hosting &amp; Domain</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Individualität</th>
                    <td className="p-4 text-muted align-top">Template — wie tausend andere</td>
                    <td className="p-4 text-muted align-top">Theme, angepasst</td>
                    <td className="p-4 text-white align-top">Komplett individuell</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Ansprechpartner</th>
                    <td className="p-4 text-muted align-top">Support-Hotline</td>
                    <td className="p-4 text-muted align-top">Account-Manager-Kette</td>
                    <td className="p-4 text-white align-top">Direkt Arcan</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Persönlich in Hamburg erreichbar</th>
                    <td className="p-4 text-muted align-top">Nein</td>
                    <td className="p-4 text-muted align-top">Selten — Agenturbüro</td>
                    <td className="p-4 text-white align-top">Ja — vor Ort oder per Call</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Typischer Preis</th>
                    <td className="p-4 text-muted align-top">0–300 € + Abo</td>
                    <td className="p-4 text-muted align-top">5.000–20.000 €</td>
                    <td className="p-4 text-white align-top">ab 1.200 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-subtle text-sm mt-4 pop-in">Ein WordPress-Theme sieht aus wie tausend andere Hamburger Seiten. Deine nicht.</p>
          </div>
        </section>
        <section id="beweis" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Ehrlich gesagt</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">Welche Referenzen hat ein junger Webdesigner aus Hamburg?</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-5 pop-in">Ich bin ehrlich: Veyro Labs ist jung. Ich hänge hier keine erfundenen Kundenlogos und keine gekauften Sterne auf. Mein Beweis ist diese Seite selbst — Design, Code, Animation, alles von mir, für diese Seite.</p>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12 pop-in">Und ich behaupte die Geschwindigkeit nicht — du kannst sie nachmessen. Gib die Adresse oben bei <a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fveyro-labs.com%2Fde%2Fwebdesigner-hamburg" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google PageSpeed Insights</a> ein. In Hamburg ansässig und ansprechbar — kein Callcenter, keine Weiterleitung.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={0} data-suffix="">0</div>
                <div className="text-white text-sm font-semibold">Templates</div>
                <div className="text-muted text-xs mt-1 leading-snug">Jede Zeile für dein Projekt geschrieben.</div>
              </div>
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={100} data-suffix=" %">100 %</div>
                <div className="text-white text-sm font-semibold">Dein Code</div>
                <div className="text-muted text-xs mt-1 leading-snug">Nach Übergabe gehört jede Zeile dir.</div>
              </div>
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={1} data-suffix="">1</div>
                <div className="text-white text-sm font-semibold">Ansprechpartner</div>
                <div className="text-muted text-xs mt-1 leading-snug">Direkt Arcan — kein Account-Manager.</div>
              </div>
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={24} data-suffix=" h">24 h</div>
                <div className="text-white text-sm font-semibold">Antwort</div>
                <div className="text-muted text-xs mt-1 leading-snug">Meist schneller. Kein Bot, kein Ticket.</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pop-in">
              <a href="https://onyx-showcase.vercel.app" target="_blank" rel="noopener noreferrer" className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-light text-white font-display font-bold text-sm hover:border-accent/40 transition-all duration-300">ONYX-Showcase ansehen<span className="text-subtle font-normal">(Demo, kein Kundenprojekt)</span></a>
              <a href="/de/website-erstellen-lassen" className="text-muted text-sm hover:text-white transition-colors">Website erstellen lassen — so läuft das deutschlandweit →</a>
            </div>
            <p className="text-subtle text-xs mt-8">Zuletzt aktualisiert: Juni 2026</p>
          </div>
        </section>
        <section id="faq" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Häufige Fragen</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 split-reveal">Häufige Fragen an einen Webdesigner aus Hamburg.</h2>
            <div className="space-y-3 max-w-3xl">
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Arbeitest du nur in Hamburg oder auch deutschlandweit?</h3>
                <p className="text-muted text-sm leading-relaxed">Beides. Ich sitze in Hamburg und bin hier persönlich erreichbar — viele Kunden schätzen die Nähe und das direkte Treffen. Bauen kann ich deine Website aber von überall: Der komplette Ablauf funktioniert genauso gut per Video-Call und Live-Link. Hamburg ist mein Zuhause, kein Limit.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Treffen wir uns persönlich oder läuft alles remote?</h3>
                <p className="text-muted text-sm leading-relaxed">Wie du willst. In Hamburg treffe ich dich gern persönlich zum Erstgespräch — an einem Ort deiner Wahl oder bei dir. Genauso gut läuft alles per Video-Call, wenn dir das lieber ist. Ich empfange keine Kunden an einer festen Büroadresse, sondern komme zu dir oder wir machen es digital.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Was kostet ein Webdesigner in Hamburg bei dir?</h3>
                <p className="text-muted text-sm leading-relaxed">Richtwerte: eine Landing Page ab 1.200 €, eine mehrseitige Website 2.500–4.500 €, eine Premium-Seite ab 6.000 €. Den festen Preis bekommst du im Angebot, bevor etwas startet — kein Overrun. Als Kleinunternehmer nach §19 UStG ohne Umsatzsteuer. Details findest du auf meiner Preisseite.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Wie lange dauert es, bis meine Hamburger Website fertig ist?</h3>
                <p className="text-muted text-sm leading-relaxed">Eine Landing Page ist meist in 5–7 Werktagen fertig, eine komplette Website in 2–4 Wochen — je nach Umfang. Du siehst den Fortschritt laufend per Link, kein monatelanger Blindflug. Weil ich solo arbeite, gibt es kein Agentur-Pingpong, das alles ausbremst.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Arbeitest du auch mit Unternehmen aus dem Hamburger Umland?</h3>
                <p className="text-muted text-sm leading-relaxed">Ja, klar. Ob Altona, Eppendorf, Winterhude, HafenCity oder ein Betrieb aus Norderstedt, Pinneberg oder dem Umland — die Entfernung ist kein Thema. Für ein persönliches Treffen bin ich im Großraum Hamburg flexibel, der Rest läuft bequem per Call und Link.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Baust du mit WordPress oder programmierst du individuell?</h3>
                <p className="text-muted text-sm leading-relaxed">Ich programmiere individuell — Next.js, React, TypeScript, von Hand für dein Projekt. Kein WordPress, kein Wix, kein Theme aus dem Baukasten. Das macht deine Seite schneller, einzigartig und unabhängig von fremden Plattformen. Genau hier unterscheide ich mich vom Hamburger Standard-Angebot.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Gehört mir die Website nach der Erstellung?</h3>
                <p className="text-muted text-sm leading-relaxed">Dir — vollständig, ab dem Tag der Übergabe. Kein Abo, kein Lock-in, kein monatlicher Beitrag an mich. Du kannst jederzeit woanders hosten, und weil der Code sauber geschrieben ist, kann ihn jeder Entwickler übernehmen. Du besitzt deinen Code, Punkt.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center pop-in">
              <p className="text-muted text-base leading-relaxed">Ich nehme bewusst nur wenige Projekte gleichzeitig an — damit deins die Aufmerksamkeit bekommt, für die du zahlst. Sitzt du in Hamburg oder im Umland und willst eine Seite, die wirklich für dich arbeitet? Dann lass uns reden — persönlich oder per Call. Und wenn ein Baukasten für dich reicht, sage ich dir das im Erstgespräch ehrlich.</p>
            </div>
          </div>
        </section>
        <ContactSlide />
      </main>
      <Footer />
    </div>
  );
}
