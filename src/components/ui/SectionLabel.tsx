import { cn } from "@/lib/utils";

export function SectionLabel({
  number,
  title,
  className,
  align = "left",
}: {
  number: string;
  title: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.2em] text-muted",
        align === "center" && "text-center",
        className
      )}
    >
      {number} — {title}
    </p>
  );
}
