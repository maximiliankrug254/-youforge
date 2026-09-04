"use client";

import { useEffect, useRef } from "react";

export function VaultDust() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctxNode = canvas.getContext("2d");
    if (!ctxNode) return;
    const surface: HTMLCanvasElement = canvas;
    const ctx: CanvasRenderingContext2D = ctxNode;

    const n = 48;
    const dots = Array.from({ length: n }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.4 + Math.random() * 1.4,
      s: 0.00012 + Math.random() * 0.00028,
      a: 0.08 + Math.random() * 0.18,
    }));

    let raf = 0;
    let running = true;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      surface.width = Math.floor(window.innerWidth * dpr);
      surface.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      if (!running) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.y -= d.s * h;
        d.x += Math.sin(d.y * 0.01) * 0.00015;
        if (d.y < -0.02) {
          d.y = 1.02;
          d.x = Math.random();
        }
        ctx.fillStyle = `rgba(212,181,106,${d.a})`;
        ctx.beginPath();
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = window.requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = window.requestAnimationFrame(draw);
    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[35]"
      aria-hidden
    />
  );
}
