"use client";

import Image from "next/image";
import { AureaReveal } from "@/components/demo/aurea/AureaReveal";
import { AureaCountUp } from "@/components/demo/aurea/AureaCountUp";
import { AUREA_TEAM } from "@/components/demo/aurea/aurea-content";
import { AUREA_CONTACT } from "@/components/demo/aurea/aurea-contact";

export function AureaTeam() {
  return (
    <section
      id="team"
      className="relative overflow-x-hidden bg-[var(--aurea-bone)] px-5 py-24 text-[var(--aurea-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          <AureaReveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:col-span-7 lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="/demo/aurea/10-team.jpg"
              alt="Junges Colour-Team — ruhig, präzise, präsent"
              fill
              quality={92}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_25%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--aurea-ink)]/75 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--aurea-copper)]">
                Das Team
              </p>
              <p className="mt-3 max-w-sm font-aurea-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Jung. Ruhig. Verdammt gut.
              </p>
            </div>
          </AureaReveal>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <AureaReveal className="relative min-h-[240px] flex-1 overflow-hidden sm:min-h-[280px]">
              <Image
                src="/demo/aurea/03-craft.jpg"
                alt="Colour Craft — Folien und Pinsel"
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </AureaReveal>
            <AureaReveal
              delay={0.08}
              className="relative min-h-[240px] flex-1 overflow-hidden sm:min-h-[280px]"
            >
              <Image
                src="/demo/aurea/08-bowl.jpg"
                alt="Farbmischung — Präzision im Detail"
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </AureaReveal>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <AureaReveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--aurea-copper-deep)]">
                Haltung
              </p>
              <h2 className="mt-5 max-w-[12ch] font-aurea-display text-[clamp(2.6rem,5.5vw,4.6rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
                Ein Team, das wie seine Arbeit aussieht.
              </h2>
            </AureaReveal>
            <AureaReveal delay={0.1}>
              <p className="mt-7 max-w-lg text-[1.08rem] leading-[1.75] text-[var(--aurea-muted)]">
                Kein Showroom-Theater. Colour Artists mit technischem Fokus und
                klarer Linie — für Salons, die online genauso wirken wollen wie
                vor Ort.
              </p>
            </AureaReveal>
            <AureaReveal delay={0.16}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--aurea-ink)]/10 pt-8">
                <div>
                  <p className="font-aurea-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    <AureaCountUp value={AUREA_CONTACT.seats} />
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--aurea-muted)]">
                    Plätze
                  </p>
                </div>
                <div>
                  <p className="font-aurea-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    100%
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--aurea-muted)]">
                    Craft
                  </p>
                </div>
                <div>
                  <p className="font-aurea-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    1
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--aurea-muted)]">
                    Standard
                  </p>
                </div>
              </div>
            </AureaReveal>
          </div>

          <div className="border-t border-[var(--aurea-ink)]/10 lg:col-span-5 lg:col-start-8">
            {AUREA_TEAM.map((item, i) => (
              <AureaReveal key={item.title} delay={0.08 * (i + 1)}>
                <div className="border-b border-[var(--aurea-ink)]/10 py-8">
                  <p className="font-aurea-display text-2xl font-semibold tracking-[-0.02em]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--aurea-muted)]">
                    {item.text}
                  </p>
                </div>
              </AureaReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
