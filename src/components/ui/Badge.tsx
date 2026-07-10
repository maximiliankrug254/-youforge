import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accent/30 bg-accent-muted px-3 py-1 text-xs font-medium text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
