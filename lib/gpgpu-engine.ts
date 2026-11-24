import * as THREE from 'three';
import { damp, stageStore, type HardwareTier } from './stage-store';

const SIM_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// 3D Divergence-free Simplex Curl Noise + 3-State Sculptural Attractor Morph + Pointer Repulsion
const SIM_FRAGMENT = /* glsl */ `
  precision highp float;

  uniform sampler2D uPositions;
  uniform sampler2D uBaseA;
  uniform sampler2D uBaseB;
  uniform sampler2D uBaseC;
  uniform float uTime;
  uniform float uDelta;
  uniform float uScroll;
  uniform float uVelocity;
  uniform vec3 uPointerWorld;
  uniform float uPointerActive;

  varying vec2 vUv;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g  = step(x0.yzx, x0.xyz);
    vec3 l  = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  vec3 curlNoise(vec3 p) {
    const float e = 0.1;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(0.0, e, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);

    float p_x0 = snoise(p - dx), p_x1 = snoise(p + dx);
    float p_y0 = snoise(p - dy), p_y1 = snoise(p + dy);
    float p_z0 = snoise(p - dz), p_z1 = snoise(p + dz);

    float x = (p_y1 - p_y0) - (p_z1 - p_z0);
    float y = (p_z1 - p_z0) - (p_x1 - p_x0);
    float z = (p_x1 - p_x0) - (p_y1 - p_y0);
    return normalize(vec3(x, y, z) + 1e-5);
  }

  mat2 rot2d(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
  }

  void main() {
    vec4 prev = texture2D(uPositions, vUv);
    vec3 pos = prev.xyz;

    vec4 rawA = texture2D(uBaseA, vUv);
    vec3 baseA = rawA.xyz;
    float role = rawA.w; // 0.0 = core sculpture filament, 1.0 = atmospheric dust

    vec3 baseB = texture2D(uBaseB, vUv).xyz;
    vec3 baseC = texture2D(uBaseC, vUv).xyz;

    // Gentle orbital breathing rotation of the hero ribbon
    float spin = uTime * 0.075 + uScroll * 1.1;
    baseA.xz = rot2d(spin) * baseA.xz;
    baseA.xy = rot2d(0.24) * baseA.xy;

    // Smooth 3-stage scroll choreography: Hero Sculpture -> Architectural Lattice -> Contact Halo
    float toLattice = smoothstep(0.14, 0.58, uScroll);
    float toHalo = smoothstep(0.76, 0.98, uScroll);
    vec3 target = mix(baseA, baseB, toLattice);
    target = mix(target, baseC, toHalo);

    float dt = min(uDelta, 0.05);
    float scrollEnergy = min(abs(uVelocity) * 0.045, 1.4);
    float curlStrength = mix(0.28, 0.55, role) + scrollEnergy * 0.65;

    vec3 curl = curlNoise(pos * 0.52 + vec3(0.0, uTime * 0.11, uScroll * 1.25));
    vec3 spring = (target - pos) * mix(3.1, 1.4, role);
    vec3 deltaPos = (spring + curl * curlStrength) * dt;

    // 3D pointer repulsion wake
    if (uPointerActive > 0.5) {
      vec3 toPointer = pos - uPointerWorld;
      float dist = length(toPointer);
      float push = smoothstep(1.45, 0.0, dist);
      deltaPos += normalize(toPointer + 1e-4) * push * 3.2 * dt;
    }

    pos += deltaPos;

    // Normalized speed + subtle highlight bias for core filaments
    float rawSpeed = length(deltaPos) / max(dt, 0.001);
    float energy = clamp(rawSpeed * 0.38 + (1.0 - role) * 0.28, 0.0, 1.0);
    gl_FragColor = vec4(pos, energy);
  }
`;

