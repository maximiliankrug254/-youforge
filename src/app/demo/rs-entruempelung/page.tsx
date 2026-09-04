import { RsHero } from "@/components/demo/rs/RsHero";
import { RsTrust } from "@/components/demo/rs/RsTrust";
import { RsBeforeAfter } from "@/components/demo/rs/RsBeforeAfter";
import { RsVoice } from "@/components/demo/rs/RsVoice";
import { RsServices } from "@/components/demo/rs/RsServices";
import { RsProcess } from "@/components/demo/rs/RsProcess";
import { RsAreas } from "@/components/demo/rs/RsAreas";
import { RsContact } from "@/components/demo/rs/RsContact";
import { RsStickyCta } from "@/components/demo/rs/RsStickyCta";

/** Keine statische 404-Prerender mehr — die alte notFound()-Seite hing im CDN. */
export const dynamic = "force-dynamic";

export default function RsEntruempelungDemoPage() {
  return (
    <main>
      <RsHero />
      <RsTrust />
      <RsBeforeAfter />
      <RsVoice />
      <RsServices />
      <RsProcess />
      <RsAreas />
      <RsContact />
      <RsStickyCta />
    </main>
  );
}
