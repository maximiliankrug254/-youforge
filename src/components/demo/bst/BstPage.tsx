import { BstHero } from "@/components/demo/bst/BstHero";
import { BstMarquee } from "@/components/demo/bst/BstMarquee";
import { BstStatement } from "@/components/demo/bst/BstStatement";
import { BstSpotlight } from "@/components/demo/bst/BstSpotlight";
import { BstServices } from "@/components/demo/bst/BstServices";
import { BstProcess } from "@/components/demo/bst/BstProcess";
import { BstGallery } from "@/components/demo/bst/BstGallery";
import { BstTrust } from "@/components/demo/bst/BstTrust";
import { BstContact } from "@/components/demo/bst/BstContact";
import { BstStickyCta } from "@/components/demo/bst/BstStickyCta";
import { BstPresence } from "@/components/demo/bst/BstPresence";

export function BstPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <BstHero />
      <BstMarquee />
      <BstStatement />
      <BstSpotlight />
      <BstServices />
      <BstProcess />
      <BstGallery />
      <BstMarquee flip />
      <BstTrust />
      <BstContact />
      <BstPresence />
      <BstStickyCta />
    </main>
  );
}
