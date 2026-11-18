"use client";

import Image from "next/image";
import { BBF_ASSETS, BBF_CONTACT } from "@/components/demo/bbf/bbf-contact";

export function BbfWhy() {
  return (
    <section className="relative isolate flex min-h-[48svh] items-end overflow-hidden bg-black text-white">
      <Image
        src={BBF_ASSETS.why}
        alt="Arbeit am Rad in der Werkstatt"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <h2 className="font-bbf-display text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
          Beides an
          <br />
          einem Hof.
        </h2>
        <p className="mt-5 text-base text-white/75 sm:text-lg">{BBF_CONTACT.address}</p>
      </div>
    </section>
  );
}
