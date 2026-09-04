"use client";

import { useLaneMediaQuery } from "@/components/demo/lane/useLaneMediaQuery";

type LaneHeatProps = {
  className?: string;
  /** "soft" = subtle veil over food; "ember" = stronger glow over grill */
  intensity?: "soft" | "ember";
};

/**
 * Lightweight heat shimmer + ember flicker. CSS only — no second fluid sim.
 * Disabled when prefers-reduced-motion.
 */
export function LaneHeat({ className = "", intensity = "soft" }: LaneHeatProps) {
  const reduce = useLaneMediaQuery("(prefers-reduced-motion: reduce)");
  if (reduce) return null;

  const ember =
    intensity === "ember"
      ? "opacity-70 mix-blend-screen"
      : "opacity-45 mix-blend-soft-light";

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[2] overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className={`lane-heat-ember absolute inset-0 ${ember}`}
        style={{
          background:
            intensity === "ember"
              ? "radial-gradient(ellipse 70% 55% at 42% 72%, rgba(255,106,26,0.55) 0%, rgba(255,80,10,0.18) 38%, transparent 68%)"
              : "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(255,106,26,0.35) 0%, rgba(232,176,109,0.12) 42%, transparent 70%)",
        }}
      />
      <div
        className="lane-heat-shimmer absolute inset-[-8%] opacity-30 mix-blend-overlay"
        style={{
          background:
            "linear-gradient(105deg, transparent 35%, rgba(255,180,90,0.22) 48%, transparent 62%)",
        }}
      />
    </div>
  );
}
