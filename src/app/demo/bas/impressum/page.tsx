import type { Metadata } from "next";
import { AaLegal } from "@/components/demo/bas/AaLegal";
import { AA_IMPRESSUM } from "@/components/demo/bas/aa-legal";

export const metadata: Metadata = {
  title: "Impressum | Braun Automobil Service",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return <AaLegal title="Impressum" blocks={AA_IMPRESSUM} />;
}
