"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  ContactCtaSection,
  CustomersLogosSection,
  IndustryRecognitionSection,
  LightBannerCtaSection,
  RelatedResourcesSection,
  SiteFooterSection,
  SiteNav,
  TestimonialsSection,
} from "@/components/sections";
import { AzOneStopSection } from "@/components/solutions/az/az-one-stop-section";
import { AzPrismBannerSection } from "@/components/solutions/az/az-prism-banner-section";
import { PpaPlusHeroSection } from "@/components/solutions/ppa-plus/ppa-plus-hero-section";
import { PpaPlusStatsSection } from "@/components/solutions/ppa-plus/ppa-plus-stats-section";
import { PpaPlusValueCardsSection } from "@/components/solutions/ppa-plus/ppa-plus-value-cards-section";
import { PpaPlusVideoExplainerSection } from "@/components/solutions/ppa-plus/ppa-plus-video-explainer-section";
import { PpaPlusWhatIsPpaSection } from "@/components/solutions/ppa-plus/ppa-plus-what-is-ppa-section";
import { ppaPlusCustomersLogosContent } from "@/config/customers-logos-section";
import { ppaPlusLightBannerCtaContent } from "@/config/light-banner-cta-section";
import { ppaPlusOneStopContent } from "@/config/solutions-az-one-stop";
import { ppaPlusPrismBannerContent } from "@/config/solutions-az-prism-banner";

/**
 * CloudKeeper PPA+ page — section scroll reveals match AZ/home
 * (Lenis-safe ScrollReveal: fade / up / left / right / scale).
 */
export function PpaPlusPageContent() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <PpaPlusHeroSection />

        <ScrollReveal variant="fade">
          <PpaPlusValueCardsSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <AzOneStopSection
            content={ppaPlusOneStopContent}
            showDarkBanner={false}
            showOffer={false}
          />
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <AzPrismBannerSection content={ppaPlusPrismBannerContent} />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <PpaPlusWhatIsPpaSection />
        </ScrollReveal>

        <ScrollReveal variant="left">
          <PpaPlusVideoExplainerSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <LightBannerCtaSection
            heading={ppaPlusLightBannerCtaContent.heading}
            body={ppaPlusLightBannerCtaContent.body}
            cta={ppaPlusLightBannerCtaContent.cta}
          />
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <PpaPlusStatsSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <CustomersLogosSection
            heading={ppaPlusCustomersLogosContent.heading}
            rows={ppaPlusCustomersLogosContent.rows}
            logoMaxHeight={43}
          />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <TestimonialsSection />
        </ScrollReveal>

        <ScrollReveal variant="right">
          <IndustryRecognitionSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <RelatedResourcesSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <ContactCtaSection />
        </ScrollReveal>
      </main>

      <ScrollReveal variant="up">
        <SiteFooterSection />
      </ScrollReveal>
    </>
  );
}
