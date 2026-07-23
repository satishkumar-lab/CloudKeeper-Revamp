import type { Metadata } from "next";

import { PlatformSuitePageContent } from "@/components/platform-suite/platform-suite-page-content";
import { platformSuiteMeta } from "@/config/platform-suite";

export const metadata: Metadata = {
  title: platformSuiteMeta.title,
  description: platformSuiteMeta.description,
};

export default function PlatformSuitePage() {
  return <PlatformSuitePageContent />;
}
