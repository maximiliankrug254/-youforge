"use client";

import Image from "next/image";
import { AA_COLLAGE } from "@/components/demo/aa/aa-content";
import { AaReveal } from "@/components/demo/aa/AaReveal";

export function AaCollage() {
  return (
    <section
      data-aa-tone="tan"
      className="relative z-10 overflow-hidden px-5 py-16 text-[var(--aa-ink)] sm:px-8 lg:px-12"
    >
      <AaReveal className="relative z-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.42em] opacity-50">+++ uniqueness +++</p>
        <h2 className="mt-6 font-aa-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.95] tracking-[-0.03em]">
          Why Ast & Asche
          <br />
          captivate
        </h2>
      </AaReveal>

      <div className="relative mx-auto mt-16 min-h-[88vw] max-w-[1200px] sm:min-h-[720px]">
        {AA_COLLAGE.map((card) => (
          <article
            key={card.label}
            className={`absolute overflow-hidden shadow-[0_20px_60px_rgba(22,17,13,0.18)] ${card.pos}`}
            style={{ transform: `rotate(${card.rot}deg)` }}
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={card.src}
                alt={card.label}
                fill
                sizes="40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-3 text-[9px] uppercase tracking-[0.18em] text-[var(--aa-tan)]">
                <span>{card.label}</span>
                <span className="grid h-6 w-6 place-items-center rounded-full border border-current">
                  +
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
