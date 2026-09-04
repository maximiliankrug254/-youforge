"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { LANE, LANE_IMG } from "@/components/demo/lane/lane-config";
import { LANE_COPY, LANE_SLOTS } from "@/components/demo/lane/lane-content";
import { LaneScarcity } from "@/components/demo/lane/LaneScarcity";

export function LaneReserve() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="reserve"
      className="lane-panel relative isolate overflow-hidden bg-[var(--lane-ash)]"
    >
      <Image
        src={LANE_IMG.night}
        alt=""
        fill
        quality={88}
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,6,5,0.92)_0%,rgba(7,6,5,0.78)_100%)]" />

      <div className="relative z-10 grid h-full min-h-dvh items-end gap-8 px-5 py-20 sm:px-8 min-[480px]:grid-cols-2 min-[480px]:items-center min-[480px]:gap-10 min-[480px]:px-10 min-[480px]:py-16 lg:px-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--lane-ember)]">
            {LANE_COPY.reserveEyebrow}
          </p>
          <h2 className="mt-3 font-lane-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold uppercase leading-[0.92] tracking-[0.06em] text-[var(--lane-bone)]">
            {LANE_COPY.reserveTitle}
          </h2>
          <LaneScarcity className="mt-5 text-[12px] uppercase tracking-[0.18em]" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--lane-bone)]/70 sm:text-[15px]">
            {LANE_COPY.reserveLead}
          </p>
          <p className="mt-5 text-sm text-[var(--lane-bone)]/55">
            {LANE_COPY.reserveHours}
          </p>
          <a
            href={`mailto:${LANE.contact.email}`}
            className="mt-2 block text-sm text-[var(--lane-bone)]/55 hover:text-[var(--lane-bone)]"
          >
            {LANE.contact.email}
          </a>
          <a
            href={LANE.youforge.contact}
            className="mt-8 inline-block text-[10px] uppercase tracking-[0.22em] text-[var(--lane-bone)]/30 hover:text-[var(--lane-bone)]/55"
          >
            Living Demo · YouForge
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="border border-white/10 bg-[var(--lane-void)]/78 p-6 backdrop-blur-md sm:p-8"
        >
          {sent ? (
            <p className="font-lane-display text-3xl uppercase tracking-[0.08em] text-[var(--lane-ember)]">
              {LANE_COPY.reserveDone}
            </p>
          ) : (
            <>
              <label className="block text-[10px] uppercase tracking-[0.22em] text-[var(--lane-bone)]/40">
                Name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-[15px] text-[var(--lane-bone)] outline-none focus:border-[var(--lane-ember)]"
                />
              </label>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <label className="block text-[10px] uppercase tracking-[0.22em] text-[var(--lane-bone)]/40">
                  Köpfe (max. 6)
                  <input
                    required
                    name="covers"
                    type="number"
                    min={1}
                    max={6}
                    defaultValue={2}
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-[15px] text-[var(--lane-bone)] outline-none focus:border-[var(--lane-ember)]"
                  />
                </label>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-[var(--lane-bone)]/40">
                  Nacht
                  <input
                    required
                    name="date"
                    type="date"
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-[15px] text-[var(--lane-bone)] outline-none focus:border-[var(--lane-ember)] [color-scheme:dark]"
                  />
                </label>
              </div>
              <label className="mt-6 block text-[10px] uppercase tracking-[0.22em] text-[var(--lane-bone)]/40">
                Uhrzeit
                <select
                  required
                  name="slot"
                  defaultValue="20:00"
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-[15px] text-[var(--lane-bone)] outline-none focus:border-[var(--lane-ember)]"
                >
                  {LANE_SLOTS.map((slot) => (
                    <option key={slot} value={slot} className="bg-[var(--lane-void)]">
                      {slot}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                data-lane-hover
                className="mt-8 w-full bg-[var(--lane-ember)] py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--lane-void)]"
              >
                {LANE_COPY.reserveCta}
              </button>
              <p className="mt-3 text-[10px] leading-relaxed text-[var(--lane-bone)]/28">
                {LANE_COPY.reserveHint}
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
