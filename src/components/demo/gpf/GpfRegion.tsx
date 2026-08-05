"use client";

import Image from "next/image";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GPF_CONTACT } from "@/components/demo/gpf/gpf-contact";
import { GPF_REGION, GPF_IMG } from "@/components/demo/gpf/gpf-content";

export function GpfRegion() {
  return (
    <section
      id="region"
      className="relative overflow-x-hidden bg-[var(--gpf-paper-deep)] px-5 py-24 text-[var(--gpf-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <GpfReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-accent)]">
                Einsatzgebiet
              </p>
              <h2 className="mt-5 font-gpf-display text-[clamp(2.4rem,5.4vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em]">
                Aus Rodheim.
                <br />
                <span className="italic">Für die Wetterau.</span>
              </h2>
            </GpfReveal>

            <GpfReveal delay={0.06}>
              <p className="mt-8 max-w-lg text-[1.05rem] leading-[1.75] text-[var(--gpf-muted)]">
                Wir arbeiten von Rodheim aus über Friedberg bis Bad Homburg,
                Oberursel und Friedrichsdorf — östlich bis Nidda und Altenstadt.
                Rund {GPF_CONTACT.radiusKm} Kilometer Radius, damit Wege kurz
                bleiben und wir bei Bedarf schnell wieder da sind. Bei größeren
                Aufträgen erweitern wir den Radius gerne.
              </p>
            </GpfReveal>

            <GpfReveal delay={0.1}>
              <ul className="mt-10 flex flex-wrap gap-2">
                {GPF_REGION.map((town) => (
                  <li
                    key={town}
                    className="rounded-full border border-[var(--gpf-ink)]/15 bg-[var(--gpf-paper)] px-4 py-2 text-[12px] font-medium tracking-tight text-[var(--gpf-muted)]"
                  >
                    {town}
                  </li>
                ))}
              </ul>
            </GpfReveal>

            <GpfReveal delay={0.14}>
              <dl className="mt-12 grid gap-8 border-t border-[var(--gpf-ink)]/12 pt-10 sm:grid-cols-2">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gpf-accent)]">
                    Standort
                  </dt>
                  <dd className="mt-2 whitespace-pre-line text-[0.95rem] leading-relaxed text-[var(--gpf-muted)]">
                    {GPF_CONTACT.addressLine1}
                    {"\n"}
                    {GPF_CONTACT.addressLine2}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gpf-accent)]">
                    Anfahrtspauschale
                  </dt>
                  <dd className="mt-2 text-[0.95rem] leading-relaxed text-[var(--gpf-muted)]">
                    {GPF_CONTACT.travelRate} — transparent ab Rodheim
                    berechnet.
                  </dd>
                </div>
              </dl>
            </GpfReveal>
          </div>

          <GpfReveal delay={0.1} className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[var(--gpf-paper)] lg:aspect-[4/4.2]">
              <Image
                src={GPF_IMG.einzugsgebiet}
                alt={`Einsatzgebiet rund um Rodheim mit etwa ${GPF_CONTACT.radiusKm} Kilometern Radius`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(15,21,17,0.55)_100%)]"
                aria-hidden
              />
              <p className="absolute bottom-5 left-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                ~ {GPF_CONTACT.radiusKm} km Radius
              </p>
            </div>
          </GpfReveal>
        </div>
      </div>
    </section>
  );
}
