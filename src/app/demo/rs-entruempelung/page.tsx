import { RsHero } from "@/components/demo/rs/RsHero";
import { RsBeforeAfter } from "@/components/demo/rs/RsBeforeAfter";
import { RsServices } from "@/components/demo/rs/RsServices";
import { RsProcess } from "@/components/demo/rs/RsProcess";
import { RsAreas } from "@/components/demo/rs/RsAreas";
import { RsContact } from "@/components/demo/rs/RsContact";

/** Keine statische 404-Prerender mehr — die alte notFound()-Seite hing im CDN. */
export const dynamic = "force-dynamic";

export default function RsEntruempelungDemoPage() {
  return (
    <main>
      <RsHero />
      <RsBeforeAfter />
      <RsServices />
      <RsProcess />
      <RsAreas />
      <RsContact />
    </main>
  );
}
