"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  CloudPartnerSection,
  ContactCtaSection,
  CustomersLogosSection,
  DarkBannerCtaSection,
  IndustryRecognitionSection,
  SiteFooterSection,
  SiteNav,
  TestimonialsSection,
} from "@/components/sections";
import { WhyUsCaraSection } from "@/components/why-us/why-us-cara-section";
import { WhyUsG2Section } from "@/components/why-us/why-us-g2-section";
import { WhyUsHeroSection } from "@/components/why-us/why-us-hero-section";
import { WhyUsIsgQuoteSection } from "@/components/why-us/why-us-isg-quote-section";
import { WhyUsUniqueSection } from "@/components/why-us/why-us-unique-section";
import {
  whyUsCustomersLogosHeading,
  whyUsDarkBannerCta,
} from "@/config/why-us";

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
          <WhyUsG2Section />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <CloudPartnerSection />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <CustomersLogosSection heading={whyUsCustomersLogosHeading} />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <DarkBannerCtaSection
            heading={whyUsDarkBannerCta.heading}
            body={whyUsDarkBannerCta.body}
            cta={whyUsDarkBannerCta.cta}
          />
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
