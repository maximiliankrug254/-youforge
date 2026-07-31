"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function AtlLenis({ children }: { children: React.ReactNode }) {
  const [smooth, setSmooth] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setSmooth(fine && !reduce);
  }, []);

  if (!smooth) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        smoothWheel: true,
        wheelMultiplier: 0.88,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
