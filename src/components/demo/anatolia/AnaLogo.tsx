import Image from "next/image";
import { ANA_IMG } from "@/components/demo/anatolia/ana-content";
import { ANA_CONTACT } from "@/components/demo/anatolia/ana-contact";

type AnaLogoProps = {
  className?: string;
  /** Intrinsic height hint for Next/Image (layout) */
  height?: number;
  priority?: boolean;
};

export function AnaLogo({
  className = "",
  height = 44,
  priority = false,
}: AnaLogoProps) {
  const width = Math.round(height * 2.35);
  return (
    <Image
      src={ANA_IMG.logo}
      alt={ANA_CONTACT.full}
      width={width}
      height={height}
      priority={priority}
      className={`w-auto object-contain object-left ${className}`}
      style={{ height: "auto" }}
    />
  );
}
