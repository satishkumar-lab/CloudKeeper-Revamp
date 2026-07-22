"use client";

import { StatsSection } from "@/components/home/stats-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  CloudPartnerSection,
  ContactCtaSection,
  CustomersLogosSection,
  IndustryRecognitionSection,
  RelatedResourcesSection,
  SiteFooterSection,
  SiteNav,
  TestimonialsSection,
} from "@/components/sections";
import { AzFaqSection } from "@/components/solutions/az/az-faq-section";
import { AzHeroSection } from "@/components/solutions/az/az-hero-section";
import { AzHowItWorksSection } from "@/components/solutions/az/az-how-it-works-section";
import { AzOneStopSection } from "@/components/solutions/az/az-one-stop-section";
import { AzPrismBannerSection } from "@/components/solutions/az/az-prism-banner-section";

export function AzPageContent() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <AzHeroSection />

        <ScrollReveal variant="fade">
          <AzOneStopSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <AzPrismBannerSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <AzHowItWorksSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <CustomersLogosSection heading="Our CloudKeeper AZ Customers" />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <StatsSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <CloudPartnerSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <RelatedResourcesSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <AzFaqSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <IndustryRecognitionSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <TestimonialsSection />
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
