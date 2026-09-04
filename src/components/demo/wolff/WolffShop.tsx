"use client";

import { WolffReveal } from "@/components/demo/wolff/WolffReveal";
import { WolffImageReveal } from "@/components/demo/wolff/WolffImageReveal";
import { WolffLivePhoto } from "@/components/demo/wolff/WolffLivePhoto";
import { WOLFF_AMENITIES } from "@/components/demo/wolff/wolff-content";
import { WOLFF_CONTACT } from "@/components/demo/wolff/wolff-contact";

export function WolffShop() {
  return (
    <section
      id="laden"
      className="relative overflow-x-hidden bg-[var(--wolff-ink)] px-5 py-24 text-[var(--wolff-cream)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <WolffReveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--wolff-brass)]">
                Der Laden
              </p>
              <h2 className="mt-5 max-w-[12ch] font-wolff-display text-[clamp(2.5rem,5.2vw,4.4rem)] font-medium leading-[0.94] tracking-[-0.03em]">
                Kein Atelier.
                <br />
                <span className="italic text-[var(--wolff-brass)]">
                  Ein Herrenzimmer.
                </span>
              </h2>
            </WolffReveal>
            <WolffReveal delay={0.08}>
              <p className="mt-7 max-w-md text-[1.08rem] leading-[1.75] text-[var(--wolff-cream)]/55">
                Occamstraße 22, Schwabing. Nussbaum an der Wand, Leder unter dem
                Kinn, Vinyl in der Ecke. Hier riecht es nach Tonikum und warmem
                Holz — nicht nach Studio-Licht.
              </p>
            </WolffReveal>
            <WolffReveal delay={0.1}>
              <div className="mt-8 flex items-center gap-4">
                <div
                  className="wolff-vinyl relative h-14 w-14 shrink-0 rounded-full border border-[var(--wolff-brass)]/40"
                  aria-hidden
                >
                  <span className="absolute inset-[18%] rounded-full bg-[var(--wolff-ink)]" />
                  <span className="absolute inset-[42%] rounded-full bg-[var(--wolff-brass)]" />
                  <span className="absolute inset-0 rounded-full border border-[var(--wolff-cream)]/10" />
                </div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--wolff-cream)]/40">
                  Läuft. Kein Algorithmus.
                </p>
              </div>
            </WolffReveal>
            <WolffReveal delay={0.14}>
              <ul className="mt-10 space-y-3 border-t border-[var(--wolff-cream)]/12 pt-8">
                {WOLFF_AMENITIES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm tracking-wide text-[var(--wolff-cream)]/70"
                  >
                    <span className="h-1.5 w-1.5 rotate-45 bg-[var(--wolff-brass)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </WolffReveal>
            <WolffReveal delay={0.18}>
              <p className="mt-8 text-[12px] uppercase tracking-[0.2em] text-[var(--wolff-cream)]/40">
                {WOLFF_CONTACT.hours} · {WOLFF_CONTACT.hoursNote}
              </p>
            </WolffReveal>
          </div>

          <WolffReveal delay={0.1} className="lg:col-span-7">
            <WolffImageReveal
              src="/demo/wolff/02-shop.jpg"
              alt="Vier Lederstühle, Nussbaum, Messing — Wolff Herrenzimmer"
              className="aspect-[4/5] min-h-[360px] w-full sm:aspect-[16/11] lg:min-h-[560px]"
            />
          </WolffReveal>
        </div>

        <div className="mt-4 grid gap-4 lg:mt-5 lg:grid-cols-12">
          <WolffReveal className="lg:col-span-7">
            <WolffLivePhoto
              src="/demo/wolff/07-chair.jpg"
              alt="Cognac-Lederstuhl mit heißem Tuch"
              className="aspect-[16/10] min-h-[220px] w-full lg:min-h-[380px]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </WolffReveal>
          <WolffReveal delay={0.08} className="lg:col-span-5">
            <WolffLivePhoto
              src="/demo/wolff/06-tools.jpg"
              alt="Offene Klinge, Dachshaar, Kölnisch Wasser"
              className="aspect-[16/10] min-h-[220px] w-full lg:min-h-[380px]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </WolffReveal>
        </div>
      </div>
    </section>
  );
}
