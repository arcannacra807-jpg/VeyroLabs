'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import {
  ImpressumContent,
  DatenschutzContent,
  WiderrufContent,
  type LegalPageType,
} from './LegalContent';

interface LegalModalProps {
  page: LegalPageType;
  onClose: () => void;
}

export default function LegalModal({ page, onClose }: LegalModalProps) {
  const locale = useLocale();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const title =
    page === 'impressum'
      ? locale === 'en'
        ? 'Legal Notice'
        : 'Impressum'
      : page === 'datenschutz'
      ? locale === 'en'
        ? 'Privacy Policy'
        : 'Datenschutzerklärung'
      : locale === 'en'
      ? 'Right of Withdrawal'
      : 'Widerrufsbelehrung';

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-bg/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl border border-border m-4 mt-16 p-8 md:p-12">
        <button
          type="button"
          onClick={onClose}
          aria-label={locale === 'en' ? 'Close dialog' : 'Schließen'}
          className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center text-muted hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {page === 'impressum' ? (
          <ImpressumContent locale={locale} />
        ) : page === 'datenschutz' ? (
          <DatenschutzContent locale={locale} />
        ) : (
          <WiderrufContent locale={locale} />
        )}
      </div>
    </div>
  );
}
