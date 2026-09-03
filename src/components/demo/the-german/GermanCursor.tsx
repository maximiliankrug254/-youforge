"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function GermanCursor() {
  const reduce = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLSpanElement>(null);
  const dot = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    const el = root.current;
    const ringEl = ring.current;
    const dotEl = dot.current;
    if (!el || !ringEl || !dotEl) return;

    document.documentElement.classList.add("tg-cursor-on");
    el.hidden = false;

    const pos = { x: 0, y: 0 };
    const lag = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const target = e.target as HTMLElement | null;
      el.classList.toggle("is-hot", Boolean(target?.closest("a, button")));
    };

    const tick = () => {
      lag.x += (pos.x - lag.x) * 0.16;
      lag.y += (pos.y - lag.y) * 0.16;
      dotEl.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      ringEl.style.transform = `translate(${lag.x}px, ${lag.y}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("tg-cursor-on");
    };
  }, [reduce]);

  return (
    <div ref={root} className="tg-cursor" hidden aria-hidden>
      <span ref={ring} className="tg-cursor-ring" />
      <span ref={dot} className="tg-cursor-dot" />
    </div>
  );
}
