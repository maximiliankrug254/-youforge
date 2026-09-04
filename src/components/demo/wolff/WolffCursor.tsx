"use client";

import { useEffect, useRef, useState } from "react";

const BRUSH = "/demo/wolff/cursor-brush.png";

export function WolffCursor() {
  const [active, setActive] = useState(false);
  const brushRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setActive(pointer.matches && !motion.matches);
    sync();
    pointer.addEventListener("change", sync);
    motion.addEventListener("change", sync);
    return () => {
      pointer.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    document.documentElement.classList.add("wolff-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let hover = false;
    let down = false;

    const isHot = (t: EventTarget | null) =>
      Boolean(
        (t as HTMLElement | null)?.closest?.(
          "a, button, input, textarea, select, label, [role='button']",
        ),
      );

    const paint = () => {
      const node = brushRef.current;
      if (!node) return;
      const punch = down ? 0.92 : hover ? 1.06 : 1;
      node.style.transform = `translate3d(${mx}px,${my}px,0) scale(${punch})`;
    };

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      hover = isHot(e.target);
      paint();
    };

    const onDown = (e: PointerEvent) => {
      down = true;
      hover = isHot(e.target);
      paint();
    };

    const onUp = () => {
      down = false;
      paint();
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointercancel", onUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      document.documentElement.classList.remove("wolff-cursor");
    };
  }, [active]);

  if (!active) return null;

  return (
    <img
      ref={brushRef}
      src={BRUSH}
      alt=""
      width={32}
      height={22}
      className="pointer-events-none fixed left-0 top-0 z-[110] hidden origin-top-left will-change-transform md:block"
      style={{
        width: 32,
        height: "auto",
        transform: "translate3d(-120px,-120px,0)",
        filter: "drop-shadow(0.5px 1px 1px rgba(0,0,0,0.45))",
      }}
      draggable={false}
      aria-hidden
    />
  );
}
