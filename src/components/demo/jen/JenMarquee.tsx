"use client";

import { useReducedMotion } from "framer-motion";

const PHRASE =
  "Dachbeschichtung  ·  Dachreinigung  ·  Versiegelung  ·  Fassade  ·  Hof & Mauer  ·  10 Jahre Garantie  ·  ";

export function JenMarquee({ flip = false }: { flip?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden border-y border-white/[0.06] bg-[var(--jen-ink)] py-4 text-[var(--jen-accent)] ${
        flip ? "border-white/[0.04]" : ""
      }`}
      aria-hidden
    >
      <div
        className={`flex whitespace-nowrap font-jen-display text-[11px] font-medium uppercase tracking-[0.32em] sm:text-xs ${
          reduceMotion ? "" : "jen-marquee"
        }`}
        style={flip && !reduceMotion ? { animationDirection: "reverse" } : undefined}
      >
        <span className="px-2">{PHRASE.repeat(4)}</span>
        <span className="px-2">{PHRASE.repeat(4)}</span>
      </div>
    </div>
  );
}
