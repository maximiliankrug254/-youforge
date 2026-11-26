"use client";

import { ReactLenis } from "lenis/react";
import { useAnaMediaQuery } from "@/components/demo/anatolia/useAnaMediaQuery";

export function AnaLenis({ children }: { children: React.ReactNode }) {
  const finePointer = useAnaMediaQuery("(pointer: fine)");
  const reduceMotion = useAnaMediaQuery("(prefers-reduced-motion: reduce)");

  if (!finePointer || reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.88,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
