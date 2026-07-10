import type { PortfolioProject } from "@/lib/constants";
import { PortfolioPreview } from "@/components/portfolio/PortfolioPreview";
import { Button } from "@/components/ui/Button";

export function FeaturedCaseStudy({ project }: { project: PortfolioProject }) {
  return (
    <section className="border-t border-border px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Featured · {project.year}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h2>
            <p className="mt-2 text-lg text-muted">{project.subtitle}</p>
            <p className="mt-6 leading-relaxed text-muted">{project.description}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Challenge
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Lösung
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Ergebnis
                </p>
                <p className="mt-2 text-sm leading-relaxed">{project.result}</p>
              </div>
            </div>

            <ul className="mt-8 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-muted">
                  <span className="text-accent">·</span>
                  {h}
                </li>
              ))}
            </ul>

            {project.href && (
              <div className="mt-8">
                <Button href={project.href} variant="ghost">
                  Live ansehen →
                </Button>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <PortfolioPreview title={project.title} image={project.image} />
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioCTA() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Dein Projekt als nächstes?
        </h2>
        <p className="mt-4 text-muted">
          Du könntest hier die nächste Case Study sein. Lass uns deine Vision
          schmieden.
        </p>
        <div className="mt-8">
          <Button href="/kontakt" size="lg">
            Vision schmieden
          </Button>
        </div>
      </div>
    </section>
  );
}
