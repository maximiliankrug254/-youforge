import type { Metadata } from "next";
import { AaLegal } from "@/components/demo/stelzer/AaLegal";
import { AA_IMPRESSUM } from "@/components/demo/stelzer/aa-legal";

export const metadata: Metadata = {
  title: "Impressum | Stelzer & Heßelmann",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return <AaLegal title="Impressum" blocks={AA_IMPRESSUM} />;
}
