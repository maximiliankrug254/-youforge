"use client";

import { useLayoutEffect, useRef, useState } from "react";

export function RkGhostWord({
  children,
  onDark = false,
  align = "left",
  className = "",
}: {
  children: string;
  onDark?: boolean;
  align?: "left" | "right" | "center";
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLParagraphElement>(null);
  const [fontSize, setFontSize] = useState(48);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const word = wordRef.current;
    if (!wrap || !word) return;

    const fit = () => {
      const available = wrap.clientWidth;
      if (available < 32) return;

      let lo = 24;
      let hi = Math.min(220, available * 0.42);
      word.style.fontSize = `${hi}px`;

      for (let i = 0; i < 18; i += 1) {
        const mid = (lo + hi) / 2;
        word.style.fontSize = `${mid}px`;
        if (word.scrollWidth <= available) lo = mid;
        else hi = mid;
      }

      setFontSize(Math.floor(lo * 0.96));
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [children]);

  const alignClass =
    align === "right"
      ? "text-right"
      : align === "center"
        ? "text-center"
        : "text-left";

  return (
    <div
      ref={wrapRef}
      className={`rk-ghost-band pointer-events-none w-full min-w-0 select-none ${className}`}
      aria-hidden
    >
      <p
        ref={wordRef}
        className={`rk-ghost-word font-rk-display uppercase ${alignClass} ${
          onDark ? "text-white/[0.08]" : "text-[var(--rk-purple)]/[0.08]"
        }`}
        style={{ fontSize }}
      >
        {children}
      </p>
    </div>
  );
}
