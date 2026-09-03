"use client";

import { useEffect, useRef } from "react";

export function GermanSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;

    const onMove = (e: MouseEvent) => {
      const box = host.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - box.left}px`);
      el.style.setProperty("--sy", `${e.clientY - box.top}px`);
    };
    host.addEventListener("mousemove", onMove, { passive: true });
    return () => host.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="tg-spotlight" aria-hidden />;
}
