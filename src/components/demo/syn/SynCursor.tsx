"use client";

import { useEffect, useRef, useState } from "react";

export function SynCursor() {
  const el = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setOn(true);
    document.documentElement.classList.add("syn-cursor");

    let mx = innerWidth / 2;
    let my = innerHeight / 2;
    let x = mx;
    let y = my;
    let raf = 0;
    let mode = "";

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = (e.target as HTMLElement | null)?.closest("[data-cursor]") as HTMLElement | null;
      mode = t?.dataset.cursor ?? "";
    };

    const tick = () => {
      x += (mx - x) * 0.18;
      y += (my - y) * 0.18;
      if (el.current) {
        el.current.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
        el.current.dataset.mode = mode;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("syn-cursor");
    };
  }, []);

  if (!on) return null;

  return (
    <div ref={el} className="syn-cur" aria-hidden>
      <span className="syn-cur__dot" />
      <span className="syn-cur__label">
        <strong>[</strong> DRAG CLICK <strong>]</strong>
      </span>
    </div>
  );
}
