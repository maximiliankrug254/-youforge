import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Starte dein Projekt mit YouForge. Erzähl uns von deiner Vision — wir finden den Weg.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
