'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('ontouchstart' in window) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = 0;
    let active = false;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      if (Math.hypot(mouseX - ringX, mouseY - ringY) > 0.2) {
        rafId = requestAnimationFrame(animate);
      } else {
        active = false;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      if (!active) {
        active = true;
        rafId = requestAnimationFrame(animate);
      }
    };

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

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.textContent = 'a, button, [role="button"] { cursor: none !important; }';
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafId);
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
