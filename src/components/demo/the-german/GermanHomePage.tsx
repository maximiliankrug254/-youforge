import { GermanAboutTeaser } from "@/components/demo/the-german/GermanAboutTeaser";
import { GermanAdvantages } from "@/components/demo/the-german/GermanAdvantages";
import { GermanGallery } from "@/components/demo/the-german/GermanGallery";
import { GermanHero } from "@/components/demo/the-german/GermanHero";
import { GermanMarquee } from "@/components/demo/the-german/GermanMarquee";
import { GermanPillars } from "@/components/demo/the-german/GermanPillars";

export function GermanHomePage() {
  return (
    <>
      <GermanHero />
      <GermanMarquee />
      <GermanPillars />
      <GermanAboutTeaser />
      <GermanAdvantages />
      <GermanGallery />
    </>
  );
}
