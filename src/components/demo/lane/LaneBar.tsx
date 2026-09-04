"use client";

import Image from "next/image";
import { LANE_IMG } from "@/components/demo/lane/lane-config";
import { LANE_COPY, LANE_DRINKS } from "@/components/demo/lane/lane-content";
import { LaneSmoke } from "@/components/demo/lane/LaneSmoke";
import { scrollToLanePanel } from "@/components/demo/lane/scroll-to-panel";

export function LaneBar() {
  return (
    <section
      id="bar"
      className="lane-panel relative isolate overflow-hidden bg-[var(--lane-void)]"
    >
      <Image
        src={LANE_IMG.bar}
        alt=""
        fill
        quality={88}
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,6,5,0.82)_0%,rgba(7,6,5,0.38)_50%,rgba(7,6,5,0.88)_100%)]" />
      <LaneSmoke />

      <div className="relative z-10 flex h-full min-h-dvh flex-col justify-end gap-6 px-5 py-16 sm:px-8 min-[480px]:flex-row min-[480px]:items-end min-[480px]:justify-between min-[480px]:gap-10 min-[480px]:px-10 min-[480px]:py-16 lg:px-16">
        <div className="max-w-md">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--lane-ember)]">
            {LANE_COPY.barEyebrow}
          </p>
          <h2 className="mt-3 font-lane-display text-[clamp(2.1rem,4.8vw,3.8rem)] font-semibold uppercase leading-[0.95] tracking-[0.06em] text-[var(--lane-bone)]">
            {LANE_COPY.barTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--lane-bone)]/70 sm:text-[15px]">
            {LANE_COPY.barLead}
          </p>
          <button
            type="button"
            onClick={() => scrollToLanePanel("reserve")}
            data-lane-hover
            className="mt-8 text-[11px] uppercase tracking-[0.22em] text-[var(--lane-ember)] hover:text-[var(--lane-bone)]"
          >
            {LANE_COPY.heroCta} →
          </button>
        </div>

        <ul className="grid w-full max-w-xl grid-cols-1 gap-x-10 border-t border-white/10 sm:grid-cols-2">
          {LANE_DRINKS.map((d) => (
            <li
              key={d.name}
              className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3"
            >
              <div>
                <p className="text-[12px] uppercase tracking-[0.12em] text-[var(--lane-bone)]">
                  {d.name}
                  {"signature" in d && d.signature ? (
                    <span className="ml-2 text-[9px] tracking-[0.18em] text-[var(--lane-ember)]">
                      {LANE_COPY.barSignature}
                    </span>
                  ) : null}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-[var(--lane-bone)]/45">
                  {d.note}
                </p>
              </div>
              <span className="shrink-0 text-[12px] tabular-nums text-[var(--lane-ember)]">
                {d.price} €
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
