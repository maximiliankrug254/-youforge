"use client";

import { LaneScroll } from "@/components/demo/lane/LaneScroll";
import { LaneCursor } from "@/components/demo/lane/LaneCursor";
import { LaneNav } from "@/components/demo/lane/LaneNav";
import { LaneProgress } from "@/components/demo/lane/LaneProgress";
import { LaneGrain } from "@/components/demo/lane/LaneGrain";
import { LaneIntro } from "@/components/demo/lane/LaneIntro";
import { LaneHero } from "@/components/demo/lane/LaneHero";
import { LaneKitchen } from "@/components/demo/lane/LaneKitchen";
import { LaneBar } from "@/components/demo/lane/LaneBar";
import { LaneRoom } from "@/components/demo/lane/LaneRoom";
import { LaneReserve } from "@/components/demo/lane/LaneReserve";

export function LanePage() {
  return (
    <>
      <LaneIntro />
      <LaneGrain />
      <LaneCursor />
      <LaneProgress />
      <LaneNav />
      <LaneScroll>
        <LaneHero />
        <LaneKitchen />
        <LaneBar />
        <LaneRoom />
        <LaneReserve />
      </LaneScroll>
    </>
  );
}
