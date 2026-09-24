"use client";

import Image from "next/image";
import { AA, AA_IMG } from "@/components/demo/stelzer/aa-config";
import { AA_FACTS } from "@/components/demo/stelzer/aa-content";
import { AaButton } from "@/components/demo/stelzer/AaButton";

const PEOPLE = [
  {
    name: AA.makers.wood.name,
    role: AA.makers.wood.role,
    since: "Im Betrieb seit 2006",
    text: "Ausbildung ab 2006 bei Walter van der Horst, Geselle bis zum 31. Dezember 2021. Seit 2022 führt er den Betrieb mit Georg Heßelmann.",
  },
  {
    name: AA.makers.clay.name,
    role: AA.makers.clay.role,
    since: "Zurück in Holten 2008",
    text: "Nach der Ausbildung bei Walter van der Horst folgten Jahre in Berlin. 2008 kam er zurück in die Heimat, wieder zu van der Horst, bis die Firma endete.",
  },
] as const;

export function AaAbout() {
  return (
    <section
      id="werkstatt"
      data-aa-tone="tan"
      className="relative z-10 scroll-mt-24 bg-[var(--aa-tan)] px-5 py-20 text-[var(--aa-ink)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="text-[10px] uppercase tracking-[0.32em] opacity-60">Die beiden</p>
        <h2 className="mt-4 max-w-3xl font-aa-display text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.035em]">
          Zwei Geschäftsführer.
          <br />
          Ein Betrieb.
        </h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed opacity-75">
          Beide kommen aus der Firma Walter van der Horst. 2022 haben sie den Betrieb in Holten selbst übernommen.
        </p>

        <div className="mt-16 grid border-t border-[var(--aa-ink)]/20 md:grid-cols-2">
          {PEOPLE.map((person, i) => (
            <article
              key={person.name}
              className={`py-10 md:py-14 ${i === 0 ? "md:pr-12" : "border-t border-[var(--aa-ink)]/20 md:border-l md:border-t-0 md:pl-12"}`}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] opacity-50">
                0{i + 1} · {person.role}
              </p>
              <h3 className="mt-4 font-aa-display text-[clamp(2.4rem,4vw,3.6rem)] leading-[0.95] tracking-[-0.03em]">
                {person.name}
              </h3>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] opacity-55">{person.since}</p>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed opacity-80">{person.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid items-stretch gap-6 border-t border-[var(--aa-ink)]/20 pt-8 lg:grid-cols-[0.9fr_1.1fr]">
          <dl className="grid grid-cols-2 content-center gap-y-8">
            {AA_FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-aa-display text-4xl tracking-[-0.04em] sm:text-5xl">{fact.n}</dt>
                <dd className="mt-2 text-[13px] uppercase tracking-[0.16em] opacity-60">{fact.label}</dd>
              </div>
            ))}
          </dl>
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] lg:min-h-[480px]">
            <Image
              src={AA_IMG.first}
              alt="Zwei Personen von hinten auf einem Dachfirst"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              className="aa-breathe object-cover"
            />
          </div>
        </div>

        <div className="mt-10">
          <AaButton href={`tel:${AA.contact.phoneTel}`} className="bg-[var(--aa-ink)] text-[var(--aa-cream)]">
            Anrufen
          </AaButton>
        </div>
      </div>
    </section>
  );
}
