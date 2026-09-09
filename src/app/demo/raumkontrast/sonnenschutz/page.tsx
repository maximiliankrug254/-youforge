import type { Metadata } from "next";
import { RkSonnenschutzPage } from "@/components/demo/rk/RkSonnenschutzPage";

export const metadata: Metadata = {
  title: "Sicht- und Sonnenschutz",
  description:
    "Plissee, Doppelrollo, Jalousie und Flächenvorhang auf Maß. Beratung und Montage durch Raumkontrast Baumann in Irschenberg.",
};

export default function SonnenschutzRoute() {
  return <RkSonnenschutzPage />;
}
