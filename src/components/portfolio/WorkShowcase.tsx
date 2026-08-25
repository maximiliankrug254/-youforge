"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChapterDots } from "@/components/portfolio/ChapterDots";
import { WorkChapter } from "@/components/portfolio/WorkChapter";
import { Button } from "@/components/ui/Button";
import { siteConfig, type PortfolioProject } from "@/lib/constants";
import {
  getIntroPanels,
  getLiveShowcaseProjects,
  getProjectPanels,
} from "@/lib/work-showcase";

type WorkShowcaseProps = {
  projects: PortfolioProject[];
};

export function WorkShowcase({ projects }: WorkShowcaseProps) {
  const live = useMemo(() => getLiveShowcaseProjects(projects, 14), [projects]);
  const introPanels = useMemo(() => getIntroPanels(live), [live]);

  const chapters = useMemo(() => {
    const list: { id: string; label: string }[] = [
      { id: "intro", label: "Intro" },
      ...live.map((p, i) => ({
        id: p.slug,
        label: `Projekt ${String(i + 1).padStart(2, "0")}`,
      })),
      { id: "cta", label: "Abschluss" },
    ];
    return list;
  }, [live]);

  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "intro");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chapter]")
    );
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target.getAttribute("data-chapter");
        if (top) setActiveId(top);
      },
      { threshold: [0.35, 0.55, 0.7], rootMargin: "-10% 0px -10% 0px" }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [chapters]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const firstProjectId = live[0]?.slug;

  return (
    <div className="relative bg-background">
      <ChapterDots
        ids={chapters.map((c) => c.id)}
        labels={chapters.map((c) => c.label)}
        activeId={activeId}
        onSelect={scrollTo}
      />

      <WorkChapter
        id="intro"
        label="Arbeiten"
        title="Was wir geschmiedet haben."
        subtitle="Portfolio / Undercover"
        description="Websites, Web-Apps und KI-Lösungen — von der Vision bis zur digitalen Realität. Jedes Projekt anonymisiert, Ergebnis im Fokus."
        panels={introPanels}
        secondaryCta={
          firstProjectId
            ? {
                href: `#${firstProjectId}`,
                label: "Projekte entdecken →",
                onClick: () => scrollTo(firstProjectId),
              }
            : undefined
        }
      />

      {live.map((project, i) => (
        <WorkChapter
          key={project.slug}
          id={project.slug}
          label={`Projekt ${String(i + 1).padStart(2, "0")}`}
          title={project.title}
          subtitle={project.category}
          description={project.description}
          panels={getProjectPanels(project)}
          secondaryCta={{
            href: "/kontakt",
            label: "Ähnliches schmieden",
          }}
        />
      ))}

      <section
        id="cta"
        data-chapter="cta"
        className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-6 py-28 lg:px-8"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,255,0,0.1),transparent_55%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            Nächstes Kapitel
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Dein Projekt als Nächstes?
          </h2>
          <p className="mt-5 text-muted">
            Kurz. Direkt. Kein Verkaufsdruck. Erzähl uns von deiner Vision —
            wir finden den Weg.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={siteConfig.calendly} size="lg">
              Termin buchen →
            </Button>
            <Button href="/kontakt" variant="ghost" size="lg">
              Vision schmieden →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
