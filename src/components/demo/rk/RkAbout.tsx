"use client";

import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkImageReveal } from "@/components/demo/rk/RkImageReveal";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RK_CONTACT } from "@/components/demo/rk/rk-contact";
import { RK_IMG } from "@/components/demo/rk/rk-config";
import { RK_TOWNS } from "@/components/demo/rk/rk-content";

export function RkAbout() {
  return (
    <section
      id="unternehmen"
      className="relative overflow-x-clip bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <RkReveal className="lg:col-span-5">
            <RkImageReveal
              src={RK_IMG.montage}
              alt="Montage einer Markisenkassette an der Hausfassade"
              className="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-black/10 pt-5">
              <p className="font-rk-display text-lg uppercase tracking-[0.02em]">
                {RK_CONTACT.owner}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--rk-muted)]">
                Meister seit {RK_CONTACT.since}
              </p>
            </div>
          </RkReveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <RkReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
                Unternehmen
              </p>
              <h2 className="font-rk-display mt-5 text-[clamp(2.3rem,5vw,4rem)] leading-[0.98] tracking-[0.01em] uppercase">
                Direkt nach der Meisterschule.
              </h2>
            </RkReveal>
            <RkReveal delay={0.06}>
              <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.8] text-[var(--rk-muted)]">
                <p>
                  {RK_CONTACT.since} hat {RK_CONTACT.owner} den Schritt in die
                  Selbstständigkeit gewagt — mit handwerklichem Können und einem
                  Gespür für Einrichtungsstile, die man aushält, nicht nur
                  fotografiert.
                </p>
                <p>
                  Wir beraten in privaten und geschäftlichen Räumen, holen uns
                  ein Bild vor Ort und führen das Projekt von A bis Z: Boden,
                  Polster, Gardine, Insektenschutz — und den Sonnenschutz, der
                  den Sommer erträglich macht.
                </p>
                <p>
                  Produkte namhafter Hersteller, Maßarbeit, keine
                  Stangenware. Termine nach Vereinbarung, Sitz in Grub 2b,
                  Irschenberg.
                </p>
              </div>
            </RkReveal>
            <RkReveal delay={0.1}>
              <blockquote className="mt-12 border-l-2 border-[var(--rk-lime)] pl-6 font-rk-display text-[clamp(1.3rem,2.4vw,1.85rem)] leading-[1.35] tracking-[0.01em]">
                „Maß nehmen. Passend fertigen. Sauber montieren — und den Schatten
                draußen lassen, wo die Hitze hingehört.“
              </blockquote>
            </RkReveal>
            <RkReveal delay={0.12}>
              <div className="mt-12 flex flex-wrap gap-2">
                {RK_TOWNS.map((town) => (
                  <span
                    key={town}
                    className="border border-black/10 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--rk-ink)]/70"
                  >
                    {town}
                  </span>
                ))}
              </div>
              <RkButton
                href="/demo/raumkontrast/kontakt"
                className="rk-shine mt-10 inline-flex rounded-sm bg-[var(--rk-purple)] px-7 py-4 text-sm font-semibold text-white hover:bg-[var(--rk-purple-deep)]"
              >
                Beratung anfragen
              </RkButton>
            </RkReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
