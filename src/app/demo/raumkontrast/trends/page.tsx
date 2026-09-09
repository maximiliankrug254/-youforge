import type { Metadata } from "next";
import { RkTrendsPage } from "@/components/demo/rk/RkTrendsPage";

export const metadata: Metadata = {
  title: "Trends",
  description:
    "Aktuelle Trends bei Raumkontrast Baumann: Cord, Leinen, energieeffiziente Textilien und neue Kollektionen — Muster vor Ort.",
};

export default function TrendsRoute() {
  return <RkTrendsPage />;
}
