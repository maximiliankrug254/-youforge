"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ReactLenis } from "lenis/react";
import { DiveParticles } from "@/components/portfolio/DiveParticles";
import { Button } from "@/components/ui/Button";
import { siteConfig, type PortfolioProject } from "@/lib/constants";
import { getLiveShowcaseProjects } from "@/lib/work-showcase";
import { cn } from "@/lib/utils";

type WorkDiveShowcaseProps = {
  projects: PortfolioProject[];
};

export function WorkDiveShowcase({ projects }: WorkDiveShowcaseProps) {
  const live = useMemo(() => getLiveShowcaseProjects(projects), [projects]);
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 48,
    damping: 32,
    mass: 0.5,
  });

  // Kurzes Intro, dann moderate Projekt-Segmente
  const introEnd = 0.06;
  const ctaStart = 0.91;
  const projectSpan = (ctaStart - introEnd) / Math.max(live.length, 1);

  const vh = 110 + live.length * 120 + 110;

  return (
    <ReactLenis
      root
      options={{
        lerp: reduceMotion ? 1 : 0.07,
        smoothWheel: !reduceMotion,
        wheelMultiplier: reduceMotion ? 1 : 0.88,
      }}
    >
      <div
        ref={trackRef}
        className="relative bg-black"
        style={{ height: `${vh}vh` }}
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <DiveParticles progress={smooth} />

          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_50%,transparent_20%,rgba(0,0,0,0.55)_100%)]"
            aria-hidden
          />

          <DiveChrome />

          <IntroLayer progress={smooth} introEnd={introEnd} count={live.length} />

          {live.map((project, i) => {
            const start = introEnd + i * projectSpan;
            const end = start + projectSpan;
            return (
              <ProjectPlane
                key={project.slug}
                project={project}
                index={i}
                progress={smooth}
                start={start}
                end={end}
                reduceMotion={!!reduceMotion}
              />
            );
          })}

          <CtaLayer progress={smooth} ctaStart={ctaStart} />
        </div>
      </div>
    </ReactLenis>
  );
}

function DiveChrome() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 mix-blend-normal">
      <p className="absolute left-5 top-24 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45 sm:left-8 lg:top-28">
        Scroll to dive in
      </p>
      <p className="absolute left-1/2 top-24 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.35em] text-white/70 lg:top-28">
        YouForge
      </p>
      <p className="absolute bottom-6 left-5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35 sm:left-8">
        Arbeiten
      </p>
      <p className="absolute bottom-6 right-5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35 sm:right-8">
        Undercover cases
      </p>
    </div>
  );
}

function IntroLayer({
  progress,
  introEnd,
  count,
}: {
  progress: MotionValue<number>;
  introEnd: number;
  count: number;
}) {
  const opacity = useTransform(progress, [0, introEnd * 0.35, introEnd], [1, 0.85, 0]);
  const scale = useTransform(progress, [0, introEnd], [1, 1.28]);
  const y = useTransform(progress, [0, introEnd], [0, -56]);
  const blur = useTransform(progress, [0, introEnd], [0, 10]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{ opacity, scale, y, filter }}
      className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.36em] text-accent">
        Portfolio · {count} cases
      </p>
      <h1 className="mt-6 max-w-[14ch] text-[clamp(2.6rem,8vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
        Was wir
        <br />
        <span className="text-white/55">geschmiedet</span>
        <br />
        haben.
      </h1>
      <p className="mt-8 max-w-md text-[11px] uppercase leading-relaxed tracking-[0.18em] text-white/55 sm:text-xs">
        Websites, Web-Apps und KI — undercover, Ergebnis im Fokus. Scrollen, um
        einzutauchen.
      </p>
    </motion.div>
  );
}

function ProjectPlane({
  project,
  index,
  progress,
  start,
  end,
  reduceMotion,
}: {
  project: PortfolioProject;
  index: number;
  progress: MotionValue<number>;
  start: number;
  end: number;
  reduceMotion: boolean;
}) {
  const mid = (start + end) / 2;
  const appear = start + (end - start) * 0.15;
  const peak = mid;
  const leave = end - (end - start) * 0.14;

  const opacity = useTransform(
    progress,
    [start, appear, peak, leave, end],
    [0, 1, 1, 0.45, 0]
  );
  const scale = useTransform(
    progress,
    [start, appear, peak, end],
    reduceMotion ? [1, 1, 1, 1] : [0.58, 0.93, 1.02, 1.28]
  );
  const z = useTransform(
    progress,
    [start, peak, end],
    reduceMotion ? [0, 0, 0] : [-250, 0, 180]
  );
  const y = useTransform(
    progress,
    [start, peak, end],
    reduceMotion ? [24, 0, -24] : [70, 0, -50]
  );
  const blur = useTransform(
    progress,
    [start, appear, peak, leave, end],
    reduceMotion ? [0, 0, 0, 0, 0] : [11, 0, 0, 3, 12]
  );
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const label = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        z,
        filter,
        transformPerspective: 1200,
      }}
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-8"
    >
      <article
        className={cn(
          "pointer-events-auto w-full max-w-5xl",
          "grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
        )}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c0c] shadow-[0_40px_100px_rgba(0,0,0,0.65)]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-2 truncate rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] text-white/40">
              {project.title}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`Website-Vorschau: ${project.title}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={index < 2}
                quality={92}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-black" />
            )}
          </div>
        </div>

        <div className="text-left lg:pl-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
            Projekt {label}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-white/45">{project.subtitle}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/kontakt" variant="ghost" size="lg">
              Ähnliches schmieden
            </Button>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

function CtaLayer({
  progress,
  ctaStart,
}: {
  progress: MotionValue<number>;
  ctaStart: number;
}) {
  const opacity = useTransform(progress, [ctaStart, ctaStart + 0.05, 1], [0, 1, 1]);
  const y = useTransform(progress, [ctaStart, 1], [40, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
    >
      <div className="pointer-events-auto max-w-xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
          Nächstes Kapitel
        </p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Dein Projekt als Nächstes?
        </h2>
        <p className="mt-5 text-white/55">
          Kurz. Direkt. Kein Verkaufsdruck. Erzähl uns von deiner Vision.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href={siteConfig.calendly} size="lg">
            Termin buchen →
          </Button>
          <Button href="/kontakt" variant="ghost" size="lg">
            Vision schmieden →
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
