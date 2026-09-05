import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { AiContentLabel } from "@/components/ui/AiContentLabel";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/constants";

const trustChips = [
  "Antwort in 24h",
  `Du sprichst mit ${siteConfig.founder}`,
  "Kein Mindestbudget-Theater",
];

export function Founder() {
  return (
    <section
      id="ueber"
      className="border-t border-border px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel number="09" title="GRÜNDER" className="text-sm" />
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ich bin {siteConfig.founder}.
          </h2>
        </FadeIn>

        <div className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
          <FadeIn className="w-full max-w-[20rem] shrink-0 sm:max-w-[22rem] lg:w-[22rem]">
            <div className="group relative mx-auto w-full lg:mx-0">
              <div
                className="pointer-events-none absolute -right-6 top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 group-hover:opacity-90 sm:h-56 sm:w-56"
                aria-hidden
              />

              <figure className="relative w-[78%]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.7)]">
                  <Image
                    src="/team/founder.jpg"
                    alt={`${siteConfig.founder} — Gründer von YouForge`}
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 80vw, 352px"
                    className="object-cover object-[center_18%]"
                  />
                  <div
                    className="absolute inset-0 origin-right transition-[clip-path] duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] [clip-path:polygon(100%_0,100%_0,100%_100%,100%_100%)] group-hover:[clip-path:polygon(52%_0,100%_0,100%_100%,38%_100%)] motion-reduce:transition-none"
                    aria-hidden
                  >
                    <Image
                      src="/team/founder-forge.jpg"
                      alt=""
                      fill
                      className="object-cover object-center scale-[1.15]"
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 720px"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-y-0 right-[48%] w-px origin-top scale-y-0 bg-accent/80 opacity-0 transition duration-700 group-hover:scale-y-100 group-hover:opacity-100 motion-reduce:hidden"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
                    aria-hidden
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Foto · {siteConfig.founder}
                  <span className="hidden sm:inline">
                    {" "}
                    · Hover: Mensch ↔ System
                  </span>
                </figcaption>
              </figure>

              <figure className="absolute -right-1 bottom-[14%] w-[46%] sm:right-0 sm:bottom-[12%] sm:w-[48%]">
                <div className="relative aspect-square overflow-hidden rounded-full border border-accent/30 bg-black shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)] ring-4 ring-background transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg] group-hover:scale-105 group-hover:border-accent/60">
                  <Image
                    src="/team/founder-forge.jpg"
                    alt="YouForge-Illustration: Mensch und System, synthetisch"
                    fill
                    className="object-cover object-center scale-[1.12]"
                    sizes="(max-width: 1024px) 40vw, 220px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-black/20 via-transparent to-accent/10"
                    aria-hidden
                  />
                </div>
                <figcaption className="sr-only">
                  Synthetische Illustration, KI-generiert
                </figcaption>
              </figure>
            </div>

            <p className="mt-8 max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-muted/70">
              Links der, mit dem du sprichst. Rechts das, was ich baue.
            </p>
            <AiContentLabel className="mt-2 text-[11px] text-muted/60">
              Illustration · KI-generiert
            </AiContentLabel>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full min-w-0 max-w-xl lg:max-w-2xl">
            <p className="text-xl leading-snug text-foreground/90 sm:text-2xl">
              YouForge ist kein anonymes Studio. Ich bin {siteConfig.founder}.
            </p>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Ich baue digitale Auftritte für Betriebe, die zu gut sind für eine
              Website, die nach 2014 aussieht — und zu beschäftigt, um sich
              selbst drum zu kümmern. Schmieden heißt: zuhören, klar denken,
              dann bauen.
            </p>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              Du sprichst mit dem, der die Seite macht. Nicht mit einer
              Folien-Agentur.
            </p>
            <p className="mt-5 font-mono text-sm uppercase tracking-[0.16em] text-accent">
              Ein Ansprechpartner. Von Briefing bis Launch.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {trustChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-border bg-surface/50 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted"
                >
                  {chip}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button href={siteConfig.calendly} size="lg">
                Lass uns reden →
              </Button>
              <Button href="/arbeiten" variant="ghost" size="lg">
                Arbeiten ansehen
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
