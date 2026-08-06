"use client";

import Image from "next/image";
import { AureaReveal } from "@/components/demo/aurea/AureaReveal";
import { AureaImageReveal } from "@/components/demo/aurea/AureaImageReveal";

const AMENITIES = [
  "Curated Lichtkonzept",
  "Ruhige Materialsprache",
  "Plätze mit Charakter",
  "Raum, der Farbe ehrlich zeigt",
] as const;

export function AureaSalon() {
  return (
    <section
      id="salon"
      className="relative overflow-x-hidden bg-[var(--aurea-bone)] px-5 py-24 text-[var(--aurea-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <AureaReveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--aurea-copper-deep)]">
                Salon
              </p>
              <h2 className="mt-5 max-w-[11ch] font-aurea-display text-[clamp(2.6rem,5.2vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
                Architektur für Looks.
              </h2>
            </AureaReveal>
            <AureaReveal delay={0.08}>
              <p className="mt-7 max-w-md text-[1.08rem] leading-[1.75] text-[var(--aurea-muted)]">
                Der Raum ist Teil des Versprechens. Licht, Stein, Leder — so
                wirkt Premium, bevor die Schere fällt.
              </p>
            </AureaReveal>
            <AureaReveal delay={0.14}>
              <ul className="mt-10 space-y-3 border-t border-[var(--aurea-ink)]/10 pt-8">
                {AMENITIES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm tracking-wide text-[var(--aurea-ink)]/70"
                  >
                    <span className="h-px w-4 bg-[var(--aurea-copper-deep)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </AureaReveal>
          </div>

          <AureaReveal delay={0.1} className="lg:col-span-7">
            <AureaImageReveal
              src="/demo/aurea/04-salon.jpg"
              alt="Premium Salon Interior — Ovalspiegel und Stein"
              className="aspect-[4/5] min-h-[360px] w-full sm:aspect-[5/4] lg:min-h-[560px]"
            />
          </AureaReveal>
        </div>

        <AureaReveal delay={0.08} className="mt-4 lg:mt-5">
          <div className="relative aspect-[16/9] min-h-[240px] overflow-hidden lg:min-h-[420px]">
            <Image
              src="/demo/aurea/09-wash.jpg"
              alt="Waschtische — Spa-Atmosphäre"
              fill
              quality={92}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </AureaReveal>
      </div>
    </section>
  );
}
