import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WebsiteCheck } from "@/components/website-check/WebsiteCheck";

export const metadata: Metadata = {
  title: "Kostenloser Website-Check",
  description:
    "Wie gut findet Google deine Website? Kostenloser Schnell-Check in unter einer Minute: Handytauglichkeit, Ladezeit, Firmeneintrag und mehr.",
  alternates: { canonical: "/website-check" },
};

export default async function WebsiteCheckPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { url } = await searchParams;
  const startUrl = typeof url === "string" ? url.slice(0, 300) : "";

  return (
    <div className="pt-24">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <SectionHeading
              label="Website-Check"
              title="Wie gut findet Google deine Website?"
              description="Kostenloser Schnell-Check: Handytauglichkeit, Ladezeit, Firmeneintrag, Telefon und mehr – mit deinen drei wichtigsten Baustellen."
              align="center"
            />
          </FadeIn>

          <div className="mt-12">
            <WebsiteCheck startUrl={startUrl} />
          </div>
        </div>
      </section>
    </div>
  );
}
