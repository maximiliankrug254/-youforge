"use client";

import { AaHero } from "@/components/demo/stelzer/AaHero";
import { AaProlog } from "@/components/demo/stelzer/AaProlog";
import { AaAbout } from "@/components/demo/stelzer/AaAbout";
import { AaGrow } from "@/components/demo/stelzer/AaGrow";
import { AaLocation } from "@/components/demo/stelzer/AaLocation";
import { AaCollage } from "@/components/demo/stelzer/AaCollage";
import { AaTimeline } from "@/components/demo/stelzer/AaTimeline";
import { AaPieces } from "@/components/demo/stelzer/AaPieces";
import { AaMarquee } from "@/components/demo/stelzer/AaMarquee";
import { AaSeasons } from "@/components/demo/stelzer/AaSeasons";
import { AaFaq } from "@/components/demo/stelzer/AaFaq";
import { AaFooter } from "@/components/demo/stelzer/AaFooter";
import { AaAmbient } from "@/components/demo/stelzer/AaAmbient";

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
      <AaMarquee
        invert
        words={["Flachdach", "Ziegel", "Schiefer", "Klempner", "Photovoltaik", "VELUX", "Oberhausen"]}
      />
      <AaSeasons />
      <AaFaq />
      <AaFooter />
    </main>
  );
}
