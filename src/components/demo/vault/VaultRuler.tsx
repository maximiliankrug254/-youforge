"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function VaultRuler() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[50] h-8"
      aria-hidden
    >
      <div className="relative mx-4 h-full border-t border-[var(--vault-bone)]/18 sm:mx-6">
        <div className="flex h-3 justify-between px-0">
          {Array.from({ length: 49 }, (_, i) => (
            <span
              key={i}
              className="block w-px bg-[var(--vault-bone)]/28"
              style={{ height: i % 8 === 0 ? 10 : i % 2 === 0 ? 7 : 4 }}
            />
          ))}
        </div>
        <motion.span
          className="absolute top-0 h-3 w-px bg-[var(--vault-amber)]"
          style={{ left: 0, scaleX: 1, x: 0 }}
        />
        <motion.span
          className="absolute top-0 h-[3px] w-8 origin-left bg-[var(--vault-amber)]"
          style={{ scaleX: x }}
        />
      </div>
    </div>
  );
}
