import type { Metadata } from "next";
import { AaLegal } from "@/components/demo/stelzer/AaLegal";
import { AA_DATENSCHUTZ } from "@/components/demo/stelzer/aa-legal";

export const metadata: Metadata = {
  title: "Datenschutz | Stelzer & Heßelmann",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return <AaLegal title="Datenschutz" blocks={AA_DATENSCHUTZ} />;
}
