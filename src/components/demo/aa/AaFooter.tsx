"use client";

import { AA } from "@/components/demo/aa/aa-config";
import { AaButton } from "@/components/demo/aa/AaButton";

export function AaFooter() {
  return (
    <footer
      id="besuch"
      data-aa-tone="dark"
      className="relative z-10 scroll-mt-24 overflow-hidden px-5 pb-10 pt-20 text-[var(--aa-tan)] sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="text-center font-aa-display text-[clamp(2rem,5vw,3.6rem)] tracking-[-0.03em]">
          Werde Teil des Brands
        </p>
        <p className="mx-auto mt-4 max-w-lg text-center text-[11px] uppercase leading-[1.9] tracking-[0.16em] opacity-70">
          Jeder Auftrag wird Mitbesitzer einer langsamen Werkstatt. Kein Shop.
          Ein Gespräch, dann Feuer.
        </p>

        <div className="mt-16 grid gap-12 border-t border-[var(--aa-tan)]/20 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] opacity-50">Location</p>
            <p className="mt-3 text-[12px] uppercase leading-relaxed tracking-[0.14em]">
              {AA.place.address1}
              <br />
              {AA.place.address2}
              <br />
              {AA.place.region}
            </p>
            <div className="mt-6 flex gap-3 text-[10px] uppercase tracking-[0.2em]">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-current">Ig</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-current">Fb</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-current">Yt</span>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] opacity-50">Atelier</p>
            <p className="mt-3 text-[12px] uppercase leading-relaxed tracking-[0.14em]">
              {AA.makers.wood.name} — {AA.makers.wood.role}
              <br />
              {AA.makers.clay.name} — {AA.makers.clay.role}
              <br />
              {AA.contact.hours}
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href={`tel:${AA.contact.phoneTel}`}
              className="block font-aa-display text-2xl tracking-tight underline decoration-[var(--aa-tan)]/30 underline-offset-8"
            >
              {AA.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${AA.contact.email}`}
              className="mt-4 block text-[13px] uppercase tracking-[0.16em] underline decoration-[var(--aa-tan)]/30 underline-offset-8"
            >
              {AA.contact.email}
            </a>
            <AaButton
              href={`mailto:${AA.contact.email}?subject=${encodeURIComponent("Atelierbesuch Ast & Asche")}`}
              className="mt-8 bg-[var(--aa-tan)] text-[var(--aa-ink)]"
            >
              Atelierbesuch anfragen
            </AaButton>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-6 border-t border-[var(--aa-tan)]/15 pt-6 text-[10px] uppercase tracking-[0.18em] opacity-55">
          <p>© 2026 {AA.brand.short}. All rights reserved.</p>
          <p>
            {AA.youforge.label} ·{" "}
            <a href={AA.youforge.href} className="underline underline-offset-4">
              {AA.youforge.studio}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
