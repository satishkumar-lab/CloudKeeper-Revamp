"use client";

import type { ReactNode } from "react";

import { LenisProvider } from "@/components/providers/lenis-provider";
import { ScrollToTop } from "@/components/providers/scroll-to-top";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <LenisProvider>
      <ScrollToTop />
      {children}
    </LenisProvider>
  );
}
