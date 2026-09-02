"use client";

import { useState } from "react";
import { AA_FAQ } from "@/components/demo/aa/aa-content";

export function AaFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      data-aa-tone="dark"
      className="relative z-10 px-5 py-20 text-[var(--aa-tan)] sm:px-8 lg:px-12"
    >
      <div className="mb-16 flex items-end justify-between gap-6">
        {["F", "A", "Q"].map((letter, i) => (
          <div key={letter} className="flex-1">
            <p className="font-aa-display text-[clamp(3.5rem,12vw,9rem)] leading-none">{letter}</p>
            {i === 0 ? (
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] opacity-50">
                Answers to key questions
              </p>
            ) : null}
            {i === 2 ? (
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] opacity-50">
                All you need to know
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <ul>
        {AA_FAQ.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <li key={item.q} className="border-t border-[var(--aa-tan)]/25">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="w-10 shrink-0 text-[12px] tracking-[0.16em] opacity-50">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[12px] uppercase tracking-[0.16em]">{item.q}</span>
                <span className="text-lg leading-none">{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen ? (
                <p className="max-w-2xl pb-6 pl-10 text-[13px] leading-relaxed tracking-wide opacity-70 sm:pl-16">
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
