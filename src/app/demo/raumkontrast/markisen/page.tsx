import type { Metadata } from "next";
import { RkMarkisenPage } from "@/components/demo/rk/RkMarkisenPage";

export const metadata: Metadata = {
  title: "Markisen",
  description:
    "Gelenkarm-, Kassetten-, ZIP-, Wintergarten- und Pergolamarkisen auf Maß. Aufmaß in Irschenberg und im Mangfalltal, Montage durch Raumkontrast Baumann.",
};

export default function MarkisenRoute() {
  return <RkMarkisenPage />;
}
