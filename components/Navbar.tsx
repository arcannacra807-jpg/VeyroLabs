'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { stageStore } from '@/lib/stage-store';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState('');
  const progressRef = useRef<HTMLDivElement>(null);
  const scrolledRef = useRef(false);

  const NAV_LINKS = [
    { label: t('services'), href: '#leistungen', slide: 'services' },
    { label: t('process'), href: '#ablauf', slide: 'process' },
    { label: t('pricing'), href: '#preis', slide: 'pricing' },
    { label: t('contact'), href: '#kontakt', slide: 'contact' },
  ];

  useEffect(() => {
    const applyProgress = (y: number, progress: number) => {
      const nextScrolled = y > 40;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
      if (progressRef.current) {
        // GPU-only scaleX transform — zero layout/reflow cost
        progressRef.current.style.transform = `scaleX(${Math.max(0, Math.min(1, progress))})`;
      }
    };

    // Single-RAF path when Lenis/GSAP master ticker is active (Tier 2 & 3)
    const onFrame = () => {
      applyProgress(stageStore.scrollY, stageStore.scrollProgress);
    };
    stageStore.frameSubscribers.add(onFrame);

    // Passive fallback for Tier 1 (where WebGL + Lenis ticker are intentionally skipped)
    let docSpan = 1;
    const measure = () => {
      docSpan = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };
    measure();

    const onNativeScroll = () => {
      if (stageStore.lenis) return;
      const y = window.scrollY;
      applyProgress(y, y / docSpan);
    };

    window.addEventListener('resize', measure, { passive: true });
    window.addEventListener('scroll', onNativeScroll, { passive: true });

    return () => {
      stageStore.frameSubscribers.delete(onFrame);
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', onNativeScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-slide]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSlide(e.target.getAttribute('data-slide') ?? '');
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    stageStore.setScrollLocked(mobileOpen);
    return () => {
      if (mobileOpen) stageStore.setScrollLocked(false);
    };
  }, [mobileOpen]);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent/60 origin-left pointer-events-none will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-[72px]">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            stageStore.scrollTo(0, 0);
          }}
          className="relative z-[110]"
        >
          <span className="font-display text-xl font-bold tracking-tight text-white">Veyro Labs</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSlide === link.slide;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent rounded-full" aria-hidden="true" />
                )}
              </a>
            );
          })}
          <LanguageSwitcher />
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-display font-bold rounded-xl bg-accent text-bg transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
          >
            {t('cta')}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1.5 6h9m0 0L7 2.5M10.5 6 7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-[110] p-2 -mr-2 text-white"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <div className="w-5 flex flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu — conditionally mounted so closed drawer never exposes focusable descendants */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[105] bg-bg md:hidden flex flex-col items-center justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-display text-2xl font-bold transition-colors duration-300 ${
                activeSlide === link.slide ? 'text-accent' : 'text-white hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="flex flex-col items-center gap-3 mt-4">
            <a
              href="#kontakt"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
            >
              {t('cta')}
            </a>
            <span className="text-subtle text-xs">{t('tagline')}</span>
            <div className="mt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
