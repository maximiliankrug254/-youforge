"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; z: number };

function fibonacciSphere(count: number): Point[] {
  const pts: Point[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts.push({
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
    });
  }
  return pts;
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const n = Number.parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function VaultOrb({
  color,
  className = "",
}: {
  color: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef(color);
  colorRef.current = color;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctxNode = canvas.getContext("2d", { alpha: true });
    if (!ctxNode) return;
    const surface: HTMLCanvasElement = canvas;
    const ctx: CanvasRenderingContext2D = ctxNode;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points = fibonacciSphere(reduce ? 280 : 720);
    const hoops = [0.42, 0.72, 0.96];
    let raf = 0;
    let running = true;
    let t = 0;
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;

    const rgb = { r: 212, g: 181, b: 106 };
    const target = { ...rgb };

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      const rect = surface.getBoundingClientRect();
      surface.width = Math.max(1, Math.floor(rect.width * dpr));
      surface.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onMove(e: PointerEvent) {
      const rect = surface.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7;
      my = ((e.clientY - rect.top) / rect.height - 0.5) * 0.7;
    }

    function draw() {
      if (!running) return;
      const rect = surface.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const next = hexToRgb(colorRef.current);
      target.r = next.r;
      target.g = next.g;
      target.b = next.b;
      rgb.r += (target.r - rgb.r) * 0.06;
      rgb.g += (target.g - rgb.g) * 0.06;
      rgb.b += (target.b - rgb.b) * 0.06;

      tx += (mx - tx) * 0.06;
      ty += (my - ty) * 0.06;
      t += reduce ? 0 : 0.0042;

      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.38;
      const rotY = t + tx;
      const rotX = 0.35 + ty;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const glow = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R * 1.35);
      glow.addColorStop(0, `rgba(${rgb.r | 0},${rgb.g | 0},${rgb.b | 0},0.18)`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2);
      ctx.fill();

      for (const p of points) {
        const y1 = p.y * cosX - p.z * sinX;
        const z1 = p.y * sinX + p.z * cosX;
        const x2 = p.x * cosY + z1 * sinY;
        const z2 = -p.x * sinY + z1 * cosY;
        const depth = (z2 + 1.15) / 2.15;
        const px = cx + x2 * R;
        const py = cy + y1 * R;
        const size = 0.6 + depth * 1.7;
        const alpha = 0.12 + depth * 0.72;
        ctx.fillStyle = `rgba(${rgb.r | 0},${rgb.g | 0},${rgb.b | 0},${alpha})`;
        ctx.fillRect(px, py, size, size);
      }

      ctx.strokeStyle = `rgba(${rgb.r | 0},${rgb.g | 0},${rgb.b | 0},0.28)`;
      ctx.lineWidth = 1;
      for (const hoop of hoops) {
        ctx.beginPath();
        let first = true;
        for (let a = 0; a <= 64; a++) {
          const ang = (a / 64) * Math.PI * 2;
          const x = Math.cos(ang) * hoop;
          const z = Math.sin(ang) * hoop;
          const y = hoop === 0.72 ? 0.08 : hoop === 0.42 ? -0.12 : 0.02;
          const y1 = y * cosX - z * sinX;
          const z1 = y * sinX + z * cosX;
          const x2 = x * cosY + z1 * sinY;
          const px = cx + x2 * R;
          const py = cy + y1 * R;
          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      raf = window.requestAnimationFrame(draw);
    }

    resize();
    surface.addEventListener("pointermove", onMove);
    window.addEventListener("resize", resize);
    raf = window.requestAnimationFrame(draw);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      surface.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full ${className}`}
      aria-hidden
    />
  );
}
