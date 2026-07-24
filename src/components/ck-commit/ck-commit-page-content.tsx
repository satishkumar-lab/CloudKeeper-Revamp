"use client";

import { CkCommitCompareSection } from "@/components/ck-commit/ck-commit-compare-section";
import { CkCommitHeroSection } from "@/components/ck-commit/ck-commit-hero-section";
import { CkCommitHowItWorksSection } from "@/components/ck-commit/ck-commit-how-it-works-section";
import { CkCommitPricingBannerSection } from "@/components/ck-commit/ck-commit-pricing-banner-section";
import { CkCommitSolvesSection } from "@/components/ck-commit/ck-commit-solves-section";
import { CkCommitSupportSection } from "@/components/ck-commit/ck-commit-support-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  CloudPartnerSection,
  ContactCtaSection,
  CustomersLogosBlueSection,
  IndustryRecognitionSection,
  RelatedResourcesSection,
  SiteFooterSection,
  SiteNav,
  TestimonialsSection,
  WhyChooseAwsPunchSection,
} from "@/components/sections";
import { AzFaqSection } from "@/components/solutions/az/az-faq-section";
import { ckCommitCustomersLogosHeading } from "@/config/ck-commit";

/**
 * CK_Commit — hero → solves → compare → support → pricing → common sections.
 * Scroll reveals match Platform Suite / AZ / PPA+ / Why Us.
 */
export function CkCommitPageContent() {
  return (
    <>
      <SiteNav />
      <main className="overflow-x-hidden bg-white">
        <CkCommitHeroSection />

        <CkCommitSolvesSection />

        <CkCommitCompareSection />

        <CkCommitSupportSection />

        <ScrollReveal variant="fade">
          <CkCommitPricingBannerSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <CkCommitHowItWorksSection />
        </ScrollReveal>

        <ScrollReveal variant="left">
          <CustomersLogosBlueSection heading={ckCommitCustomersLogosHeading} />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <WhyChooseAwsPunchSection id="commit-why-choose" />
        </ScrollReveal>

        <ScrollReveal variant="right">
          <TestimonialsSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <RelatedResourcesSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <IndustryRecognitionSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <AzFaqSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <CloudPartnerSection />
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
