import type { Metadata } from "next";

import { AzPageContent } from "@/components/solutions/az/az-page-content";
import { solutionsAzMeta } from "@/config/solutions-az";

export const metadata: Metadata = {
  title: solutionsAzMeta.title,
  description: solutionsAzMeta.description,
};

export default function CloudKeeperAzPage() {
  return <AzPageContent />;
}
