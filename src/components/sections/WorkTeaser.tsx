import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { portfolioProjects } from "@/lib/constants";

export function WorkTeaser() {
  const featured = portfolioProjects.find((p) => p.featured && p.status === "live");
  const liveCount = portfolioProjects.filter((p) => p.status === "live").length;

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

        {featured ? (
          <FadeIn className="mt-12 max-w-4xl" delay={0.08}>
            <PortfolioCard project={featured} size="featured" />
          </FadeIn>
        ) : null}

        <FadeIn delay={0.2} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/arbeiten" size="lg">
            Alle {liveCount} Projekte ansehen →
          </Button>
          <Link href="/arbeiten" className="text-sm text-muted hover:text-accent">
            Zur Showcase-Reise
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
