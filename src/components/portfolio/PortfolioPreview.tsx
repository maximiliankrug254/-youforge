import Image from "next/image";

type PortfolioPreviewProps = {
  title?: string;
  image?: string;
};

export function PortfolioPreview({ title, image }: PortfolioPreviewProps) {
  if (image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-[#0a0a0a]">
        <Image
          src={image}
          alt={title ? `Screenshot: ${title}` : "Projekt-Vorschau"}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-[#000]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(200,255,0,0.15), transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.08), transparent 50%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 sm:text-xs">
            {title ?? "YouForge"}
          </span>
          <span className="h-2 w-2 rounded-full bg-[#c8ff00]" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="text-[10px] font-bold uppercase leading-tight tracking-tight text-white/90 sm:text-sm">
            Wir schmieden
            <br />
            deine Vision.
          </p>
          <div className="mt-3 flex gap-1.5">
            <span className="h-1 w-8 rounded-full bg-white/20" />
            <span className="h-1 w-4 rounded-full bg-[#c8ff00]/60" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[8px] uppercase text-white/40 sm:text-[10px]">
            KI-Demo
          </span>
          <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[8px] uppercase text-white/40 sm:text-[10px]">
            Live
          </span>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"
        aria-hidden
      />
    </div>
  );
}
