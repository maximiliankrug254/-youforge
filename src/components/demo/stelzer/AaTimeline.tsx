"use client";

import { AA_TIMELINE } from "@/components/demo/stelzer/aa-content";

export function AaTimeline() {
  return (
    <section data-aa-tone="tan" className="relative z-10 bg-[var(--aa-tan)] px-5 py-16 text-[var(--aa-ink)] sm:px-8">
      <div className="relative z-10 mx-auto max-w-3xl border-y border-[var(--aa-ink)]/20 px-2 py-12 sm:px-4">
        <p className="font-aa-display text-[clamp(2.8rem,8vw,4.4rem)] leading-none tracking-[-0.04em]">
          2006 — 2026
        </p>
        <ul className="mt-8 space-y-0">
          {AA_TIMELINE.map(([left, right]) => (
            <li
              key={left}
              className="flex items-baseline justify-between gap-4 border-t border-[var(--aa-ink)]/15 py-4 text-[11px] uppercase tracking-[0.16em]"
            >
              <span>{left}</span>
              <span className="opacity-70">{right}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-16" />
    </section>
  );
}
