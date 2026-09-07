import { TUKAN } from "@/components/demo/tukan/tukan-config";
import { TUKAN_NAV } from "@/components/demo/tukan/tukan-content";
import { TukanMark } from "@/components/demo/tukan/TukanMark";

export function TukanFooter() {
  return (
    <footer className="px-5 pb-28 pt-10 sm:px-10 lg:px-14 lg:pb-12">
      <div className="flex flex-col gap-10 border-t border-white/10 pt-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#home" className="inline-flex items-center gap-2 text-white">
            <TukanMark className="h-7 w-7" />
            <span className="font-tukan-mono text-[12px] uppercase tracking-[0.28em]">
              {TUKAN.brand.short}
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            {TUKAN.youforge.pitch}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-2 font-tukan-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
          {TUKAN_NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[var(--tukan-sun)]">
              {item.label}
            </a>
          ))}
          <a href={TUKAN.youforge.href} className="hover:text-[var(--tukan-sun)]">
            {TUKAN.youforge.studio}
          </a>
          <a href={TUKAN.youforge.contact} className="hover:text-[var(--tukan-sun)]">
            Demo anfragen
          </a>
        </div>
      </div>
      <p className="font-tukan-display mt-16 text-[clamp(2.2rem,8vw,6.5rem)] leading-[0.9] text-white">
        ©2026_{TUKAN.brand.short}
      </p>
      <p className="mt-4 font-tukan-mono text-[11px] uppercase tracking-[0.16em] text-white/35">
        {TUKAN.youforge.label}
      </p>
    </footer>
  );
}
