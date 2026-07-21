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
import { CaptionCursor } from "@/components/motion/caption-cursor";
import { SectionHoverReveal } from "@/components/motion/section-hover-reveal";

/** Homepage — cursor-hover section reveals + smooth custom cursor */
export function MarketingHomeContent() {
  return (
    <>
      <CaptionCursor />
      <SiteHeader />

      <main className="bg-white">
        <SectionHoverReveal immediate>
          <HeroSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <LogoRowSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <StatementSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <StatsSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <SolutionsSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <PlatformsSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <CapabilitiesSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <TestimonialsSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <ThoughtLeadershipSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <IndustryRecognitionSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <PressLogosSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <CertificationsSection />
        </SectionHoverReveal>

        <SectionHoverReveal>
          <ContactSection />
        </SectionHoverReveal>
      </main>

      <SectionHoverReveal>
        <SiteFooter />
      </SectionHoverReveal>
    </>
  );
}
