'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

const LOCALE_LABELS: Record<string, string> = {
  de: 'DE',
  en: 'EN',
};

const LOCALE_NAMES: Record<string, string> = {
  de: 'Deutsch',
  en: 'English',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const switchLocale = (next: string) => {
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/') || '/');
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Switch language"
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-display font-bold text-muted hover:text-white border border-border hover:border-border-light transition-all duration-200"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-accent flex-shrink-0" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {LOCALE_LABELS[locale] ?? 'DE'}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Available languages"
          className="absolute right-0 top-full mt-2 w-40 bg-surface border border-border rounded-xl overflow-hidden shadow-card z-[200]"
        >
          {routing.locales.map((loc) => (
            <button
              key={loc}
              type="button"
              role="option"
              aria-selected={loc === locale}
              onClick={() => switchLocale(loc)}
              className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors duration-150 flex items-center justify-between ${
                loc === locale
                  ? 'text-accent bg-accent/[0.06]'
                  : 'text-muted hover:text-white hover:bg-surface-light'
              }`}
            >
              <span>{LOCALE_NAMES[loc]}</span>
              <span className="text-[10px] font-bold opacity-60">{LOCALE_LABELS[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
