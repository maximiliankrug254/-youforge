"use client";

import Image from "next/image";

export function VaultPhoto({
  src,
  alt,
  className = "",
  imageClassName = "object-cover",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`overflow-hidden bg-black ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
  );
}
