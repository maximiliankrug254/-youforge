import Image from "next/image";
import Link from "next/link";
import { SYN } from "@/components/demo/syn/syn-config";
import { SYN_HERO_CARDS, SYN_MENU } from "@/components/demo/syn/syn-content";
import { SynFooter } from "@/components/demo/syn/SynFooter";

export default function Collections() {
  return (
    <main className="bg-[#fff9f7] pt-28">
      <div className="px-4 sm:px-8 lg:px-12">
        <p className="font-[family-name:var(--font-syn-mono)] text-sm text-[#ed3833]">01. Collections</p>
        <h1 className="mt-3 origin-left scale-x-[0.88] font-[family-name:var(--font-syn-display)] text-[clamp(3rem,10vw,8rem)] uppercase leading-[0.8]">
          Collections
        </h1>
        <nav className="mt-12 space-y-3">
          {SYN_MENU.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-baseline gap-4 font-[family-name:var(--font-syn-display)] text-[clamp(1.8rem,4vw,3.2rem)] uppercase leading-none"
            >
              <span className="font-[family-name:var(--font-syn-mono)] text-sm text-[#ed3833]">
                {item.n}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {SYN_HERO_CARDS.map((c) => (
            <li key={c.title}>
              <Link href={`${SYN.base}/shop`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="20vw"
                    className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
                  />
                </div>
                <p className="mt-2 font-[family-name:var(--font-syn-display)] uppercase">{c.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <SynFooter />
    </main>
  );
}
