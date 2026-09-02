"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AA_IMG } from "@/components/demo/aa/aa-config";
import { AaReveal } from "@/components/demo/aa/AaReveal";

export function AaSeasons() {
  const track = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0.15);

  function fromClientX(clientX: number) {
    const el = track.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    setT(next);
  }

  return (
    <section
      data-aa-tone="dark"
      className="relative z-10 overflow-hidden px-5 py-20 text-[var(--aa-tan)] sm:px-8 lg:px-12"
    >
      <AaReveal>
        <p className="text-[10px] uppercase tracking-[0.42em] opacity-55">+++ material +++</p>
        <h2 className="mt-6 max-w-3xl font-aa-display text-[clamp(1.8rem,4.5vw,3.4rem)] leading-[1.15]">
          Eine Legende aus dem Westerwald: Maserung und Glasur, derselbe Winter,
          dasselbe Feuer.
        </h2>
      </AaReveal>

      <div className="relative mt-16 grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src={AA_IMG.oak} alt="Rohholz" fill sizes="50vw" className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${ (1 - t) * 100 }% 0 0)` }}
          >
            <Image src={AA_IMG.kiln} alt="Brand" fill sizes="50vw" className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <p className="max-w-sm text-[12px] uppercase leading-[1.9] tracking-[0.14em] opacity-80">
            Links das Holz, noch nass von der Säge. Rechts der Ofen, wenn die Asche
            Glas wird. Halte und ziehe — dasselbe Stück, zwei Zustände.
          </p>

          <div
            ref={track}
            className="relative mt-12 cursor-ew-resize select-none py-8"
            onPointerDown={(e) => {
              (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
              fromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (e.buttons) fromClientX(e.clientX);
            }}
          >
            <p className="mb-6 text-center text-[10px] uppercase tracking-[0.32em]">
              Halten und ziehen
            </p>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em]">
              <span>Holz</span>
              <span>Brand</span>
            </div>
            <div className="relative mt-4 h-px bg-[var(--aa-tan)]/30">
              <span
                className="absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-current bg-[var(--aa-ink)]"
                style={{ left: `${t * 100}%` }}
              >
                {t < 0.5 ? "⌘" : "▲"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
