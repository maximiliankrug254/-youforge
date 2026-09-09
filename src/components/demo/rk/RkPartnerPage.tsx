"use client";

import Image from "next/image";
import { RkPageHero } from "@/components/demo/rk/RkPageHero";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkContact } from "@/components/demo/rk/RkContact";
import { RK_PARTNERS, RK_IMG } from "@/components/demo/rk/rk-config";

export function RkPartnerPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <RkPageHero
        kicker="Service · Partner"
        title="Hersteller, denen wir vertrauen."
        text="Qualitativ anspruchsvolle Arbeit braucht originale Produkte namhafter Hersteller. Unsere Partner liefern Stoffe, Böden, Sonnenschutz und Systeme — wir bringen sie in Ihr Haus."
        image={RK_IMG.beratung}
        alt="Beratung mit Mustern namhafter Hersteller"
      />

      <section className="relative overflow-hidden bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="relative mx-auto max-w-[1480px]">
          <RkReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Zusammenarbeit
            </p>
            <h2 className="font-rk-display mt-5 max-w-[22ch] text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1] tracking-[0.01em] uppercase">
              Respekt vor dem Handwerk. Respekt vor der Marke.
            </h2>
            <p className="mt-6 max-w-2xl text-[1.08rem] leading-[1.8] text-[var(--rk-muted)]">
              Wir wählen Partner, deren Materialien wir selbst verbauen würden —
              und die zu Maßarbeit, Montage und Service vor Ort passen. Keine
              No-Name-Ware, keine Kompromisse am Stoff.
            </p>
          </RkReveal>

          <div className="mt-16 grid gap-px bg-black/8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {RK_PARTNERS.map((partner, i) => (
              <RkReveal key={partner.name} delay={0.03 * i} className="bg-[var(--rk-paper)]">
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-h-[200px] flex-col items-center justify-between p-7 text-center transition-colors hover:bg-white"
                >
                  <div className="relative flex h-20 w-full items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={64}
                      className="max-h-16 w-auto object-contain opacity-80 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="font-rk-display text-lg uppercase tracking-[0.02em]">
                      {partner.name}
                    </p>
                    <p className="mt-2 text-[12px] leading-relaxed text-[var(--rk-muted)]">
                      {partner.focus}
                    </p>
                  </div>
                </a>
              </RkReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--rk-paper-deep)] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1480px]">
          <RkReveal>
            <h2 className="font-rk-display max-w-[20ch] text-[clamp(2rem,4vw,3.2rem)] leading-[1] uppercase">
              Was das für Sie heißt.
            </h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                [
                  "Original",
                  "Nur originale Produkte — Garantie, Ersatzteile und Farbtreue bleiben erhalten.",
                ],
                [
                  "Passend",
                  "Wir kennen die Systeme. Beratung endet nicht beim Katalog, sondern am Fenster.",
                ],
                [
                  "Langlebig",
                  "Markisenstoff, Parkett, Plissee: Qualität, die Jahre hält — nicht nur die Saison.",
                ],
              ].map(([t, d]) => (
                <li key={t} className="border-t border-black/10 pt-6">
                  <h3 className="font-rk-display text-2xl uppercase text-[var(--rk-purple)]">
                    {t}
                  </h3>
                  <p className="mt-3 text-[1rem] leading-[1.75] text-[var(--rk-muted)]">{d}</p>
                </li>
              ))}
            </ul>
          </RkReveal>
        </div>
      </section>

      <RkContact />
    </main>
  );
}
