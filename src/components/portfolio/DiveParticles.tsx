"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";
import { useReducedMotion } from "framer-motion";

type DiveParticlesProps = {
  progress: MotionValue<number>;
};

type Particle = {
  x: number;
  y: number;
  z: number;
  r: number;
  a: number;
};

export function DiveParticles({ progress }: DiveParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    const particles: Particle[] = [];
    const COUNT = reduceMotion ? 80 : 220;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: (Math.random() - 0.5) * 2.4,
          y: (Math.random() - 0.5) * 2.4,
          z: Math.random(),
          r: 0.6 + Math.random() * 1.8,
          a: 0.25 + Math.random() * 0.75,
        });
      }
    }

    function draw(p: number) {
      ctx!.clearRect(0, 0, w, h);

      // Nebula glow — intensifies slightly while diving
      const glow = 0.1 + p * 0.12;
      const g = ctx!.createRadialGradient(
        w * 0.5,
        h * 0.48,
        0,
        w * 0.5,
        h * 0.48,
        Math.max(w, h) * 0.55
      );
      g.addColorStop(0, `rgba(200,255,0,${0.14 + glow * 0.25})`);
      g.addColorStop(0.35, `rgba(180,220,0,${0.06 + glow * 0.08})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.fillStyle = g;
      ctx!.fillRect(0, 0, w, h);

      const dive = p * 1.0;
      const cx = w * 0.5;
      const cy = h * 0.5;
      const fov = Math.min(w, h) * 0.72;

      for (const pt of particles) {
        let z = ((pt.z + dive) % 1 + 1) % 1;
        // Near plane = small z after remap
        const depth = 0.08 + z * 0.92;
        const scale = fov / (depth * fov);
        const px = cx + pt.x * fov * scale * 0.55;
        const py = cy + pt.y * fov * scale * 0.55;
        if (px < -20 || px > w + 20 || py < -20 || py > h + 20) continue;

        const near = 1 - depth;
        const size = pt.r * (0.4 + near * 2.2);
        const alpha = pt.a * (0.15 + near * 0.85);

        ctx!.beginPath();
        ctx!.fillStyle = `rgba(220,255,120,${alpha})`;
        ctx!.arc(px, py, size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    resize();
    seed();

    const onResize = () => {
      resize();
    };
    window.addEventListener("resize", onResize);

    let last = -1;
    const tick = () => {
      const p = progress.get();
      if (Math.abs(p - last) > 0.0008 || last < 0) {
        draw(p);
        last = p;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // Initial + subscribe for smoother updates without waiting for RAF drift
    const unsub = progress.on("change", (v) => {
      draw(v);
      last = v;
    });

    return () => {
      cancelAnimationFrame(raf);
      unsub();
      window.removeEventListener("resize", onResize);
    };
  }, [progress, reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
    />
  );
}
