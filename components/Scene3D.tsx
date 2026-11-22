'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { DeviceTier } from '@/hooks/useDeviceTier';

const TIER_CONFIG: Record<
  DeviceTier,
  {
    count: number;
    dpr: number;
    antialias: boolean;
    fps: number;
    icoDetail: number;
    icoR: number;
    rings: number;
    ringSeg: number;
    ringR: number;
    ringStep: number;
    pointSize: string;
    camY: number;
    camZ: number;
  }
> = {
  high: {
    count: 1200,
    dpr: 1.5,
    antialias: true,
    fps: 60,
    icoDetail: 2,
    icoR: 2,
    rings: 3,
    ringSeg: 128,
    ringR: 2.8,
    ringStep: 0.4,
    pointSize: '2.5',
    camY: 0,
    camZ: 6,
  },
  mid: {
    count: 900,
    dpr: 1.3,
    antialias: false,
    fps: 30,
    icoDetail: 1,
    icoR: 1.7,
    rings: 2,
    ringSeg: 64,
    ringR: 2.2,
    ringStep: 0.35,
    pointSize: '3.5',
    camY: -1,
    camZ: 5.5,
  },
  low: {
    count: 600,
    dpr: 1,
    antialias: false,
    fps: 30,
    icoDetail: 1,
    icoR: 1.5,
    rings: 1,
    ringSeg: 48,
    ringR: 2,
    ringStep: 0.3,
    pointSize: '4.0',
    camY: -1.2,
    camZ: 5.5,
  },
};

