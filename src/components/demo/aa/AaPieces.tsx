"use client";

import Image from "next/image";
import { useState } from "react";
import { AA_PIECES } from "@/components/demo/aa/aa-content";
import { AaButton } from "@/components/demo/aa/AaButton";
import { AaReveal } from "@/components/demo/aa/AaReveal";

export function AaPieces() {
  const [active, setActive] = useState(0);
  const [frame, setFrame] = useState(0);
  const piece = AA_PIECES[active];
  const stillIndex =
    ((frame % piece.stills.length) + piece.stills.length) % piece.stills.length;
  const still = piece.stills[stillIndex];

  return (
    <section
      id="stuecke"
      data-aa-tone="tan"
      className="relative z-10 scroll-mt-24 text-[var(--aa-ink)]"
    >
      <AaReveal className="px-5 pt-24 sm:px-8 lg:px-12">
        <p className="text-[10px] uppercase tracking-[0.42em] opacity-50">+++ stücke +++</p>
        <h2 className="mt-5 max-w-4xl font-aa-display text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[1.15] tracking-[-0.03em]">
          Stühle, Tische, Leuchten und Gefäße für einen, zwei oder den ganzen Tisch.
          Panoramafenster braucht das Stück nicht — es ist selbst eines.
        </h2>
      </AaReveal>

      <div className="mt-16 grid border-t border-[var(--aa-ink)]/20 lg:grid-cols-[220px_1fr_minmax(280px,38%)]">
        <aside className="border-b border-[var(--aa-ink)]/20 px-5 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.32em] opacity-50">Types</p>
          <ul className="mt-6 space-y-3">
            {AA_PIECES.map((p, idx) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(idx);
                    setFrame(0);
                  }}
                  className={`flex items-center gap-2 text-left text-[12px] uppercase tracking-[0.22em] ${
                    idx === active ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {idx === active ? <span aria-hidden>◇</span> : <span className="w-3" />}
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="px-5 py-10 sm:px-8 lg:px-12">
          <p className="font-aa-display text-[clamp(2.6rem,7vw,5.2rem)] leading-none tracking-[-0.04em]">
            From {piece.from}{" "}
            <span className="text-[0.35em] uppercase tracking-[0.2em]">{piece.unit}</span>
          </p>
          <p className="mt-4 text-[12px] uppercase tracking-[0.2em] opacity-60">{piece.wait}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {piece.pills.map((pill, idx) => (
              <span
                key={pill}
                className={`rounded-full border border-[var(--aa-ink)] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] ${
                  idx === 0 ? "bg-[var(--aa-ink)] text-[var(--aa-tan)]" : ""
                }`}
              >
                {pill}
              </span>
            ))}
          </div>
          <p className="mt-10 max-w-md text-[12px] uppercase leading-[1.9] tracking-[0.14em]">
            {piece.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <AaButton href="#besuch" className="bg-[var(--aa-ink)] text-[var(--aa-tan)]">
              Stück anfragen
            </AaButton>
            <a href="#ofen" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-current">
                <span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-current" />
              </span>
              Den Weg sehen
            </a>
          </div>
        </div>

        <div className="relative min-h-[70vh] border-t border-[var(--aa-ink)]/20 lg:border-l lg:border-t-0">
          <Image
            src={still}
            alt={piece.lead}
            fill
            sizes="(max-width: 1024px) 100vw, 38vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[var(--aa-tan)]">
            <span className="text-[11px] tracking-[0.2em]">
              {String(stillIndex + 1).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-current bg-[var(--aa-ink)]/30"
              onClick={() => setFrame((n) => n - 1)}
              aria-label="Vorheriges Bild"
            >
              ‹
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-current bg-[var(--aa-ink)]/30"
              onClick={() => setFrame((n) => n + 1)}
              aria-label="Nächstes Bild"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
