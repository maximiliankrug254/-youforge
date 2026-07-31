"use client";

import { JenHero } from "@/components/demo/jen/JenHero";
import { JenMarquee } from "@/components/demo/jen/JenMarquee";
import { JenSolution } from "@/components/demo/jen/JenSolution";
import { JenBeforeAfter } from "@/components/demo/jen/JenBeforeAfter";
import { JenServices } from "@/components/demo/jen/JenServices";
import { JenBenefits } from "@/components/demo/jen/JenBenefits";
import { JenAbout } from "@/components/demo/jen/JenAbout";
import { JenContact } from "@/components/demo/jen/JenContact";
import { JenStickyCta } from "@/components/demo/jen/JenStickyCta";

export function JenPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <JenHero />
      <JenMarquee />
      <JenSolution />
      <JenBeforeAfter />
      <JenMarquee flip />
      <JenServices />
      <JenBenefits />
      <JenAbout />
      <JenContact />
      <JenStickyCta />
    </main>
  );
}
