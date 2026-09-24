"use client";

import Image from "next/image";
import { useState } from "react";
import { AA_PIECES } from "@/components/demo/stelzer/aa-content";
import { AaButton } from "@/components/demo/stelzer/AaButton";
import { AaReveal } from "@/components/demo/stelzer/AaReveal";

export function AaPieces() {
  const [active, setActive] = useState(0);
  const [frame, setFrame] = useState(0);
  const piece = AA_PIECES[active];
  const stillIndex = ((frame % piece.stills.length) + piece.stills.length) % piece.stills.length;
  const still = piece.stills[stillIndex];

  return (
    <section
      id="leistungen"
      data-aa-tone="tan"
      className="relative z-10 scroll-mt-24 bg-[#cbbba3] text-[var(--aa-ink)]"
    >
      <AaReveal className="px-5 pt-20 sm:px-8 lg:px-12">
        <p className="text-[13px] uppercase tracking-[0.18em] opacity-60">Leistungen</p>
        <h2 className="mt-4 max-w-5xl font-aa-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.035em]">
          Sechs Arbeiten, ein Betrieb.
        </h2>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed">
          Vom Schaden am Flachdach bis zum Fenster und zur Anlage.
        </p>
      </AaReveal>

      <div className="mt-10 grid lg:grid-cols-[280px_1fr_minmax(320px,46%)]">
        <aside className="border-y border-[var(--aa-ink)]/20 px-5 py-8 sm:px-8 lg:border-y-0 lg:border-r lg:px-8">
          <ul className="space-y-1">
            {AA_PIECES.map((p, idx) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(idx);
                    setFrame(0);
                  }}
                  className={`flex w-full items-center gap-3 py-2 text-left font-aa-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-none tracking-[-0.03em] ${
                    idx === active ? "opacity-100" : "opacity-35 hover:opacity-70"
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
            {piece.label}
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
          <p className="mt-10 max-w-md font-aa-display text-[clamp(1.6rem,3vw,2.2rem)] leading-snug">
            {piece.lead}
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed">
            {piece.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <AaButton href="#besuch" className="bg-[var(--aa-ink)] text-[var(--aa-cream)]">
              Anfragen
            </AaButton>
            <a href="#ablauf" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-current">
                <span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-current" />
              </span>
              Den Ablauf sehen
            </a>
          </div>
        </div>

        <div className="px-4 pb-8 pt-2 sm:px-6 lg:px-8 lg:py-8">
          <div className="relative h-[72vh] min-h-[420px] overflow-hidden rounded-[2rem]">
          <Image
            src={still}
            alt={piece.label}
            fill
            sizes="(max-width: 1024px) 100vw, 46vw"
            quality={90}
            className="aa-breathe object-cover"
          />
          {piece.stills.length > 1 ? (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white">
            <span className="text-[11px] tracking-[0.2em]">{String(stillIndex + 1).padStart(2, "0")}</span>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-current bg-[var(--aa-ink)]/40"
              onClick={() => setFrame((n) => n - 1)}
              aria-label="Vorheriges Bild"
            >
              ‹
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-current bg-[var(--aa-ink)]/40"
              onClick={() => setFrame((n) => n + 1)}
              aria-label="Nächstes Bild"
            >
              ›
            </button>
          </div>
          ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
