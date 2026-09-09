import type { Metadata } from "next";
import { RkServices } from "@/components/demo/rk/RkServices";
import { RkContact } from "@/components/demo/rk/RkContact";

export const metadata: Metadata = {
  title: "Produkte",
  description:
    "Markisen, Sicht- und Sonnenschutz, Gardinen, Polsterei, Bodenbeläge und Insektenschutz — Raumkontrast Baumann, Irschenberg.",
};

export default function ProdukteRoute() {
  return (
    <main className="relative bg-[var(--rk-purple-ink)] pb-20 pt-28 lg:pb-0 lg:pt-32">
      <RkServices />
      <RkContact />
    </main>
  );
}
