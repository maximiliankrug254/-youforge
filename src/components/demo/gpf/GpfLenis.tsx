"use client";

import { ReactLenis } from "lenis/react";
import { useGpfMediaQuery } from "@/components/demo/gpf/useGpfMediaQuery";

export function GpfLenis({ children }: { children: React.ReactNode }) {
  const finePointer = useGpfMediaQuery("(pointer: fine)");
  const reduceMotion = useGpfMediaQuery("(prefers-reduced-motion: reduce)");

  if (!finePointer || reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
