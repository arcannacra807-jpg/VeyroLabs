import type { HardwareTier } from './stage-store';

interface NetworkInfo {
  saveData?: boolean;
}

export interface HardwareProfile {
  tier: HardwareTier;
  gpu: string;
  isMobile: boolean;
  reason: string;
}

export async function resolveHardwareTier(): Promise<HardwareProfile> {
  if (typeof window === 'undefined') {
    return { tier: 1, gpu: 'ssr', isMobile: false, reason: 'ssr' };
  }

  const params = new URLSearchParams(window.location.search);
  const forced = params.get('forceTier');
  const isCapture = params.get('capture') === 'frame0';

  if (isCapture) {
    return { tier: 3, gpu: 'capture', isMobile: false, reason: 'capture-frame0' };
  }
  if (forced === '1' || forced === '2' || forced === '3') {
    return {
      tier: Number(forced) as HardwareTier,
      gpu: 'forced',
      isMobile: forced === '2',
      reason: 'query-override',
    };
  }

  // Hard Tier-1 gates: reduced motion or Save-Data mode -> zero WebGL context
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return { tier: 1, gpu: 'none', isMobile: false, reason: 'prefers-reduced-motion' };
  }

  const conn = (navigator as Navigator & { connection?: NetworkInfo }).connection;
  if (conn?.saveData) {
    return { tier: 1, gpu: 'none', isMobile: true, reason: 'save-data' };
  }

  // Probe WebGL2 + HalfFloat FBO capability on a disposable context.
  // failIfMajorPerformanceCaveat: true rejects software rasterizers (SwiftShader/llvmpipe)
  // immediately without blocking the main thread for seconds.
  const probeCanvas = document.createElement('canvas');
  const gl = probeCanvas.getContext('webgl2', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'high-performance',
    failIfMajorPerformanceCaveat: true,
  });

  if (!gl) {
    return { tier: 1, gpu: 'unsupported-or-software', isMobile: window.matchMedia('(pointer: coarse)').matches, reason: 'no-hw-webgl2' };
  }

  const hasHalfFloatFbo = Boolean(
    gl.getExtension('EXT_color_buffer_float') ||
      gl.getExtension('EXT_color_buffer_half_float')
  );

  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  const rawRenderer = debugInfo
    ? String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '')
    : String(gl.getParameter(gl.RENDERER) || '');

  const isSoftwareRenderer =
    /SwiftShader|llvmpipe|Software|Microsoft Basic Render/i.test(rawRenderer);

  if (!hasHalfFloatFbo || isSoftwareRenderer) {
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return {
      tier: 1,
      gpu: rawRenderer || 'software',
      isMobile: window.matchMedia('(pointer: coarse)').matches,
      reason: isSoftwareRenderer ? 'software-renderer' : 'no-halffloat-fbo',
    };
  }

  try {
    // Self-hosted detect-gpu benchmarks (/benchmarks/*) -> zero third-party network calls
    const { getGPUTier } = await import('detect-gpu');
    const result = await getGPUTier({
      glContext: gl,
      benchmarksURL: '/benchmarks',
      mobileTiers: [0, 15, 30, 60],
      desktopTiers: [0, 15, 30, 60],
    });

    gl.getExtension('WEBGL_lose_context')?.loseContext();

    if (result.tier <= 1) {
      return {
        tier: 1,
        gpu: result.gpu ?? rawRenderer,
        isMobile: Boolean(result.isMobile),
        reason: `detect-gpu:${result.type}`,
      };
    }

    if (result.isMobile || result.tier === 2) {
      return {
        tier: 2,
        gpu: result.gpu ?? rawRenderer,
        isMobile: Boolean(result.isMobile),
        reason: `detect-gpu:${result.type}`,
      };
    }

    return {
      tier: 3,
      gpu: result.gpu ?? rawRenderer,
      isMobile: false,
      reason: `detect-gpu:${result.type}`,
    };
  } catch {
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const cores = navigator.hardwareConcurrency ?? 4;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
    if (isCoarse) {
      return {
        tier: cores >= 6 && memory >= 4 ? 2 : 1,
        gpu: rawRenderer,
        isMobile: true,
        reason: 'heuristic-mobile',
      };
    }
    return {
      tier: cores >= 6 && memory >= 8 ? 3 : 2,
      gpu: rawRenderer,
      isMobile: false,
      reason: 'heuristic-desktop',
    };
  }
}
