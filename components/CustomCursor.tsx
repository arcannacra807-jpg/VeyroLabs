'use client';

import { useEffect, useRef } from 'react';
import { damp, stageStore } from '@/lib/stage-store';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = -100;
    let ringY = -100;

    // Runs inside the single master GSAP ticker — zero extra requestAnimationFrame loops
    const onFrame = (dt: number) => {
      if (!stageStore.pointerActive) return;
      const mx = stageStore.pointerClientX;
      const my = stageStore.pointerClientY;

      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;

      ringX = damp(ringX, mx, 11.5, dt);
      ringY = damp(ringY, my, 11.5, dt);
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    };

    stageStore.frameSubscribers.add(onFrame);

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement | null)?.closest('a, button, [role="button"]')) {
        ring.classList.add('hovering');
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement | null)?.closest('a, button, [role="button"]')) {
        ring.classList.remove('hovering');
      }
    };

    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.textContent = 'a, button, [role="button"] { cursor: none !important; }';
    document.head.appendChild(style);

    return () => {
      stageStore.frameSubscribers.delete(onFrame);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.body.style.cursor = '';
      style.remove();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} aria-hidden="true" className="cursor-dot hidden md:block" />
      <div ref={ringRef} aria-hidden="true" className="cursor-ring hidden md:block" />
    </>
  );
}
