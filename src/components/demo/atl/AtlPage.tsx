import { AtlHero } from "@/components/demo/atl/AtlHero";
import { AtlPillars } from "@/components/demo/atl/AtlPillars";
import { AtlWhy } from "@/components/demo/atl/AtlWhy";
import { AtlContact } from "@/components/demo/atl/AtlContact";
import { AtlStickyCta } from "@/components/demo/atl/AtlStickyCta";
import { AtlRoadPass } from "@/components/demo/atl/AtlRoadPass";

export function AtlPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <AtlHero />
      <AtlRoadPass label="Karosserie · KFZ · Tuning" />
      <AtlPillars />
      <AtlRoadPass label="Grünberg · Meisterqualität" flip />
      <AtlWhy />
      <AtlRoadPass label="Bereit für den nächsten Kilometer" />
      <AtlContact />
      <AtlStickyCta />
    </main>
  );
}
