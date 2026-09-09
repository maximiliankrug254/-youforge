"use client";

import Image from "next/image";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RK_INNEN_SCHUTZ } from "@/components/demo/rk/rk-content";
import { RkButton } from "@/components/demo/rk/RkButton";

export function RkInterior() {
  return (
    <section
      id="sonnenschutz"
      className="relative overflow-x-clip bg-[var(--rk-paper-deep)] px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12">
          <RkReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Innen
            </p>
            <h2 className="rk-display-lines font-rk-display mt-5 text-[clamp(2.3rem,5.4vw,4.4rem)] tracking-[0.01em] uppercase">
              <span>Licht dosieren,</span>
              <span>Blicke halten.</span>
            </h2>
          </RkReveal>
          <RkReveal delay={0.08} className="lg:col-span-5 lg:pt-12">
            <p className="text-[1.05rem] leading-[1.75] text-[var(--rk-muted)]">
              Jedes Fenster wird gemessen, jedes Stück auf Maß gefertigt —
              nicht von der Stange. Plissee, Doppelrollo, Jalousie,
              Flächenvorhang: so viel Sonne hinein, wie Sie wollen. An der
              Südseite gehört oft eine Markise davor.
            </p>
            <RkButton
              href="/demo/raumkontrast/kontakt"
              className="mt-6 inline-flex rounded-sm bg-[var(--rk-purple)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--rk-purple-deep)]"
            >
              Kostenloses Aufmaß
            </RkButton>
          </RkReveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20">
          {RK_INNEN_SCHUTZ.map((item, i) => (
            <RkReveal
              key={item.title}
              delay={0.05 * i}
              className={i % 2 === 1 ? "lg:mt-10" : undefined}
            >
              <article className="group overflow-hidden bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.15s] ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--rk-lime)] transition-all duration-500 group-hover:w-full" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-rk-display text-2xl tracking-[0.02em] uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-[1.7] text-[var(--rk-muted)]">
                    {item.text}
                  </p>
                </div>
              </article>
            </RkReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
