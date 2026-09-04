"use client";

import { useEffect, useState } from "react";

export function WolffClock({ className }: { className?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("de-DE", {
        timeZone: "Europe/Berlin",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());

    setTime(fmt());
    const id = window.setInterval(() => setTime(fmt()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!time) return <span className={`tabular-nums ${className ?? ""}`}>––:––:––</span>;

  return (
    <span className={`tabular-nums ${className ?? ""}`} suppressHydrationWarning>
      {time}
    </span>
  );
}
