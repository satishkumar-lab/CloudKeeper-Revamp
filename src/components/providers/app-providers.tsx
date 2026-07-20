"use client";

import type { ReactNode } from "react";

import { LenisProvider } from "@/components/providers/lenis-provider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return <LenisProvider>{children}</LenisProvider>;
}
