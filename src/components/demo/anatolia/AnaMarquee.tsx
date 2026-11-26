"use client";

export function AnaMarquee({
  words,
  flip = false,
  tone = "dark",
}: {
  words: readonly string[];
  flip?: boolean;
  tone?: "dark" | "light";
}) {
  const doubled = [...words, ...words];
  const dark = tone === "dark";

  return (
    <div
      className={`overflow-hidden border-y ${
        dark
          ? "border-white/10 bg-[var(--ana-ink)] text-white"
          : "border-[var(--ana-ink)]/10 bg-[var(--ana-paper)] text-[var(--ana-ink)]"
      }`}
      aria-hidden
    >
      <div
        className={`ana-marquee flex w-max gap-10 py-4 ${flip ? "[animation-direction:reverse]" : ""}`}
      >
        {doubled.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-ana-display text-[13px] font-semibold uppercase tracking-[0.28em] sm:text-[15px]"
          >
            {word}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ana-amber)] ana-pulse" />
          </span>
        ))}
      </div>
    </div>
  );
}
