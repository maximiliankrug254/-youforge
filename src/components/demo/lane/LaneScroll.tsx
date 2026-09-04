"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLaneMediaQuery } from "@/components/demo/lane/useLaneMediaQuery";
import { setLaneLenis } from "@/components/demo/lane/lane-lenis";

export function LaneScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useLaneMediaQuery("(min-width: 480px)");
  const reduceMotion = useLaneMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const wrapper = ref.current;
    if (!wrapper || !desktop || reduceMotion) return;

    const content = wrapper.firstElementChild;
    if (!(content instanceof HTMLElement)) return;

    const lenis = new Lenis({
      wrapper,
      content,
      orientation: "horizontal",
      gestureOrientation: "vertical",
      lerp: 0.068,
      smoothWheel: true,
      wheelMultiplier: 0.72,
      touchMultiplier: 0.95,
      autoRaf: true,
    });
    setLaneLenis(lenis);

    return () => {
      setLaneLenis(null);
      lenis.destroy();
    };
  }, [desktop, reduceMotion]);

  return (
    <div ref={ref} className="lane-shell">
      <div className="lane-track">{children}</div>
    </div>
  );
}
