"use client";

import { cn } from "@/lib/utils";

type ChapterDotsProps = {
  ids: string[];
  labels: string[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function ChapterDots({
  ids,
  labels,
  activeId,
  onSelect,
}: ChapterDotsProps) {
  return (
    <nav
      aria-label="Kapitel"
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:pointer-events-auto md:flex lg:right-6"
    >
      {ids.map((id, i) => {
        const active = id === activeId;
        return (
          <button
            key={id}
            type="button"
            aria-label={labels[i] ?? `Kapitel ${i + 1}`}
            aria-current={active ? "true" : undefined}
            onClick={() => onSelect(id)}
            className={cn(
              "group relative flex h-4 w-4 items-center justify-center rounded-full transition-colors",
              active ? "bg-transparent" : "bg-transparent"
            )}
          >
            <span
              className={cn(
                "absolute rounded-full border transition-all duration-300",
                active
                  ? "h-4 w-4 border-accent/80"
                  : "h-0 w-0 border-transparent group-hover:h-3 group-hover:w-3 group-hover:border-muted/40"
              )}
            />
            <span
              className={cn(
                "relative rounded-full transition-all duration-300",
                active
                  ? "h-1.5 w-1.5 bg-accent"
                  : "h-1 w-1 bg-muted/50 group-hover:bg-muted"
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
