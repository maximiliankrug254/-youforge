"use client";

import { RsReveal } from "@/components/demo/rs/RsReveal";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

export function RsAreas() {
  return (
    <section id="gebiet" className="scroll-mt-20 bg-[var(--rs-cream)] px-6 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <RsReveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--rs-ochre)]">
              Einsatzgebiet
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-rs-display)] text-[clamp(1.85rem,4vw,2.6rem)] font-medium leading-tight tracking-[-0.02em] text-[var(--rs-ink)]">
              {RS_CONTACT.radiusKm} km um {RS_CONTACT.regionCity} — ohne Anfahrtsaufschlag
            </h2>
            <p className="mt-4 max-w-md text-[var(--rs-muted)]">
              Oft sind wir am nächsten Werktag da. Weiter weg geht auch, dann rechnen wir den
              Kilometer fair und vorher.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {RS_CONTACT.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-[rgba(28,25,23,0.1)] bg-[var(--rs-cream-deep)] px-4 py-2 text-sm text-[var(--rs-ink-soft)]"
                >
                  {area}
                </li>
              ))}
            </ul>
          </RsReveal>

          <RsReveal delay={0.1}>
            <div
              className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-[rgba(28,25,23,0.08)] bg-[var(--rs-cream-deep)] shadow-[0_20px_50px_rgba(28,25,23,0.08)]"
              aria-hidden
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_45%,rgba(196,163,90,0.18),transparent_55%)]" />
              <svg
                className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] opacity-40"
                viewBox="0 0 400 320"
                fill="none"
              >
                <path
                  d="M40 80 C90 40, 160 50, 200 90 S290 140, 360 100"
                  stroke="#5c6b5a"
                  strokeWidth="1.5"
                />
                <path
                  d="M30 180 C120 150, 180 220, 280 190 S350 160, 380 200"
                  stroke="#5c6b5a"
                  strokeWidth="1.5"
                />
                <path
                  d="M60 260 C140 240, 200 280, 300 250"
                  stroke="#5c6b5a"
                  strokeWidth="1.2"
                  opacity="0.6"
                />
                <circle cx="190" cy="150" r="10" fill="#c4a35a" />
                <circle cx="190" cy="150" r="22" stroke="#c4a35a" strokeWidth="1" opacity="0.5" />
                <circle cx="190" cy="150" r="38" stroke="#c4a35a" strokeWidth="1" opacity="0.25" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-[family-name:var(--font-rs-display)] text-2xl font-medium text-[var(--rs-ink)]">
                  {RS_CONTACT.regionCity}
                </p>
                <p className="mt-1 text-sm text-[var(--rs-muted)]">
                  {RS_CONTACT.radiusKm} km Radius, eigener Wagen
                </p>
              </div>
            </div>
          </RsReveal>
        </div>
      </div>
    </section>
  );
}
