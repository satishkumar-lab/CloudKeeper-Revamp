"use client";

import { FinopsClaudeAccessVisual } from "@/components/finops-for-ai/finops-claude-access-visual";
import { FinopsForAiChallengesSection } from "@/components/finops-for-ai/finops-for-ai-challenges-section";
import { FinopsForAiHeroSection } from "@/components/finops-for-ai/finops-for-ai-hero-section";
import { FinopsForAiPhasesSection } from "@/components/finops-for-ai/finops-for-ai-phases-section";
import { FinopsForAiWhyCkSection } from "@/components/finops-for-ai/finops-for-ai-why-ck-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  CardOverlappingSection,
  ContactCtaSection,
  IndustryRecognitionSection,
  LightBannerCtaSection,
  RelatedResourcesSection,
  SiteFooterSection,
  SiteNav,
} from "@/components/sections";
import {
  finopsForAiAssets,
  finopsForAiLightBannerCtaContent,
  finopsForAiSolutions,
} from "@/config/finops-for-ai";

/**
 * FinOps for AI — hero → challenges → phases → solutions → why CK → common.
 * CardOverlapping stays unwrapped — sticky pin breaks inside transformed ancestors.
 */
export function FinopsForAiPageContent() {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <FinopsForAiHeroSection />

        <ScrollReveal variant="fade">
          <FinopsForAiChallengesSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <FinopsForAiPhasesSection />
        </ScrollReveal>

        {/* Sticky overlapping cards — do not wrap in ScrollReveal */}
        <CardOverlappingSection
          {...finopsForAiSolutions}
          id="finops-ai-solutions"
          headingId="finops-ai-solutions-heading"
          bulletIcon={finopsForAiAssets.solutions.bullet}
          tagStarsIcon={finopsForAiAssets.solutions.tagStars}
          renderVisual={(card) =>
            card.id === "claude-access" ? <FinopsClaudeAccessVisual /> : null
          }
        />

        <ScrollReveal variant="left">
          <FinopsForAiWhyCkSection />
        </ScrollReveal>

        <ScrollReveal variant="up">
          <LightBannerCtaSection
            id="finops-ai-banner-cta"
            heading={finopsForAiLightBannerCtaContent.heading}
            body={finopsForAiLightBannerCtaContent.body}
            cta={finopsForAiLightBannerCtaContent.cta}
          />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <RelatedResourcesSection />
        </ScrollReveal>

        <ScrollReveal variant="right">
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
