"use client";

import { AtlReveal } from "@/components/demo/atl/AtlReveal";
import { AtlButton } from "@/components/demo/atl/AtlButton";
import { ATL_CONTACT } from "@/components/demo/atl/atl-contact";

export function AtlContact() {
  return (
    <section
      id="kontakt"
      className="relative overflow-x-hidden bg-[var(--atl-void)] px-5 py-20 text-white sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <AtlReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--atl-red)]">
              Kontakt
            </p>
            <h2 className="mt-5 font-atl-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.02em]">
              Bereit für Pole Position?
            </h2>
            <p className="mt-6 max-w-lg text-white/60">
              Rufen Sie an oder schreiben Sie uns — wir besprechen Ihr Fahrzeug
              direkt und unkompliziert.
            </p>

            <div className="mt-8 flex w-full flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-start sm:gap-3">
              <AtlButton
                href={`tel:${ATL_CONTACT.phoneTel}`}
                strength={0}
                className="inline-flex w-full items-center justify-center rounded-sm bg-[var(--atl-red)] px-6 py-3.5 text-sm font-semibold text-white sm:w-auto sm:px-8"
              >
                {ATL_CONTACT.phoneDisplay}
              </AtlButton>
              <AtlButton
                href={ATL_CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                strength={0}
                className="inline-flex w-full items-center justify-center rounded-sm border border-white/25 px-6 py-3.5 text-sm font-semibold text-white sm:w-auto sm:px-8"
              >
                WhatsApp
              </AtlButton>
            </div>
          </AtlReveal>

          <AtlReveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <dl className="space-y-6 border-t border-white/12 pt-8 lg:border-t-0 lg:border-l lg:border-white/12 lg:pt-0 lg:pl-8">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--atl-red)]">
                  Adresse
                </dt>
                <dd className="mt-2 text-sm text-white/65">{ATL_CONTACT.address}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--atl-red)]">
                  Telefon
                </dt>
                <dd className="mt-2 text-sm text-white/65">
                  <a
                    href={`tel:${ATL_CONTACT.phoneTel}`}
                    className="transition-colors hover:text-white"
                  >
                    {ATL_CONTACT.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--atl-red)]">
                  Mobil
                </dt>
                <dd className="mt-2 text-sm text-white/65">
                  <a
                    href={`tel:${ATL_CONTACT.mobileTel}`}
                    className="transition-colors hover:text-white"
                  >
                    {ATL_CONTACT.mobileDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--atl-red)]">
                  E-Mail
                </dt>
                <dd className="mt-2 text-sm">
                  <a
                    href={`mailto:${ATL_CONTACT.email}`}
                    className="text-white/65 transition-colors hover:text-[var(--atl-red)]"
                  >
                    {ATL_CONTACT.email}
                  </a>
                </dd>
              </div>
            </dl>
          </AtlReveal>
        </div>
      </div>

      <p className="relative mt-20 text-center text-[11px] tracking-wide text-white/30">
        Living Demo von{" "}
        <a
          href="https://youforge.de"
          className="underline-offset-2 hover:underline"
        >
          YouForge
        </a>{" "}
        · noch nicht live
      </p>
    </section>
  );
}
