import { cn } from "@/lib/utils";

/** Dezente Kennzeichnung synthetischer / KI-gestützter Visuals. */
export function AiContentLabel({
  children = "Synthetische Illustration · kein Foto",
  className,
}: {
  children?: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[9px] uppercase tracking-[0.2em] text-white/40",
        className
      )}
    >
      {children}
    </p>
  );
}
