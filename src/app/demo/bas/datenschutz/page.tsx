import type { Metadata } from "next";
import { AaLegal } from "@/components/demo/bas/AaLegal";
import { AA_DATENSCHUTZ } from "@/components/demo/bas/aa-legal";

export const metadata: Metadata = {
  title: "Datenschutz | Braun Automobil Service",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return <AaLegal title="Datenschutz" blocks={AA_DATENSCHUTZ} />;
}
