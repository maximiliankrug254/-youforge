"use client";

import { ReactLenis } from "lenis/react";
import { useRkMediaQuery } from "@/components/demo/rk/useRkMediaQuery";

/**
 * Native scroll is more reliable on this long demo (many images + Framer).
 * Lenis stays available but off by default to avoid mid-page rubber-banding.
 */
const ENABLE_LENIS = false;

export function RkLenis({ children }: { children: React.ReactNode }) {
  const finePointer = useRkMediaQuery("(pointer: fine)");
  const reduceMotion = useRkMediaQuery("(prefers-reduced-motion: reduce)");

  if (!ENABLE_LENIS || !finePointer || reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
        autoResize: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
