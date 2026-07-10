"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/constants";
import {
  buildIntroScene,
  drawTrackedText,
  INTRO_DURATION_MS,
  INTRO_IMPACT_MS,
  particleProgress,
  easeOutQuart,
  type IntroLayout,
  type IntroParticle,
} from "@/lib/intro-particles";

const LIME = "#c8ff00";
const LIME_SOFT = "rgba(200, 255, 0, 0.28)";

function drawLabelReveal(
  ctx: CanvasRenderingContext2D,
  layout: IntroLayout,
  elapsed: number
) {
  if (elapsed < INTRO_IMPACT_MS) return;

  const reveal = easeOutQuart(
    Math.min(1, (elapsed - INTRO_IMPACT_MS) / 450)
  );

  ctx.save();
  ctx.globalAlpha = reveal * 0.55;
  ctx.fillStyle = LIME;
  ctx.translate(layout.originX, layout.originY);
  drawTrackedText(
    ctx,
    layout.text,
    layout.boxWidth,
    layout.boxHeight,
    layout.fontSize,
    0.24
  );
  ctx.restore();
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  particles: IntroParticle[],
  layout: IntroLayout,
  elapsed: number,
  fadeOut: number
) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, width, height);

  const cx = width / 2;
  const cy = height / 2;
  const breathe = 0.12 + Math.sin(elapsed * 0.004) * 0.04;
  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.38);
  glow.addColorStop(0, `rgba(200,255,0,${breathe})`);
  glow.addColorStop(1, "rgba(200,255,0,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  const formed = elapsed >= INTRO_IMPACT_MS;

  for (const particle of particles) {
    const t = particleProgress(elapsed, particle.delay);
    const x = particle.startX + (particle.endX - particle.startX) * t;
    const y = particle.startY + (particle.endY - particle.startY) * t;
    const settled = t >= 0.97;
    const glowR = settled && formed ? 3.8 : 2.6;
    const coreR = settled && formed ? 1.75 : 1.3;

    ctx.beginPath();
    ctx.arc(x, y, glowR, 0, Math.PI * 2);
    ctx.fillStyle = LIME_SOFT;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, coreR, 0, Math.PI * 2);
    ctx.fillStyle = LIME;
    ctx.fill();
  }

  drawLabelReveal(ctx, layout, elapsed);

  if (formed) {
    const flashT = Math.min(1, (elapsed - INTRO_IMPACT_MS) / 220);
    const flashAlpha = (1 - flashT) * 0.28;
    if (flashAlpha > 0) {
      ctx.fillStyle = `rgba(200,255,0,${flashAlpha})`;
      ctx.fillRect(0, 0, width, height);
    }

    const ringT = Math.min(1, (elapsed - INTRO_IMPACT_MS) / 650);
    const ringRadius = 40 + ringT * Math.min(width, height) * 0.42;
    ctx.beginPath();
    ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(200,255,0,${(1 - ringT) * 0.45})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  if (fadeOut > 0) {
    ctx.fillStyle = `rgba(0,0,0,${fadeOut})`;
    ctx.fillRect(0, 0, width, height);
  }
}

export function IntroLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("youforge-intro", "1");
      return;
    }

    if (sessionStorage.getItem("youforge-intro")) return;

    setPlay(true);
  }, []);

  useEffect(() => {
    if (!play) return;

    let raf = 0;
    let cancelled = false;

    const startAnimation = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        raf = requestAnimationFrame(startAnimation);
        return;
      }

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const { particles, layout } = buildIntroScene(
        siteConfig.name.toUpperCase(),
        { width, height }
      );

      const start = performance.now();
      let fadeOut = 0;

      const tick = (now: number) => {
        if (cancelled) return;

        const elapsed = now - start;

        if (elapsed >= INTRO_DURATION_MS - 450) {
          fadeOut = Math.min(1, (elapsed - (INTRO_DURATION_MS - 450)) / 450);
        }

        drawFrame(ctx, width, height, particles, layout, elapsed, fadeOut);

        if (elapsed < INTRO_DURATION_MS) {
          raf = requestAnimationFrame(tick);
          return;
        }

        sessionStorage.setItem("youforge-intro", "1");
        setPlay(false);
      };

      raf = requestAnimationFrame(tick);
    };

    startAnimation();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [play]);

  if (!play) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] bg-black"
      aria-label="YouForge Intro"
      role="presentation"
    />
  );
}
