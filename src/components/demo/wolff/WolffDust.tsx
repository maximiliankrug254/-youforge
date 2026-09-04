"use client";

import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  r: number;
  s: number;
  a: number;
  drift: number;
  phase: number;
};

export function WolffDust() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const count = window.innerWidth < 900 ? 28 : 52;
    const motes: Mote[] = [];

    const spawn = (): Mote => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.5 + Math.random() * 1.4,
      s: 0.08 + Math.random() * 0.18,
      a: 0.12 + Math.random() * 0.32,
      drift: (Math.random() - 0.5) * 0.12,
      phase: Math.random() * Math.PI * 2,
    });

    for (let i = 0; i < count; i++) motes.push(spawn());

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = (now: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      const t = now * 0.001;

      for (const m of motes) {
        m.y -= m.s * 0.0011;
        m.x += Math.sin(t * 0.35 + m.phase) * 0.00018 + m.drift * 0.00012;
        if (m.y < -0.02) {
          m.y = 1.04;
          m.x = Math.random();
        }
        if (m.x < -0.02) m.x = 1.02;
        if (m.x > 1.02) m.x = -0.02;

        const px = m.x * w;
        const py = m.y * h;
        const flicker = 0.65 + Math.sin(t * 3.2 + m.phase) * 0.35;
        ctx.beginPath();
        ctx.fillStyle = `rgba(230, 211, 180, ${m.a * flicker})`;
        ctx.arc(px, py, m.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running) raf = requestAnimationFrame(tick);
      else cancelAnimationFrame(raf);
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[82] hidden mix-blend-screen md:block"
      aria-hidden
    />
  );
}
