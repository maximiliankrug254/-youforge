const MOTES = [
  { left: "6%", delay: "0s", dur: "11s", size: 3 },
  { left: "14%", delay: "1.2s", dur: "13s", size: 2 },
  { left: "22%", delay: "3s", dur: "10s", size: 4 },
  { left: "29%", delay: "0.6s", dur: "14s", size: 2 },
  { left: "38%", delay: "4s", dur: "12s", size: 5 },
  { left: "47%", delay: "2s", dur: "11s", size: 2 },
  { left: "55%", delay: "5s", dur: "13s", size: 3 },
  { left: "63%", delay: "1s", dur: "9s", size: 2 },
  { left: "71%", delay: "3.4s", dur: "12s", size: 4 },
  { left: "79%", delay: "0.4s", dur: "10s", size: 2 },
  { left: "86%", delay: "4.6s", dur: "14s", size: 3 },
  { left: "93%", delay: "2.2s", dur: "11s", size: 2 },
  { left: "18%", delay: "6s", dur: "15s", size: 6 },
  { left: "68%", delay: "7s", dur: "16s", size: 5 },
];

export function GermanHeroFx() {
  return (
    <>
      <div className="tg-sun" aria-hidden />
      <div className="tg-motes" aria-hidden>
        {MOTES.map((mote, i) => (
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
    </>
  );
}
