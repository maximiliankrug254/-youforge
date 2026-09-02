"use client";

import Image from "next/image";
import { BstReveal } from "@/components/demo/bst/BstReveal";
import { BstButton } from "@/components/demo/bst/BstButton";
import { BstMagnetic } from "@/components/demo/bst/BstMagnetic";
import { BST_CONTACT } from "@/components/demo/bst/bst-contact";

export function BstContact() {
  return (
    <section
      id="kontakt"
      className="relative isolate overflow-hidden bg-[var(--bst-void)] px-5 py-28 text-[var(--bst-snow)] sm:px-8 sm:py-36 lg:py-48"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/demo/bestattung/section-flowers.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.2] scale-105"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,19,18,0.28),rgba(20,19,18,0.88)_68%)]" />
      </div>

      <div className="relative mx-auto max-w-[1100px] text-center">
        <BstReveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[var(--bst-accent)]">
            Kontakt
          </p>
          <h2 className="mx-auto mt-7 max-w-[12ch] font-bst-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            Wir sind bereit.
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-[1.08rem] leading-[1.75] text-white/42">
            Ein Anruf. Ein Mensch. Absolute Klarheit — auch mitten in der Nacht.
          </p>
        </BstReveal>

        <BstReveal delay={0.12}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BstMagnetic>
              <BstButton
                href={`tel:${BST_CONTACT.phoneTel}`}
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[var(--bst-accent)] px-9 py-4 text-sm font-semibold text-[var(--bst-void)] hover:bg-[var(--bst-accent-hot)]"
              >
                {BST_CONTACT.phoneDisplay}
              </BstButton>
            </BstMagnetic>
            <BstButton
              href={`mailto:${BST_CONTACT.email}?subject=${encodeURIComponent("Rückruf / Erstgespräch")}`}
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/18 px-9 py-4 text-sm font-semibold text-white hover:border-white/40"
            >
              E-Mail schreiben
            </BstButton>
          </div>
        </BstReveal>

        <BstReveal delay={0.18}>
          <dl className="mx-auto mt-16 grid max-w-3xl gap-8 border-t border-[var(--bst-line)] pt-12 text-left sm:grid-cols-3 sm:text-center">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--bst-accent)]">
                Adresse
              </dt>
              <dd className="mt-2 text-sm text-white/48">{BST_CONTACT.address}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--bst-accent)]">
                Erreichbarkeit
              </dt>
              <dd className="mt-2 text-sm text-white/48">{BST_CONTACT.hours}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--bst-accent)]">
                Mobil
              </dt>
              <dd className="mt-2 text-sm text-white/48">
                <a href={`tel:${BST_CONTACT.mobileTel}`} className="hover:text-white">
                  {BST_CONTACT.mobileDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </BstReveal>
      </div>

      <p className="relative mt-24 text-center text-[11px] tracking-wide text-white/25">
        Living Demo von{" "}
        <a href="https://you-forge.de" className="underline-offset-2 hover:underline">
          YouForge
        </a>{" "}
        · Vorlage · noch nicht live
      </p>
    </section>
  );
}
