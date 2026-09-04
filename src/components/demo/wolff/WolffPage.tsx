"use client";

import { WolffHero } from "@/components/demo/wolff/WolffHero";
import { WolffMarquee } from "@/components/demo/wolff/WolffMarquee";
import { WolffShop } from "@/components/demo/wolff/WolffShop";
import { WolffStrip } from "@/components/demo/wolff/WolffStrip";
import { WolffStatement } from "@/components/demo/wolff/WolffStatement";
import { WolffServices } from "@/components/demo/wolff/WolffServices";
import { WolffLooks } from "@/components/demo/wolff/WolffLooks";
import { WolffRitual } from "@/components/demo/wolff/WolffRitual";
import { WolffMen } from "@/components/demo/wolff/WolffMen";
import { WolffContact } from "@/components/demo/wolff/WolffContact";
import { WolffStickyCta } from "@/components/demo/wolff/WolffStickyCta";

export function WolffPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <WolffHero />
      <WolffMarquee />
      <WolffShop />
      <WolffStrip />
      <WolffStatement />
      <WolffServices />
      <WolffMarquee flip />
      <WolffLooks />
      <WolffRitual />
      <WolffMen />
      <WolffContact />
      <WolffStickyCta />
    </main>
  );
}
