import { Hero } from "@/components/sections/Hero";
import { SplitStatements } from "@/components/sections/SplitStatements";
import { ChaosOrder } from "@/components/sections/ChaosOrder";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WorkTeaser } from "@/components/sections/WorkTeaser";
import { CTA } from "@/components/sections/CTA";
import { ChatDemo } from "@/components/sections/ChatDemo";

export default function Home() {
  return (
    <>
      <Hero />
      <SplitStatements />
      <ChaosOrder />
      <ServicesShowcase />
      <ProcessTimeline />
      <WorkTeaser />
      <ChatDemo />
      <CTA />
    </>
  );
}
