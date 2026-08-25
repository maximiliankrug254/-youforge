"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PanelLayout } from "@/lib/work-showcase";
import { cn } from "@/lib/utils";

type FloatingPanelsProps = {
  panels: PanelLayout[];
  className?: string;
};

export function FloatingPanels({ panels, className }: FloatingPanelsProps) {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { amount: 0.25 });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 22, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion || !inView) {
      mx.set(0);
      my.set(0);
      return;
    }

    function onMove(e: MouseEvent) {
      const el = stageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [inView, reduceMotion, mx, my]);

  return (
    <div
      ref={stageRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(200,255,0,0.07),transparent_55%)]" />
      {panels.map((panel, i) => (
        <FloatingPanel
          key={`${panel.src}-${i}`}
          panel={panel}
          index={i}
          sx={sx}
          sy={sy}
          reduceMotion={!!reduceMotion}
        />
      ))}
    </div>
  );
}

function FloatingPanel({
  panel,
  index,
  sx,
  sy,
  reduceMotion,
}: {
  panel: PanelLayout;
  index: number;
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
  reduceMotion: boolean;
}) {
  const parallaxX = useTransform(sx, (v) => v * 18 * panel.depth);
  const parallaxY = useTransform(sy, (v) => v * 12 * panel.depth);
  const floatAmp = index % 2 === 0 ? 8 : -8;

  return (
    <motion.div
      className="absolute"
      style={{
        top: panel.top,
        left: panel.left,
        width: panel.width,
        zIndex: panel.z,
        x: reduceMotion ? 0 : parallaxX,
        y: reduceMotion ? 0 : parallaxY,
      }}
    >
      <motion.div
        className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-surface/40 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        style={{ rotate: panel.rotate }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
        whileInView={
          reduceMotion
            ? undefined
            : {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.06 * index,
                  ease: [0.21, 0.47, 0.32, 0.98],
                },
              }
        }
        viewport={{ once: true, amount: 0.2 }}
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, floatAmp, 0],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 5.2 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }
        }
      >
        <Image
          src={panel.src}
          alt=""
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 45vw, 28vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
      </motion.div>
    </motion.div>
  );
}
