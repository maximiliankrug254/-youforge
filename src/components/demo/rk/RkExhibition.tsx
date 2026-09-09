"use client";

import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkImageReveal } from "@/components/demo/rk/RkImageReveal";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RK_IMG } from "@/components/demo/rk/rk-config";
import { RK_CONTACT } from "@/components/demo/rk/rk-contact";

export function RkExhibition() {
  return (
    <section
      id="ausstellung"
      className="relative overflow-x-clip bg-[var(--rk-purple)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <RkReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-lime)]">
                Service
              </p>
              <h2 className="rk-display-lines font-rk-display mt-5 text-[clamp(2.3rem,5vw,4rem)] tracking-[0.01em] uppercase">
                <span>15 m² Ausstellung.</span>
                <span>Vor Ihrer Tür.</span>
              </h2>
            </RkReveal>
            <RkReveal delay={0.08}>
              <p className="mt-7 text-[1.05rem] leading-[1.8] text-white/75">
                Der Anhänger kommt zu Ihnen — mit Bodenbelag, Sicht- und
                Sonnenschutz, Markisenstoffen, Vorhang- und Polsterqualitäten.
                Hunderte Muster zum Anfassen, bei Ihnen vor der Haustür.
              </p>
              <p className="mt-4 text-[1.05rem] leading-[1.8] text-white/75">
                Termine nach Vereinbarung. Der Service ist kostenlos.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/15 pt-8">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--rk-lime)]">
                    Fläche
                  </dt>
                  <dd className="font-rk-display mt-2 text-3xl uppercase">
                    {RK_CONTACT.trailerSqm} m²
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--rk-lime)]">
                    Termin
                  </dt>
                  <dd className="font-rk-display mt-2 text-3xl uppercase">
                    Kostenlos
                  </dd>
                </div>
              </dl>
              <RkButton
                href="/demo/raumkontrast/kontakt"
                className="rk-shine mt-8 inline-flex rounded-sm bg-[var(--rk-lime)] px-7 py-4 text-sm font-semibold text-[var(--rk-ink)] hover:bg-white"
              >
                Anhänger kommen lassen
              </RkButton>
            </RkReveal>
          </div>
          <RkReveal delay={0.1} className="lg:col-span-7">
            <RkImageReveal
              src={RK_IMG.ausstellungAnhaenger}
              alt="Mobile Ausstellung von Raumkontrast Baumann: der beschriftete Anhänger kommt vor die Tür"
              className="aspect-[16/11]"
              objectClassName="object-[center_62%]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </RkReveal>
        </div>
      </div>
    </section>
  );
}
