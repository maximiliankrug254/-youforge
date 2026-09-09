import type { Metadata } from "next";
import { RkLegalPage } from "@/components/demo/rk/RkLegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Raumkontrast Baumann, Irschenberg — Angaben gemäß § 5 TMG.",
};

export default function ImpressumRoute() {
  return <RkLegalPage slug="impressum" />;
}
