import { SynFooter } from "@/components/demo/syn/SynFooter";

export default function Who() {
  return (
    <main className="bg-[#fff9f7] px-4 pt-28 sm:px-12">
      <p className="font-[family-name:var(--font-syn-mono)] text-sm text-[#ed3833]">
        (We don’t follow trends we make statements)
      </p>
      <h1 className="mt-6 font-[family-name:var(--font-syn-display)] text-[clamp(3rem,10vw,8rem)] uppercase leading-[0.82]">
        Who We Are
      </h1>
      <p className="mt-10 max-w-xl text-lg leading-relaxed">
        A womenswear house cut from heat. Chic pieces with a grungy touch —
        for anyone who wants something that burns. Fashion as feeling, as fire,
        as how the world sees you.
      </p>
      <SynFooter />
    </main>
  );
}
