import type { Metadata } from "next";
import { RkContact } from "@/components/demo/rk/RkContact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Termin für Aufmaß und Beratung: 0173 5361077, Grub 2b, 83737 Irschenberg. Termine nach Vereinbarung.",
};

export default function KontaktRoute() {
  return (
    <main className="relative pb-20 pt-24 lg:pb-0 lg:pt-28">
      <RkContact />
    </main>
  );
}
