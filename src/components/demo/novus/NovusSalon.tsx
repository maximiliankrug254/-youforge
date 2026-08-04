"use client";

import Image from "next/image";
import { NovusReveal } from "@/components/demo/novus/NovusReveal";
import { NovusImageReveal } from "@/components/demo/novus/NovusImageReveal";

const AMENITIES = [
  "10 Bedienplätze",
  "Kostenfreie Parkplätze",
  "WiFi",
  "Kaltgetränke & Kaffee",
] as const;

export function NovusSalon() {
  return (
    <section
      id="salon"
      className="relative overflow-x-hidden bg-[var(--novus-stone)] px-5 py-24 text-[var(--novus-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <NovusReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--novus-gold-deep)]">
                Salon
              </p>
              <h2 className="mt-5 max-w-[12ch] font-novus-display text-[clamp(2.5rem,5.2vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
                Alte Molkerei. Neuer Puls.
              </h2>
            </NovusReveal>
            <NovusReveal delay={0.08}>
              <p className="mt-7 max-w-md text-[1.08rem] leading-[1.7] text-[var(--novus-muted)]">
                Modern Chic trifft Industry Style. Licht, das Farbe ehrlich
                zeigt. Eine Location, die sich anfühlt wie der Look danach —
                klar, warm, präsent.
              </p>
            </NovusReveal>
            <NovusReveal delay={0.14}>
              <ul className="mt-10 space-y-3 border-t border-[var(--novus-ink)]/10 pt-8">
                {AMENITIES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm tracking-wide text-[var(--novus-ink)]/75"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--novus-gold-deep)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </NovusReveal>
          </div>

          <NovusReveal delay={0.1} className="lg:col-span-7">
            <NovusImageReveal
              src="/demo/novus-hair/04-salon-floor.jpg"
              alt="Novus Salon — Ovalspiegel und Industry Chic"
              className="aspect-[4/5] min-h-[360px] w-full sm:aspect-[5/4] lg:min-h-[560px]"
            />
          </NovusReveal>
        </div>

        <NovusReveal delay={0.08} className="mt-5 lg:mt-6">
          <div className="relative aspect-[16/9] min-h-[240px] overflow-hidden lg:min-h-[420px]">
            <Image
              src="/demo/novus-hair/09-wash-station.jpg"
              alt="Waschtische mit Blick ins Grüne — Spa-Atmosphäre"
              fill
              quality={92}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </NovusReveal>
      </div>
    </section>
  );
}
