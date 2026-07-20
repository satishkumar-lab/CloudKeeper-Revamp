import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaSection } from "@/components/marketing/cta-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { LogosSection } from "@/components/marketing/logos-section";

export default function MarketingHomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
