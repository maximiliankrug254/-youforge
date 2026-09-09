import type { Metadata } from "next";
import { RkLegalPage } from "@/components/demo/rk/RkLegalPage";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen für Beratung, Lieferung und Montage bei Raumkontrast Baumann.",
};

export default function AgbRoute() {
  return <RkLegalPage slug="agb" />;
}
