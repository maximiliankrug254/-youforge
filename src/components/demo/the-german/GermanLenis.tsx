"use client";

import { ReactLenis } from "lenis/react";

export function GermanLenis({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.065,
        smoothWheel: true,
        wheelMultiplier: 0.82,
      }}
    >
      {children}
    </ReactLenis>
  );
}
