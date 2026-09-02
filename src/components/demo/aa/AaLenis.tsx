"use client";

import { ReactLenis } from "lenis/react";
import { useAaMediaQuery } from "@/components/demo/aa/useAaMediaQuery";

export function AaLenis({ children }: { children: React.ReactNode }) {
  const finePointer = useAaMediaQuery("(pointer: fine)");
  const reduceMotion = useAaMediaQuery("(prefers-reduced-motion: reduce)");

  if (!finePointer || reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.052,
        smoothWheel: true,
        wheelMultiplier: 0.68,
        touchMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  );
}
