const AMBIENT = [
  { left: "7%", delay: "0s", dur: "16s", size: 3 },
  { left: "19%", delay: "4s", dur: "18s", size: 2 },
  { left: "33%", delay: "8s", dur: "14s", size: 4 },
  { left: "48%", delay: "2s", dur: "20s", size: 2 },
  { left: "61%", delay: "6s", dur: "15s", size: 3 },
  { left: "74%", delay: "1s", dur: "17s", size: 2 },
  { left: "88%", delay: "9s", dur: "19s", size: 4 },
  { left: "41%", delay: "11s", dur: "22s", size: 5 },
];

export function GermanAmbient() {
  return (
    <div className="tg-ambient" aria-hidden>
      {AMBIENT.map((mote, i) => (
        <span
          key={`${mote.left}-${i}`}
          style={{
            left: mote.left,
            animationDelay: mote.delay,
            animationDuration: mote.dur,
            width: mote.size,
            height: mote.size,
          }}
        />
      ))}
    </div>
  );
}
