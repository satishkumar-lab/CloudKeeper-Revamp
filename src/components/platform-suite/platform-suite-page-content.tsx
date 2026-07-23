"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PlatformSuiteDeploymentSection } from "@/components/platform-suite/platform-suite-deployment-section";
import { PlatformSuiteHeroSection } from "@/components/platform-suite/platform-suite-hero-section";
import { PlatformSuiteTabsSection } from "@/components/platform-suite/platform-suite-tabs-section";
import {
  CardOverlappingSection,
  CloudKeeperAdvantageSection,
  ContactCtaSection,
  CustomersLogosSection,
  G2ReviewsSection,
  IndustryRecognitionSection,
  SiteFooterSection,
  SiteNav,
  WhyChooseCkAsSection,
} from "@/components/sections";
import {
  platformSuiteAdvantage,
  platformSuiteCustomersLogosHeading,
  platformSuitePhases,
  platformSuiteWhyChoose,
} from "@/config/platform-suite";

/**
 * Platform Suite — section scroll reveals match AZ / PPA+ / Why Us
 * (Lenis-safe ScrollReveal: fade / up / left / right / scale).
 *
 * CardOverlapping stays unwrapped — sticky pin breaks inside transformed ancestors.
 */
export function PlatformSuitePageContent() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <PlatformSuiteHeroSection />

        <ScrollReveal variant="fade">
          <PlatformSuiteTabsSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <PlatformSuiteDeploymentSection />
        </ScrollReveal>

        <CardOverlappingSection {...platformSuitePhases} id="phases" />

        <ScrollReveal variant="fade">
          <WhyChooseCkAsSection {...platformSuiteWhyChoose} />
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <CloudKeeperAdvantageSection {...platformSuiteAdvantage} />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <G2ReviewsSection />
        </ScrollReveal>

        <ScrollReveal variant="left">
          <CustomersLogosSection
            heading={platformSuiteCustomersLogosHeading}
            variant="marquee"
            backgroundSrc
          />
        </ScrollReveal>

        <ScrollReveal variant="right">
          <IndustryRecognitionSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <ContactCtaSection />
        </ScrollReveal>
      </main>

      <ScrollReveal variant="up">
        <SiteFooterSection />
      </ScrollReveal>
    </>
  );
}