export default function Scene3D({ tier = 'high' }: { tier?: DeviceTier }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cfg = TIER_CONFIG[tier];
    const isMobile = tier !== 'high';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: cfg.antialias,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, cfg.dpr));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, cfg.camY, cfg.camZ);

    let scrollProgress = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = docHeight > 0 ? Math.min(1, window.scrollY / docHeight) : 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    if (isMobile) {
      const onTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          targetMouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
          targetMouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
        }
      };
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      cleanups.push(() => window.removeEventListener('touchmove', onTouchMove));
    } else {
      const onMouseMove = (e: MouseEvent) => {
        targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      cleanups.push(() => window.removeEventListener('mousemove', onMouseMove));
    }

    const count = cfg.count;
    const positions = new Float32Array(count * 3);
    const indices = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 3;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      indices[i] = i;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('aIndex', new THREE.BufferAttribute(indices, 1));

    const particleMat = new THREE.ShaderMaterial({
      vertexShader: `
        uniform float uTime;
        uniform float uScroll;
        uniform vec2  uMouse;
        attribute float aIndex;
        void main() {
          float spread   = 1.0 + uScroll * 2.5;
          float converge = uScroll > 0.83 ? (uScroll - 0.83) * 6.0 : 0.0;
          vec3 pos = position * spread * (1.0 - converge);
          pos.x += uMouse.x * 0.2;
          pos.y += uMouse.y * 0.2;
          pos.x += sin(uTime * 0.5 + aIndex * 0.01) * 0.08;
          pos.y += cos(uTime * 0.3 + aIndex * 0.02) * 0.08;
          pos.z += sin(uTime * 0.4 + aIndex * 0.015) * 0.06;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = ${cfg.pointSize};
        }
      `,
      fragmentShader: `
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.3, 0.5, d);
          gl_FragColor = vec4(0.0, 1.0, 0.533, alpha * 0.7);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      transparent: true,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const icoGeo = new THREE.IcosahedronGeometry(cfg.icoR, cfg.icoDetail);
    const icoMeshMat = new THREE.MeshBasicMaterial({
      color: '#00FF88',
      transparent: true,
      opacity: 0.06,
    });
    const icoWireMat = new THREE.MeshBasicMaterial({
      color: '#00FF88',
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMeshMat);
    const icoWire = new THREE.Mesh(icoGeo, icoWireMat);
    scene.add(icoMesh);
    scene.add(icoWire);

    const ringGroup = new THREE.Group();
    const ringColors = ['#00FF88', '#00C4FF', '#00FF88'];
    const ringGeos: THREE.TorusGeometry[] = [];
    const ringMats: THREE.MeshBasicMaterial[] = [];

    for (let i = 0; i < cfg.rings; i++) {
      const geo = new THREE.TorusGeometry(cfg.ringR + i * cfg.ringStep, 0.005, 8, cfg.ringSeg);
      const mat = new THREE.MeshBasicMaterial({
        color: ringColors[i],
        transparent: true,
        opacity: 0.18,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.z = (i * Math.PI) / 3;
      ringGroup.add(mesh);
      ringGeos.push(geo);
      ringMats.push(mat);
    }
    scene.add(ringGroup);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (reducedMotion) renderer.render(scene, camera);
    };
    window.addEventListener('resize', onResize);
    cleanups.push(() => window.removeEventListener('resize', onResize));

    if (reducedMotion) {
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      return () => {
        cleanups.forEach((fn) => fn());
        renderer.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        icoGeo.dispose();
        icoMeshMat.dispose();
        icoWireMat.dispose();
        ringGeos.forEach((g) => g.dispose());
        ringMats.forEach((m) => m.dispose());
      };
    }

    let rafId = 0;
    let running = true;
    const frameInterval = 1000 / cfg.fps;
    let lastFrameTime = 0;
    const clock = new THREE.Clock();
    const lerpFactor = isMobile ? 0.03 : 0.05;
    const camYSpan = isMobile ? 0.12 : 0.25;

    const animate = (now: number) => {
      if (!running) return;
      rafId = requestAnimationFrame(animate);
      if (isMobile && now - lastFrameTime < frameInterval) return;
      lastFrameTime = now;

      const t = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * lerpFactor;
      mouseY += (targetMouseY - mouseY) * lerpFactor;

      particleMat.uniforms.uTime.value = t;
      particleMat.uniforms.uScroll.value = scrollProgress;
      particleMat.uniforms.uMouse.value.set(mouseX, mouseY);
      particles.rotation.y = t * 0.015 + scrollProgress * Math.PI * 0.8;
      particles.rotation.x = mouseY * 0.06;

      const scale = 0.8 + Math.sin(scrollProgress * Math.PI) * 0.4;
      icoMesh.scale.setScalar(scale);
      icoWire.scale.setScalar(scale + 0.01);
      icoMesh.rotation.y = t * 0.08 + scrollProgress * Math.PI * 2;
      icoMesh.rotation.x = t * 0.04 + mouseY * 0.2;
      icoMesh.rotation.z = mouseX * 0.1;
      icoWire.rotation.copy(icoMesh.rotation);
      icoMeshMat.opacity = 0.04 + scrollProgress * 0.06;

      if (ringGroup.children.length > 0) {
        ringGroup.rotation.x = Math.PI / 3 + t * 0.04;
        ringGroup.rotation.z = t * 0.025 + scrollProgress * Math.PI * 0.5;
      }

      camera.position.x += (mouseX * 0.4 - camera.position.x) * 0.025;
      camera.position.y += (cfg.camY + mouseY * camYSpan - camera.position.y) * 0.025;
      camera.position.z += (cfg.camZ - scrollProgress * 2.5 - camera.position.z) * 0.025;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else {
        running = true;
        lastFrameTime = performance.now();
        animate(lastFrameTime);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    cleanups.push(() => document.removeEventListener('visibilitychange', onVisibilityChange));

    animate(performance.now());

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      cleanups.forEach((fn) => fn());
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      icoGeo.dispose();
      icoMeshMat.dispose();
      icoWireMat.dispose();
      ringGeos.forEach((g) => g.dispose());
      ringMats.forEach((m) => m.dispose());
    };
  }, [tier]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none"
      style={{ position: 'fixed', inset: 0, zIndex: 0, background: '#080808' }}
    />
  );
}
