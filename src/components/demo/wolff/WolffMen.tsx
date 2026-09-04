"use client";

import { WolffReveal } from "@/components/demo/wolff/WolffReveal";
import { WolffCountUp } from "@/components/demo/wolff/WolffCountUp";
import { WolffLivePhoto } from "@/components/demo/wolff/WolffLivePhoto";
import { WOLFF_MEN } from "@/components/demo/wolff/wolff-content";
import { WOLFF_CONTACT } from "@/components/demo/wolff/wolff-contact";

export function WolffMen() {
  return (
    <section
      id="team"
      className="relative overflow-x-hidden bg-[var(--wolff-ink)] px-5 py-24 text-[var(--wolff-cream)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          <WolffReveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:col-span-7 lg:aspect-auto lg:min-h-[680px]">
            <WolffLivePhoto
              src="/demo/wolff/08-team.jpg"
              alt="Drei Barbiere — Meister und Gesellen im Herrenzimmer"
              className="absolute inset-0"
              objectPosition="center 20%"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--wolff-ink)]/85 via-[var(--wolff-ink)]/10 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--wolff-brass)]">
                Das Haus
              </p>
              <p className="mt-3 max-w-sm font-wolff-display text-3xl font-medium leading-tight text-[var(--wolff-cream)] sm:text-4xl">
                Wolff schneidet selbst. Zwei Gesellen. Vier Stühle.
              </p>
            </div>
          </WolffReveal>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <WolffReveal className="relative min-h-[240px] flex-1 overflow-hidden sm:min-h-[300px]">
              <WolffLivePhoto
                src="/demo/wolff/04-cut.jpg"
                alt="Schnitt am Messing-Spiegel"
                className="absolute inset-0"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </WolffReveal>
            <WolffReveal
              delay={0.08}
              className="relative min-h-[240px] flex-1 overflow-hidden sm:min-h-[300px]"
            >
              <WolffLivePhoto
                src="/demo/wolff/10-street.jpg"
                alt="WOLFF am Abend — Occamstraße, Schwabing"
                className="absolute inset-0"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </WolffReveal>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <WolffReveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--wolff-brass)]">
                Wer schneidet
              </p>
              <h2 className="mt-5 max-w-[13ch] font-wolff-display text-[clamp(2.5rem,5.5vw,4.4rem)] font-medium leading-[0.92] tracking-[-0.03em]">
                Männer, die Hände haben.
              </h2>
            </WolffReveal>
            <WolffReveal delay={0.1}>
              <p className="mt-7 max-w-lg text-[1.08rem] leading-[1.75] text-[var(--wolff-cream)]/50">
                Kein junges Colour-Team. Kein Bridal-Paket. Hier stehen drei
                Barbiere, die den Laden riechen, bevor sie ihn sehen — und die
                Klinge führen, als ginge es um mehr als Haare.
              </p>
            </WolffReveal>
            <WolffReveal delay={0.16}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--wolff-cream)]/12 pt-8">
                <div>
                  <p className="font-wolff-display text-3xl font-medium tracking-tight sm:text-4xl">
                    <WolffCountUp value={WOLFF_CONTACT.seats} />
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--wolff-cream)]/40">
                    Stühle
                  </p>
                </div>
                <div>
                  <p className="font-wolff-display text-3xl font-medium tracking-tight sm:text-4xl">
                    72
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--wolff-cream)]/40">
                    Jahrgang
                  </p>
                </div>
                <div>
                  <p className="font-wolff-display text-3xl font-medium tracking-tight sm:text-4xl">
                    45
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--wolff-cream)]/40">
                    Minuten
                  </p>
                </div>
              </div>
            </WolffReveal>
          </div>

          <div className="border-t border-[var(--wolff-cream)]/12 lg:col-span-5 lg:col-start-8">
            {WOLFF_MEN.map((item, i) => (
              <WolffReveal key={item.title} delay={0.08 * (i + 1)}>
                <div className="border-b border-[var(--wolff-cream)]/12 py-8">
                  <p className="font-wolff-display text-2xl font-medium tracking-[-0.02em]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--wolff-cream)]/48">
                    {item.text}
                  </p>
                </div>
              </WolffReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
