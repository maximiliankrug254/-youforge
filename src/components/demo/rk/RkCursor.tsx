"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRkMediaQuery } from "@/components/demo/rk/useRkMediaQuery";

/** Dezent: kleiner Limetten-Punkt + feiner Ring — kein dunkler Klecks */
export function RkCursor() {
  const fine = useRkMediaQuery("(pointer: fine)");
  const reduce = useRkMediaQuery("(prefers-reduced-motion: reduce)");
  const desktop = useRkMediaQuery("(min-width: 768px)");
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const enabled = fine && desktop && !reduce;

  useLayoutEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("rk-cursor");
      setActive(false);
      return;
    }
    document.documentElement.classList.add("rk-cursor");
    setActive(true);
    return () => {
      document.documentElement.classList.remove("rk-cursor");
      setActive(false);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let hover = false;
    let raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      hover = Boolean(
        t?.closest(
          "a, button, input, textarea, select, label, [role='button'], [data-rk-hover]",
        ),
      );
    };

    const tick = () => {
      rx += (mx - rx) * 0.22;
      ry += (my - ry) * 0.22;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%) scale(${hover ? 0.65 : 1})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%) scale(${hover ? 1.45 : 1})`;
        ringRef.current.style.opacity = hover ? "0.95" : "0.55";
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

  if (!enabled || !active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]" aria-hidden>
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-7 w-7 rounded-full border border-[var(--rk-lime)] bg-transparent"
      />
      <div
        ref={coreRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-[var(--rk-lime)]"
      />
    </div>
  );
}
