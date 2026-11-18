import { BbfHero } from "@/components/demo/bbf/BbfHero";
import { BbfPillars } from "@/components/demo/bbf/BbfPillars";
import { BbfWhy } from "@/components/demo/bbf/BbfWhy";
import { BbfContact } from "@/components/demo/bbf/BbfContact";
import { BbfStickyCta } from "@/components/demo/bbf/BbfStickyCta";

export function BbfPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <BbfHero />
      <BbfPillars />
      <BbfWhy />
      <BbfContact />
      <BbfStickyCta />
    </main>
  );
}
