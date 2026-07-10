import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import {
  FeaturedCaseStudy,
  PortfolioCTA,
} from "@/components/portfolio/FeaturedCaseStudy";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { portfolioProjects } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Arbeiten",
  description:
    "Portfolio und Referenzprojekte von YouForge — Websites, Web-Apps und KI-Lösungen.",
};

export default function ArbeitenPage() {
  const featured = portfolioProjects.find((p) => p.featured && p.status === "live");
  const others = portfolioProjects.filter((p) => !p.featured);

  return (
    <div className="pt-24">
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel number="06" title="PORTFOLIO" />
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Was wir geschmiedet haben.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Websites, Web-Apps und KI-Lösungen — von der Vision bis zur
              digitalen Realität. Alle Projekte anonymisiert, Ergebnis im Fokus.
            </p>
          </FadeIn>
        </div>
      </section>

      {featured && <FeaturedCaseStudy project={featured} />}

      <section className="border-t border-border px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight">Weitere Projekte</h2>
            <p className="mt-2 text-muted">
              {others.filter((p) => p.status === "live").length} Case Studies — undercover, ohne Kundennamen.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <PortfolioCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PortfolioCTA />
    </div>
  );
}
