"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  CloudPartnerSection,
  ContactCtaSection,
  CustomersLogosSection,
  DarkCtaBanner,
  G2ReviewsSection,
  IndustryRecognitionSection,
  SiteFooterSection,
  SiteNav,
  TestimonialsSection,
} from "@/components/sections";
import { WhyUsCaraSection } from "@/components/why-us/why-us-cara-section";
import { WhyUsHeroSection } from "@/components/why-us/why-us-hero-section";
import { WhyUsIsgQuoteSection } from "@/components/why-us/why-us-isg-quote-section";
import { WhyUsUniqueSection } from "@/components/why-us/why-us-unique-section";
import { whyUsCustomersLogosHeading } from "@/config/why-us";

/** Why Us — hero → unique → ISG → CARA → G2 → shared sections */
export function WhyUsPageContent() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <WhyUsHeroSection />

        <ScrollReveal variant="fade">
          <WhyUsUniqueSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <WhyUsIsgQuoteSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <WhyUsCaraSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <G2ReviewsSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <CloudPartnerSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <CustomersLogosSection heading={whyUsCustomersLogosHeading} />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <DarkCtaBanner />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <IndustryRecognitionSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
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
