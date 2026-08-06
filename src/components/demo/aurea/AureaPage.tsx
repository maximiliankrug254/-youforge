"use client";

import { AureaHero } from "@/components/demo/aurea/AureaHero";
import { AureaMarquee } from "@/components/demo/aurea/AureaMarquee";
import { AureaTeam } from "@/components/demo/aurea/AureaTeam";
import { AureaFilmStrip } from "@/components/demo/aurea/AureaFilmStrip";
import { AureaStatement } from "@/components/demo/aurea/AureaStatement";
import { AureaServices } from "@/components/demo/aurea/AureaServices";
import { AureaLooks } from "@/components/demo/aurea/AureaLooks";
import { AureaSalon } from "@/components/demo/aurea/AureaSalon";
import { AureaBridal } from "@/components/demo/aurea/AureaBridal";
import { AureaContact } from "@/components/demo/aurea/AureaContact";
import { AureaStickyCta } from "@/components/demo/aurea/AureaStickyCta";

export function AureaPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <AureaHero />
      <AureaMarquee />
      <AureaTeam />
      <AureaFilmStrip />
      <AureaStatement />
      <AureaServices />
      <AureaMarquee flip />
      <AureaLooks />
      <AureaSalon />
      <AureaBridal />
      <AureaContact />
      <AureaStickyCta />
    </main>
  );
}
