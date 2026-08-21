"use client";

import { R2bHero } from "@/components/demo/r2b/R2bHero";
import { R2bMarquee } from "@/components/demo/r2b/R2bMarquee";
import { R2bStatement } from "@/components/demo/r2b/R2bStatement";
import { R2bManifesto } from "@/components/demo/r2b/R2bManifesto";
import { R2bWork } from "@/components/demo/r2b/R2bWork";
import { R2bFilmStrip } from "@/components/demo/r2b/R2bFilmStrip";
import { R2bServices } from "@/components/demo/r2b/R2bServices";
import { R2bApproach } from "@/components/demo/r2b/R2bApproach";
import { R2bTeam } from "@/components/demo/r2b/R2bTeam";
import { R2bVoices } from "@/components/demo/r2b/R2bVoices";
import { R2bContact } from "@/components/demo/r2b/R2bContact";
import { R2bStickyCta } from "@/components/demo/r2b/R2bStickyCta";

export function R2bPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <R2bHero />
      <R2bMarquee />
      <R2bStatement />
      <R2bManifesto />
      <R2bWork />
      <R2bFilmStrip />
      <R2bServices />
      <R2bMarquee flip />
      <R2bApproach />
      <R2bTeam />
      <R2bVoices />
      <R2bContact />
      <R2bStickyCta />
    </main>
  );
}
