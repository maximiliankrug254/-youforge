"use client";

import Image from "next/image";
import { NovusReveal } from "@/components/demo/novus/NovusReveal";
import { NovusButton } from "@/components/demo/novus/NovusButton";
import { NOVUS_BRIDAL } from "@/components/demo/novus/novus-content";
import { NOVUS_CONTACT } from "@/components/demo/novus/novus-contact";

export function NovusBridal() {
  return (
    <section
      id="braeute"
      className="relative overflow-x-hidden bg-[var(--novus-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <NovusReveal className="relative aspect-[3/4] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="/demo/novus-hair/07-bridal.jpg"
              alt="Braut-Updo mit floralem Haarschmuck — Novus Hochzeitsstyling"
              fill
              quality={92}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[center_20%]"
            />
          </NovusReveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <NovusReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--novus-gold)]">
                Bräute
              </p>
              <h2 className="mt-5 max-w-[12ch] font-novus-display text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[0.92] tracking-[-0.04em]">
                Dein Tag. Unser Handwerk.
              </h2>
            </NovusReveal>
            <NovusReveal delay={0.08}>
              <p className="mt-6 max-w-md text-[1.05rem] leading-[1.7] text-white/50">
                Makeup & Frisur als Zusammenspiel — mit Roberta Mollame. Drei
                klare Pakete. Kein Rätselraten.
              </p>
            </NovusReveal>

            <div className="mt-12 space-y-0 border-t border-white/10">
              {NOVUS_BRIDAL.map((pkg, i) => (
                <NovusReveal key={pkg.name} delay={0.08 * (i + 1)}>
                  <div className="grid grid-cols-12 gap-4 border-b border-white/10 py-8">
                    <div className="col-span-8">
                      <p className="font-novus-display text-2xl font-bold tracking-[-0.02em]">
                        {pkg.name}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/45">
                        {pkg.text}
                      </p>
                    </div>
                    <p className="col-span-4 text-right font-novus-display text-xl font-bold text-[var(--novus-gold)] sm:text-2xl">
                      {pkg.price}
                    </p>
                  </div>
                </NovusReveal>
              ))}
            </div>

            <NovusReveal delay={0.28}>
              <NovusButton
                href={`tel:${NOVUS_CONTACT.phoneTel}`}
                className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--novus-gold)] px-8 py-4 text-sm font-semibold tracking-wide text-[var(--novus-ink)] hover:bg-[var(--novus-gold-hot)]"
              >
                Brauttermin anfragen
              </NovusButton>
            </NovusReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
