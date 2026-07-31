"use client";

import { usePathname } from "next/navigation";
import { IntroLoader } from "@/components/animations/IntroLoader";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { CookieNotice } from "@/components/layout/CookieNotice";

export function ClientEffects() {
  const pathname = usePathname();
  const isClientDemo = pathname?.startsWith("/demo/") ?? false;

  if (isClientDemo) {
    return null;
  }

  return (
    <>
      <IntroLoader />
      <CustomCursor />
      <CookieNotice />
    </>
  );
}
