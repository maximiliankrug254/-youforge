"use client";

import Image from "next/image";
import { AA_IMG } from "@/components/demo/aa/aa-config";
import { AA_TIMELINE } from "@/components/demo/aa/aa-content";

export function AaTimeline() {
  return (
    <section data-aa-tone="tan" className="relative z-10 text-[var(--aa-ink)]">
      <div className="relative h-[48vh] min-h-[280px] w-full">
        <Image
          src={AA_IMG.table}
          alt="Tisch und Gefäße im Schauraum"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-xl bg-[var(--aa-ink)] px-8 py-10 text-[var(--aa-tan)] sm:-mt-32 sm:px-12 sm:py-12">
        <p className="font-aa-display text-[clamp(2.8rem,8vw,4.4rem)] leading-none tracking-[-0.04em]">
          ’24 — ’26
        </p>
        <ul className="mt-8 space-y-0">
          {AA_TIMELINE.map(([left, right]) => (
            <li
              key={left}
              className="flex items-baseline justify-between gap-4 border-t border-[var(--aa-tan)]/25 py-4 text-[11px] uppercase tracking-[0.16em]"
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
