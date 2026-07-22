"use client";

import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { CertificationsSection } from "@/components/home/certifications-section";
import { HeroSection } from "@/components/home/hero-section";
import { LogoRowSection } from "@/components/home/logo-row-section";
import { PlatformsSection } from "@/components/home/platforms-section";
import { PressLogosSection } from "@/components/home/press-logos-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { StatementSection } from "@/components/home/statement-section";
import { StatsSection } from "@/components/home/stats-section";
import {
  ContactCtaSection,
  IndustryRecognitionSection,
  RelatedResourcesSection,
  SiteFooterSection,
  SiteNav,
  TestimonialsSection,
} from "@/components/sections";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function MarketingHomeContent() {
  return (
    <>
      <SiteNav />

      <main className="bg-white">
        <HeroSection />
        <LogoRowSection />
        <StatementSection />
        <StatsSection />
        <SolutionsSection />
        <PlatformsSection />
        <ScrollReveal variant="fade">
          <CapabilitiesSection />
        </ScrollReveal>
        <ScrollReveal variant="fade">
          <TestimonialsSection />
        </ScrollReveal>
        <RelatedResourcesSection />
        <IndustryRecognitionSection />
        <PressLogosSection />
        <CertificationsSection />
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