const RENDER_VERTEX = /* glsl */ `
  precision highp float;

  attribute float aSeed;

  uniform sampler2D uPositions;
  uniform float uPixelRatio;
  uniform float uFocusDist;
  uniform float uAperture;
  uniform float uPointScale;
  uniform float uMaxPointSize;

  varying float vEnergy;
  varying float vCoc;
  varying float vSeed;
  varying vec2 vNdc;

  void main() {
    vec4 sim = texture2D(uPositions, position.xy);
    vec4 mvPosition = modelViewMatrix * vec4(sim.xyz, 1.0);
    float dist = -mvPosition.z;

    // Analytical Depth-of-Field Circle of Confusion
    float coc = clamp(abs(dist - uFocusDist) * uAperture, 0.0, 1.0);
    vEnergy = sim.w;
    vCoc = coc;
    vSeed = aSeed;

    float sizeBias = mix(0.72, 1.28, aSeed);
    float focalSize = mix(uPointScale * sizeBias, uPointScale * 3.4, coc);
    gl_PointSize = clamp((focalSize * uPixelRatio) * (5.6 / max(dist, 0.6)), 1.0, uMaxPointSize);

    vec4 clipPos = projectionMatrix * mvPosition;
    vNdc = clipPos.xy / max(clipPos.w, 0.0001);
    gl_Position = clipPos;
  }
`;

const RENDER_FRAGMENT = /* glsl */ `
  precision highp float;

  varying float vEnergy;
  varying float vCoc;
  varying float vSeed;
  varying vec2 vNdc;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;

    // Crisp filament core in focus, soft circular bokeh out of focus
    float inner = mix(0.16, 0.02, vCoc);
    float alpha = 1.0 - smoothstep(inner, 0.5, d);

    // Energy conservation so overlapping ribbon folds never blow out to white blobs
    float energyNorm = mix(0.48, 0.11, vCoc);

    // Editorial center safe-zone: softly attenuates particles directly behind Hero copy
    float centerDist = length(vNdc * vec2(1.05, 1.45));
    float editorialMask = mix(0.36, 1.0, smoothstep(0.12, 0.72, centerDist));

    vec3 deepEmerald = vec3(0.0, 0.34, 0.24);
    vec3 veyroGreen  = vec3(0.0, 1.0, 0.533);
    vec3 veyroCyan   = vec3(0.0, 0.77, 1.0);
    vec3 hotCore     = vec3(0.72, 1.0, 0.90);

    vec3 color = mix(deepEmerald, veyroGreen, smoothstep(0.10, 0.65, vEnergy));
    color = mix(color, veyroCyan, smoothstep(0.48, 0.96, vSeed * 0.55 + vEnergy * 0.45) * 0.65);
    color = mix(color, hotCore, smoothstep(0.82, 1.0, vEnergy) * (1.0 - vCoc) * 0.32);

    gl_FragColor = vec4(color, alpha * energyNorm * editorialMask * mix(0.52, 0.92, vSeed));

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

// 1-Triangle Fullscreen Backdrop with Interleaved Gradient Noise (IGN) to eliminate 8-bit OLED banding
const BACKDROP_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.9999, 1.0);
  }
`;

const BACKDROP_FRAGMENT = /* glsl */ `
  precision highp float;
  uniform float uScroll;
  varying vec2 vUv;

  float ign(vec2 p) {
    return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
  }

  void main() {
    vec2 centered = (vUv - 0.5) * vec2(1.45, 1.0);
    float r = length(centered);

    // Deep obsidian base (#080808) + subtle emerald/cyan atmospheric depth
    vec3 obsidian = vec3(0.0314, 0.0314, 0.0314);
    vec3 glowA = vec3(0.0, 0.055, 0.038) * smoothstep(1.05, 0.0, r);
    vec3 glowB = vec3(0.0, 0.035, 0.055) * smoothstep(0.95, 0.0, length(centered - vec2(0.28, -0.18)));

    float vignette = smoothstep(1.35, 0.35, r);
    vec3 col = obsidian + (glowA + glowB * (0.4 + uScroll * 0.6)) * vignette;

    // Screen-space IGN dithering (+/- 0.5 LSB) eliminates concentric 8-bit rings
    float dither = (ign(gl_FragCoord.xy) - 0.5) / 255.0;
    gl_FragColor = vec4(col + dither, 1.0);
  }
`;

