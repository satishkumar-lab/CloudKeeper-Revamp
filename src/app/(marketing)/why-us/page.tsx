import type { Metadata } from "next";

import { WhyUsPageContent } from "@/components/why-us/why-us-page-content";
import { whyUsMeta } from "@/config/why-us";

export const metadata: Metadata = {
  title: whyUsMeta.title,
  description: whyUsMeta.description,
};

export default function WhyUsPage() {
  return <WhyUsPageContent />;
}
