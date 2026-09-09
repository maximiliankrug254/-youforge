import type { Metadata } from "next";
import { RkReferenzenPage } from "@/components/demo/rk/RkReferenzenPage";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Referenzprojekte von Raumkontrast Baumann: Markisen, ZIP-Screens, Parkett, Polster und Sonnenschutz in Oberbayern.",
};

export default function ReferenzenRoute() {
  return <RkReferenzenPage />;
}
