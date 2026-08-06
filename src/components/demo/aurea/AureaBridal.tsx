"use client";

import Image from "next/image";
import { AureaReveal } from "@/components/demo/aurea/AureaReveal";
import { AureaButton } from "@/components/demo/aurea/AureaButton";
import { AUREA_BRIDAL } from "@/components/demo/aurea/aurea-content";
import { AUREA_CONTACT } from "@/components/demo/aurea/aurea-contact";

export function AureaBridal() {
  return (
    <section
      id="braeute"
      className="relative overflow-x-hidden bg-[var(--aurea-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <AureaReveal className="relative aspect-[3/4] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="/demo/aurea/07-bridal.jpg"
              alt="Braut-Updo — elegantes Hochzeitsstyling"
              fill
              quality={92}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[center_20%]"
            />
          </AureaReveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <AureaReveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--aurea-copper)]">
                Bräute
              </p>
              <h2 className="mt-5 max-w-[11ch] font-aurea-display text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
                Der Tag. Euer Handwerk.
              </h2>
            </AureaReveal>
            <AureaReveal delay={0.08}>
              <p className="mt-6 max-w-md text-[1.05rem] leading-[1.7] text-white/45">
                Beispiel-Pakete — so klar und teuer wie euer Angebot. Ohne
                Preisliste-Chaos.
              </p>
            </AureaReveal>

            <div className="mt-12 border-t border-white/10">
              {AUREA_BRIDAL.map((pkg, i) => (
                <AureaReveal key={pkg.name} delay={0.08 * (i + 1)}>
                  <div className="grid grid-cols-12 gap-4 border-b border-white/10 py-8">
                    <div className="col-span-8">
                      <p className="font-aurea-display text-2xl font-semibold tracking-[-0.02em]">
                        {pkg.name}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/40">
                        {pkg.text}
                      </p>
                    </div>
                    <p className="col-span-4 text-right font-aurea-display text-xl font-semibold text-[var(--aurea-copper)] sm:text-2xl">
                      {pkg.price}
                    </p>
                  </div>
                </AureaReveal>
              ))}
            </div>

            <AureaReveal delay={0.28}>
              <AureaButton
                href={AUREA_CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--aurea-copper)] px-8 py-4 text-sm font-semibold tracking-wide text-[var(--aurea-ink)] hover:bg-[var(--aurea-copper-hot)]"
              >
                Eigene Pakete bauen
              </AureaButton>
            </AureaReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
