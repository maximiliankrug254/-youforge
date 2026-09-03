"use client";

import { useEffect, useState } from "react";
import { baliClock } from "@/components/demo/the-german/german-bali";

export function GermanClock({
  className = "",
  showStatus = false,
}: {
  className?: string;
  showStatus?: boolean;
}) {
  const [clock, setClock] = useState<ReturnType<typeof baliClock> | null>(null);

  useEffect(() => {
    const tick = () => setClock(baliClock());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!clock) {
    return <span className={`tg-clock ${className}`}>Berawa · WITA</span>;
  }

  return (
    <span className={`tg-clock ${className}`}>
      <span className="tg-clock-dot" data-open={clock.open} />
      Berawa {clock.time} WITA
      {showStatus && (
        <span className="tg-clock-status">{clock.open ? "Open now" : "Closed"}</span>
      )}
    </span>
  );
}
