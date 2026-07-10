import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { portfolioProjects, type PortfolioProject } from "@/lib/constants";

const homepageTeaserSlugs = ["youforge", "saas-landing", "studio-website"];

export function WorkTeaser() {
  const featured = portfolioProjects.find((p) => p.featured && p.status === "live");
  const liveProjects = portfolioProjects.filter(
    (p) => p.status === "live" && !p.featured
  );
  const teaserProjects = homepageTeaserSlugs
    .map((slug) => liveProjects.find((p) => p.slug === slug))
    .filter((p): p is PortfolioProject => Boolean(p));

  return (
    <section className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel number="06" title="ARBEITEN" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Was wir geschmiedet haben.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Websites, Web-Apps und KI-Lösungen — von der Landingpage bis zum
            verkaufbaren Produkt.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured && (
            <FadeIn className="lg:col-span-2">
              <PortfolioCard project={featured} size="featured" />
            </FadeIn>
          )}
          <div className="flex flex-col gap-4">
            {teaserProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={(i + 1) * 0.08}>
                <PortfolioCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3} className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/arbeiten" className="text-sm text-muted hover:text-accent">
            Alle {portfolioProjects.filter((p) => p.status === "live").length} Projekte ansehen →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
