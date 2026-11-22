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
  title: "Website erstellen lassen — Custom-Code ab 1.200 €",
  description: "Website erstellen lassen ohne Baukasten, ohne Abo: handgeschriebener Code, ab 1.200 €, ein Ansprechpartner. Kostenloses Erstgespräch — Antwort in 24 h.",
  keywords: ["Website erstellen lassen", "Webseite erstellen lassen", "Homepage erstellen lassen", "professionelle Website erstellen lassen", "Website erstellen lassen Kosten", "Website erstellen lassen Freelancer", "Website erstellen lassen ohne WordPress", "individuelle Website erstellen lassen"],
  robots: 'index, follow',
  alternates: {
    canonical: "https://veyro-labs.com/de/website-erstellen-lassen",
  },
  openGraph: {
    title: "Website erstellen lassen — Custom-Code ab 1.200 €",
    description: "Website erstellen lassen ohne Baukasten, ohne Abo: handgeschriebener Code, ab 1.200 €, ein Ansprechpartner. Kostenloses Erstgespräch — Antwort in 24 h.",
    url: "https://veyro-labs.com/de/website-erstellen-lassen",
    siteName: 'Veyro Labs',
    locale: "de_DE",
    type: 'website',
    images: [
      {
        url: '/de/website-erstellen-lassen/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Website erstellen lassen — Custom-Code ab 1.200 €, ohne Baukasten, ohne Abo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Website erstellen lassen — Custom-Code ab 1.200 €",
    description: "Website erstellen lassen ohne Baukasten, ohne Abo: handgeschriebener Code, ab 1.200 €, ein Ansprechpartner. Kostenloses Erstgespräch — Antwort in 24 h.",
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://veyro-labs.com/de/website-erstellen-lassen#webpage",
      "url": "https://veyro-labs.com/de/website-erstellen-lassen",
      "name": "Website erstellen lassen",
      "description": "Website erstellen lassen ohne Baukasten, ohne Abo: handgeschriebener Code, ab 1.200 €, ein Ansprechpartner. Kostenloses Erstgespräch — Antwort in 24 h.",
      "inLanguage": "de-DE",
      "isPartOf": {
        "@id": "https://veyro-labs.com/#website"
      },
      "about": {
        "@id": "https://veyro-labs.com/de/website-erstellen-lassen#service"
      },
      "mainEntity": {
        "@id": "https://veyro-labs.com/de/website-erstellen-lassen#service"
      },
      "breadcrumb": {
        "@id": "https://veyro-labs.com/de/website-erstellen-lassen#breadcrumb"
      },
      "author": {
        "@id": "https://veyro-labs.com/#arcan"
      },
      "datePublished": "2026-06-14",
      "dateModified": "2026-06-14",
      "primaryImageOfPage": "https://veyro-labs.com/de/website-erstellen-lassen/opengraph-image",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "#definition-answer",
          "#preis-answer"
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://veyro-labs.com/de/website-erstellen-lassen#service",
      "name": "Website erstellen lassen",
      "serviceType": "Webdesign & Webentwicklung",
      "description": "Individuelle Websites mit handgeschriebenem Code (Next.js, React, TypeScript) statt Baukasten oder Template. Festpreis im Angebot, Code-Eigentum, kein Abo.",
      "url": "https://veyro-labs.com/de/website-erstellen-lassen",
      "provider": {
        "@id": "https://veyro-labs.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pakete — Website erstellen lassen",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Landing Page",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR",
              "minPrice": 1200
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Page — Website erstellen lassen"
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
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Website — Website erstellen lassen"
            }
          },
          {
            "@type": "Offer",
            "name": "Premium Custom",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR",
              "minPrice": 6000
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Premium Custom — Website erstellen lassen"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://veyro-labs.com/de/website-erstellen-lassen#breadcrumb",
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
          "name": "Website erstellen lassen",
          "item": "https://veyro-labs.com/de/website-erstellen-lassen"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://veyro-labs.com/de/website-erstellen-lassen#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was kostet es, eine Website erstellen zu lassen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Richtwerte: eine Landing Page ab 1.200 €, eine mehrseitige Website 2.500–4.500 €, eine komplett individuelle Premium-Seite ab 6.000 €. Den festen Preis bekommst du im Angebot, bevor irgendetwas startet — kein Overrun. Als Kleinunternehmer nach §19 ohne Umsatzsteuer."
          }
        },
        {
          "@type": "Question",
          "name": "Wie lange dauert es, bis meine Website fertig ist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eine Landing Page ist meist in 5–7 Werktagen fertig, eine komplette Website in 2–4 Wochen — je nach Umfang. Du siehst den Fortschritt laufend per Link, kein monatelanger Blindflug."
          }
        },
        {
          "@type": "Question",
          "name": "Soll ich meine Website selbst erstellen oder erstellen lassen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ein Baukasten ist günstig und schnell, wenn du nur eine einfache Online-Visitenkarte brauchst. Erstellen lassen lohnt sich, sobald die Seite Kunden gewinnen statt nur existieren soll — dann zählen Ladezeit, Aufbau und Vertrauen, und genau da verliert der Baukasten."
          }
        },
        {
          "@type": "Question",
          "name": "WordPress, Baukasten oder individuell programmiert — was ist besser?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Baukasten und WordPress sind okay für einfache Seiten, erzeugen aber oft trägen Code und schlechtere Ladezeiten. Handgeschriebener Code (Next.js, React) ist schneller, gehört komplett dir und kommt ohne Abo. Was zu dir passt, hängt vom Ziel ab — das klären wir im Erstgespräch."
          }
        },
        {
          "@type": "Question",
          "name": "Wem gehört der Code, wenn ich meine Website erstellen lasse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dir — vollständig, ab dem Tag der Übergabe. Kein Abo, kein Lock-in, kein monatlicher Beitrag an mich. Du kannst jederzeit woanders hosten, und weil der Code sauber ist, kann ihn jeder Entwickler übernehmen."
          }
        },
        {
          "@type": "Question",
          "name": "Arbeitest du mit WordPress oder einem Baukasten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nein. Jede Zeile wird für dein Projekt geschrieben — React, TypeScript, Next.js. Kein WordPress, kein Wix, kein Template. Das macht die Seite schneller, einzigartig und unabhängig von fremden Plattformen."
          }
        },
        {
          "@type": "Question",
          "name": "Was, wenn mir der erste Entwurf nicht gefällt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wir arbeiten in Feedback-Runden mit echten Entwürfen statt PowerPoint. Revisionen sind im Preis. Du zahlst nicht alles vorab und siehst den Fortschritt laufend — kein Blindkauf. Das Erstgespräch und die erste Richtung kosten dich nichts."
          }
        },
        {
          "@type": "Question",
          "name": "Welche laufenden Kosten hat eine Website nach dem Launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Meist nur Hosting und Domain — in der Regel im niedrigen zweistelligen Bereich pro Monat, je nach Setup. Die Verträge laufen auf dich, ich verdiene daran nichts. Kein Pflicht-Wartungsvertrag, kein Abo. Änderungen nach Launch nur, wenn du sie willst."
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
            <a href="#preis" className="hidden sm:block text-sm font-medium text-muted hover:text-white transition-colors">Preise</a>
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
                <li className="text-muted">Website erstellen lassen</li>
              </ol>
            </nav>
            <div className="hero-label label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />Webdesign &amp; Webentwicklung · Deutschland</div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight mb-7 max-w-4xl">Website erstellen lassen — <span className="gradient-text">von einem Menschen, nicht aus dem Baukasten.</span></h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-9">Handgeschriebener Code, ein Ansprechpartner, ab 1.200 €. Kein Junior, der dein Briefing weiterleitet. Kein Template, das tausend andere auch haben. Kein Abo, das dich festhält.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <a href="#kontakt" className="btn-primary magnetic-btn">Kostenloses Erstgespräch</a>
              <a href="#preis" className="btn-ghost magnetic-btn">Preise ansehen</a>
            </div>
            <p className="text-subtle text-sm">Kostenlos · unverbindlich · Antwort in 24 h</p>
          </div>
        </section>
        <section id="definition-intent" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">Was heißt „Website erstellen lassen" — und lohnt sich das 2026?</h2>
            <p id="definition-answer" className="text-muted text-lg leading-relaxed max-w-2xl mb-5 pop-in">Eine Website erstellen lassen heißt: jemand baut deine Seite individuell für dich, statt dass du sie selbst in einem Baukasten zusammensteckst. Für Gründer, Selbstständige, kleine Unternehmen, Coaches und Dienstleister lohnt sich das, sobald die Seite mehr soll als nur da sein — nämlich Kunden gewinnen.</p>
            <p className="text-muted text-lg leading-relaxed max-w-2xl pop-in">Die meisten Seiten von Selbstständigen verlieren Anfragen — nicht weil das Angebot schlecht ist, sondern weil die Seite wie 2018 wirkt: zu langsam, kein Vertrauen, keine klare Botschaft. Das kostet dich Kunden. Täglich. Drei Fragen stehen meist dahinter: <strong className="text-white font-semibold">Was kostet das?</strong> <strong className="text-white font-semibold">Wer baut es?</strong> <strong className="text-white font-semibold">Worauf muss ich achten?</strong> — alle drei beantwortet diese Seite.</p>
          </div>
        </section>
        <section id="leistungen" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Was drinsteckt</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 max-w-3xl split-reveal">Was du bekommst, wenn du deine Website hier erstellen lässt.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Design, das verkauft</h3>
                <p className="text-muted text-base leading-relaxed">Nicht hübsch um des Hübschseins willen — aufgebaut, damit Besucher klicken, scrollen und anfragen. Psychologie zuerst, Pixel danach.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Code, der dir gehört</h3>
                <p className="text-muted text-base leading-relaxed">React, TypeScript, Next.js — keine fremde Plattform. Schnell, wartbar und ab Übergabe komplett deins.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">SEO ab der ersten Zeile</h3>
                <p className="text-muted text-base leading-relaxed">Kein nachträgliches Keyword-Streuen, sondern ein technisches Fundament: saubere Struktur, Core Web Vitals, Schema. Damit Google dich versteht statt überfliegt.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">3D &amp; Animation — wenn es passt</h3>
                <p className="text-muted text-base leading-relaxed">Three.js, GSAP, das, was du gerade siehst. Nicht jede Seite braucht das. Aber wenn, dann richtig.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Strategie statt Bauchgefühl</h3>
                <p className="text-muted text-base leading-relaxed">Bevor ich eine Zeile schreibe: Was soll die Seite für dich erledigen? Mehr Anfragen, mehr Vertrauen, weniger Erklärbedarf? Danach baue ich genau das.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Ein Mensch für alles</h3>
                <p className="text-muted text-base leading-relaxed">Kein Account-Manager, kein Junior, kein Briefing, das durch fünf Hände geht. Du redest direkt mit dem, der baut.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="vergleich" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Die ehrliche Einordnung</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">Baukasten, WordPress, Agentur oder Custom-Code — was solltest du erstellen lassen?</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-10 pop-in">Kurz gesagt: Ein Baukasten reicht, wenn du nur eine einfache Online-Visitenkarte brauchst und das Budget klein ist. Eine Agentur lohnt sich bei großen Team-Projekten. Handgeschriebener Code gewinnt überall dort, wo die Seite schnell, einzigartig und wirklich deine sein soll.</p>
            <div className="overflow-x-auto rounded-2xl border border-border pop-in">
              <table className="w-full text-left text-sm border-collapse min-w-[640px]">
                <caption className="sr-only">Vergleich: Baukasten, WordPress-Agentur und handgeschriebener Custom-Code beim Website erstellen lassen</caption>
                <thead>
                  <tr className="border-b border-border bg-surface/50">
                    <th scope="col" className="p-4 font-display font-bold text-white">Merkmal</th>
                    <th scope="col" className="p-4 font-display font-semibold text-muted">Baukasten (Wix, Jimdo)</th>
                    <th scope="col" className="p-4 font-display font-semibold text-muted">WordPress-Agentur</th>
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
                    <td className="p-4 text-white align-top">Direkt ich</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Typischer Preis</th>
                    <td className="p-4 text-muted align-top">0–300 € + Abo</td>
                    <td className="p-4 text-muted align-top">5.000–20.000 €</td>
                    <td className="p-4 text-white align-top">ab 1.200 €</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Wann sinnvoll?</th>
                    <td className="p-4 text-muted align-top">Einfache Seite, kleines Budget</td>
                    <td className="p-4 text-muted align-top">Großes Team-Projekt</td>
                    <td className="p-4 text-white align-top">Wenn die Seite Kunden gewinnen soll</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-subtle text-sm mt-4 pop-in">Ein Baukasten sieht aus wie tausend andere. Deiner nicht.</p>
          </div>
        </section>
        <section id="ablauf" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">So läuft das</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 split-reveal">In wie vielen Schritten entsteht deine Website?</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12 pop-in">In vier Schritten — eine Landing Page in 5–7 Werktagen, eine komplette Website in 2–4 Wochen. Kein Agentur-Pingpong, kein Account-Manager dazwischen. Du redest mit mir, direkt.</p>
            <ol className="space-y-4 max-w-3xl">
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">01</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Erstgespräch</h3>
                  <p className="text-muted text-base leading-relaxed">30 Minuten, kostenlos. Du erzählst, was du brauchst. Ich sage dir ehrlich, ob und wie ich helfen kann — und wenn ein Baukasten für dich reicht, sage ich auch das.</p>
                </div>
              </li>
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">02</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Entwurf</h3>
                  <p className="text-muted text-base leading-relaxed">In wenigen Tagen siehst du ein echtes Design zum Anfassen. Kein 40-seitiges PDF, sondern etwas Klickbares.</p>
                </div>
              </li>
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">03</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Bau</h3>
                  <p className="text-muted text-base leading-relaxed">Sauberer Code, responsive, schnell. Du bekommst laufend einen Link zum Anschauen, dein Feedback fließt direkt ein. Revisionen sind drin.</p>
                </div>
              </li>
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">04</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Launch &amp; Übergabe</h3>
                  <p className="text-muted text-base leading-relaxed">Kurze Einweisung, dann gehört der Code dir. Kein Abo, kein Lock-in. Brauchst du später etwas, bin ich erreichbar.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section id="preis" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-3 pop-in">Was es kostet</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 split-reveal">Was kostet es, eine Website erstellen zu lassen?</h2>
            <p id="preis-answer" className="text-muted text-lg leading-relaxed max-w-2xl mb-3 pop-in">Eine Website erstellen zu lassen kostet bei mir: eine Landing Page ab 1.200 €, eine mehrseitige Website 2.500–4.500 € und eine komplett individuelle Premium-Seite ab 6.000 €. Das sind Richtwerte zur Orientierung — deinen festen Preis bekommst du im Angebot, bevor etwas startet. Kein Overrun.</p>
            <p className="text-muted text-base leading-relaxed max-w-2xl mb-12 pop-in">Zum Vergleich: Eine Agentur liegt schnell bei 5.000–20.000 € plus Account-Manager. Hier bekommst du denselben handgeschriebenen Code, einen Ansprechpartner — und als Kleinunternehmer nach §19 UStG <strong className="text-white font-semibold">ohne Umsatzsteuer</strong>. Was draufsteht, ist was du zahlst.</p>
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
              <div className="rounded-2xl border p-6 flex flex-col tilt-card pop-in border-border bg-surface/50">
                <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">Landing Page</div>
                <div className="font-display text-2xl font-bold text-white mb-1">ab 1.200 €</div>
                <p className="text-muted text-sm mb-5 leading-relaxed">Eine Seite, die wirkt. Fokussiert, schnell, ohne Kompromisse.</p>
                <div className="space-y-2.5 flex-1 mb-6">
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Dein Angebot sofort verständlich — Besucher kapieren in Sekunden, was du kannst</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Schnelle Ladezeit, technisch sauber für Google</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>SEO-Fundament von Anfang an, nicht nachträglich draufgeklebt</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Kontaktformular inklusive — Anfragen landen direkt bei dir</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#kontakt" className="magnetic-btn inline-flex items-center justify-center px-5 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 border border-border-light text-white hover:border-accent/40">Kostenloses Erstgespräch</a>
                  <span className="text-center text-subtle text-xs">meist in 5–7 Werktagen</span>
                </div>
              </div>
              <div className="rounded-2xl border p-6 flex flex-col tilt-card pop-in border-accent/40 bg-accent/[0.03]">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-accent mb-3 leading-tight">Für Projekte mit mehr als einer Seite</span>
                <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">Website</div>
                <div className="font-display text-2xl font-bold text-white mb-1">2.500 – 4.500 €</div>
                <p className="text-muted text-sm mb-5 leading-relaxed">Volle Web-Präsenz für Businesses, die nicht nach Template aussehen wollen.</p>
                <div className="space-y-2.5 flex-1 mb-6">
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Bis zu 5 Seiten — alles, was Kunden wissen müssen, an einem Ort</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Animationen &amp; 3D, die im Kopf bleiben</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>CMS — Texte selbst pflegen, ohne Programmierkenntnisse</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Technisch sauber für bessere Google-Platzierung</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Übergabe mit Einweisung — du weißt genau, was du hast</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#kontakt" className="magnetic-btn inline-flex items-center justify-center px-5 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 bg-accent text-bg hover:shadow-glow">Kostenloses Erstgespräch</a>
                </div>
              </div>
              <div className="rounded-2xl border p-6 flex flex-col tilt-card pop-in border-border bg-surface/50">
                <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">Premium Custom</div>
                <div className="font-display text-2xl font-bold text-white mb-1">ab 6.000 €</div>
                <p className="text-muted text-sm mb-5 leading-relaxed">Marke + Web + 3D + Strategie. Alles handgeschrieben, kein Limit.</p>
                <div className="space-y-2.5 flex-1 mb-6">
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Markenidentität von Grund auf — Logo, Farben, Typografie, Stimme</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Custom 3D &amp; Animation — kein Asset-Store, kein Template</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Ein Ansprechpartner für alles — keine Weitergabe</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Auch nach Launch erreichbar — neue Seiten, Änderungen</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Fixpreis nach Briefing — kein Risiko, kein Overrun</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#kontakt" className="magnetic-btn inline-flex items-center justify-center px-5 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 border border-border-light text-white hover:border-accent/40">Kostenloses Erstgespräch</a>
                  <span className="text-center text-subtle text-xs">15 min · kostenlos</span>
                </div>
              </div>
            </div>
            <p className="text-subtle text-xs mt-6 pop-in">Alle Preise sind Endpreise. Als Kleinunternehmer gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.</p>
          </div>
        </section>
        <section id="eigentum" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Dir gehört alles</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 split-reveal">Wem gehört die Website nach der Erstellung?</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-10 pop-in">Dir — vollständig und uneingeschränkt, ab dem Tag der Übergabe. Kein Abo, kein Lock-in, du kannst jederzeit woanders hosten. Du besitzt deinen Code. Das ist bei Baukasten- und Abo-Anbietern strukturell unmöglich — hier ist es der Normalfall.</p>
            <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
              <div className="flex items-center gap-3 card p-4 pop-in">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                  <path d="M2.5 7l3 3 6-6" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-muted text-sm">Festes Angebot, bevor irgendetwas startet</span>
              </div>
              <div className="flex items-center gap-3 card p-4 pop-in">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                  <path d="M2.5 7l3 3 6-6" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-muted text-sm">Faire Anzahlung — nicht alles vorab</span>
              </div>
              <div className="flex items-center gap-3 card p-4 pop-in">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                  <path d="M2.5 7l3 3 6-6" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-muted text-sm">Der Code gehört dir, ab Tag der Übergabe</span>
              </div>
              <div className="flex items-center gap-3 card p-4 pop-in">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                  <path d="M2.5 7l3 3 6-6" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-muted text-sm">Zugang zu Domain &amp; Hosting bleibt bei dir</span>
              </div>
              <div className="flex items-center gap-3 card p-4 pop-in">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                  <path d="M2.5 7l3 3 6-6" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-muted text-sm">Kein Zwangs-Wartungsvertrag, kein Abo</span>
              </div>
              <div className="flex items-center gap-3 card p-4 pop-in">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                  <path d="M2.5 7l3 3 6-6" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-muted text-sm">Antwort in der Regel innerhalb 24 h</span>
              </div>
            </div>
          </div>
        </section>
        <section id="beweis" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Kein Portfolio nötig</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">Kein Schaufenster voller Kundenlogos. Du schaust gerade drauf.</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-5 pop-in">Ich bin Arcan, und ich mache Design, Code und Strategie in einer Person. Jede Animation, jeder 3D-Frame, jede Zeile Code auf dieser Seite: von mir, für diese Seite. Kein Template, kein Builder, kein KI-Textbaustein.</p>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12 pop-in">Und ich behaupte die Geschwindigkeit nicht — du kannst sie nachmessen. Gib die Adresse oben einfach bei <a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fveyro-labs.com%2Fde%2Fwebsite-erstellen-lassen" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google PageSpeed Insights</a> ein. Verifizierbar schlägt behauptet.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={0} data-suffix="">0</div>
                <div className="text-white text-sm font-semibold">Templates</div>
                <div className="text-muted text-xs mt-1 leading-snug">Jede Zeile für dieses Projekt geschrieben.</div>
              </div>
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={100} data-suffix=" %">100 %</div>
                <div className="text-white text-sm font-semibold">Dein Code</div>
                <div className="text-muted text-xs mt-1 leading-snug">Nach Übergabe gehört jede Zeile dir.</div>
              </div>
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={60} data-suffix=" fps">60 fps</div>
                <div className="text-white text-sm font-semibold">Animationen</div>
                <div className="text-muted text-xs mt-1 leading-snug">Live, auf deinem Gerät — gerade jetzt.</div>
              </div>
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={24} data-suffix=" h">24 h</div>
                <div className="text-white text-sm font-semibold">Antwort</div>
                <div className="text-muted text-xs mt-1 leading-snug">Meist schneller. Kein Bot, kein Ticket.</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pop-in">
              <a href="https://onyx-showcase.vercel.app" target="_blank" rel="noopener noreferrer" className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-light text-white font-display font-bold text-sm hover:border-accent/40 transition-all duration-300">ONYX-Showcase ansehen<span className="text-subtle font-normal">(Demo, kein Kundenprojekt)</span></a>
              <a href="/de" className="text-muted text-sm hover:text-white transition-colors">Mehr über Veyro Labs und meine Arbeitsweise →</a>
            </div>
            <p className="text-subtle text-xs mt-8">Zuletzt aktualisiert: Juni 2026</p>
          </div>
        </section>
        <section id="faq" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Häufige Fragen</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 split-reveal">Häufige Fragen zum Website-erstellen-lassen.</h2>
            <div className="space-y-3 max-w-3xl">
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Was kostet es, eine Website erstellen zu lassen?</h3>
                <p className="text-muted text-sm leading-relaxed">Richtwerte: eine Landing Page ab 1.200 €, eine mehrseitige Website 2.500–4.500 €, eine komplett individuelle Premium-Seite ab 6.000 €. Den festen Preis bekommst du im Angebot, bevor irgendetwas startet — kein Overrun. Als Kleinunternehmer nach §19 ohne Umsatzsteuer.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Wie lange dauert es, bis meine Website fertig ist?</h3>
                <p className="text-muted text-sm leading-relaxed">Eine Landing Page ist meist in 5–7 Werktagen fertig, eine komplette Website in 2–4 Wochen — je nach Umfang. Du siehst den Fortschritt laufend per Link, kein monatelanger Blindflug.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Soll ich meine Website selbst erstellen oder erstellen lassen?</h3>
                <p className="text-muted text-sm leading-relaxed">Ein Baukasten ist günstig und schnell, wenn du nur eine einfache Online-Visitenkarte brauchst. Erstellen lassen lohnt sich, sobald die Seite Kunden gewinnen statt nur existieren soll — dann zählen Ladezeit, Aufbau und Vertrauen, und genau da verliert der Baukasten.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">WordPress, Baukasten oder individuell programmiert — was ist besser?</h3>
                <p className="text-muted text-sm leading-relaxed">Baukasten und WordPress sind okay für einfache Seiten, erzeugen aber oft trägen Code und schlechtere Ladezeiten. Handgeschriebener Code (Next.js, React) ist schneller, gehört komplett dir und kommt ohne Abo. Was zu dir passt, hängt vom Ziel ab — das klären wir im Erstgespräch.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Wem gehört der Code, wenn ich meine Website erstellen lasse?</h3>
                <p className="text-muted text-sm leading-relaxed">Dir — vollständig, ab dem Tag der Übergabe. Kein Abo, kein Lock-in, kein monatlicher Beitrag an mich. Du kannst jederzeit woanders hosten, und weil der Code sauber ist, kann ihn jeder Entwickler übernehmen.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Arbeitest du mit WordPress oder einem Baukasten?</h3>
                <p className="text-muted text-sm leading-relaxed">Nein. Jede Zeile wird für dein Projekt geschrieben — React, TypeScript, Next.js. Kein WordPress, kein Wix, kein Template. Das macht die Seite schneller, einzigartig und unabhängig von fremden Plattformen.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Was, wenn mir der erste Entwurf nicht gefällt?</h3>
                <p className="text-muted text-sm leading-relaxed">Wir arbeiten in Feedback-Runden mit echten Entwürfen statt PowerPoint. Revisionen sind im Preis. Du zahlst nicht alles vorab und siehst den Fortschritt laufend — kein Blindkauf. Das Erstgespräch und die erste Richtung kosten dich nichts.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Welche laufenden Kosten hat eine Website nach dem Launch?</h3>
                <p className="text-muted text-sm leading-relaxed">Meist nur Hosting und Domain — in der Regel im niedrigen zweistelligen Bereich pro Monat, je nach Setup. Die Verträge laufen auf dich, ich verdiene daran nichts. Kein Pflicht-Wartungsvertrag, kein Abo. Änderungen nach Launch nur, wenn du sie willst.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center pop-in">
              <p className="text-muted text-base leading-relaxed">Ich nehme bewusst nur wenige Projekte gleichzeitig an — damit deins die Aufmerksamkeit bekommt, für die du zahlst. Und wenn ein Baukasten für dich reicht, sage ich dir das im Erstgespräch ehrlich, statt dir etwas zu verkaufen.</p>
            </div>
          </div>
        </section>
        <ContactSlide />
      </main>
      <Footer />
    </div>
  );
}
