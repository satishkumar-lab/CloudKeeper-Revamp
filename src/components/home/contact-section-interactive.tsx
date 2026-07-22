"use client";

import { CtaButton } from "@/components/home/primary-button";
import { InteractiveGridSection } from "@/components/motion/interactive-grid-background";
import { contactContent } from "@/config/contact-section";
import { cn } from "@/lib/utils";

export type ContactSectionInteractiveProps = {
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  id?: string;
};

export function ContactSectionInteractive({
  heading = contactContent.heading,
  ctaLabel = contactContent.ctaLabel,
  ctaHref = contactContent.ctaHref,
  className,
  id = "contact",
}: ContactSectionInteractiveProps = {}) {

  const outcomesStart = heading.indexOf("Start paying for outcomes.");
  const headingLead =
    outcomesStart >= 0 ? heading.slice(0, outcomesStart) : heading;
  const headingAccent =
    outcomesStart >= 0 ? heading.slice(outcomesStart) : "";

  return (
    <InteractiveGridSection
      id={id}
      className={cn(
        "border-t border-[#f0f0f0] px-6 py-16 font-sans lg:py-20",
        className,
      )}
      aria-labelledby="contact-heading"
    >
      <div className="relative mx-auto flex min-h-[240px] w-full max-w-[1260px] flex-col items-center justify-center gap-10 lg:gap-11">
        <div
          className="pointer-events-none absolute inset-x-6 inset-y-4 rounded-[28px] bg-white/35 blur-2xl"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <h2
            id="contact-heading"
            className="relative max-w-[1260px] text-center text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.45] tracking-[-0.2px] text-[#0f172a] lg:whitespace-nowrap lg:text-[40px]"
          >
            {headingLead}
            {headingAccent ? (
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0325ab 0%, #17a5fb 40%, #ed0082 100%)",
                }}
              >
                {headingAccent}
              </span>
            ) : null}
          </h2>
        </div>

        <div className="relative z-10 inline-flex rounded-[100px]">
          <CtaButton
            href={ctaHref}
            className="h-[54px] gap-2.5 rounded-[100px] px-8 py-2.5 shadow-[0_4px_20px_rgba(23,165,251,0.15)] transition-shadow hover:shadow-[0_8px_28px_rgba(23,165,251,0.22)]"
          >
            {ctaLabel}
          </CtaButton>
        </div>
      </div>
    </InteractiveGridSection>
  );
}
