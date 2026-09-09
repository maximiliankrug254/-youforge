"use client";

import Image from "next/image";
import { RkPageHero } from "@/components/demo/rk/RkPageHero";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkInterior } from "@/components/demo/rk/RkInterior";
import { RkContact } from "@/components/demo/rk/RkContact";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RK_IMG } from "@/components/demo/rk/rk-config";

const GALLERY = [
  { src: RK_IMG.sonneDuette, caption: "Wabenplissee", alt: "Duette Plissee am Fenster" },
  { src: RK_IMG.sonneElegance, caption: "Elegance", alt: "Eleganter Stoffbehang" },
  { src: RK_IMG.sonneTwinline, caption: "Doppelrollo", alt: "Twinline Doppelrollo" },
  { src: RK_IMG.sonneMadera, caption: "Holzjalousie", alt: "Holzjalousie Madera" },
  { src: RK_IMG.sonnePinta, caption: "Pinta", alt: "Sonnenschutz Pinta" },
  { src: RK_IMG.sonneSpring, caption: "Spring", alt: "Sonnenschutz Spring" },
  { src: RK_IMG.sonneMarkise, caption: "Markise", alt: "Außenliegende Markise" },
  { src: RK_IMG.sonneUeberdachung, caption: "Überdachung", alt: "Überdachung mit Stoff" },
] as const;

export function RkSonnenschutzPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <RkPageHero
        kicker="Sicht- und Sonnenschutz"
        title="Nur so viel Sonne, wie Sie wollen."
        text="Jedes Fenster auf Maß. Plissee, Doppelrollo, Jalousie, Flächenvorhang — und die Markise davor, wenn Hitze das eigentliche Problem ist. Aufmaß kostenlos."
        image={RK_IMG.sonneDuette}
        alt="Wabenplissee in einem hellen Wohnzimmer"
      />

      <section className="bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <RkReveal className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={RK_IMG.sonnenschutzOrig}
                  alt="Plissees an einer Fensterfront in einem modernen Wohnraum"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </RkReveal>
            <RkReveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
                Auf Maß
              </p>
              <h2 className="font-rk-display mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-[1] tracking-[0.01em] uppercase">
                Auf Maß — nicht von der Stange.
              </h2>
              <p className="mt-5 text-[1.05rem] leading-[1.8] text-[var(--rk-muted)]">
                Fenster sind die Verbindung zur Welt draußen. Der Behang davor
                wird für genau dieses Fenster gefertigt: duftig gemustert,
                pastellig, zarttransparent oder blickdicht. Wir nehmen die Maße
                und bringen den Behang fachgerecht an.
              </p>
              <p className="mt-5 text-[1.05rem] leading-[1.8] text-[var(--rk-muted)]">
                Wenn im Sommer trotzdem die Hitze durchkommt, gehört eine Markise
                oder ein ZIP-Screen davor. Innen allein reicht an der Südseite
                oft nicht.
              </p>
              <RkButton
                href="/demo/raumkontrast/kontakt"
                className="rk-shine mt-8 inline-flex rounded-sm bg-[var(--rk-purple)] px-7 py-4 text-sm font-semibold text-white hover:bg-[var(--rk-purple-deep)]"
              >
                Fenster aufmessen lassen
              </RkButton>
            </RkReveal>
          </div>
        </div>
      </section>

      <RkInterior />

      <section className="bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1480px]">
          <RkReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Systeme
            </p>
            <h2 className="font-rk-display mt-4 text-[clamp(2rem,4vw,3.2rem)] uppercase">
              Innen und außen. Ein Thema.
            </h2>
          </RkReveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {GALLERY.map((item, i) => (
              <RkReveal key={item.caption} delay={0.03 * i}>
                <figure className="relative overflow-hidden">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--rk-purple-ink)]/80 to-transparent p-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {item.caption}
                  </figcaption>
                </figure>
              </RkReveal>
            ))}
          </div>
        </div>
      </section>

      <RkContact />
    </main>
  );
}
