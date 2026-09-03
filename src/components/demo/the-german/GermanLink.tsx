import Link from "next/link";
import { germanAsset } from "@/components/demo/the-german/german-config";

export function GermanLink({
  href,
  children,
  className = "",
  external,
  title,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  title?: string;
}) {
  const extra = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const body = (
    <>
      {children}
      <span className="tg-arrow">
        <img src={germanAsset("icons/arrow.svg")} alt="" width={16} height={16} />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={`tg-link tg-upper ${className}`} title={title} {...extra}>
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={`tg-link tg-upper ${className}`} title={title}>
      {body}
    </Link>
  );
}
