"use client";

import { PlatformsSection } from "@/components/home/platforms-section";
import { PlatformSuiteValueAdds } from "@/components/platform-suite/platform-suite-value-adds";
import {
  platformSuiteTabsContent,
  platformSuiteTabsIntro,
} from "@/config/platform-suite";

/** Figma 202:21074 — 3-tab platforms carousel + value-add cards */
export function PlatformSuiteTabsSection() {
  return (
    <PlatformsSection
      id="platform-suite-products"
      heading={platformSuiteTabsIntro.heading}
      subtitle={platformSuiteTabsIntro.subtitle}
      tabs={platformSuiteTabsContent}
      ctaLabel="Sign Up Now"
      tabsLayout="center"
      titleGap="10"
      showHomeAddons={false}
      footer={<PlatformSuiteValueAdds />}
    />
  );
}
