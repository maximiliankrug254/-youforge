"use client";

import { AaHero } from "@/components/demo/aa/AaHero";
import { AaProlog } from "@/components/demo/aa/AaProlog";
import { AaAbout } from "@/components/demo/aa/AaAbout";
import { AaGrow } from "@/components/demo/aa/AaGrow";
import { AaLocation } from "@/components/demo/aa/AaLocation";
import { AaCollage } from "@/components/demo/aa/AaCollage";
import { AaTimeline } from "@/components/demo/aa/AaTimeline";
import { AaPieces } from "@/components/demo/aa/AaPieces";
import { AaMarquee } from "@/components/demo/aa/AaMarquee";
import { AaSeasons } from "@/components/demo/aa/AaSeasons";
import { AaFaq } from "@/components/demo/aa/AaFaq";
import { AaFooter } from "@/components/demo/aa/AaFooter";
import { AaAmbient } from "@/components/demo/aa/AaAmbient";

export function AaPage() {
  return (
    <main className="relative z-10">
      <AaAmbient />
      <AaHero />
      <AaProlog />
      <AaAbout />
      <AaGrow />
      <AaLocation />
      <AaCollage />
      <AaTimeline />
      <AaPieces />
      <AaMarquee
        invert
        words={["Holz", "Ton", "Fuge", "Asche", "Brand", "Maserung", "Geduld"]}
      />
      <AaSeasons />
      <AaFaq />
      <AaFooter />
    </main>
  );
}
