const WORDS = ["Werkstatt", "Autogas", "Geilshausen", "Reparatur"] as const;

export function BbfMarquee() {
  const row = [...WORDS, ...WORDS, ...WORDS, ...WORDS];

  return (
    <div
      className="relative overflow-hidden border-y border-black/20 bg-[var(--bbf-red)] py-3.5 text-black sm:py-4"
      aria-hidden
    >
      <div className="bbf-marquee flex w-max items-center">
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-flex items-center font-bbf-display text-[clamp(1.35rem,3vw,2.15rem)] font-semibold tracking-[-0.03em]"
          >
            {word}
            <span className="mx-5 inline-block h-2 w-2 rotate-45 bg-black sm:mx-7" />
          </span>
        ))}
      </div>
    </div>
  );
}
