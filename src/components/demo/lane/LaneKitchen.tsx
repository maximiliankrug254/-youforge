"use client";

import Image from "next/image";
import { LANE_COPY, LANE_DISHES, LANE_FEATURED_DISH } from "@/components/demo/lane/lane-content";
import { LaneHeat } from "@/components/demo/lane/LaneHeat";
import { scrollToLanePanel } from "@/components/demo/lane/scroll-to-panel";

export function LaneKitchen() {
  return (
    <section
      id="kitchen"
      className="lane-panel relative isolate overflow-hidden bg-[var(--lane-ash)]"
    >
      <div className="relative z-10 grid h-full min-h-dvh min-[480px]:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
        <article className="relative min-h-[48vh] min-[480px]:min-h-0">
          <Image
            src={LANE_FEATURED_DISH.image}
            alt={LANE_FEATURED_DISH.name}
            fill
            quality={92}
            sizes="(min-width: 480px) 55vw, 100vw"
            className="object-cover object-center"
          />
          <LaneHeat intensity="ember" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--lane-void)] via-[var(--lane-void)]/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-11">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--lane-ember)]">
              {LANE_COPY.kitchenFeaturedLabel} · {LANE_FEATURED_DISH.price} €
            </p>
            <h3 className="mt-1 font-lane-display text-[clamp(2.4rem,5vw,4rem)] uppercase leading-[0.9] tracking-[0.06em] text-[var(--lane-bone)]">
              {LANE_FEATURED_DISH.name}
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[var(--lane-bone)]/85 sm:text-base">
              {LANE_FEATURED_DISH.sell}
            </p>
            <button
              type="button"
              onClick={() => scrollToLanePanel("reserve")}
              data-lane-hover
              className="mt-7 bg-[var(--lane-ember)] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--lane-void)]"
            >
              {LANE_COPY.kitchenCta}
            </button>
          </div>
        </article>

        <div className="flex flex-col justify-center px-5 py-8 sm:px-6 min-[480px]:overflow-y-auto min-[480px]:py-12 lg:px-10">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--lane-ember)]">
            {LANE_COPY.kitchenEyebrow}
          </p>
          <h2 className="mt-2 font-lane-display text-[clamp(1.7rem,3.6vw,2.8rem)] font-semibold uppercase leading-[0.95] tracking-[0.06em] text-[var(--lane-bone)]">
            {LANE_COPY.kitchenTitle}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--lane-bone)]/55">
            {LANE_COPY.kitchenLead}
          </p>

          <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
            {LANE_DISHES.map((dish) => (
              <li
                key={dish.id}
                className="flex gap-3 py-2 sm:gap-3.5 min-[480px]:py-1.5 lg:py-2.5"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    quality={80}
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="truncate font-lane-display text-[1.05rem] uppercase tracking-[0.08em] text-[var(--lane-bone)]">
                      {dish.name}
                    </h3>
                    <span className="shrink-0 text-[12px] tabular-nums text-[var(--lane-ember)]">
                      {dish.price} €
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] leading-snug text-[var(--lane-bone)]/55">
                    {dish.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
