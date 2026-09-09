"use client";

import { RkHero } from "@/components/demo/rk/RkHero";
import { RkMarquee } from "@/components/demo/rk/RkMarquee";
import { RkStatement } from "@/components/demo/rk/RkStatement";
import { RkMarkisenSpotlight } from "@/components/demo/rk/RkMarkisenSpotlight";
import { RkTypes } from "@/components/demo/rk/RkTypes";
import { RkInterior } from "@/components/demo/rk/RkInterior";
import { RkServices } from "@/components/demo/rk/RkServices";
import { RkExhibition } from "@/components/demo/rk/RkExhibition";
import { RkProcess } from "@/components/demo/rk/RkProcess";
import { RkGallery } from "@/components/demo/rk/RkGallery";
import { RkAbout } from "@/components/demo/rk/RkAbout";
import { RkFaq } from "@/components/demo/rk/RkFaq";
import { RkContact } from "@/components/demo/rk/RkContact";
import { RK_MARQUEE } from "@/components/demo/rk/rk-content";

export function RkPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <RkHero />
      <RkMarquee words={RK_MARQUEE} />
      <RkStatement />
      <RkMarkisenSpotlight />
      <RkTypes />
      <RkServices />
      <RkInterior />
      <RkExhibition />
      <RkProcess />
      <RkMarquee words={RK_MARQUEE} flip tone="light" />
      <RkGallery />
      <RkAbout />
      <RkFaq />
      <RkContact />
    </main>
  );
}
