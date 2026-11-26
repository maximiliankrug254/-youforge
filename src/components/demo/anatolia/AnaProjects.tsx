"use client";

import Image from "next/image";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_PROJECTS } from "@/components/demo/anatolia/ana-content";

export function AnaProjects() {
  return (
    <section
      id="projekte"
      className="bg-[var(--ana-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <AnaReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber)]">
              Referenzen
            </p>
            <h2 className="mt-5 font-ana-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-semibold leading-[1] tracking-[-0.03em]">
              Acht Projekte,
              <br />
              die wir nennen.
            </h2>
          </AnaReveal>
          <AnaReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-white/55">
              Von der Hofpflasterung in Hilden bis zur Parkplatzanlage im Kreis
              Kleve — Arbeiten, die wir so benennen.
            </p>
          </AnaReveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
          {ANA_PROJECTS.map((project, i) => (
            <AnaReveal key={project.title + project.place} delay={i * 0.04}>
              <article className="ana-media group relative bg-[var(--ana-stone)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(31,28,23,0.62)_100%)]"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--ana-amber)]">
                      {String(i + 1).padStart(2, "0")} · {project.place}
                    </p>
                    <h3 className="mt-2 font-ana-display text-xl font-semibold tracking-[-0.02em] sm:text-[1.35rem]">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </article>
            </AnaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
