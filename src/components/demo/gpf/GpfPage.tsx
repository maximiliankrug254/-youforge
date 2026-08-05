"use client";

import { GpfHero } from "@/components/demo/gpf/GpfHero";
import { GpfMarquee } from "@/components/demo/gpf/GpfMarquee";
import { GpfStatement } from "@/components/demo/gpf/GpfStatement";
import { GpfPillars } from "@/components/demo/gpf/GpfPillars";
import { GpfServices } from "@/components/demo/gpf/GpfServices";
import { GpfCompare } from "@/components/demo/gpf/GpfCompare";
import { GpfGallery } from "@/components/demo/gpf/GpfGallery";
import { GpfProcess } from "@/components/demo/gpf/GpfProcess";
import { GpfStandards } from "@/components/demo/gpf/GpfStandards";
import { GpfAbout } from "@/components/demo/gpf/GpfAbout";
import { GpfRegion } from "@/components/demo/gpf/GpfRegion";
import { GpfFaq } from "@/components/demo/gpf/GpfFaq";
import { GpfContact } from "@/components/demo/gpf/GpfContact";
import { GpfStickyCta } from "@/components/demo/gpf/GpfStickyCta";
import { GPF_MARQUEE, GPF_MACHINES } from "@/components/demo/gpf/gpf-content";

export function GpfPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <GpfHero />
      <GpfMarquee words={GPF_MARQUEE} />
      <GpfStatement />
      <GpfPillars />
      <GpfServices />
      <GpfCompare />
      <GpfGallery />
      <GpfProcess />
      <GpfMarquee words={GPF_MACHINES} flip tone="light" />
      <GpfStandards />
      <GpfAbout />
      <GpfRegion />
      <GpfFaq />
      <GpfContact />
      <GpfStickyCta />
    </main>
  );
}
