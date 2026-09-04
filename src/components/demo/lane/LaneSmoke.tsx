"use client";

import { useEffect, useRef } from "react";

const N = 64;
const SIZE = (N + 2) * (N + 2);
const IX = (i: number, j: number) => i + (N + 2) * j;

export function LaneSmoke() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const u = new Float32Array(SIZE);
    const v = new Float32Array(SIZE);
    const u0 = new Float32Array(SIZE);
    const v0 = new Float32Array(SIZE);
    const dens = new Float32Array(SIZE);
    const dens0 = new Float32Array(SIZE);
    const ember = new Float32Array(SIZE);
    const ember0 = new Float32Array(SIZE);
    const p = new Float32Array(SIZE);
    const div = new Float32Array(SIZE);

    const sim = document.createElement("canvas");
    sim.width = N;
    sim.height = N;
    const simCtx = sim.getContext("2d", { willReadFrequently: true });
    if (!simCtx) return;
    const image = simCtx.createImageData(N, N);
    const pixels = image.data;

    let raf = 0;
    let running = true;
    let visible = true;
    let last = performance.now();
    let mx = N / 2;
    let my = N / 2;
    let lmx = mx;
    let lmy = my;
    let inside = false;

    function setBnd(b: number, x: Float32Array) {
      for (let i = 1; i <= N; i++) {
        x[IX(0, i)] = b === 1 ? -x[IX(1, i)] : x[IX(1, i)];
        x[IX(N + 1, i)] = b === 1 ? -x[IX(N, i)] : x[IX(N, i)];
        x[IX(i, 0)] = b === 2 ? -x[IX(i, 1)] : x[IX(i, 1)];
        x[IX(i, N + 1)] = b === 2 ? -x[IX(i, N)] : x[IX(i, N)];
      }
      x[IX(0, 0)] = 0.5 * (x[IX(1, 0)] + x[IX(0, 1)]);
      x[IX(0, N + 1)] = 0.5 * (x[IX(1, N + 1)] + x[IX(0, N)]);
      x[IX(N + 1, 0)] = 0.5 * (x[IX(N, 0)] + x[IX(N + 1, 1)]);
      x[IX(N + 1, N + 1)] = 0.5 * (x[IX(N, N + 1)] + x[IX(N + 1, N)]);
    }

    function linSolve(b: number, x: Float32Array, x00: Float32Array, a: number, c: number, iters: number) {
      const inv = 1 / c;
      for (let k = 0; k < iters; k++) {
        for (let j = 1; j <= N; j++) {
          for (let i = 1; i <= N; i++) {
            x[IX(i, j)] =
              (x00[IX(i, j)] +
                a *
                  (x[IX(i - 1, j)] +
                    x[IX(i + 1, j)] +
                    x[IX(i, j - 1)] +
                    x[IX(i, j + 1)])) *
              inv;
          }
        }
        setBnd(b, x);
      }
    }

    function diffuse(b: number, x: Float32Array, x00: Float32Array, diff: number, dt: number, iters: number) {
      const a = dt * diff * N * N;
      linSolve(b, x, x00, a, 1 + 4 * a, iters);
    }

    function project(uu: Float32Array, vv: Float32Array) {
      for (let j = 1; j <= N; j++) {
        for (let i = 1; i <= N; i++) {
          div[IX(i, j)] =
            -0.5 *
            (uu[IX(i + 1, j)] - uu[IX(i - 1, j)] + vv[IX(i, j + 1)] - vv[IX(i, j - 1)]) /
            N;
          p[IX(i, j)] = 0;
        }
      }
      setBnd(0, div);
      setBnd(0, p);
      linSolve(0, p, div, 1, 4, 8);
      for (let j = 1; j <= N; j++) {
        for (let i = 1; i <= N; i++) {
          uu[IX(i, j)] -= 0.5 * N * (p[IX(i + 1, j)] - p[IX(i - 1, j)]);
          vv[IX(i, j)] -= 0.5 * N * (p[IX(i, j + 1)] - p[IX(i, j - 1)]);
        }
      }
      setBnd(1, uu);
      setBnd(2, vv);
    }

    function advect(b: number, d: Float32Array, d0: Float32Array, uu: Float32Array, vv: Float32Array, dt: number) {
      const dt0 = dt * N;
      for (let j = 1; j <= N; j++) {
        for (let i = 1; i <= N; i++) {
          let x = i - dt0 * uu[IX(i, j)];
          let y = j - dt0 * vv[IX(i, j)];
          if (x < 0.5) x = 0.5;
          else if (x > N + 0.5) x = N + 0.5;
          if (y < 0.5) y = 0.5;
          else if (y > N + 0.5) y = N + 0.5;
          const i0 = x | 0;
          const i1 = i0 + 1;
          const j0 = y | 0;
          const j1 = j0 + 1;
          const s1 = x - i0;
          const s0 = 1 - s1;
          const t1 = y - j0;
          const t0 = 1 - t1;
          d[IX(i, j)] =
            s0 * (t0 * d0[IX(i0, j0)] + t1 * d0[IX(i0, j1)]) +
            s1 * (t0 * d0[IX(i1, j0)] + t1 * d0[IX(i1, j1)]);
        }
      }
      setBnd(b, d);
    }

    function splat(cx: number, cy: number, radius: number, smokeAmt: number, emberAmt: number, vx: number, vy: number) {
      const sigma = radius * radius * 0.4;
      const reach = radius * 3;
      const i0 = Math.max(1, Math.floor(cx - reach));
      const i1 = Math.min(N, Math.ceil(cx + reach));
      const j0 = Math.max(1, Math.floor(cy - reach));
      const j1 = Math.min(N, Math.ceil(cy + reach));
      for (let j = j0; j <= j1; j++) {
        for (let i = i0; i <= i1; i++) {
          const dx = i - cx;
          const dy = j - cy;
          const w = Math.exp(-(dx * dx + dy * dy) / (2 * sigma));
          if (w < 0.01) continue;
          const idx = IX(i, j);
          dens[idx] += smokeAmt * w;
          ember[idx] += emberAmt * w;
          u[idx] += vx * w;
          v[idx] += vy * w;
        }
      }
    }

    function toGrid(clientX: number, clientY: number) {
      const rect = canvas.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * N + 1;
      const y = ((clientY - rect.top) / rect.height) * N + 1;
      return { x, y, inside: x >= 1 && x <= N && y >= 1 && y <= N };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
    }

    function seed() {
      for (let k = 0; k < 10; k++) {
        splat(8 + Math.random() * (N - 16), N * 0.72 + Math.random() * 8, 3.2, 1.4, 0.35, 0, -1.8);
      }
    }

    function step(dt: number, now: number) {
      if (!reduce) {
        const a = now * 0.0004;
        splat(N * 0.28 + Math.sin(a) * 8, N * 0.78, 2.6, 0.18, 0.08, 0.2, -1.1);
        splat(N * 0.7 + Math.cos(a * 0.8) * 7, N * 0.8, 2.4, 0.16, 0.12, -0.15, -1.0);
      }

      if (inside) {
        const dx = mx - lmx;
        const dy = my - lmy;
        splat(mx, my, 2.4 + Math.min(Math.hypot(dx, dy), 6) * 0.3, 0.55, 0.7, dx * 6, dy * 6);
      }
      lmx = mx;
      lmy = my;

      u0.set(u);
      diffuse(1, u, u0, 0.00003, dt, 3);
      v0.set(v);
      diffuse(2, v, v0, 0.00003, dt, 3);
      project(u, v);
      u0.set(u);
      v0.set(v);
      advect(1, u, u0, u0, v0, dt);
      advect(2, v, v0, u0, v0, dt);
      project(u, v);
      for (let i = 0; i < SIZE; i++) {
        u[i] *= 0.996;
        v[i] *= 0.996;
        v[i] -= 0.012;
      }

      dens0.set(dens);
      diffuse(0, dens, dens0, 0.00008, dt, 3);
      dens0.set(dens);
      advect(0, dens, dens0, u, v, dt);
      ember0.set(ember);
      diffuse(0, ember, ember0, 0.00008, dt, 3);
      ember0.set(ember);
      advect(0, ember, ember0, u, v, dt);
      for (let i = 0; i < SIZE; i++) {
        dens[i] *= 0.989;
        ember[i] *= 0.985;
      }
    }

    function draw() {
      let pxl = 0;
      for (let j = 1; j <= N; j++) {
        for (let i = 1; i <= N; i++) {
          const idx = IX(i, j);
          const s = Math.min(1, dens[idx] * 0.85);
          const e = Math.min(1, ember[idx] * 1.1);
          pixels[pxl] = Math.min(255, 210 * s + 255 * e);
          pixels[pxl + 1] = Math.min(255, 205 * s + 110 * e);
          pixels[pxl + 2] = Math.min(255, 198 * s + 30 * e);
          pixels[pxl + 3] = Math.min(255, s * 210 + e * 180);
          pxl += 4;
        }
      }
      simCtx.putImageData(image, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(sim, 0, 0, canvas.width, canvas.height);
    }

    const onMove = (e: PointerEvent) => {
      const g = toGrid(e.clientX, e.clientY);
      inside = g.inside;
      if (g.inside) {
        mx = g.x;
        my = g.y;
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    io.observe(canvas);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    seed();

    const loop = (now: number) => {
      if (!running) return;
      const dt = Math.min(0.8, (now - last) * 0.055);
      last = now;
      if (visible) {
        step(dt, now);
        draw();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
