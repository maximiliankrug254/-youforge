"use client";

import { motion } from "framer-motion";

export function WireframeSphere({ className }: { className?: string }) {
  const rings = Array.from({ length: 18 }, (_, i) => i * 10);

  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className ?? ""}`}
      aria-hidden
    >
      <motion.div
        className="relative h-[min(70vw,520px)] w-[min(70vw,520px)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {rings.map((deg) => (
            <ellipse
              key={deg}
              cx="200"
              cy="200"
              rx="180"
              ry="60"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground/20"
              transform={`rotate(${deg} 200 200)`}
            />
          ))}
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground/15"
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground/10"
          />
        </svg>
      </motion.div>
    </div>
  );
}