// Deterministic low-discrepancy sequence (R2 quasirandom) to avoid ugly random clumping
function halton(index: number, base: number): number {
  let f = 1;
  let r = 0;
  let i = index;
  while (i > 0) {
    f /= base;
    r += f * (i % base);
    i = Math.floor(i / base);
  }
  return r;
}

function createAttractorTextures(size: number): {
  baseA: THREE.DataTexture;
  baseB: THREE.DataTexture;
  baseC: THREE.DataTexture;
  seeds: Float32Array;
} {
  const count = size * size;
  const dataA = new Float32Array(count * 4);
  const dataB = new Float32Array(count * 4);
  const dataC = new Float32Array(count * 4);
  const seeds = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const h1 = halton(i + 1, 2);
    const h2 = halton(i + 1, 3);
    const h3 = halton(i + 1, 5);
    seeds[i] = h3;

    const idx = i * 4;

    // --- ATTRACTOR A: Sculpted Twisted Architectural Ribbon + Atmospheric Bokeh Dust ---
    // 82% core sculptural ribbon (high-density filaments), 18% peripheral depth dust
    const isDust = h3 > 0.82;
    if (!isDust) {
      const u = h1 * Math.PI * 2;
      const v = (h2 - 0.5) * 2.0; // ribbon width -1..1
      // Asymmetric 3-fold twisted Möbius-Torus sculpture
      const twist = u * 1.5;
      const majorR = 1.95 + 0.42 * Math.cos(3.0 * u);
      const ribbonW = 0.68 * (0.65 + 0.35 * Math.sin(2.0 * u));
      // Edge concentration along ribbon edges for razor-sharp architectural silhouette
      const edgeV = Math.sign(v) * Math.pow(Math.abs(v), 0.72);
      const localR = majorR + edgeV * ribbonW * Math.cos(twist);
      const localY = edgeV * ribbonW * Math.sin(twist) + 0.48 * Math.sin(3.0 * u);

      dataA[idx] = localR * Math.cos(u);
      dataA[idx + 1] = localY;
      dataA[idx + 2] = localR * Math.sin(u) * 0.78;
      dataA[idx + 3] = 0.0; // core role
    } else {
      const theta = h1 * Math.PI * 2;
      const phi = Math.acos(2.0 * h2 - 1.0);
      const radius = 2.6 + (h3 - 0.82) / 0.18 * 2.8;
      dataA[idx] = radius * Math.sin(phi) * Math.cos(theta);
      dataA[idx + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.72;
      dataA[idx + 2] = radius * Math.cos(phi);
      dataA[idx + 3] = 1.0; // dust role
    }

    // --- ATTRACTOR B: Sculpted Hyperbolic Architectural Wave Lattice (Services / Pricing) ---
    const gx = (h1 - 0.5) * 7.8;
    const gz = (h2 - 0.5) * 5.6;
    const wave =
      Math.sin(gx * 0.72) * Math.cos(gz * 0.85) * 0.78 +
      Math.cos((gx + gz) * 0.45) * 0.35;
    dataB[idx] = gx;
    dataB[idx + 1] = wave - 0.35 + (isDust ? (h3 - 0.9) * 2.5 : 0);
    dataB[idx + 2] = gz * 0.85;
    dataB[idx + 3] = isDust ? 1.0 : 0.0;

    // --- ATTRACTOR C: Precision Converging Focal Aperture Ring (Contact CTA) ---
    const angle = h1 * Math.PI * 2;
    const ringRadius = isDust ? 2.4 + h2 * 1.8 : 1.55 + (h2 - 0.5) * 0.32;
    dataC[idx] = Math.cos(angle) * ringRadius;
    dataC[idx + 1] = Math.sin(angle) * ringRadius;
    dataC[idx + 2] = (h3 - 0.5) * (isDust ? 2.2 : 0.45);
    dataC[idx + 3] = isDust ? 1.0 : 0.0;
  }

  const makeTex = (arr: Float32Array) => {
    const tex = new THREE.DataTexture(arr, size, size, THREE.RGBAFormat, THREE.FloatType);
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.needsUpdate = true;
    return tex;
  };

  return {
    baseA: makeTex(dataA),
    baseB: makeTex(dataB),
    baseC: makeTex(dataC),
    seeds,
  };
}

