"use client";

import { IntroLoader } from "@/components/animations/IntroLoader";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { CookieNotice } from "@/components/layout/CookieNotice";

export function ClientEffects() {
  return (
    <>
      <IntroLoader />
      <CustomCursor />
      <CookieNotice />
    </>
  );
}
