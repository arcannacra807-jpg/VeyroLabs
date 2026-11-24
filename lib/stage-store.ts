import type Lenis from 'lenis';

export type HardwareTier = 1 | 2 | 3;

export type FrameSubscriber = (dt: number, elapsed: number) => void;

export interface StageState {
  scrollY: number;
  scrollProgress: number;
  scrollVelocity: number;
  pointerX: number;       // NDC -1..1
  pointerY: number;       // NDC -1..1
  pointerClientX: number; // viewport px
  pointerClientY: number; // viewport px
  pointerActive: boolean;
  tier: HardwareTier;
  isReady: boolean;
  contextLost: boolean;
  lenis: Lenis | null;
  readonly frameSubscribers: Set<FrameSubscriber>;
  setScrollLocked: (locked: boolean) => void;
  scrollTo: (target: string | HTMLElement | number, offset?: number) => void;
}

const frameSubscribers = new Set<FrameSubscriber>();

export const stageStore: StageState = {
  scrollY: 0,
  scrollProgress: 0,
  scrollVelocity: 0,
  pointerX: 0,
  pointerY: 0,
  pointerClientX: -100,
  pointerClientY: -100,
  pointerActive: false,
  tier: 1,
  isReady: false,
  contextLost: false,
  lenis: null,
  frameSubscribers,

  setScrollLocked(locked: boolean) {
    if (typeof document === 'undefined') return;
    if (locked) {
      stageStore.lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      stageStore.lenis?.start();
    }
  },

  scrollTo(target: string | HTMLElement | number, offset = -80) {
    if (typeof window === 'undefined') return;
    if (stageStore.lenis) {
      stageStore.lenis.scrollTo(target, { offset });
      return;
    }
    if (typeof target === 'number') {
      window.scrollTo({ top: target });
      return;
    }
    const el =
      typeof target === 'string'
        ? (document.querySelector(target) as HTMLElement | null)
        : target;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top });
    }
  },
};

/**
 * Framerate-independent exponential damping (identical feel on 30Hz, 60Hz, and 120Hz ProMotion).
 */
export function damp(current: number, target: number, lambda: number, dt: number): number {
  return current + (target - current) * (1 - Math.exp(-lambda * dt));
}
