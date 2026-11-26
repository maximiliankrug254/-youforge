"use client";

import { AnaHero } from "@/components/demo/anatolia/AnaHero";
import { AnaDemoStrip } from "@/components/demo/anatolia/AnaDemoStrip";
import { AnaMarquee } from "@/components/demo/anatolia/AnaMarquee";
import { AnaStatement } from "@/components/demo/anatolia/AnaStatement";
import { AnaCinema } from "@/components/demo/anatolia/AnaCinema";
import { AnaPillars } from "@/components/demo/anatolia/AnaPillars";
import { AnaAtelier } from "@/components/demo/anatolia/AnaAtelier";
import { AnaServices } from "@/components/demo/anatolia/AnaServices";
import { AnaProjects } from "@/components/demo/anatolia/AnaProjects";
import { AnaFilmStrip } from "@/components/demo/anatolia/AnaFilmStrip";
import { AnaGallery } from "@/components/demo/anatolia/AnaGallery";
import { AnaProcess } from "@/components/demo/anatolia/AnaProcess";
import { AnaOffer } from "@/components/demo/anatolia/AnaOffer";
import { AnaAbout } from "@/components/demo/anatolia/AnaAbout";
import { AnaContact } from "@/components/demo/anatolia/AnaContact";
import { AnaStickyCta } from "@/components/demo/anatolia/AnaStickyCta";
import { AnaDesktopCta } from "@/components/demo/anatolia/AnaDesktopCta";
import { ANA_MARQUEE } from "@/components/demo/anatolia/ana-content";

export function AnaPage() {
  return (
    <main className="relative pb-20 lg:pb-24">
      <AnaHero />
      <AnaDemoStrip />
      <AnaMarquee words={ANA_MARQUEE} />
      <AnaStatement />
      <AnaCinema />
      <AnaPillars />
      <AnaAtelier />
      <AnaServices />
      <AnaProjects />
      <AnaFilmStrip />
      <AnaGallery />
      <AnaProcess />
      <AnaOffer />
      <AnaAbout />
      <AnaContact />
      <AnaStickyCta />
      <AnaDesktopCta />
    </main>
  );
}
