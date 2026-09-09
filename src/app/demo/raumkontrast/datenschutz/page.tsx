import type { Metadata } from "next";
import { RkLegalPage } from "@/components/demo/rk/RkLegalPage";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Living Demo Raumkontrast Baumann — Informationen nach DSGVO.",
};

export default function DatenschutzRoute() {
  return <RkLegalPage slug="datenschutz" />;
}
