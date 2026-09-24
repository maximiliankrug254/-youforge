"use client";

import { useState } from "react";
import { AA_FAQ } from "@/components/demo/stelzer/aa-content";

export function AaFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      data-aa-tone="tan"
      className="relative z-10 bg-[var(--aa-tan)] px-5 py-20 text-[var(--aa-ink)] sm:px-8 lg:px-12"
    >
      <div className="mb-10 max-w-xl">
        <p className="text-[13px] uppercase tracking-[0.18em] opacity-55">Fragen</p>
        <h2 className="mt-3 font-aa-display text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.03em]">
          Bevor Sie anrufen.
        </h2>
      </div>

      <ul>
        {AA_FAQ.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <li key={item.q} className="border-t border-[var(--aa-ink)]/15">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="w-10 shrink-0 text-[12px] tracking-[0.16em] opacity-50">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[17px] leading-snug">{item.q}</span>
                <span className="text-lg leading-none">{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen ? (
                <p className="max-w-2xl pb-6 pl-10 text-[17px] leading-relaxed sm:pl-16">
                  {item.a}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
