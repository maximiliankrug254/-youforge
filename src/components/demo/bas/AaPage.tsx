"use client";

import { AaHero } from "@/components/demo/bas/AaHero";
import { AaProlog } from "@/components/demo/bas/AaProlog";
import { AaAbout } from "@/components/demo/bas/AaAbout";
import { AaGrow } from "@/components/demo/bas/AaGrow";
import { AaLocation } from "@/components/demo/bas/AaLocation";
import { AaCollage } from "@/components/demo/bas/AaCollage";
import { AaTimeline } from "@/components/demo/bas/AaTimeline";
import { AaPieces } from "@/components/demo/bas/AaPieces";
import { AaMarquee } from "@/components/demo/bas/AaMarquee";
import { AaSeasons } from "@/components/demo/bas/AaSeasons";
import { AaFaq } from "@/components/demo/bas/AaFaq";
import { AaFooter } from "@/components/demo/bas/AaFooter";
import { AaAmbient } from "@/components/demo/bas/AaAmbient";
import { AA_MARQUEE } from "@/components/demo/bas/aa-content";

export function AaPage() {
  return (
    <main className="relative z-10">
      <AaAmbient />
      <AaHero />
      <AaProlog />
      <AaPieces />
      <AaAbout />
      <AaGrow />
      <AaLocation />
      <AaCollage />
      <AaTimeline />
      <AaMarquee invert words={AA_MARQUEE} />
      <AaSeasons />
      <AaFaq />
      <AaFooter />
    </main>
  );
}
