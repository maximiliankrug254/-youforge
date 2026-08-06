"use client";

import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GpfImageReveal } from "@/components/demo/gpf/GpfImageReveal";
import { GPF_CONTACT } from "@/components/demo/gpf/gpf-contact";
import { GPF_IMG } from "@/components/demo/gpf/gpf-content";
import { GPF_DEMO, GPF_VARS, gpfFill } from "@/components/demo/gpf/gpf-config";

const { about } = GPF_DEMO;

export function GpfAbout() {
  const captionHint = gpfFill(about.imageCaptionHint, GPF_VARS);

  return (
    <section
      id={about.sectionId}
      className="relative overflow-x-hidden bg-[var(--gpf-paper)] px-5 py-24 text-[var(--gpf-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <GpfReveal className="lg:col-span-5">
            <GpfImageReveal
              src={GPF_IMG.teamArbeit}
              alt="Gärtner bei der Arbeit an einer gepflegten Außenfläche"
              className="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 42vw"
              objectClassName="object-[center_35%]"
            />
            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-[var(--gpf-ink)]/12 pt-5">
              <p className="font-gpf-display text-lg font-bold tracking-[-0.02em]">
                {about.imageCaption}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gpf-muted)]">
                {captionHint}
              </p>
            </div>
          </GpfReveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <GpfReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-accent)]">
                {about.sectionLabel}
              </p>
              <h2 className="mt-5 font-gpf-display text-[clamp(2.4rem,5.2vw,4.25rem)] font-bold leading-[1] tracking-[-0.03em]">
                {about.headline}
              </h2>
            </GpfReveal>

            <GpfReveal delay={0.06}>
              <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.8] text-[var(--gpf-muted)]">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </GpfReveal>

            <GpfReveal delay={0.1}>
              <blockquote className="mt-12 border-l-2 border-[var(--gpf-accent)] pl-6 font-gpf-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium italic leading-[1.45] tracking-[-0.015em]">
                „{about.quote}&ldquo;
              </blockquote>
            </GpfReveal>

            <GpfReveal delay={0.14}>
              <dl className="mt-12 grid gap-x-8 gap-y-8 border-t border-[var(--gpf-ink)]/12 pt-10 sm:grid-cols-2">
                {about.facts.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gpf-accent)]">
                      {label}
                    </dt>
                    <dd className="mt-2 text-[0.95rem] leading-relaxed text-[var(--gpf-muted)]">
                      {gpfFill(value, {
                        ...GPF_VARS,
                        travelRate: GPF_CONTACT.travelRate,
                      })}
                    </dd>
                  </div>
                ))}
              </dl>
            </GpfReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
