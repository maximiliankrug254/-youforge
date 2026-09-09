import type { Metadata } from "next";
import { RkUnternehmenPage } from "@/components/demo/rk/RkUnternehmenPage";

export const metadata: Metadata = {
  title: "Unternehmen",
  description:
    "Alexander Baumann, Raumausstattermeister seit 2012 in Irschenberg. Mobile Ausstellung, Maßarbeit, Markisen und Raumausstattung.",
};

export default function UnternehmenRoute() {
  return <RkUnternehmenPage />;
}
