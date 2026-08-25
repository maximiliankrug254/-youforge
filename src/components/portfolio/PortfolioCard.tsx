import type { PortfolioProject } from "@/lib/constants";
import { PortfolioPreview } from "@/components/portfolio/PortfolioPreview";
import { cn } from "@/lib/utils";

export function PortfolioCard({
  project,
  size = "default",
}: {
  project: PortfolioProject;
  size?: "default" | "featured";
}) {
  const isLive = project.status === "live";
  const isFeatured = size === "featured";

  if (!isLive) {
    return (
      <div
        className={cn(
          "flex flex-col justify-between rounded-2xl border border-dashed border-border bg-surface/20 p-6 sm:p-8",
          isFeatured ? "min-h-[320px]" : "aspect-[4/3]"
        )}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {project.status === "coming-soon" ? "Coming Soon" : project.category}
        </span>
        <div>
          <h3 className="text-xl font-bold text-muted">{project.title}</h3>
          <p className="mt-2 text-sm text-muted/60">{project.subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <article
      className={cn(
        "group rounded-2xl border border-border bg-surface/30 p-4 sm:p-5",
        isFeatured && "lg:p-6"
      )}
    >
      <PortfolioPreview title={project.title} image={project.image} />
      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-muted">· {project.year}</span>
        </div>
        <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-muted",
            !isFeatured && "line-clamp-2"
          )}
        >
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
