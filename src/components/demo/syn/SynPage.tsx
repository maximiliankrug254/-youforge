"use client";

import { SynHero } from "@/components/demo/syn/SynHero";
import { SynArrivals } from "@/components/demo/syn/SynArrivals";
import { SynCampaign } from "@/components/demo/syn/SynCampaign";
import { SynCategories } from "@/components/demo/syn/SynCategories";
import { SynManifesto } from "@/components/demo/syn/SynManifesto";
import { SynFilm } from "@/components/demo/syn/SynFilm";
import { SynFooter } from "@/components/demo/syn/SynFooter";

export function SynPage() {
  return (
    <main>
      <SynHero />
      <SynArrivals />
      <SynCampaign />
      <SynCategories />
      <SynManifesto />
      <SynFilm />
      <SynFooter />
    </main>
  );
}
