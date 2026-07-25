"use client";

import { CkTunerAwsHeroSection } from "@/components/ck-tuner-aws/ck-tuner-aws-hero-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  ContactCtaSection,
  CustomersLogosBlueSection,
  DarkCtaBannerSection,
  IndustryRecognitionSection,
  RelatedResourcesSection,
  SiteFooterSection,
  SiteNav,
} from "@/components/sections";
import {
  ckTunerAwsCustomersLogosHeading,
  ckTunerAwsDarkCtaBannerContent,
} from "@/config/ck-tuner-aws";

/**
 * CK Tuner - AWS — hero → common/matching sections.
 * Remaining product-unique sections land in follow-up passes.
 */
export function CkTunerAwsPageContent() {
  return (
    <>
      <SiteNav />
      <main className="overflow-x-hidden bg-white">
        <CkTunerAwsHeroSection />

        <ScrollReveal variant="fade">
          <DarkCtaBannerSection
            id="tuner-aws-extension-cta"
            heading={ckTunerAwsDarkCtaBannerContent.heading}
            subtext={ckTunerAwsDarkCtaBannerContent.subtext}
            ctaLabel={ckTunerAwsDarkCtaBannerContent.ctaLabel}
            ctaHref={ckTunerAwsDarkCtaBannerContent.ctaHref}
          />
        </ScrollReveal>

        <ScrollReveal variant="left">
          <CustomersLogosBlueSection
            heading={ckTunerAwsCustomersLogosHeading}
          />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <RelatedResourcesSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <IndustryRecognitionSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <ContactCtaSection />
        </ScrollReveal>
      </main>

      <ScrollReveal variant="fade">
        <SiteFooterSection />
      </ScrollReveal>
    </>
  );
}
