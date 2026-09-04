"use client";

import { useEffect, useRef } from "react";
import { useVaultMediaQuery } from "@/components/demo/vault/useVaultMediaQuery";

export function VaultCursor() {
  const fine = useVaultMediaQuery("(pointer: fine)");
  const reduce = useVaultMediaQuery("(prefers-reduced-motion: reduce)");
  const coreRef = useRef<HTMLDivElement>(null);
  const heatRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fine) return;

    document.documentElement.classList.add("vault-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let hx = mx;
    let hy = my;
    let vx = 0;
    let vy = 0;
    let hover = false;
    let raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      hover = Boolean(
        t?.closest(
          "a, button, input, textarea, select, label, [data-vault-hover]",
        ),
      );
    };

    const tick = () => {
      const lerp = reduce ? 1 : 0.14;
      const dx = mx - hx;
      const dy = my - hy;
      hx += dx * lerp;
      hy += dy * lerp;
      vx = vx * 0.72 + dx * 0.28;
      vy = vy * 0.72 + dy * 0.28;
      const speed = Math.min(Math.hypot(vx, vy), 48);
      const stretch = reduce ? 1 : 1 + speed * 0.022;
      const angle = Math.atan2(vy, vx) || 0;
      const punch = hover ? 1.6 : 1;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;
      }
      if (heatRef.current) {
        heatRef.current.style.transform = `translate3d(${hx}px,${hy}px,0) translate(-50%,-50%) scale(${1 + speed * 0.012})`;
        heatRef.current.style.opacity = String(0.45 + Math.min(speed * 0.012, 0.4));
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%) rotate(${angle}rad) scale(${punch * stretch}, ${punch / stretch})`;
        ringRef.current.dataset.hover = hover ? "1" : "0";
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("vault-cursor");
    };
  }, [fine, reduce]);

  if (!fine) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[130] hidden md:block" aria-hidden>
      <div
        ref={heatRef}
        className="absolute left-0 top-0 h-16 w-16 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,26,0.55) 0%, rgba(255,106,26,0.12) 42%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-7 w-7 rounded-full border border-[rgba(232,176,109,0.45)]"
        style={{ boxShadow: "0 0 12px rgba(255,106,26,0.25)" }}
      />
      <div
        ref={coreRef}
        className="absolute left-0 top-0 h-[5px] w-[5px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, #fff 0%, #ffd7a8 28%, #ff6a1a 72%, #c2410c 100%)",
          boxShadow: "0 0 10px #ff6a1a, 0 0 2px #fff",
        }}
      />
    </div>
  );
}
