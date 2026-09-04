import { RsHero } from "@/components/demo/rs/RsHero";
import { RsBeforeAfter } from "@/components/demo/rs/RsBeforeAfter";
import { RsServices } from "@/components/demo/rs/RsServices";
import { RsProcess } from "@/components/demo/rs/RsProcess";
import { RsAreas } from "@/components/demo/rs/RsAreas";
import { RsContact } from "@/components/demo/rs/RsContact";

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
