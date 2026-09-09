import type { Metadata } from "next";
import { RkPartnerPage } from "@/components/demo/rk/RkPartnerPage";

export const metadata: Metadata = {
  title: "Partner",
  description:
    "Unsere Herstellerpartner: Saum & Viebahn, JAB, Trend Stoff, Interstil, Leha, Neher, JOKA, Fine, Pallmann, Mapei.",
};

export default function PartnerRoute() {
  return <RkPartnerPage />;
}
