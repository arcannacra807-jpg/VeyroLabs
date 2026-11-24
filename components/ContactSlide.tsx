'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactSlide() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: form.website,
        }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="slide relative" data-slide="contact" id="kontakt">
        <div className="container relative z-10 text-center" role="status" aria-live="polite">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="#00FF88" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">{t('successH2')}</h2>
          <p className="text-muted text-lg max-w-md mx-auto">{t('successP')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="slide relative" data-slide="contact" id="kontakt">
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="label justify-center mb-4 pop-in">{t('label')}</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 split-reveal">
            {t('h2')}
            <br />
            <span className="text-muted font-normal text-2xl md:text-3xl">{t('h2sub')}</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10 pop-in">{t('desc')}</p>
          <form onSubmit={handleSubmit} className="text-left space-y-4 pop-in">
            {/* Honeypot field against spam bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  {t('namePlaceholder')}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder={t('namePlaceholder')}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-white text-sm placeholder:text-subtle focus:border-accent/40 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  {t('emailPlaceholder')}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  maxLength={200}
                  autoComplete="email"
                  placeholder={t('emailPlaceholder')}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-white text-sm placeholder:text-subtle focus:border-accent/40 transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                {t('messagePlaceholder')}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={3000}
                placeholder={t('messagePlaceholder')}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-white text-sm placeholder:text-subtle resize-none focus:border-accent/40 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary magnetic-btn w-full sm:w-auto"
            >
              {status === 'loading' ? t('loading') : t('submit')}
              {status !== 'loading' && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-sm" role="alert">
                {t('errorText')}{' '}
                <a href="mailto:veyro-labs@gmx.de" className="underline">
                  veyro-labs@gmx.de
                </a>
              </p>
            )}
            <p className="text-subtle text-xs text-center">
              {t('privacyText')}{' '}
              <a
                href={`/${locale}/datenschutz`}
                onClick={(e) => {
                  e.preventDefault();
                  document.dispatchEvent(new CustomEvent('open-datenschutz'));
                }}
                className="underline hover:text-white transition-colors"
              >
                {t('privacyLink')}
              </a>{' '}
              {t('privacySuffix')}
            </p>
          </form>
          <p className="text-subtle text-sm text-center mt-8 pop-in">
            {t('directEmail')}{' '}
            <a
              href="mailto:veyro-labs@gmx.de"
              className="text-accent underline underline-offset-4 hover:text-white transition-colors"
            >
              veyro-labs@gmx.de
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
