import type { Metadata } from "next";

import { PpaPlusPageContent } from "@/components/solutions/ppa-plus/ppa-plus-page-content";
import { solutionsPpaPlusMeta } from "@/config/solutions-ppa-plus";

export const metadata: Metadata = {
  title: solutionsPpaPlusMeta.title,
  description: solutionsPpaPlusMeta.description,
};

export default function CloudKeeperPpaPlusPage() {
  return <PpaPlusPageContent />;
}
