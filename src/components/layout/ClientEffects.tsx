"use client";

import { usePathname } from "next/navigation";
import { IntroLoader } from "@/components/animations/IntroLoader";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { CatalogFloat } from "@/components/layout/CatalogFloat";
import { DemoCatalogReturn } from "@/components/catalog/DemoCatalogReturn";

export function ClientEffects() {
  const pathname = usePathname();
  const isClientDemo = pathname?.startsWith("/demo/") ?? false;

  if (isClientDemo) {
    return <DemoCatalogReturn />;
  }

  return (
    <>
      <IntroLoader />
      <CustomCursor />
      <CatalogFloat />
      <CookieNotice />
    </>
  );
}
