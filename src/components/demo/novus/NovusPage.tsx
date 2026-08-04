"use client";

import { NovusHero } from "@/components/demo/novus/NovusHero";
import { NovusMarquee } from "@/components/demo/novus/NovusMarquee";
import { NovusTeam } from "@/components/demo/novus/NovusTeam";
import { NovusStatement } from "@/components/demo/novus/NovusStatement";
import { NovusServices } from "@/components/demo/novus/NovusServices";
import { NovusLooks } from "@/components/demo/novus/NovusLooks";
import { NovusSalon } from "@/components/demo/novus/NovusSalon";
import { NovusBridal } from "@/components/demo/novus/NovusBridal";
import { NovusContact } from "@/components/demo/novus/NovusContact";
import { NovusStickyCta } from "@/components/demo/novus/NovusStickyCta";

export function NovusPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <NovusHero />
      <NovusMarquee />
      <NovusTeam />
      <NovusStatement />
      <NovusServices />
      <NovusMarquee flip />
      <NovusLooks />
      <NovusSalon />
      <NovusBridal />
      <NovusContact />
      <NovusStickyCta />
    </main>
  );
}
