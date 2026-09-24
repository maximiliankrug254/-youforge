export function AaMarquee({
  words,
}: {
  words: string[];
  invert?: boolean;
}) {
  const row = [...words, ...words];
  return (
    <section data-aa-tone="tan" className="relative z-10 overflow-hidden border-y border-[var(--aa-ink)]/15 bg-[#cbbba3] text-[var(--aa-ink)]">
      <div className="aa-marquee flex w-max py-6">
        {row.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="flex items-center font-aa-display text-[clamp(1.8rem,4vw,3.2rem)] tracking-[-0.03em]"
          >
            <span className="px-6">{w}</span>
            <span className="text-[0.55em] opacity-50">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
