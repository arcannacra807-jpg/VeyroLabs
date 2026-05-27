'use client';

import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import LegalModal from './LegalModal';
import CustomCursor from './CustomCursor';
import MobileCtaBar from './MobileCtaBar';

const Scene3D = lazy(() => import('./Scene3D'));

export default function ClientShell() {
  const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | null>(null);
  const [showScene, setShowScene] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const gsapReady = useRef(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Legal modal events
  useEffect(() => {
    const onD = () => setLegalPage('datenschutz');
    const onI = () => setLegalPage('impressum');
    document.addEventListener('open-datenschutz', onD);
    document.addEventListener('open-impressum', onI);
    return () => {
      document.removeEventListener('open-datenschutz', onD);
      document.removeEventListener('open-impressum', onI);
    };
  }, []);

  // Scene3D: only on first mousemove, desktop only
  useEffect(() => {
    const show = () => {
      if (window.innerWidth >= 768) setShowScene(true);
    };
    window.addEventListener('mousemove', show, { once: true });
    return () => window.removeEventListener('mousemove', show);
  }, []);

  // GSAP: only on first scroll or click
  useEffect(() => {
    const init = async () => {
      if (gsapReady.current) return;
      gsapReady.current = true;

      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Scroll animations
      gsap.utils.toArray<HTMLElement>('.pop-in').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.4)',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' } }
        );
      });

      gsap.utils.toArray<HTMLElement>('.split-reveal').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' } }
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = Number(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 2, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate() { el.textContent = Math.round(obj.val) + suffix; },
        });
      });

      if (window.innerWidth >= 768) {
        const setupHover = () => {
          gsap.utils.toArray<HTMLElement>('.tilt-card').forEach((card) => {
            card.style.transformStyle = 'preserve-3d';
            card.addEventListener('mousemove', (e: MouseEvent) => {
              const r = card.getBoundingClientRect();
              gsap.to(card, { rotateY: ((e.clientX - r.left) / r.width - 0.5) * 10, rotateX: -((e.clientY - r.top) / r.height - 0.5) * 10, scale: 1.02, duration: 0.3, ease: 'power2.out' });
            });
            card.addEventListener('mouseleave', () => {
              gsap.to(card, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
            });
          });
          gsap.utils.toArray<HTMLElement>('.magnetic-btn').forEach((btn) => {
            btn.addEventListener('mousemove', (e: MouseEvent) => {
              const r = btn.getBoundingClientRect();
              gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.3, ease: 'power2.out' });
            });
            btn.addEventListener('mouseleave', () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
            });
          });
        };
        'requestIdleCallback' in window ? requestIdleCallback(setupHover, { timeout: 1500 }) : setTimeout(setupHover, 300);
      }
    };

    window.addEventListener('scroll', init, { once: true, passive: true });
    window.addEventListener('pointerdown', init, { once: true });
    return () => {
      window.removeEventListener('scroll', init);
      window.removeEventListener('pointerdown', init);
    };
  }, []);

  return (
    <>
      {!isMobile && <CustomCursor />}
      {showScene && <Suspense fallback={null}><Scene3D /></Suspense>}
      {legalPage && <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />}
      <MobileCtaBar />
    </>
  );
}
