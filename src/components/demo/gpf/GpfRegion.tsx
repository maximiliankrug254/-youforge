"use client";

import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GPF_CONTACT } from "@/components/demo/gpf/gpf-contact";
import { GPF_REGION } from "@/components/demo/gpf/gpf-content";
import { GPF_DEMO, GPF_VARS, gpfFill } from "@/components/demo/gpf/gpf-config";

const { region } = GPF_DEMO;

export function GpfRegion() {
  const regionText = gpfFill(region.text, GPF_VARS);
  const travelNote = gpfFill(region.travelNote, GPF_VARS);
  const mapAlt = gpfFill(region.mapAlt, GPF_VARS);
  const r = GPF_CONTACT.radiusKm;

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
                {region.headline[0]}
                <br />
                <span className="italic">{region.headline[1]}</span>
              </h2>
            </GpfReveal>

            <GpfReveal delay={0.06}>
              <p className="mt-8 max-w-lg text-[1.05rem] leading-[1.75] text-[var(--gpf-muted)]">
                {regionText}
              </p>
            </GpfReveal>

            <GpfReveal delay={0.1}>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
                {GPF_REGION.map((town) => (
                  <li
                    key={town}
                    className="border-l border-[var(--gpf-accent)]/50 pl-3 text-[0.95rem] tracking-tight text-[var(--gpf-muted)]"
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
                    {travelNote}
                  </dd>
                </div>
              </dl>
            </GpfReveal>
          </div>

          <GpfReveal delay={0.1} className="lg:col-span-6">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-[var(--gpf-ink)]/8 bg-[var(--gpf-paper)] lg:aspect-[4/4.2]"
              role="img"
              aria-label={mapAlt}
            >
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 h-full w-full"
                aria-hidden
              >
                <defs>
                  <radialGradient id="gpf-radius-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3d6b2f" stopOpacity="0.22" />
                    <stop offset="55%" stopColor="#3d6b2f" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#3d6b2f" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="400" height="400" fill="#eef1ec" />
                <circle cx="200" cy="200" r="168" fill="url(#gpf-radius-glow)" />
                <circle
                  cx="200"
                  cy="200"
                  r="148"
                  fill="none"
                  stroke="#3d6b2f"
                  strokeOpacity="0.18"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="98"
                  fill="none"
                  stroke="#3d6b2f"
                  strokeOpacity="0.28"
                  strokeWidth="1.25"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="48"
                  fill="none"
                  stroke="#3d6b2f"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                />
                <circle cx="200" cy="200" r="7" fill="#3d6b2f" />
                <circle
                  cx="200"
                  cy="200"
                  r="14"
                  fill="none"
                  stroke="#3d6b2f"
                  strokeOpacity="0.55"
                  strokeWidth="1.5"
                />
                {/* Soft terrain hints */}
                <path
                  d="M40 290 C90 250, 140 310, 200 270 C260 230, 310 300, 360 255"
                  fill="none"
                  stroke="#0a100c"
                  strokeOpacity="0.06"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <path
                  d="M55 120 C110 95, 160 140, 210 110 C270 75, 320 130, 355 100"
                  fill="none"
                  stroke="#0a100c"
                  strokeOpacity="0.05"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(10,16,12,0.78)] via-[rgba(10,16,12,0.35)] to-transparent px-6 pb-5 pt-16 text-white">
                <p className="font-gpf-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-none tracking-[-0.03em]">
                  ~{r} km
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                  Einsatzradius
                </p>
              </div>
            </div>
          </GpfReveal>
        </div>
      </div>
    </section>
  );
}
