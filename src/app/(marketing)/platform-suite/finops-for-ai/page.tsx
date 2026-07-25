import type { Metadata } from "next";

import { FinopsForAiPageContent } from "@/components/finops-for-ai/finops-for-ai-page-content";
import { finopsForAiMeta } from "@/config/finops-for-ai";

export const metadata: Metadata = {
  title: finopsForAiMeta.title,
  description: finopsForAiMeta.description,
};

export default function FinopsForAiPage() {
  return <FinopsForAiPageContent />;
}
