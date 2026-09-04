"use client";

import { useEffect, useState } from "react";
import { LANE } from "@/components/demo/lane/lane-config";
import { LANE_NAV } from "@/components/demo/lane/lane-content";
import { scrollToLanePanel } from "@/components/demo/lane/scroll-to-panel";

export function LaneNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const panels = LANE_NAV.map((n) => document.getElementById(n.id)).filter(
      (n): n is HTMLElement => Boolean(n),
    );
    if (!panels.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(vis.target.id);
      },
      { threshold: [0.45, 0.6] },
    );
    panels.forEach((p) => io.observe(p));

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const current = Math.max(
        0,
        LANE_NAV.findIndex((n) => {
          const node = document.getElementById(n.id);
          if (!node) return false;
          const r = node.getBoundingClientRect();
          return r.left < window.innerWidth * 0.6 && r.right > window.innerWidth * 0.4;
        }),
      );
      const next =
        e.key === "ArrowRight"
          ? Math.min(LANE_NAV.length - 1, current + 1)
          : Math.max(0, current - 1);
      scrollToLanePanel(LANE_NAV[next].id);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      io.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[80] mix-blend-normal">
      <div className="pointer-events-auto flex items-center justify-between px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => scrollToLanePanel("hero")}
          className="font-lane-display text-[13px] font-semibold uppercase tracking-[0.42em] text-[var(--lane-bone)]"
        >
          {LANE.brand.short}
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Kapitel">
          {LANE_NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToLanePanel(item.id)}
              className={`text-[10px] uppercase tracking-[0.28em] transition ${
                active === item.id
                  ? "text-[var(--lane-ember)]"
                  : "text-[var(--lane-bone)]/45 hover:text-[var(--lane-bone)]"
              }`}
            >
              {item.n} {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => scrollToLanePanel("reserve")}
          data-lane-hover
          className="border border-[var(--lane-ember)]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--lane-ember)] transition hover:bg-[var(--lane-ember)] hover:text-[var(--lane-void)]"
        >
          Reservieren
        </button>
      </div>
    </header>
  );
}
