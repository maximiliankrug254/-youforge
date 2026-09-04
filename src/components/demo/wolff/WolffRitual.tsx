"use client";

import { WolffReveal } from "@/components/demo/wolff/WolffReveal";
import { WolffButton } from "@/components/demo/wolff/WolffButton";
import { WolffLivePhoto } from "@/components/demo/wolff/WolffLivePhoto";
import { WOLFF_RITUAL } from "@/components/demo/wolff/wolff-content";
import { WOLFF_CONTACT } from "@/components/demo/wolff/wolff-contact";

export function WolffRitual() {
  return (
    <section
      id="stuhl"
      className="relative overflow-x-hidden bg-[var(--wolff-cream)] px-5 py-24 text-[var(--wolff-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <WolffReveal className="relative aspect-[3/4] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[640px]">
            <WolffLivePhoto
              src="/demo/wolff/03-shave.jpg"
              alt="Hot-Towel-Rasur — Dampf, Klinge, Stille"
              className="absolute inset-0"
              objectPosition="center 30%"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <span
              className="wolff-steam pointer-events-none absolute left-[18%] top-[22%] h-40 w-32 rounded-full bg-white/35 blur-2xl"
              aria-hidden
            />
            <span
              className="wolff-steam pointer-events-none absolute left-[36%] top-[18%] h-48 w-24 rounded-full bg-white/25 blur-3xl [animation-delay:1.6s]"
              aria-hidden
            />
          </WolffReveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <WolffReveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--wolff-rust)]">
                Der Stuhl
              </p>
              <h2 className="mt-5 max-w-[12ch] font-wolff-display text-[clamp(2.4rem,5vw,4.1rem)] font-medium leading-[0.92] tracking-[-0.03em]">
                Drei Wege.
                <span className="italic text-[var(--wolff-rust)]"> Ein Mann.</span>
              </h2>
            </WolffReveal>
            <WolffReveal delay={0.08}>
              <p className="mt-6 max-w-md text-[1.05rem] leading-[1.7] text-[var(--wolff-ink)]/60">
                Ohne Termin kann es voll sein — anrufen ist klüger. {WOLFF_CONTACT.phone}.
                Bargeld und Karte. 10 % Trinkgeld, wenn es saß.
              </p>
            </WolffReveal>

            <div className="mt-12 border-t border-[var(--wolff-ink)]/12">
              {WOLFF_RITUAL.map((pkg, i) => (
                <WolffReveal key={pkg.name} delay={0.08 * (i + 1)}>
                  <div className="grid grid-cols-12 gap-4 border-b border-[var(--wolff-ink)]/12 py-8 transition-colors hover:bg-[var(--wolff-ink)]/[0.04]">
                    <div className="col-span-8">
                      <p className="font-wolff-display text-2xl font-medium tracking-[-0.02em]">
                        {pkg.name}
                        <span className="ml-3 text-sm font-normal not-italic tracking-[0.12em] text-[var(--wolff-ink)]/40">
                          {pkg.time}
                        </span>
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--wolff-ink)]/55">
                        {pkg.text}
                      </p>
                    </div>
                    <p className="col-span-4 text-right font-wolff-display text-xl font-medium text-[var(--wolff-rust)] sm:text-2xl">
                      {pkg.price}
                    </p>
                  </div>
                </WolffReveal>
              ))}
            </div>

            <WolffReveal delay={0.28}>
              <WolffButton
                href={`tel:${WOLFF_CONTACT.phoneTel}`}
                className="mt-10 inline-flex items-center justify-center bg-[var(--wolff-ink)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--wolff-cream)] hover:bg-[var(--wolff-panel)]"
              >
                Anrufen, Stuhl halten
              </WolffButton>
            </WolffReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
