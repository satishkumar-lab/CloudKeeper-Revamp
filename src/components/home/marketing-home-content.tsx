"use client";

import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { CertificationsSection } from "@/components/home/certifications-section";
import { ContactSection } from "@/components/home/contact-section";
import { SiteFooter } from "@/components/home/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { IndustryRecognitionSection } from "@/components/home/industry-recognition-section";
import { LogoRowSection } from "@/components/home/logo-row-section";
import { SiteHeader } from "@/components/home/nav";
import { PlatformsSection } from "@/components/home/platforms-section";
import { PressLogosSection } from "@/components/home/press-logos-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { StatementSection } from "@/components/home/statement-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ThoughtLeadershipSection } from "@/components/home/thought-leadership-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function MarketingHomeContent() {
  return (
    <>
      <SiteHeader />

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
        <ThoughtLeadershipSection />
        <IndustryRecognitionSection />
        <PressLogosSection />
        <CertificationsSection />
        <ScrollReveal variant="fade">
          <ContactSection />
        </ScrollReveal>
      </main>

      <ScrollReveal variant="up">
        <SiteFooter />
      </ScrollReveal>
    </>
  );
}
