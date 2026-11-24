'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { stageStore } from '@/lib/stage-store';

export default function MobileCtaBar() {
  const t = useTranslations('mobileCta');
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const contactVisible = useRef(false);
  const visibleRef = useRef(false);

  const isLegalRoute = pathname.endsWith('/impressum') || pathname.endsWith('/datenschutz');

  useEffect(() => {
    if (isLegalRoute) {
      setVisible(false);
      return;
    }

    const contactEl = document.getElementById('kontakt');
    const threshold = window.innerHeight * 0.6;

    const updateVisibility = (y: number) => {
      const next = !contactVisible.current && y > threshold;
      if (next !== visibleRef.current) {
        visibleRef.current = next;
        setVisible(next);
      }
    };

    const onFrame = () => updateVisibility(stageStore.scrollY);
    stageStore.frameSubscribers.add(onFrame);

    const onNativeScroll = () => {
      if (!stageStore.lenis) updateVisibility(window.scrollY);
    };

    const observer = contactEl
      ? new IntersectionObserver(
          ([entry]) => {
            contactVisible.current = entry.isIntersecting;
            if (entry.isIntersecting && visibleRef.current) {
              visibleRef.current = false;
              setVisible(false);
            }
          },
          { rootMargin: '0px 0px -20% 0px', threshold: 0 }
        )
      : null;

    window.addEventListener('scroll', onNativeScroll, { passive: true });
    if (observer && contactEl) observer.observe(contactEl);

    return () => {
      stageStore.frameSubscribers.delete(onFrame);
      window.removeEventListener('scroll', onNativeScroll);
      observer?.disconnect();
    };
  }, [pathname, isLegalRoute]);

  if (isLegalRoute) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-[90] md:hidden transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-bg/90 backdrop-blur-xl border-t border-border px-5 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-white text-sm font-display font-bold leading-tight">{t('title')}</p>
          <p className="text-subtle text-xs mt-0.5">{t('subtitle')}</p>
        </div>
        <a
          href="#kontakt"
          tabIndex={visible ? 0 : -1}
          className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-3 bg-accent text-bg font-display font-bold text-sm rounded-xl transition-all duration-300 active:scale-95"
        >
          {t('button')}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1.5 6h9m0 0L7 2.5M10.5 6 7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
