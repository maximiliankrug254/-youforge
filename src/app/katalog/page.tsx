import type { Metadata } from "next";
import { CatalogLookbook } from "@/components/catalog/CatalogLookbook";

export const metadata: Metadata = {
  title: "Katalog: Website-Stile zum Durchblättern",
  description:
    "Website-Stile zum Durchblättern — eine Live-Demo pro Branche. Kein Portfolio, ein Lookbook.",
  alternates: { canonical: "/katalog" },
};

export default function KatalogPage() {
  return <CatalogLookbook />;
}
