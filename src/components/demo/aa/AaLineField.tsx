"use client";

import { useEffect, useRef } from "react";
import { useAaMediaQuery } from "@/components/demo/aa/useAaMediaQuery";

type Mode = "horizon" | "vessel" | "chair" | "ridge";

type Props = {
  className?: string;
  color?: string;
  mode?: Mode;
  density?: number;
  interactive?: boolean;
  /** Slow time-based drift. Off = still drawing, redraw only on resize. */
  drift?: boolean;
};

function hash(n: number) {
  const s = Math.sin(n * 127.1) * 43758.5453;
  return s - Math.floor(s);
}

function valueNoise(x: number) {
  const i = Math.floor(x);
  const f = x - i;
  const u = f * f * (3 - 2 * f);
  return hash(i) * (1 - u) + hash(i + 1) * u;
}

function vessel(nx: number) {
  const x = (nx - 0.5) * 2;
  const body = Math.exp(-x * x * 2.8);
  const neck = Math.exp(-Math.pow((nx - 0.5) / 0.12, 2)) * 0.35;
  const foot = Math.max(0, 0.22 - Math.abs(nx - 0.5) * 0.9);
  return Math.min(1, body * 0.72 + neck + foot);
}

function chair(nx: number) {
  const seat = nx > 0.22 && nx < 0.78 ? 0.42 : 0;
  const back = nx > 0.62 && nx < 0.8 ? 0.85 : 0;
  const legL = Math.abs(nx - 0.28) < 0.035 ? 0.55 : 0;
  const legR = Math.abs(nx - 0.7) < 0.035 ? 0.55 : 0;
  return Math.max(seat, back, legL, legR);
}

export function AaLineField({
  className = "",
  color = "#c4b194",
  mode = "horizon",
  density = 3.2,
  interactive = true,
  drift = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5, active: false });
  const reduce = useAaMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    const parent = canvas.parentElement;
    const live = drift && !reduce;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = parent?.clientWidth || window.innerWidth;
      const h = parent?.clientHeight || window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!live) draw();
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      const step = Math.max(2, density);
      const bars = Math.floor(w / step);
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let i = 0; i < bars; i++) {
        const nx = i / bars;
        const n1 = valueNoise(nx * 8 + t * 0.018);
        const n2 = valueNoise(nx * 22 + 20 + t * 0.01);
        let amp = 0.18 + n1 * 0.55 + n2 * 0.22;

        if (mode === "vessel") amp = vessel(nx) * (0.75 + n1 * 0.2);
        if (mode === "chair") amp = Math.max(chair(nx), n1 * 0.08);
        if (mode === "ridge") amp = 0.16 + Math.abs(Math.sin(nx * Math.PI * 3.2)) * 0.42 + n1 * 0.12;

        if (interactive && mouse.current.active) {
          const d = Math.abs(nx - mx);
          const bump = Math.exp(-d * d * 42) * (0.28 + my * 0.2);
          amp = Math.min(1, amp + bump);
        }

        const barH = amp * h * 0.92;
        const x = i * step;
        const y = h - barH;
        const bw = Math.max(1, step * 0.55);
        ctx.globalAlpha = 0.28 + amp * 0.55;
        ctx.fillRect(x, y, bw, barH);
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      t += 0.0032;
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (live) loop();
    else draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [color, density, drift, interactive, mode, reduce]);

  function onMove(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!interactive) return;
    const r = e.currentTarget.getBoundingClientRect();
    mouse.current = {
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
      active: true,
    };
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
      onMouseMove={onMove}
      onMouseLeave={() => {
        mouse.current.active = false;
      }}
    />
  );
}