export interface VeyroTelemetry {
  calls: number;
  triangles: number;
  points: number;
  geometries: number;
  textures: number;
  tier: HardwareTier;
  contextLost: boolean;
  fboComplete: boolean;
  gl: WebGLRenderingContext | WebGL2RenderingContext;
}

export class VeyroGPGPUEngine {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private simScene = new THREE.Scene();
  private simCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  private fboA!: THREE.WebGLRenderTarget;
  private fboB!: THREE.WebGLRenderTarget;
  private baseATex!: THREE.DataTexture;
  private baseBTex!: THREE.DataTexture;
  private baseCTex!: THREE.DataTexture;
  private simQuadGeo!: THREE.PlaneGeometry;
  private simMat!: THREE.ShaderMaterial;
  private particleGeo!: THREE.BufferGeometry;
  private particleMat!: THREE.ShaderMaterial;
  private backdropGeo!: THREE.BufferGeometry;
  private backdropMat!: THREE.ShaderMaterial;

  private readonly size: number;
  private readonly maxDpr: number;
  private readonly tier: HardwareTier;
  private readonly onContextLostChange?: (lost: boolean) => void;

  private dampPointer = new THREE.Vector2(0, 0);
  private pointerWorld = new THREE.Vector3(0, 0, 0);
  private lastWidth = 0;
  private lastHeight = 0;
  private lastFrameCalls = 0;
  private fboComplete = false;
  private disposed = false;

