import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProjectBriefingForm } from "@/components/briefing/ProjectBriefingForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projekt-Briefing",
  description:
    "10 kurze Fragen zu deinem Projekt — wir melden uns innerhalb von 24 Stunden.",
};

export default function BriefingPage() {
  return (
    <div className="pt-24">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <SectionHeading
              label="Briefing"
              title="Dein Projekt in 10 Fragen."
              description="Ca. 5 Minuten — damit wir direkt in die Lösung einsteigen, statt Basics abzuklappern."
              align="center"
            />
          </FadeIn>

          <div className="mt-12">
            <ProjectBriefingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
