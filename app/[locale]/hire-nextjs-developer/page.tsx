import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import ContactSlide from '@/components/ContactSlide';
import Footer from '@/components/Footer';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export const metadata: Metadata = {
  metadataBase: new URL('https://veyro-labs.com'),
  title: "Next.js Developer for Hire | Custom-Coded, You Own It",
  description: "Hire one Next.js & Three.js specialist who builds your site himself. Custom code, fixed prices from €1,200, you own the code, no subscription. Free first call.",
  keywords: ["next.js developer for hire", "hire a web developer", "freelance web developer", "custom website development", "three.js developer", "react developer for hire", "custom coded website"],
  robots: 'index, follow',
  alternates: {
    canonical: "https://veyro-labs.com/en/hire-nextjs-developer",
  },
  openGraph: {
    title: "Next.js Developer for Hire | Custom-Coded, You Own It",
    description: "Hire one Next.js & Three.js specialist who builds your site himself. Custom code, fixed prices from €1,200, you own the code, no subscription. Free first call.",
    url: "https://veyro-labs.com/en/hire-nextjs-developer",
    siteName: 'Veyro Labs',
    locale: "en_US",
    type: 'website',
    images: [
      {
        url: '/en/hire-nextjs-developer/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Hire a Next.js & Three.js developer — custom-coded, you own it, from €1,200",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Next.js Developer for Hire | Custom-Coded, You Own It",
    description: "Hire one Next.js & Three.js specialist who builds your site himself. Custom code, fixed prices from €1,200, you own the code, no subscription. Free first call.",
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://veyro-labs.com/en/hire-nextjs-developer#webpage",
      "url": "https://veyro-labs.com/en/hire-nextjs-developer",
      "name": "Hire a Next.js & Three.js Developer",
      "description": "Hire one Next.js & Three.js specialist who builds your site himself. Custom code, fixed prices from €1,200, you own the code, no subscription. Free first call.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://veyro-labs.com/#website"
      },
      "about": {
        "@id": "https://veyro-labs.com/en/hire-nextjs-developer#service"
      },
      "mainEntity": {
        "@id": "https://veyro-labs.com/en/hire-nextjs-developer#service"
      },
      "breadcrumb": {
        "@id": "https://veyro-labs.com/en/hire-nextjs-developer#breadcrumb"
      },
      "author": {
        "@id": "https://veyro-labs.com/#arcan"
      },
      "datePublished": "2026-06-14",
      "dateModified": "2026-06-14",
      "primaryImageOfPage": "https://veyro-labs.com/en/hire-nextjs-developer/opengraph-image",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "#what-is-answer",
          "#pricing-answer"
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://veyro-labs.com/en/hire-nextjs-developer#service",
      "name": "Custom web development — Next.js & Three.js",
      "serviceType": "Next.js & Three.js custom web development",
      "description": "A single specialist who designs and hand-codes your website in Next.js, React, TypeScript and Three.js. Fixed price up front, you own the code, no subscription.",
      "url": "https://veyro-labs.com/en/hire-nextjs-developer",
      "provider": {
        "@id": "https://veyro-labs.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Landing page",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR",
              "minPrice": 1200
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Landing page — custom web development"
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
              "name": "Website — custom web development"
            }
          },
          {
            "@type": "Offer",
            "name": "Premium build",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR",
              "minPrice": 6000
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Premium build — custom web development"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://veyro-labs.com/en/hire-nextjs-developer#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://veyro-labs.com/en"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hire a Next.js Developer",
          "item": "https://veyro-labs.com/en/hire-nextjs-developer"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://veyro-labs.com/en/hire-nextjs-developer#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to hire a freelance web developer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Here it’s fixed, not “it depends”. A landing page starts at €1,200, a full website runs €2,500–4,500, and a premium build starts at €6,000. You get one price agreed before any work starts, with no hourly surprises, no retainer and no platform markup."
          }
        },
        {
          "@type": "Question",
          "name": "Should I hire a freelancer or an agency for a small business website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most small businesses, one specialist is the better fit: you talk directly to the person building it, with no project-manager layer and no agency overhead inflating the bill. Pick an agency only when you need a large team across many disciplines at once. For a focused marketing site, a solo specialist is faster and cheaper."
          }
        },
        {
          "@type": "Question",
          "name": "Do I own my website code after a developer builds it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and it’s written into the contract here. The scary default answer online is that the developer keeps ownership unless stated otherwise. With me it’s stated otherwise on purpose: you receive the full source code, your domain and hosting stay in your name, and there’s no lock-in."
          }
        },
        {
          "@type": "Question",
          "name": "Is a custom-coded website better than WordPress or Webflow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For speed, SEO and ownership, usually yes. Custom code ships no template bloat or plugin stack, so it loads faster and you avoid platform lock-in. You can verify the difference by running any page on this site through Google PageSpeed. A builder still wins if you need a large blog you edit yourself daily."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a custom website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical marketing site takes roughly 2–6 weeks. I won’t promise “24 hours” like a marketplace. The biggest variable is you: how fast you deliver content, assets and feedback. At the start I tell you exactly what I need from you so the timeline stays realistic and on track."
          }
        },
        {
          "@type": "Question",
          "name": "What can you build with Three.js?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three.js renders real 3D and interactive scenes in the browser: product viewers you can rotate, immersive 3D landing pages, and animated showcases that template builders can’t produce. You can see a working example in the ONYX showcase, which is an honest demo built to show the 3D work, not a paid client project."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work with international clients and how is payment handled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. I work in English with clients worldwide. Prices are in EUR and cross-border payment is handled cleanly via Wise. A deposit to start the project is standard practice, with the balance due on delivery. As a small business under German rules, no VAT is added to the quoted price."
          }
        },
        {
          "@type": "Question",
          "name": "Why hire one specialist instead of a marketplace like Toptal or Fiverr?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On a marketplace you get “a developer” from a pool and still have to vet and manage them yourself. Here you reach the one person who designs, codes and ships your site, with direct contact and a reply within 24 hours. No junior relays your brief, no platform fees, and the work is accountable to one name."
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
  if (locale !== 'en') notFound();
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <header className="fixed top-0 left-0 right-0 z-[100] bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-[72px]">
          <Link href="/en" className="font-display text-xl font-bold tracking-tight text-white">Veyro Labs</Link>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hidden sm:block text-sm font-medium text-muted hover:text-white transition-colors">Pricing</a>
            <a href="#kontakt" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-display font-bold rounded-xl bg-accent text-bg transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5">Book a free call</a>
          </div>
        </div>
      </header>
      <main className="relative z-10">
        <section className="slide relative" data-slide="hero">
          <div className="container relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-subtle">
                <li>
                  <Link href="/en" className="hover:text-muted transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-muted">Hire a Next.js Developer</li>
              </ol>
            </nav>
            <div className="hero-label label mb-6"><span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />Next.js · Three.js · custom code</div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight mb-7 max-w-4xl">A Next.js &amp; Three.js developer who actually <span className="gradient-text">builds it.</span></h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-9">You reach the developer, not a sales layer. One specialist — Arcan, solo, based in Hamburg — who designs, codes and ships your site himself. Not a marketplace gig, not a junior relaying your brief, no monthly fee. Fixed price from €1,200, and you own the code.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <a href="#kontakt" className="btn-primary magnetic-btn">Book a free first call</a>
              <a href="https://onyx-showcase.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-ghost magnetic-btn">See the showcase</a>
            </div>
            <p className="text-subtle text-sm">Free · no obligation · reply within 24 h</p>
          </div>
        </section>
        <section id="what-is" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">What does a Next.js developer actually do for you?</h2>
            <p id="what-is-answer" className="text-muted text-lg leading-relaxed max-w-2xl mb-5 pop-in">A Next.js developer builds your site as real, hand-written code — pages, performance, SEO foundations and interactivity — instead of assembling it from a template or a page builder. The same person designs the build, writes the code and ships it, so nothing gets lost in translation.</p>
            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mb-5">
              <div className="card p-4 pop-in">
                <div className="font-display text-accent font-bold text-sm mb-1">Next.js</div>
                <div className="text-muted text-sm leading-snug">The React framework for fast, SEO-friendly sites.</div>
              </div>
              <div className="card p-4 pop-in">
                <div className="font-display text-accent font-bold text-sm mb-1">TypeScript</div>
                <div className="text-muted text-sm leading-snug">Fewer bugs, maintainable code you can build on.</div>
              </div>
              <div className="card p-4 pop-in">
                <div className="font-display text-accent font-bold text-sm mb-1">Three.js</div>
                <div className="text-muted text-sm leading-snug">Real 3D and interactive scenes in the browser.</div>
              </div>
            </div>
            <p className="text-muted text-lg leading-relaxed max-w-2xl pop-in">This is for businesses that want a marketing site or launch page that loads fast, ranks, and looks like nobody else’s — not another template that a thousand other sites also use.</p>
          </div>
        </section>
        <section id="why-custom" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">Custom code vs builders</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">Why custom code instead of WordPress or Webflow?</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-5 pop-in">Custom code means no template bloat, no plugin stack, no platform lock-in — your site is built only from what it actually needs. Less code shipped to the browser means a faster load. Don’t take a claimed Lighthouse number on faith: run any URL on this site through Google PageSpeed yourself.</p>
            <p className="text-muted text-lg leading-relaxed max-w-2xl pop-in">Clean markup gives full control over structure, schema and Core Web Vitals instead of fighting a builder’s output — and the code is yours to keep, move and extend. Honest counter-point: if you need a 50-page blog you edit daily yourself, a CMS or builder may be the right call. Custom code shines for marketing sites, launch pages and interactive showcases.</p>
          </div>
        </section>
        <section id="comparison" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">The honest comparison</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">Builder vs agency vs marketplace vs one specialist</h2>
            <div className="overflow-x-auto rounded-2xl border border-border pop-in">
              <table className="w-full text-left text-sm border-collapse min-w-[760px]">
                <caption className="sr-only">Website builder vs big agency vs marketplace vs one custom-code specialist</caption>
                <thead>
                  <tr className="border-b border-border bg-surface/50">
                    <th scope="col" className="p-4 font-display font-bold text-white"> </th>
                    <th scope="col" className="p-4 font-display font-semibold text-muted">Website builder</th>
                    <th scope="col" className="p-4 font-display font-semibold text-muted">Big agency</th>
                    <th scope="col" className="p-4 font-display font-semibold text-muted">Marketplace</th>
                    <th scope="col" className="p-4 font-display font-semibold text-accent">Veyro (one specialist)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Who actually builds it</th>
                    <td className="p-4 text-muted align-top">You / a template</td>
                    <td className="p-4 text-muted align-top">A team behind a PM</td>
                    <td className="p-4 text-muted align-top">“a developer” from a pool</td>
                    <td className="p-4 text-white align-top">The person you talk to</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Code &amp; tech</th>
                    <td className="p-4 text-muted align-top">Template + plugins</td>
                    <td className="p-4 text-muted align-top">Custom, but layered</td>
                    <td className="p-4 text-muted align-top">Varies by who you get</td>
                    <td className="p-4 text-white align-top">Hand-written Next.js / Three.js</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Price clarity</th>
                    <td className="p-4 text-muted align-top">Low, but DIY time</td>
                    <td className="p-4 text-muted align-top">€150–300/h, slow scope</td>
                    <td className="p-4 text-muted align-top">€15–50/h, you vet &amp; manage</td>
                    <td className="p-4 text-white align-top">Fixed from €1,200, agreed up front</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Do you own the code?</th>
                    <td className="p-4 text-muted align-top">Platform lock-in</td>
                    <td className="p-4 text-muted align-top">Usually — check contract</td>
                    <td className="p-4 text-muted align-top">Depends on the gig</td>
                    <td className="p-4 text-white align-top">Yes — written in the contract</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Monthly fee</th>
                    <td className="p-4 text-muted align-top">Yes (platform)</td>
                    <td className="p-4 text-muted align-top">Often a retainer</td>
                    <td className="p-4 text-muted align-top">Platform fees</td>
                    <td className="p-4 text-white align-top">None</td>
                  </tr>
                  <tr className="border-b border-border/50 last:border-0">
                    <th scope="row" className="p-4 font-medium text-white align-top">Direct contact</th>
                    <td className="p-4 text-muted align-top">n/a</td>
                    <td className="p-4 text-muted align-top">Through a PM</td>
                    <td className="p-4 text-muted align-top">Through a platform</td>
                    <td className="p-4 text-white align-top">Straight to the developer</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-subtle text-sm mt-4 pop-in">Every column is the right choice for someone. This page is for the buyer who wants one specialist and direct contact.</p>
          </div>
        </section>
        <section id="what-you-get" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">What you get</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 max-w-3xl split-reveal">What’s in the build.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Custom design + build</h3>
                <p className="text-muted text-base leading-relaxed">Designed and coded in Next.js, React and TypeScript — no template, no page builder. Built only from what your site actually needs.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Interactive &amp; 3D, where it earns it</h3>
                <p className="text-muted text-base leading-relaxed">Three.js product viewers, immersive scenes, animated showcases. Honestly: only when it serves the goal, not for show.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Performance &amp; SEO foundations</h3>
                <p className="text-muted text-base leading-relaxed">Fast loads, clean markup, schema, Core Web Vitals — verifiable. Don’t take a number on faith; run this site through PageSpeed.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">The code is yours</h3>
                <p className="text-muted text-base leading-relaxed">Full source handed over on delivery. No lock-in, no subscription. Host it anywhere, hire anyone to extend it later.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">A direct line</h3>
                <p className="text-muted text-base leading-relaxed">You talk to the person building it — not a sales layer, not a junior. Reply within 24 hours.</p>
              </div>
              <div className="card p-6 group tilt-card pop-in">
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">Responsive &amp; accessible</h3>
                <p className="text-muted text-base leading-relaxed">Works on every device, built to last, accessible by default. Standards instead of plugins.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">How it runs</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 split-reveal">How the project runs, step by step.</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12 pop-in">Four steps. A typical marketing site is roughly 2–6 weeks — the biggest variable is how fast you deliver content and feedback, and I’ll tell you exactly what I need from you. No false “24-hour” promises.</p>
            <ol className="space-y-4 max-w-3xl">
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">01</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Free first call</h3>
                  <p className="text-muted text-base leading-relaxed">We scope what you actually need — no obligation. If a builder is the smarter call for you, I’ll tell you that instead of selling you something.</p>
                </div>
              </li>
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">02</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Fixed quote</h3>
                  <p className="text-muted text-base leading-relaxed">One price, agreed before any work starts. A deposit to begin is standard practice. No hourly surprises.</p>
                </div>
              </li>
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">03</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Design + build</h3>
                  <p className="text-muted text-base leading-relaxed">You see progress on a live link and give feedback directly to me. Revisions are part of it.</p>
                </div>
              </li>
              <li className="card p-6 flex gap-6 md:gap-10 tilt-card pop-in">
                <span className="font-display text-4xl font-bold text-accent/30 leading-none flex-shrink-0">04</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">Review &amp; launch</h3>
                  <p className="text-muted text-base leading-relaxed">Final revisions, then go live — and you receive the full source code. It’s yours.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section id="pricing" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-3 pop-in">What it costs</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 split-reveal">What does it cost?</h2>
            <p id="pricing-answer" className="text-muted text-lg leading-relaxed max-w-2xl mb-3 pop-in">Real prices, not “it depends”. A landing page from €1,200, a full website €2,500–4,500, and a premium build from €6,000 — three fixed bands, agreed up front before any work starts. For a small business, a focused landing page from €1,200 is usually the right entry point.</p>
            <p className="text-muted text-base leading-relaxed max-w-2xl mb-12 pop-in">International clients welcome: prices in EUR, cross-border billing handled cleanly via Wise, a deposit to start is standard. As a small business under German §19 rules, <strong className="text-white font-semibold">no VAT is added</strong>. All prices shown are final — no hidden retainer, no platform markup.</p>
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
              <div className="rounded-2xl border p-6 flex flex-col tilt-card pop-in border-border bg-surface/50">
                <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">Landing page</div>
                <div className="font-display text-2xl font-bold text-white mb-1">from €1,200</div>
                <p className="text-muted text-sm mb-5 leading-relaxed">One page that works. Focused, fast, no compromises.</p>
                <div className="space-y-2.5 flex-1 mb-6">
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Your offer clear in seconds — visitors get it immediately</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Fast load, clean markup Google rewards</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>SEO foundation from line one, not bolted on later</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Contact form included — enquiries land straight with you</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#kontakt" className="magnetic-btn inline-flex items-center justify-center px-5 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 border border-border-light text-white hover:border-accent/40">Get your fixed quote</a>
                  <span className="text-center text-subtle text-xs">usually 5–7 working days</span>
                </div>
              </div>
              <div className="rounded-2xl border p-6 flex flex-col tilt-card pop-in border-accent/40 bg-accent/[0.03]">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-accent mb-3 leading-tight">Best fit for most multi-page projects</span>
                <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">Website</div>
                <div className="font-display text-2xl font-bold text-white mb-1">€2,500–4,500</div>
                <p className="text-muted text-sm mb-5 leading-relaxed">A full web presence for businesses that refuse to look like a template.</p>
                <div className="space-y-2.5 flex-1 mb-6">
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Up to 5 pages — everything your customers need in one place</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Animation &amp; 3D that stick in the mind</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>CMS — edit your own copy, no coding needed</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Technically clean for better ranking</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Handover with a walkthrough — you know exactly what you have</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#kontakt" className="magnetic-btn inline-flex items-center justify-center px-5 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 bg-accent text-bg hover:shadow-glow">Get your fixed quote</a>
                </div>
              </div>
              <div className="rounded-2xl border p-6 flex flex-col tilt-card pop-in border-border bg-surface/50">
                <div className="font-display text-sm font-bold text-muted uppercase tracking-wider mb-1">Premium build</div>
                <div className="font-display text-2xl font-bold text-white mb-1">from €6,000</div>
                <p className="text-muted text-sm mb-5 leading-relaxed">Brand + web + 3D + strategy. All hand-written, no limit.</p>
                <div className="space-y-2.5 flex-1 mb-6">
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Brand identity from the ground up — logo, colours, type, voice</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Custom 3D &amp; animation — no asset store, no template</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>One point of contact for everything</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Reachable after launch — new pages, changes, requests</span>
                  </div>
                  <div className="text-sm text-muted flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    <span>Fixed price after briefing — no risk, no overrun</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#kontakt" className="magnetic-btn inline-flex items-center justify-center px-5 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 border border-border-light text-white hover:border-accent/40">Get your fixed quote</a>
                  <span className="text-center text-subtle text-xs">15 min · free</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ownership" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">You own it</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 split-reveal">Do you own your website code?</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-5 pop-in">Yes — and it’s written into the contract. The scary default answer online is “the developer owns it unless your contract says otherwise.” Here the contract says otherwise, on purpose.</p>
            <p className="text-muted text-lg leading-relaxed max-w-2xl pop-in">You receive the full source code on delivery. Your domain and hosting stay in your name. No subscription, no lock-in — you can host it anywhere and hire anyone to extend it later. Code ownership is your insurance against being trapped with one provider.</p>
          </div>
        </section>
        <section id="proof" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">The proof</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl split-reveal">The proof is the site you’re on.</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-5 pop-in">I’ll be honest: this is a young studio. No borrowed client logos, no invented testimonials. The proof is concrete and self-checkable — open this page in <a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fveyro-labs.com%2Fen%2Fhire-nextjs-developer" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google PageSpeed</a> and judge the build yourself. That’s a better signal than a number I type here.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={0} data-suffix="">0</div>
                <div className="text-white text-sm font-semibold">Templates</div>
                <div className="text-muted text-xs mt-1 leading-snug">Every line written for your project.</div>
              </div>
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={100} data-suffix=" %">100 %</div>
                <div className="text-white text-sm font-semibold">Your code</div>
                <div className="text-muted text-xs mt-1 leading-snug">Yours in full after handover.</div>
              </div>
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={1} data-suffix="">1</div>
                <div className="text-white text-sm font-semibold">Specialist</div>
                <div className="text-muted text-xs mt-1 leading-snug">You talk to the person who builds it.</div>
              </div>
              <div className="card p-5 tilt-card pop-in">
                <div className="font-display text-3xl font-bold text-accent mb-1" data-count={24} data-suffix=" h">24 h</div>
                <div className="text-white text-sm font-semibold">Reply</div>
                <div className="text-muted text-xs mt-1 leading-snug">Usually faster. No bot, no ticket.</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pop-in">
              <a href="https://onyx-showcase.vercel.app" target="_blank" rel="noopener noreferrer" className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-light text-white font-display font-bold text-sm hover:border-accent/40 transition-all duration-300">Open the ONYX showcase<span className="text-subtle font-normal">(demo, not a client project)</span></a>
              <Link href="/de/website-erstellen-lassen" className="text-muted text-sm hover:text-white transition-colors">Auf Deutsch: Website erstellen lassen →</Link>
            </div>
            <p className="text-subtle text-xs mt-8">Last updated: June 2026</p>
          </div>
        </section>
        <section id="faq" className="py-20 md:py-28 border-t border-border">
          <div className="container">
            <span className="label mb-4 pop-in">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 split-reveal">Questions before you hire.</h2>
            <div className="space-y-3 max-w-3xl">
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">How much does it cost to hire a freelance web developer?</h3>
                <p className="text-muted text-sm leading-relaxed">Here it’s fixed, not “it depends”. A landing page starts at €1,200, a full website runs €2,500–4,500, and a premium build starts at €6,000. You get one price agreed before any work starts, with no hourly surprises, no retainer and no platform markup.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Should I hire a freelancer or an agency for a small business website?</h3>
                <p className="text-muted text-sm leading-relaxed">For most small businesses, one specialist is the better fit: you talk directly to the person building it, with no project-manager layer and no agency overhead inflating the bill. Pick an agency only when you need a large team across many disciplines at once. For a focused marketing site, a solo specialist is faster and cheaper.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Do I own my website code after a developer builds it?</h3>
                <p className="text-muted text-sm leading-relaxed">Yes, and it’s written into the contract here. The scary default answer online is that the developer keeps ownership unless stated otherwise. With me it’s stated otherwise on purpose: you receive the full source code, your domain and hosting stay in your name, and there’s no lock-in.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Is a custom-coded website better than WordPress or Webflow?</h3>
                <p className="text-muted text-sm leading-relaxed">For speed, SEO and ownership, usually yes. Custom code ships no template bloat or plugin stack, so it loads faster and you avoid platform lock-in. You can verify the difference by running any page on this site through Google PageSpeed. A builder still wins if you need a large blog you edit yourself daily.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">How long does it take to build a custom website?</h3>
                <p className="text-muted text-sm leading-relaxed">A typical marketing site takes roughly 2–6 weeks. I won’t promise “24 hours” like a marketplace. The biggest variable is you: how fast you deliver content, assets and feedback. At the start I tell you exactly what I need from you so the timeline stays realistic and on track.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">What can you build with Three.js?</h3>
                <p className="text-muted text-sm leading-relaxed">Three.js renders real 3D and interactive scenes in the browser: product viewers you can rotate, immersive 3D landing pages, and animated showcases that template builders can’t produce. You can see a working example in the ONYX showcase, which is an honest demo built to show the 3D work, not a paid client project.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Can you work with international clients and how is payment handled?</h3>
                <p className="text-muted text-sm leading-relaxed">Yes. I work in English with clients worldwide. Prices are in EUR and cross-border payment is handled cleanly via Wise. A deposit to start the project is standard practice, with the balance due on delivery. As a small business under German rules, no VAT is added to the quoted price.</p>
              </div>
              <div className="card p-6 pop-in">
                <h3 className="font-display text-base font-bold text-white mb-2">Why hire one specialist instead of a marketplace like Toptal or Fiverr?</h3>
                <p className="text-muted text-sm leading-relaxed">On a marketplace you get “a developer” from a pool and still have to vet and manage them yourself. Here you reach the one person who designs, codes and ships your site, with direct contact and a reply within 24 hours. No junior relays your brief, no platform fees, and the work is accountable to one name.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center pop-in">
              <p className="text-muted text-base leading-relaxed">A free first call, an honest opinion, a fixed quote — no pressure, no sales script. You talk to the developer directly, with a reply within 24 hours. If I’m not the right fit, I’ll tell you that too.</p>
            </div>
          </div>
        </section>
        <ContactSlide />
      </main>
      <Footer />
    </div>
  );
}
