"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAaMediaQuery } from "@/components/demo/stelzer/useAaMediaQuery";

export function AaCursor() {
  const fine = useAaMediaQuery("(pointer: fine)");
  const reduce = useAaMediaQuery("(prefers-reduced-motion: reduce)");
  const desktop = useAaMediaQuery("(min-width: 768px)");
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const enabled = fine && desktop && !reduce;

  useLayoutEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("aa-cursor");
      setActive(false);
      return;
    }
    document.documentElement.classList.add("aa-cursor");
    setActive(true);
    return () => {
      document.documentElement.classList.remove("aa-cursor");
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
    let raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      hover = Boolean(t?.closest("a, button, input, textarea, select, summary, [role='button']"));
    };

    const tick = () => {
      cx += (mx - cx) * 0.42;
      cy += (my - cy) * 0.42;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      hs += ((hover ? 1.35 : 1) - hs) * 0.08;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%) scale(${hs})`;
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
        className="absolute left-0 top-0 h-8 w-8 rounded-full border border-[var(--aa-ink)]/35"
      />
      <div ref={coreRef} className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-[var(--aa-roof)]" />
    </div>
  );
}
