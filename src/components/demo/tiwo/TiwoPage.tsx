"use client";

import { TiwoHero } from "@/components/demo/tiwo/TiwoHero";
import { TiwoMarquee } from "@/components/demo/tiwo/TiwoMarquee";
import { TiwoStatement } from "@/components/demo/tiwo/TiwoStatement";
import { TiwoTeam } from "@/components/demo/tiwo/TiwoTeam";
import { TiwoAbout } from "@/components/demo/tiwo/TiwoAbout";
import { TiwoServices } from "@/components/demo/tiwo/TiwoServices";
import { TiwoWhy } from "@/components/demo/tiwo/TiwoWhy";
import { TiwoReferences } from "@/components/demo/tiwo/TiwoReferences";
import { TiwoContact } from "@/components/demo/tiwo/TiwoContact";
import { TiwoStickyCta } from "@/components/demo/tiwo/TiwoStickyCta";

export function TiwoPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <TiwoHero />
      <TiwoMarquee />
      <TiwoStatement />
      <TiwoTeam />
      <TiwoAbout />
      <TiwoServices />
      <TiwoMarquee flip />
      <TiwoWhy />
      <TiwoReferences />
      <TiwoContact />
      <TiwoStickyCta />
    </main>
  );
}
