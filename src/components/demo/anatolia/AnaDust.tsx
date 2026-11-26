"use client";

import { useReducedMotion } from "framer-motion";

const MOTES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: 1 + (i % 3),
  delay: (i % 10) * 0.4,
  duration: 10 + (i % 8),
}));

export function AnaDust() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden>
      {MOTES.map((m) => (
        <span
          key={m.id}
          className="ana-dust absolute rounded-full bg-[var(--ana-amber)]/40"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