  constructor(
    canvas: HTMLCanvasElement,
    tier: HardwareTier,
    options?: {
      preserveDrawingBuffer?: boolean;
      onContextLostChange?: (lost: boolean) => void;
    }
  ) {
    this.tier = tier;
    this.size = tier === 3 ? 128 : 64; // 16.384 (Tier 3) vs 4.096 (Tier 2)
    this.maxDpr = tier === 3 ? 2 : 1.5;
    this.onContextLostChange = options?.onContextLostChange;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false, // Particle bokeh + IGN backdrop do not benefit from MSAA
      alpha: false,
      depth: false,
      stencil: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: Boolean(options?.preserveDrawingBuffer),
    });
    this.renderer.autoClear = false;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 40);
    this.camera.position.set(0, 0.15, 6.2);

    this.initResources();
    this.resize(true);
    this.bindContextEvents(canvas);
    this.exposeTelemetry();
  }

  private initResources() {
    const gl = this.renderer.getContext();
    const pointRange = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE) as Float32Array | number[] | null;
    const maxPointSize = pointRange ? Math.min(24.0, pointRange[1] || 24.0) : 24.0;

    const rtOptions: THREE.RenderTargetOptions = {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
    };

    this.fboA = new THREE.WebGLRenderTarget(this.size, this.size, rtOptions);
    this.fboB = new THREE.WebGLRenderTarget(this.size, this.size, rtOptions);

    const { baseA, baseB, baseC, seeds } = createAttractorTextures(this.size);
    this.baseATex = baseA;
    this.baseBTex = baseB;
    this.baseCTex = baseC;

    // GPGPU Simulation Pass
    this.simQuadGeo = new THREE.PlaneGeometry(2, 2);
    this.simMat = new THREE.ShaderMaterial({
      vertexShader: SIM_VERTEX,
      fragmentShader: SIM_FRAGMENT,
      uniforms: {
        uPositions: { value: this.baseATex },
        uBaseA: { value: this.baseATex },
        uBaseB: { value: this.baseBTex },
        uBaseC: { value: this.baseCTex },
        uTime: { value: 0 },
        uDelta: { value: 0.0001 },
        uScroll: { value: 0 },
        uVelocity: { value: 0 },
        uPointerWorld: { value: this.pointerWorld },
        uPointerActive: { value: 0 },
      },
      depthTest: false,
      depthWrite: false,
    });
    this.simScene.add(new THREE.Mesh(this.simQuadGeo, this.simMat));

    // Seed initial Frame-0 state into fboA and verify FRAMEBUFFER_COMPLETE (0x8CD5)
    this.renderer.setRenderTarget(this.fboA);
    this.renderer.clear();
    this.renderer.render(this.simScene, this.simCamera);
    this.fboComplete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    this.renderer.setRenderTarget(null);
    this.simMat.uniforms.uPositions.value = this.fboA.texture;

    // 1-Triangle Fullscreen Backdrop (Draw Call #2)
    this.backdropGeo = new THREE.BufferGeometry();
    this.backdropGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)
    );
    this.backdropGeo.setAttribute(
      'uv',
      new THREE.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2)
    );
    this.backdropMat = new THREE.ShaderMaterial({
      vertexShader: BACKDROP_VERTEX,
      fragmentShader: BACKDROP_FRAGMENT,
      uniforms: {
        uScroll: { value: 0 },
      },
      depthWrite: false,
      depthTest: false,
    });
    const backdrop = new THREE.Mesh(this.backdropGeo, this.backdropMat);
    backdrop.frustumCulled = false;
    backdrop.renderOrder = 0;
    this.scene.add(backdrop);

    // Particle Cloud Mesh (Draw Call #3)
    const count = this.size * this.size;
    const refs = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      refs[i * 3] = ((i % this.size) + 0.5) / this.size;
      refs[i * 3 + 1] = (Math.floor(i / this.size) + 0.5) / this.size;
      refs[i * 3 + 2] = 0;
    }

    this.particleGeo = new THREE.BufferGeometry();
    this.particleGeo.setAttribute('position', new THREE.BufferAttribute(refs, 3));
    this.particleGeo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

    this.particleMat = new THREE.ShaderMaterial({
      vertexShader: RENDER_VERTEX,
      fragmentShader: RENDER_FRAGMENT,
      uniforms: {
        uPositions: { value: this.fboA.texture },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, this.maxDpr) },
        uFocusDist: { value: 5.5 },
        uAperture: { value: 0.26 },
        uPointScale: { value: this.size === 128 ? 2.8 : 3.6 },
        uMaxPointSize: { value: maxPointSize },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(this.particleGeo, this.particleMat);
    points.frustumCulled = false;
    points.renderOrder = 1;
    this.scene.add(points);
  }

  private bindContextEvents(canvas: HTMLCanvasElement) {
    canvas.addEventListener('webglcontextlost', this.onContextLost, false);
    canvas.addEventListener('webglcontextrestored', this.onContextRestored, false);
  }

  private onContextLost = (e: Event) => {
    e.preventDefault();
    stageStore.contextLost = true;
    this.onContextLostChange?.(true);
  };

  private onContextRestored = () => {
    stageStore.contextLost = false;
    // GPU handles from the lost context are already invalidated by the driver;
    // do not invoke gl.delete* on stale handles (avoids INVALID_OPERATION warnings).
    this.scene.clear();
    this.simScene.clear();
    this.initResources();
    this.resize(true);
    this.step(0.0001, 0);
    this.onContextLostChange?.(false);
  };

  private getBaseCamZ(): number {
    const aspect = this.camera.aspect || 1;
    // Pull camera back on portrait viewports so the horizontal ribbon sculpture fits cleanly
    return aspect < 1.0 ? 6.2 + (1.0 - aspect) * 4.4 : 6.2;
  }

  // Ignore pure mobile address-bar height jitters (< 120px at unchanged width)
  public resize(force = false) {
    if (this.disposed) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (!force && w === this.lastWidth && Math.abs(h - this.lastHeight) < 120) {
      return;
    }
    this.lastWidth = w;
    this.lastHeight = h;

    const dpr = Math.min(window.devicePixelRatio || 1, this.maxDpr);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (force) {
      this.camera.position.z = this.getBaseCamZ();
    }
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    this.particleMat.uniforms.uPixelRatio.value = dpr;
    this.particleMat.uniforms.uPointScale.value =
      this.camera.aspect < 1.0 ? 2.4 : this.size === 128 ? 2.7 : 3.4;
  }

  public step(dt: number, elapsed: number) {
    if (this.disposed || stageStore.contextLost) return;

    const clampedDt = Math.min(Math.max(dt, 0.0001), 0.05);
    const scroll = stageStore.scrollProgress;

    this.dampPointer.x = damp(this.dampPointer.x, stageStore.pointerX, 5.0, clampedDt);
    this.dampPointer.y = damp(this.dampPointer.y, stageStore.pointerY, 5.0, clampedDt);
    this.pointerWorld.set(this.dampPointer.x * 2.7, this.dampPointer.y * 1.85, 0.35);

    this.renderer.info.autoReset = false;
    this.renderer.info.reset();

    // 1. GPGPU Simulation Pass (Draw Call #1)
    this.simMat.uniforms.uPositions.value = this.fboA.texture;
    this.simMat.uniforms.uTime.value = elapsed;
    this.simMat.uniforms.uDelta.value = clampedDt;
    this.simMat.uniforms.uScroll.value = scroll;
    this.simMat.uniforms.uVelocity.value = stageStore.scrollVelocity;
    this.simMat.uniforms.uPointerActive.value = stageStore.pointerActive ? 1.0 : 0.0;

    this.renderer.setRenderTarget(this.fboB);
    this.renderer.render(this.simScene, this.simCamera);
    this.renderer.setRenderTarget(null);

    const tmp = this.fboA;
    this.fboA = this.fboB;
    this.fboB = tmp;

    // 2. Framerate-independent exponential camera choreography
    const targetCamX = this.dampPointer.x * 0.55;
    const targetCamY = 0.15 + this.dampPointer.y * 0.32 - scroll * 0.35;
    const targetCamZ = this.getBaseCamZ() - scroll * 2.0;

    this.camera.position.x = damp(this.camera.position.x, targetCamX, 3.5, clampedDt);
    this.camera.position.y = damp(this.camera.position.y, targetCamY, 3.5, clampedDt);
    this.camera.position.z = damp(this.camera.position.z, targetCamZ, 3.5, clampedDt);
    this.camera.lookAt(0, 0, 0);

    // 3. Main Render Pass (Backdrop = Draw Call #2, Particles = Draw Call #3)
    this.backdropMat.uniforms.uScroll.value = scroll;
    this.particleMat.uniforms.uPositions.value = this.fboA.texture;
    this.particleMat.uniforms.uFocusDist.value = this.camera.position.z - 0.5;

    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    this.lastFrameCalls = this.renderer.info.render.calls;
  }

  private exposeTelemetry() {
    (window as Window & { __VEYRO_GL__?: () => VeyroTelemetry }).__VEYRO_GL__ = () => ({
      calls: this.lastFrameCalls,
      triangles: this.renderer.info.render.triangles,
      points: this.renderer.info.render.points,
      geometries: this.renderer.info.memory.geometries,
      textures: this.renderer.info.memory.textures,
      tier: this.tier,
      contextLost: stageStore.contextLost,
      fboComplete: this.fboComplete,
      gl: this.renderer.getContext(),
    });
  }

  private disposeGPUResourcesOnly() {
    this.fboA?.dispose();
    this.fboB?.dispose();
    this.baseATex?.dispose();
    this.baseBTex?.dispose();
    this.baseCTex?.dispose();
    this.simQuadGeo?.dispose();
    this.simMat?.dispose();
    this.particleGeo?.dispose();
    this.particleMat?.dispose();
    this.backdropGeo?.dispose();
    this.backdropMat?.dispose();
  }

  public dispose() {
    this.disposed = true;
    const canvas = this.renderer.domElement;
    canvas.removeEventListener('webglcontextlost', this.onContextLost);
    canvas.removeEventListener('webglcontextrestored', this.onContextRestored);
    this.disposeGPUResourcesOnly();
    this.renderer.dispose();
  }
}
