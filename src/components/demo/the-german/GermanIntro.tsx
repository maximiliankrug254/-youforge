"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function GermanIntro() {
  const reduce = useReducedMotion();
  const [gone, setGone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (reduce || sessionStorage.getItem("tg-intro") === "1") {
      setGone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      setPct(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          setGone(true);
          sessionStorage.setItem("tg-intro", "1");
          document.body.style.overflow = "";
        }, 220);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  if (gone) return null;

  return (
    <div className="tg-intro" aria-hidden>
      <p className="tg-intro-brand">THE GERMAN</p>
      <div className="tg-intro-bar">
        <span style={{ width: `${pct}%` }} />
      </div>
      <p className="tg-intro-meta">
        <b>{String(pct).padStart(3, "0")}</b>
        <span>BERAWA</span>
      </p>
    </div>
  );
}
