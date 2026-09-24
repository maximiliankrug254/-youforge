import type { Metadata } from "next";
import { AaLegal } from "@/components/demo/stelzer/AaLegal";
import { AA_AGB } from "@/components/demo/stelzer/aa-legal";

export const metadata: Metadata = {
  title: "AGB | Stelzer & Heßelmann",
  robots: { index: false, follow: false },
};

export default function AgbPage() {
  return <AaLegal title="AGB" blocks={AA_AGB} />;
}
