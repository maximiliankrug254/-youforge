"use client";

import { RkPageHero } from "@/components/demo/rk/RkPageHero";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkExhibition } from "@/components/demo/rk/RkExhibition";
import { RkAbout } from "@/components/demo/rk/RkAbout";
import { RkGallery } from "@/components/demo/rk/RkGallery";
import { RkContact } from "@/components/demo/rk/RkContact";
import { RK_IMG } from "@/components/demo/rk/rk-config";
import { RK_CONTACT } from "@/components/demo/rk/rk-contact";

export function RkUnternehmenPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <RkPageHero
        kicker="Unternehmen"
        title={
          <>
            <span className="block whitespace-nowrap">{RK_CONTACT.owner}</span>
            <span className="mt-1 block text-[var(--rk-lime)]">Meister.</span>
          </>
        }
        text="Seit 2012 selbstständig. Mobile Ausstellung, Maßarbeit, namhafte Hersteller — und der Sonnenschutz, der den Sommer trägt."
        image={RK_IMG.beratung}
        alt="Beratung mit Stoffmustern am Wohnzimmertisch"
      />
      <RkAbout />
      <RkExhibition />
      <section className="bg-[var(--rk-paper)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[1480px]">
          <RkReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Mitarbeiter
            </p>
            <h2 className="font-rk-display mt-4 max-w-[20ch] text-[clamp(2rem,4vw,3.2rem)] leading-[1] tracking-[0.01em] uppercase">
              Kleines Team. Kurze Wege. Ein Ansprechpartner.
            </h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-[1.8] text-[var(--rk-muted)]">
              Sie sprechen mit uns, nicht mit einer Hotline. Aufmaß, Angebot,
              Montage — dieselben Leute, die den Stoff an die Fassade gehalten
              haben.
            </p>
          </RkReveal>
        </div>
      </section>
      <RkGallery />
      <section className="bg-[var(--rk-paper-deep)] px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-[1480px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-rk-display text-[clamp(1.6rem,3vw,2.4rem)] uppercase">
            Mehr Projekte in den Referenzen.
          </p>
          <a
            href="/demo/raumkontrast/referenzen"
            className="inline-flex rounded-sm bg-[var(--rk-purple)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--rk-purple-deep)]"
          >
            Alle Referenzen
          </a>
        </div>
      </section>
      <RkContact />
    </main>
  );
}
