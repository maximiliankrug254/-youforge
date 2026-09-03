const ITEMS = [
  "German Precision",
  "Bali Calm",
  "From Germany to Bali",
  "Berawa, Bali",
  "Dental & Skin Aesthetics",
  "20 Years Germany",
];

export function GermanMarquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="tg-marquee" aria-hidden>
      <div className="tg-marquee-track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}
