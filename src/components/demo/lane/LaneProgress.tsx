"use client";

import { useEffect, useState } from "react";
import { useLaneMediaQuery } from "@/components/demo/lane/useLaneMediaQuery";

export function LaneProgress() {
  const [p, setP] = useState(0);
  const desktop = useLaneMediaQuery("(min-width: 480px)");

  useEffect(() => {
    const read = () => {
      if (desktop) {
        const scroller = document.querySelector(".lane-shell");
        if (!(scroller instanceof HTMLElement)) return;
        const max = scroller.scrollWidth - scroller.clientWidth;
        setP(max > 0 ? scroller.scrollLeft / max : 0);
        return;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };

    read();
    const scroller = document.querySelector(".lane-shell");
    scroller?.addEventListener("scroll", read, { passive: true });
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      scroller?.removeEventListener("scroll", read);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [desktop]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[81] h-[2px] bg-white/5">
      <div
        className="h-full origin-left bg-[var(--lane-ember)]"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}
