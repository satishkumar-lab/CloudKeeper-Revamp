import type { Metadata } from "next";

import { CkCommitPageContent } from "@/components/ck-commit/ck-commit-page-content";
import { ckCommitMeta } from "@/config/ck-commit";

export const metadata: Metadata = {
  title: ckCommitMeta.title,
  description: ckCommitMeta.description,
};

export default function CloudKeeperCommitPage() {
  return <CkCommitPageContent />;
}
