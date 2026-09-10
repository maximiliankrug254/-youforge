"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRkMediaQuery } from "@/components/demo/rk/useRkMediaQuery";

/** Dezent: kleiner oliv-dunkler Punkt + feiner Ring, weiches Nachziehen */
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
    let cx = mx;
    let cy = my;
    let rx = mx;
    let ry = my;
    let hover = false;
    let hs = 1;
    let cs = 1;
    let ho = 0.38;
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
      cx += (mx - cx) * 0.38;
      cy += (my - cy) * 0.38;
      rx += (mx - rx) * 0.09;
      ry += (my - ry) * 0.09;
      hs += ((hover ? 1.16 : 1) - hs) * 0.07;
      cs += ((hover ? 0.88 : 1) - cs) * 0.07;
      ho += ((hover ? 0.58 : 0.38) - ho) * 0.07;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%) scale(${cs})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%) scale(${hs})`;
        ringRef.current.style.opacity = String(ho);
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
        className="absolute left-0 top-0 h-6 w-6 rounded-full border bg-transparent"
        style={{
          borderColor:
            "color-mix(in srgb, var(--rk-lime-deep) 42%, var(--rk-ink))",
          opacity: 0.38,
        }}
      />
      <div
        ref={coreRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full"
        style={{
          background:
            "color-mix(in srgb, var(--rk-lime-deep) 48%, var(--rk-ink))",
        }}
      />
    </div>
  );
}
