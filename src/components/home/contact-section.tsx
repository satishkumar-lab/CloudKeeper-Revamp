import { CtaButton } from "@/components/home/primary-button";
import { contactAssets, contactContent } from "@/config/contact-section";

/** Figma 8251:21161 — Outcomes CTA */
export function ContactSection() {
  const { heading, ctaLabel, ctaHref } = contactContent;

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-[#f0f0f0] bg-white font-sans"
      aria-labelledby="contact-heading"
    >
      {/* Hex tile field — 2628:21424 */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[645px] w-[min(1616px,200vw)] -translate-x-1/2 -translate-y-1/2 opacity-50"
        aria-hidden
        style={{
          backgroundImage: `url(${contactAssets.hexTile})`,
          backgroundSize: "202px 161px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Platform grid layers — 2616:20650 */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden px-[90px]"
        aria-hidden
      >
        <div className="absolute inset-[13.53%_29.64%_16.36%_29.64%] z-[2]">
          <img
            src={contactAssets.gridMain}
            alt=""
            className="size-full object-fill"
            decoding="async"
          />
        </div>
        <div className="absolute inset-[-328%_6.88%_289%_30.35%] z-[1] min-h-[200px]">
          <img
            src={contactAssets.gridAccent}
            alt=""
            className="size-full object-fill"
            decoding="async"
          />
        </div>
      </div>

      {/* Soft ellipse wash — 2628:23542 */}
      <div
        className="pointer-events-none absolute left-[calc(50%+62px)] top-[calc(50%+36px)] h-[779px] w-[min(1892px,140vw)] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <img
          src={contactAssets.ellipseGlow}
          alt=""
          className="size-full object-contain"
          decoding="async"
        />
      </div>

      {/* Color glows — 3221:27518 */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[380px] w-full opacity-70"
        aria-hidden
      >
        <div
          className="absolute left-[-52px] top-[-207px] size-[428px] rounded-full blur-[50px] opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, rgba(23,165,251,1) 0%, rgba(255,255,255,0) 80%)",
          }}
        />
        <div
          className="absolute left-[864px] top-[-383px] size-[428px] rounded-full blur-[71px] opacity-20 max-lg:left-[60%]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,87,162,1) 0%, rgba(255,255,255,0) 80%)",
          }}
        />
        <div
          className="absolute left-[1065px] top-[126px] size-[428px] rounded-full blur-[50px] opacity-25 max-lg:left-[70%]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,160,87,1) 0%, rgba(255,255,255,0) 89%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[380px] w-full max-w-[1260px] flex-col items-center justify-center gap-10 px-6 py-16 lg:gap-[40px]">
        <h2
          id="contact-heading"
          className="max-w-[1260px] text-center text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.5] tracking-[-0.2px] text-black lg:text-[40px]"
        >
          {heading}
        </h2>

        <CtaButton
          href={ctaHref}
          className="h-[54px] gap-2.5 rounded-[100px] px-8 py-2.5"
        >
          {ctaLabel}
        </CtaButton>
      </div>
    </section>
  );
}
