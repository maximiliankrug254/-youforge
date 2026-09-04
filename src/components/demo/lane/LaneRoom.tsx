"use client";

import Image from "next/image";
import { LANE_IMG } from "@/components/demo/lane/lane-config";
import { LANE_COPY } from "@/components/demo/lane/lane-content";
import { scrollToLanePanel } from "@/components/demo/lane/scroll-to-panel";

export function LaneRoom() {
  return (
    <section
      id="room"
      className="lane-panel relative isolate overflow-hidden bg-[var(--lane-void)]"
    >
      <Image
        src={LANE_IMG.venue}
        alt="Zwölf Stühle am Counter, Glut vor der Nase"
        fill
        quality={90}
        sizes="100vw"
        className="object-cover object-[center_55%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.12)_0%,rgba(7,6,5,0.18)_42%,rgba(7,6,5,0.82)_100%)]" />

      <div className="relative z-10 flex h-full min-h-dvh flex-col justify-end px-5 pb-16 pt-28 sm:px-10 lg:px-16">
        <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--lane-ember)]">
          {LANE_COPY.roomEyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl font-lane-display text-[clamp(2.2rem,5.5vw,4.4rem)] font-semibold uppercase leading-[0.92] tracking-[0.06em] text-[var(--lane-bone)]">
          {LANE_COPY.roomTitle}
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--lane-bone)]/75 sm:text-[15px]">
          {LANE_COPY.roomLead}
        </p>
        <ul className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
          {LANE_COPY.roomFacts.map((f) => (
            <li key={f.k} className="border-t border-white/15 pt-3">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--lane-ember)]">
                {f.k}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--lane-bone)]/70">
                {f.v}
              </p>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => scrollToLanePanel("reserve")}
          data-lane-hover
          className="mt-8 w-fit bg-[var(--lane-ember)] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--lane-void)]"
        >
          {LANE_COPY.roomCta}
        </button>
      </div>
    </section>
  );
}
