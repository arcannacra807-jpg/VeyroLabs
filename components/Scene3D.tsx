'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // THREE.js setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 6;

    // Scroll + Mouse als lokale Refs — keine React state updates
    let scrollProgress = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = docHeight > 0 ? Math.min(1, window.scrollY / docHeight) : 0;
    };
    const onMouse = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouse, { passive: true });

    // --- PARTICLES (GPU Vertex Shader) ---
    const count = 1200;
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
        uniform vec2 uMouse;
        attribute float aIndex;
        void main() {
          float spread = 1.0 + uScroll * 2.5;
          float converge = uScroll > 0.83 ? (uScroll - 0.83) * 6.0 : 0.0;
          vec3 pos = position * spread * (1.0 - converge);
          pos.x += uMouse.x * 0.2;
          pos.y += uMouse.y * 0.2;
          pos.x += sin(uTime * 0.5 + aIndex * 0.01) * 0.08;
          pos.y += cos(uTime * 0.3 + aIndex * 0.02) * 0.08;
          pos.z += sin(uTime * 0.4 + aIndex * 0.015) * 0.06;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = 2.5;
        }
      `,
      fragmentShader: `
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          gl_FragColor = vec4(0.0, 1.0, 0.533, 0.6);
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

    // --- ICOSAHEDRON ---
    const icoGeo = new THREE.IcosahedronGeometry(2, 2);
    const icoMesh = new THREE.Mesh(icoGeo, new THREE.MeshBasicMaterial({ color: '#00FF88', transparent: true, opacity: 0.06 }));
    const icoWire = new THREE.Mesh(icoGeo, new THREE.MeshBasicMaterial({ color: '#00FF88', wireframe: true, transparent: true, opacity: 0.12 }));
    scene.add(icoMesh);
    scene.add(icoWire);

    // --- RINGS ---
    const ringGroup = new THREE.Group();
    [[0, '#00FF88'], [1, '#00C4FF'], [2, '#00FF88']].forEach(([i, color]) => {
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(2.8 + (i as number) * 0.4, 0.004, 8, 128),
        new THREE.MeshBasicMaterial({ color: color as string, transparent: true, opacity: 0.12 })
      );
      mesh.rotation.z = ((i as number) * Math.PI) / 3;
      ringGroup.add(mesh);
    });
    scene.add(ringGroup);

    // --- RESIZE ---
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // --- RAF LOOP ---
    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Particles
      particleMat.uniforms.uTime.value = t;
      particleMat.uniforms.uScroll.value = scrollProgress;
      particleMat.uniforms.uMouse.value.set(mouseX, mouseY);
      particles.rotation.y = t * 0.015 + scrollProgress * Math.PI * 0.8;
      particles.rotation.x = mouseY * 0.08;

      // Icosahedron
      const scale = 0.8 + Math.sin(scrollProgress * Math.PI) * 0.4;
      icoMesh.scale.setScalar(scale);
      icoWire.scale.setScalar(scale + 0.01);
      icoMesh.rotation.y = t * 0.08 + scrollProgress * Math.PI * 2;
      icoMesh.rotation.x = t * 0.04 + mouseY * 0.2;
      icoMesh.rotation.z = mouseX * 0.1;
      icoWire.rotation.copy(icoMesh.rotation);
      (icoMesh.material as THREE.MeshBasicMaterial).opacity = 0.04 + scrollProgress * 0.06;

      // Rings
      ringGroup.rotation.x = Math.PI / 3 + t * 0.04;
      ringGroup.rotation.z = t * 0.025 + scrollProgress * Math.PI * 0.5;

      // Camera
      camera.position.x += (mouseX * 0.4 - camera.position.x) * 0.025;
      camera.position.y += (mouseY * 0.25 - camera.position.y) * 0.025;
      camera.position.z += (6 - scrollProgress * 2.5 - camera.position.z) * 0.025;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      icoGeo.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, background: '#080808' }}
    />
  );
}
