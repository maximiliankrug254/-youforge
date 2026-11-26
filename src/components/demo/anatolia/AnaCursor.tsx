"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { useAnaMediaQuery } from "@/components/demo/anatolia/useAnaMediaQuery";

export function AnaCursor() {
  const fine = useAnaMediaQuery("(pointer: fine)");
  const reduce = useAnaMediaQuery("(prefers-reduced-motion: reduce)");
  const desktop = useAnaMediaQuery("(min-width: 768px)");
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const enabled = fine && desktop && !reduce;

  useLayoutEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("ana-cursor");
      return;
    }
    document.documentElement.classList.add("ana-cursor");
    return () => document.documentElement.classList.remove("ana-cursor");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let rx = mx;
    let ry = my;
    let hover = false;
    let hs = 1;
    let label = "";
    let raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      const hot = t?.closest(
        "a, button, input, textarea, select, summary, [role='button'], [data-ana-hot]",
      ) as HTMLElement | null;
      hover = Boolean(hot);
      label = hot?.dataset.anaHot || (hot ? "Öffnen" : "");
    };

    const tick = () => {
      cx += (mx - cx) * 0.45;
      cy += (my - cy) * 0.45;
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      hs += ((hover ? 1.55 : 1) - hs) * 0.1;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%) scale(${hs})`;
        ringRef.current.style.borderColor = hover
          ? "rgba(212,160,23,0.9)"
          : "rgba(255,255,255,0.35)";
      }
      if (labelRef.current) {
        labelRef.current.textContent = label;
        labelRef.current.style.opacity = label ? "1" : "0";
        labelRef.current.style.transform = `translate3d(${rx + 22}px,${ry - 10}px,0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]" aria-hidden>
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-10 w-10 rounded-full border border-white/35"
      />
      <div
        ref={coreRef}
        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-[var(--ana-amber)] shadow-[0_0_18px_rgba(212,160,23,0.65)]"
      />
      <div
        ref={labelRef}
        className="absolute left-0 top-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ana-amber)] opacity-0 transition-opacity"
      />
    </div>
  );
}
