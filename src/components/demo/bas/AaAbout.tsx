"use client";

import Image from "next/image";
import { AA, AA_IMG } from "@/components/demo/bas/aa-config";
import { AA_CLIENTS, AA_FACTS } from "@/components/demo/bas/aa-content";
import { AaButton } from "@/components/demo/bas/AaButton";

export function AaAbout() {
  return (
    <section
      id="unternehmen"
      data-aa-tone="tan"
      className="relative z-10 scroll-mt-24 bg-[var(--aa-tan)] px-5 py-20 text-[var(--aa-ink)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="text-[10px] uppercase tracking-[0.32em] opacity-60">Das Unternehmen</p>
        <h2 className="mt-4 max-w-3xl font-aa-display text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.035em]">
          Profession
          <br />
          Automobil.
        </h2>
        <div className="mt-6 grid max-w-3xl gap-4 text-[15px] leading-relaxed opacity-75 md:grid-cols-2 md:gap-8">
          <p>
            Die Firma {AA.brand.full} ({AA.brand.abbr}) wurde {AA.brand.founded} durch {AA.founder.name}{" "}
            gegründet. Unsere Wurzeln liegen in der professionellen Aufbereitung von Fahrzeugen der gehobenen Klasse
            sowie der Fahrzeug- und Standbetreuung auf nationalen und internationalen Automobilmessen.
          </p>
          <p>
            Heute setzt BAS Fahrzeuge nicht nur ins rechte Licht. Mit unserer firmeneigenen Flotte haben wir uns auf
            den weltweiten Transport exklusiver Automobile spezialisiert – vom hochklassigen Neuwagen über
            wertvolle Oldtimer bis hin zu Formel-1-Wagen und Prototypen.
          </p>
        </div>

        <div className="mt-16 grid border-t border-[var(--aa-ink)]/20 sm:grid-cols-2 lg:grid-cols-4">
          {AA.team.map((person, i) => (
            <article
              key={person.name}
              className={`py-8 sm:pr-6 ${i > 0 ? "border-t border-[var(--aa-ink)]/20 sm:border-t-0" : ""} ${
                i % 2 === 1 ? "sm:border-l sm:pl-6" : ""
              } ${i === 2 ? "lg:border-l lg:pl-6" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] opacity-50">0{i + 1}</p>
              <h3 className="mt-4 font-aa-display text-[clamp(1.9rem,2.6vw,2.4rem)] leading-[0.95] tracking-[-0.03em]">
                {person.name}
              </h3>
              <p className="mt-3 text-[13px] uppercase leading-relaxed tracking-[0.14em] opacity-60">{person.role}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid items-stretch gap-6 border-t border-[var(--aa-ink)]/20 pt-8 lg:grid-cols-[0.9fr_1.1fr]">
          <dl className="grid grid-cols-2 content-center gap-x-6 gap-y-8">
            {AA_FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-aa-display text-4xl tracking-[-0.04em] sm:text-5xl">{fact.n}</dt>
                <dd className="mt-2 text-[13px] uppercase tracking-[0.16em] opacity-60">{fact.label}</dd>
              </div>
            ))}
          </dl>
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] lg:min-h-[480px]">
            <Image
              src={AA_IMG.politur}
              alt="Mitarbeiter bei der Fahrzeugaufbereitung"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              className="aa-breathe object-cover"
            />
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--aa-ink)]/20 pt-10">
          <p className="text-[10px] uppercase tracking-[0.32em] opacity-60">Unsere Kunden</p>
          <p className="mt-4 max-w-2xl font-aa-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1] tracking-[-0.03em]">
            Namhafte Hersteller exklusiver Automarken und ihre Zulieferer zählen ebenso zu unseren Kunden wie
            anspruchsvolle Privatpersonen.
          </p>
          <ul className="mt-10 columns-1 gap-8 text-[14px] leading-[1.9] opacity-75 sm:columns-2 lg:columns-3">
            {AA_CLIENTS.map((client) => (
              <li key={client} className="break-inside-avoid">
                {client}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <AaButton href={`tel:${AA.contact.phoneTel}`} className="bg-[var(--aa-ink)] text-[var(--aa-cream)]">
            Anrufen
          </AaButton>
        </div>
      </div>
    </section>
  );
}
