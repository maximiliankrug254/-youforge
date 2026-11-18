"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function BbfCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useLayoutEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 768px)");
    const sync = () => setEnabled(fine.matches && wide.matches && !reduce.matches);
    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    wide.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      wide.removeEventListener("change", sync);
    };
  }, []);

  useLayoutEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("bbf-cursor");
      return;
    }
    document.documentElement.classList.add("bbf-cursor");
    return () => document.documentElement.classList.remove("bbf-cursor");
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
    let scale = 1;
    let visible = false;
    let raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      visible = true;
      const target = e.target as Element | null;
      hover = Boolean(
        target?.closest("a, button, input, textarea, select, summary, [role='button']"),
      );
    };

    const hide = () => {
      visible = false;
    };

    const tick = () => {
      cx += (mx - cx) * 0.55;
      cy += (my - cy) * 0.55;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      scale += ((hover ? 1.7 : 1) - scale) * 0.12;

      const opacity = visible ? "1" : "0";
      if (coreRef.current) {
        coreRef.current.style.opacity = opacity;
        coreRef.current.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = opacity;
        ringRef.current.dataset.hot = hover ? "1" : "0";
        ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", hide);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", hide);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[180]" aria-hidden>
      <div ref={ringRef} className="bbf-cursor-ring absolute left-0 top-0 h-12 w-12 opacity-0">
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <circle cx="24" cy="24" r="15" />
          <path d="M24 2.5v7.5M24 38v7.5M2.5 24H10M38 24h7.5" />
        </svg>
      </div>
      <div
        ref={coreRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-white opacity-0 shadow-[0_0_14px_3px_var(--bbf-red)]"
      />
    </div>
  );
}
