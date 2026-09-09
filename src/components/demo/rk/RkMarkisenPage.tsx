"use client";

import Image from "next/image";
import { RkPageHero } from "@/components/demo/rk/RkPageHero";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkImageReveal } from "@/components/demo/rk/RkImageReveal";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RkContact } from "@/components/demo/rk/RkContact";
import { RkMarquee } from "@/components/demo/rk/RkMarquee";
import { RK_IMG } from "@/components/demo/rk/rk-config";
import { RK_MARKISEN_TYPES } from "@/components/demo/rk/rk-content";

const FACTS = [
  ["Hitze", "Außenliegender Schatten hält die Wärme ab, bevor sie durchs Glas will — innenliegende Rollos schaffen das nicht."],
  ["Maß", "Breite, Ausfall, Konsolen, Untergrund. Jede Markise wird für die Fassade gebaut, nicht aus dem Regal genommen."],
  ["Bedienung", "Kurbel, Motor, Handsender, Windwächter, optional LED am Volant. Sie sagen, wie oft Sie die Kurbel in der Hand haben wollen."],
  ["Stoff", "Acryl, das Wasser abperlen lässt, UV-Strahlung standhält und in der Kassette überwintert. Farbe an der Fassade, nicht nur im Musterbuch."],
] as const;

export function RkMarkisenPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <RkPageHero
        kicker="Markisen · Irschenberg"
        title="Schatten, der draußen bleibt."
        text="Gelenkarm, Kassette, ZIP-Screen, Wintergarten, Pergola. Wir nehmen Maß, fertigen und montieren — mit 15 m² Ausstellung vor Ihrer Tür. Aufmaß kostenlos."
        image={RK_IMG.gelenkarm}
        alt="Gelenkarmmarkise mit gespanntem Stoff über einer Holzterrasse"
      />
      <RkMarquee
        words={["Gelenkarm", "Kassette", "ZIP-Screen", "Wintergarten", "Pergola", "Motor", "Windwächter", "LED"]}
      />

      <section className="bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-12 lg:grid-cols-12">
            <RkReveal className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
                Warum außen
              </p>
              <h2 className="font-rk-display mt-5 text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1] tracking-[0.01em] uppercase">
                Der Sommer sitzt auf der Terrasse — nicht im Wohnzimmer.
              </h2>
            </RkReveal>
            <RkReveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
              <p className="text-[1.08rem] leading-[1.8] text-[var(--rk-muted)]">
                Die Markise macht im Juli den größten Unterschied: Die Fläche vor
                dem Haus wird nutzbar, die Räume dahinter bleiben kühl. Innenliegender
                Sichtschutz filtert Licht — außenliegender Schatten hält die Hitze ab.
              </p>
              <p className="mt-5 text-[1.08rem] leading-[1.8] text-[var(--rk-muted)]">
                Wir beraten nicht mit einem Hochglanzprospekt, sondern mit Stoff
                an der Wand. 15 Quadratmeter Muster im Anhänger, Aufmaß bei Ihnen,
                Festpreis, bevor bestellt wird. Der Termin kostet Sie nichts.
              </p>
              <RkButton
                href="/demo/raumkontrast/kontakt"
                className="rk-shine mt-8 inline-flex rounded-sm bg-[var(--rk-purple)] px-7 py-4 text-sm font-semibold text-white hover:bg-[var(--rk-purple-deep)]"
              >
                Kostenloses Aufmaß
              </RkButton>
            </RkReveal>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-24">
            {FACTS.map((item, i) => (
              <RkReveal key={item[0]} delay={0.05 * i} className="border-t border-black/10 pt-6">
                <h3 className="font-rk-display text-2xl uppercase tracking-[0.02em] text-[var(--rk-purple)]">
                  {item[0]}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[var(--rk-muted)]">
                  {item[1]}
                </p>
              </RkReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--rk-paper-deep)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1480px] space-y-24 lg:space-y-32">
          {RK_MARKISEN_TYPES.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={item.slug}
                id={item.slug}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <RkReveal className={reverse ? "lg:col-span-6 lg:col-start-7 lg:row-start-1" : "lg:col-span-6"}>
                  <RkImageReveal
                    src={item.image}
                    alt={item.alt}
                    className="aspect-[4/3]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </RkReveal>
                <RkReveal
                  delay={0.08}
                  className={reverse ? "lg:col-span-5 lg:col-start-1 lg:row-start-1" : "lg:col-span-5 lg:col-start-8"}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
                    {item.kicker}
                  </p>
                  <h2 className="font-rk-display mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-[1] tracking-[0.01em] uppercase">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-[1.05rem] leading-[1.8] text-[var(--rk-muted)]">
                    {item.text}
                  </p>
                </RkReveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-[1480px] items-center gap-12 lg:grid-cols-12">
          <RkReveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Stoff
            </p>
            <h2 className="font-rk-display mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-[1] tracking-[0.01em] uppercase">
              Acryl, das draußen bleibt.
            </h2>
            <p className="mt-5 text-[1.05rem] leading-[1.8] text-[var(--rk-muted)]">
              Markisenstoff ist kein Vorhang. Er muss spannen, abperlen, UV
              aushalten und in der Kassette überwintern. Wir legen Muster an die
              Fassade — Sand, Graphit, Streifen — bis die Kante zum Haus passt.
            </p>
          </RkReveal>
          <RkReveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={RK_IMG.stoff}
                alt="Nahaufnahme von wasserabweisendem Markisenacryl in Sandbeige"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </RkReveal>
        </div>
      </section>

      <RkContact />
    </main>
  );
}
