import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
  as: Heading = "h2",
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          {label}
        </p>
      )}
      <Heading className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-lg text-muted">{description}</p>
      )}
    </div>
  );
}
