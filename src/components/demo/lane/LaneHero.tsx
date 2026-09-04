"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LANE_IMG } from "@/components/demo/lane/lane-config";
import { LANE_COPY } from "@/components/demo/lane/lane-content";
import { LaneHeat } from "@/components/demo/lane/LaneHeat";
import { LaneScarcity } from "@/components/demo/lane/LaneScarcity";
import { scrollToLanePanel } from "@/components/demo/lane/scroll-to-panel";

export function LaneHero() {
  return (
    <section
      id="hero"
      className="lane-panel relative isolate overflow-hidden bg-[var(--lane-void)]"
    >
      <motion.div
        className="absolute inset-0 min-[480px]:right-[42%]"
        initial={{ scale: 1.14 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={LANE_IMG.grill}
          alt="Grill und Glut"
          fill
          priority
          quality={92}
          sizes="(min-width: 480px) 55vw, 100vw"
          className="object-cover object-[center_38%]"
        />
        <LaneHeat intensity="ember" />
      </motion.div>

      {/* Light veil — fire stays visible, text still readable */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.18)_0%,rgba(7,6,5,0.08)_36%,rgba(7,6,5,0.72)_100%)] min-[480px]:bg-[linear-gradient(90deg,rgba(7,6,5,0.55)_0%,rgba(7,6,5,0.28)_40%,rgba(7,6,5,0.06)_52%,transparent_100%)]" />

      <div className="relative z-10 grid h-full min-h-dvh min-[480px]:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="order-2 flex flex-col justify-end px-5 pb-12 pt-8 sm:px-8 sm:pb-14 min-[480px]:order-1 min-[480px]:px-10 min-[480px]:pt-24 lg:px-14">
          <LaneScarcity className="text-[11px] uppercase tracking-[0.22em]" />
          <h1 className="mt-4 max-w-xl font-lane-display text-[clamp(2.35rem,5.8vw,4.6rem)] font-semibold uppercase leading-[0.9] tracking-[0.03em] text-[var(--lane-bone)] drop-shadow-[0_2px_28px_rgba(7,6,5,0.65)]">
            {LANE_COPY.heroTitle}
          </h1>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--lane-bone)]/88 sm:text-[1.1rem]">
            {LANE_COPY.heroLead}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-[var(--lane-bone)]/48">
            {LANE_COPY.heroMeta}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToLanePanel("reserve")}
              data-lane-hover
              className="bg-[var(--lane-ember)] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--lane-void)]"
            >
              {LANE_COPY.heroCta}
            </button>
            <button
              type="button"
              onClick={() => scrollToLanePanel("kitchen")}
              className="text-[11px] uppercase tracking-[0.22em] text-[var(--lane-bone)]/55 hover:text-[var(--lane-bone)]"
            >
              {LANE_COPY.heroSecondary}
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToLanePanel("kitchen")}
          data-lane-hover
          className="relative order-1 min-h-[48vh] text-left min-[480px]:order-2 min-[480px]:min-h-0"
          aria-label={`${LANE_COPY.heroPlateName}, ${LANE_COPY.heroPlatePrice}`}
        >
          <Image
            src={LANE_IMG.bun}
            alt={LANE_COPY.heroPlateName}
            fill
            priority
            quality={92}
            sizes="(min-width: 480px) 55vw, 100vw"
            className="object-cover object-center"
          />
          <LaneHeat intensity="soft" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--lane-void)]/85 via-transparent to-transparent min-[480px]:bg-gradient-to-l min-[480px]:from-transparent min-[480px]:via-transparent min-[480px]:to-[var(--lane-void)]/25" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--lane-ember)]">
              {LANE_COPY.heroPlatePrice}
            </p>
            <p className="mt-1 font-lane-display text-3xl uppercase tracking-[0.08em] text-[var(--lane-bone)] sm:text-[2.6rem]">
              {LANE_COPY.heroPlateName}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--lane-bone)]/78">
              {LANE_COPY.heroPlateNote}
            </p>
          </div>
        </button>
      </div>
    </section>
  );
}
