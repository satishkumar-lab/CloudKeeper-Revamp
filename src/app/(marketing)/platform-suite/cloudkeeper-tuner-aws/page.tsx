import type { Metadata } from "next";

import { CkTunerAwsPageContent } from "@/components/ck-tuner-aws/ck-tuner-aws-page-content";
import { ckTunerAwsMeta } from "@/config/ck-tuner-aws";

export const metadata: Metadata = {
  title: ckTunerAwsMeta.title,
  description: ckTunerAwsMeta.description,
};

export default function CloudKeeperTunerAwsPage() {
  return <CkTunerAwsPageContent />;
}
