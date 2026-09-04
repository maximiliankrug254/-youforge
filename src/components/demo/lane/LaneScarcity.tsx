"use client";

import { useEffect, useState } from "react";
import { LANE_COPY } from "@/components/demo/lane/lane-content";
import { getLaneTonight, type LaneTonight } from "@/components/demo/lane/lane-tonight";

export function LaneScarcity({ className = "" }: { className?: string }) {
  const [night, setNight] = useState<LaneTonight | null>(null);

  useEffect(() => {
    setNight(getLaneTonight());
  }, []);

  const line = night?.line ?? LANE_COPY.scarcityFallback;
  const hint = night?.hint;

  return (
    <p className={className}>
      <span className="text-[var(--lane-ember)]">{line}</span>
      {hint ? (
        <span className="mt-1 block text-[var(--lane-bone)]/45">{hint}</span>
      ) : null}
    </p>
  );
}
