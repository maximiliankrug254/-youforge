"use client";

import { ReactLenis } from "lenis/react";
import { useAaMediaQuery } from "@/components/demo/stelzer/useAaMediaQuery";

export function AaLenis({ children }: { children: React.ReactNode }) {
  const finePointer = useAaMediaQuery("(pointer: fine)");
  const reduceMotion = useAaMediaQuery("(prefers-reduced-motion: reduce)");

  if (!finePointer || reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 0.92,
        touchMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  );
}
