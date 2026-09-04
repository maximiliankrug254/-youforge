"use client";

import { useEffect, useState } from "react";
import { VAULT } from "@/components/demo/vault/vault-config";

function formatClock(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: VAULT.place.tz,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);
  const hour = parts.find((p) => p.type === "hour")?.value ?? "00";
  const minute = parts.find((p) => p.type === "minute")?.value ?? "00";
  const dayPeriod = parts.find((p) => p.type === "dayPeriod")?.value ?? "AM";
  return { time: `${hour}:${minute}`, period: dayPeriod.toUpperCase() };
}

export function VaultClock() {
  const [clock, setClock] = useState<{ time: string; period: string } | null>(
    null,
  );

  useEffect(() => {
    const tick = () => setClock(formatClock(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!clock) {
    return (
      <span className="tabular-nums tracking-[0.18em] text-[10px] uppercase text-[var(--vault-bone)]/70">
        — —
      </span>
    );
  }

  return (
    <span className="flex items-center gap-2 tabular-nums text-[10px] uppercase tracking-[0.18em] text-[var(--vault-bone)]/80">
      <span className="hidden sm:inline opacity-50">{clock.time}</span>
      <span>{clock.period}</span>
    </span>
  );
}
