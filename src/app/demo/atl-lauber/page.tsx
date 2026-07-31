import { AtlHero } from "@/components/demo/atl/AtlHero";
import { AtlPillars } from "@/components/demo/atl/AtlPillars";
import { AtlWhy } from "@/components/demo/atl/AtlWhy";
import { AtlContact } from "@/components/demo/atl/AtlContact";
import { AtlStickyCta } from "@/components/demo/atl/AtlStickyCta";

export default function AtlLauberDemoPage() {
  return (
    <main className="pb-20 lg:pb-0">
      <AtlHero />
      <AtlPillars />
      <AtlWhy />
      <AtlContact />
      <AtlStickyCta />
    </main>
  );
}
