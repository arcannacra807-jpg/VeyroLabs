'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { resolveHardwareTier } from '@/lib/hardware-tier';
import { stageStore, type HardwareTier } from '@/lib/stage-store';
import type { LegalPageType } from './LegalContent';
import LegalModal from './LegalModal';
import CustomCursor from './CustomCursor';
import MobileCtaBar from './MobileCtaBar';

type GsapModule = typeof import('gsap');
type ScrollTriggerModule = typeof import('gsap/ScrollTrigger');

export default function PersistentStage() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasVisible, setCanvasVisible] = useState(false);
  const [tier, setTier] = useState<HardwareTier>(1);
  const [legalPage, setLegalPage] = useState<LegalPageType | null>(null);

  const gsapRef = useRef<{ gsap: GsapModule['gsap']; ScrollTrigger: ScrollTriggerModule['ScrollTrigger'] } | null>(null);
  const routeCtxRef = useRef<ReturnType<GsapModule['gsap']['context']> | null>(null);
  const hoverCleanupsRef = useRef<Array<() => void>>([]);

  // Legal modal global custom events
  useEffect(() => {
    const onD = () => setLegalPage('datenschutz');
    const onI = () => setLegalPage('impressum');
    const onW = () => setLegalPage('widerruf');
    document.addEventListener('open-datenschutz', onD);
    document.addEventListener('open-impressum', onI);
    document.addEventListener('open-widerruf', onW);
    return () => {
      document.removeEventListener('open-datenschutz', onD);
      document.removeEventListener('open-impressum', onI);
      document.removeEventListener('open-widerruf', onW);
    };
  }, []);

  // Re-bind route-specific GSAP ScrollTriggers & hover effects cleanly on every route navigation
  const bindRouteAnimations = (currentTier: HardwareTier) => {
    const libs = gsapRef.current;
    if (!libs) return;

    hoverCleanupsRef.current.forEach((fn) => fn());
    hoverCleanupsRef.current = [];
    routeCtxRef.current?.revert();

    const { gsap, ScrollTrigger } = libs;

    routeCtxRef.current = gsap.context(() => {
      if (currentTier === 3) {
        gsap.utils.toArray<HTMLElement>('.pop-in').forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 44, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>('.split-reveal').forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 64 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 84%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const attr = el.getAttribute('data-count');
        if (!attr) return;
        const target = Number(attr);
        if (Number.isNaN(target)) return;
        const suffix = el.getAttribute('data-suffix') || '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onUpdate() {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      });
    });

    if (currentTier === 3) {
      gsap.utils.toArray<HTMLElement>('.tilt-card').forEach((card) => {
        card.style.transformStyle = 'preserve-3d';
        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          gsap.to(card, {
            rotateY: ((e.clientX - r.left) / r.width - 0.5) * 8,
            rotateX: -((e.clientY - r.top) / r.height - 0.5) * 8,
            scale: 1.015,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        };
        const onLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        };
        card.addEventListener('mousemove', onMove, { passive: true });
        card.addEventListener('mouseleave', onLeave, { passive: true });
        hoverCleanupsRef.current.push(() => {
          card.removeEventListener('mousemove', onMove);
          card.removeEventListener('mouseleave', onLeave);
        });
      });

      gsap.utils.toArray<HTMLElement>('.magnetic-btn').forEach((btn) => {
        const onMove = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          gsap.to(btn, {
            x: (e.clientX - r.left - r.width / 2) * 0.25,
            y: (e.clientY - r.top - r.height / 2) * 0.25,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        };
        const onLeave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.45)',
            overwrite: 'auto',
          });
        };
        btn.addEventListener('mousemove', onMove, { passive: true });
        btn.addEventListener('mouseleave', onLeave, { passive: true });
        hoverCleanupsRef.current.push(() => {
          btn.removeEventListener('mousemove', onMove);
          btn.removeEventListener('mouseleave', onLeave);
        });
      });
    }

    ScrollTrigger.refresh();
  };

  // Persistent Single-RAF Engine Boot (runs ONCE per session in root layout)
  useEffect(() => {
    let cancelled = false;
    let teardown: (() => void) | undefined;

    const params = new URLSearchParams(window.location.search);
    const isCapture = params.get('capture') === 'frame0';

    const boot = async () => {
      const profile = await resolveHardwareTier();
      if (cancelled) return;

      stageStore.tier = profile.tier;
      setTier(profile.tier);

      // Tier 1: zero WebGL, zero Three.js chunk, zero Lenis overhead -> stays on AVIF Frame-0 shield
      if (profile.tier === 1) {
        (window as Window & { __VEYRO_TIER__?: unknown }).__VEYRO_TIER__ = profile;
        return;
      }

      const canvas = canvasRef.current;
      if (!canvas) return;

      const [
        { default: Lenis },
        { gsap },
        { ScrollTrigger },
        { Timer },
        { VeyroGPGPUEngine },
      ] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('three'),
        import('@/lib/gpgpu-engine'),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      gsap.ticker.lagSmoothing(0); // Never fast-forward scroll-bound animations after a dropped frame
      gsapRef.current = { gsap, ScrollTrigger };

      // Lenis without its own RAF loop (autoRaf: false) — driven synchronously by gsap.ticker
      const lenis = new Lenis({
        autoRaf: false,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false, // Never fight native iOS/Android touch momentum
      });
      stageStore.lenis = lenis;

      const onLenisScroll = (e: { scroll: number; progress: number; velocity: number }) => {
        stageStore.scrollY = e.scroll;
        stageStore.scrollProgress = Number.isFinite(e.progress) ? e.progress : 0;
        stageStore.scrollVelocity = Number.isFinite(e.velocity) ? e.velocity : 0;
        ScrollTrigger.update();
      };
      lenis.on('scroll', onLenisScroll);

      const timer = new Timer();
      timer.connect(document);

      const engine = new VeyroGPGPUEngine(canvas, profile.tier, {
        preserveDrawingBuffer: isCapture,
        onContextLostChange: (lost) => {
          setCanvasVisible(!lost);
        },
      });

      // Warm exact Frame 0 before crossfade
      engine.step(0.0001, 0);
      stageStore.isReady = true;
      setCanvasVisible(true);

      if (isCapture) {
        (window as Window & { __VEYRO_FRAME0_READY__?: boolean }).__VEYRO_FRAME0_READY__ = true;
        teardown = () => {
          lenis.off('scroll', onLenisScroll);
          lenis.destroy();
          stageStore.lenis = null;
          timer.disconnect();
          timer.dispose();
          engine.dispose();
        };
        return;
      }

      // Single Master RAF Loop: Lenis -> ScrollTrigger -> GPGPU FBO -> Subscribers (Cursor, Navbar)
      const tick = (timeSec: number) => {
        if (document.hidden) return;
        const nowMs = timeSec * 1000;
        lenis.raf(nowMs);
        timer.update(nowMs);
        const dt = Math.min(timer.getDelta(), 0.05);
        const elapsed = timer.getElapsed();

        engine.step(dt, elapsed);
        stageStore.frameSubscribers.forEach((fn) => fn(dt, elapsed));
      };
      gsap.ticker.add(tick);

      bindRouteAnimations(profile.tier);

      const onPointerMove = (e: PointerEvent) => {
        stageStore.pointerActive = true;
        stageStore.pointerClientX = e.clientX;
        stageStore.pointerClientY = e.clientY;
        stageStore.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
        stageStore.pointerY = -(e.clientY / window.innerHeight) * 2 + 1;
      };

      const onResize = () => {
        engine.resize(false);
        lenis.resize();
      };

      // Route same-page anchor links cleanly through Lenis
      const onAnchorClick = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href) as HTMLElement | null;
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -80 });
        }
      };

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('resize', onResize, { passive: true });
      document.addEventListener('click', onAnchorClick);

      (window as Window & { __VEYRO_TIER__?: unknown }).__VEYRO_TIER__ = profile;

      teardown = () => {
        gsap.ticker.remove(tick);
        routeCtxRef.current?.revert();
        hoverCleanupsRef.current.forEach((fn) => fn());
        hoverCleanupsRef.current = [];
        lenis.off('scroll', onLenisScroll);
        lenis.destroy();
        stageStore.lenis = null;
        timer.disconnect();
        timer.dispose();
        engine.dispose();
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('click', onAnchorClick);
      };
    };

    if (isCapture) {
      void boot();
      return () => {
        cancelled = true;
        teardown?.();
      };
    }

    // LCP-Shielding: guarantee at least 2 paint frames complete (FCP/LCP settled)
    // before probing WebGL. On mobile (where Frame-0 AVIF is already pixel-identical),
    // trigger boot on first interaction or post-TTI idle to keep Mobile TBT minimal.
    const hasIdleCallback = typeof window.requestIdleCallback === 'function';
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    let raf1 = 0;
    let raf2 = 0;
    let idleId: number | ReturnType<typeof setTimeout> | null = null;
    let booted = false;

    const triggerBoot = () => {
      if (booted || cancelled) return;
      booted = true;
      window.removeEventListener('pointerdown', triggerBoot);
      window.removeEventListener('touchstart', triggerBoot);
      window.removeEventListener('scroll', triggerBoot);
      void boot();
    };

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (cancelled) return;
        if (isCoarse) {
          window.addEventListener('pointerdown', triggerBoot, { once: true, passive: true });
          window.addEventListener('touchstart', triggerBoot, { once: true, passive: true });
          window.addEventListener('scroll', triggerBoot, { once: true, passive: true });
          idleId = globalThis.setTimeout(triggerBoot, 3800);
        } else {
          idleId = hasIdleCallback
            ? window.requestIdleCallback(triggerBoot, { timeout: 1500 })
            : globalThis.setTimeout(triggerBoot, 120);
        }
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.removeEventListener('pointerdown', triggerBoot);
      window.removeEventListener('touchstart', triggerBoot);
      window.removeEventListener('scroll', triggerBoot);
      if (idleId !== null) {
        if (!isCoarse && hasIdleCallback) window.cancelIdleCallback(idleId as number);
        else globalThis.clearTimeout(idleId as ReturnType<typeof setTimeout>);
      }
      teardown?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-sync Lenis & ScrollTrigger cleanly when navigating between App Router pages
  useEffect(() => {
    if (!gsapRef.current || tier === 1) return;
    stageStore.lenis?.resize();
    if (!window.location.hash) {
      stageStore.lenis?.scrollTo(0, { immediate: true });
      stageStore.scrollY = 0;
      stageStore.scrollProgress = 0;
    }
    const raf = requestAnimationFrame(() => bindRouteAnimations(tier));
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, tier]);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none bg-bg overflow-hidden"
      >
        {/* LCP Shield: Pixel-aligned Frame-0 static AVIF/WebP rendered in SSR HTML */}
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/stage-frame0-mobile.avif"
            type="image/avif"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/stage-frame0-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/stage-frame0-desktop.avif"
            type="image/avif"
          />
          <img
            src="/images/stage-frame0-desktop.webp"
            alt=""
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
              canvasVisible ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </picture>

        {/* Persistent WebGL2 GPGPU Canvas — crossfades seamlessly over Frame 0 */}
        <canvas
          ref={canvasRef}
          className={`fixed inset-0 w-full h-full transition-opacity duration-700 ease-out ${
            canvasVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {tier === 3 && <CustomCursor />}
      {legalPage && <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />}
      <MobileCtaBar />
    </>
  );
}
