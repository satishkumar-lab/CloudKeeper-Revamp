import { homeAssets } from "@/config/home-assets";

/** Figma 8294:8753 — 3rd section / Card statement home (1440×240) */
export function StatementSection() {
  return (
    <section
      className="relative overflow-hidden font-sans"
      aria-label="CloudKeeper differentiator"
    >
      <div className="relative mx-auto h-[240px] w-full max-w-[1440px]">
        <img
          src={homeAssets.statementCardBg}
          alt=""
          width={1440}
          height={240}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          aria-hidden
        />

        {/* Text block — Figma 8294:8756 at left 95px, top 53px */}
        <div className="absolute left-5 top-12 w-[calc(100%-2.5rem)] sm:left-8 sm:w-[calc(100%-4rem)] lg:left-[95px] lg:top-[53px] lg:w-[1249px]">
          <div className="text-right text-[clamp(1.125rem,2.5vw,2rem)] leading-[1.4] tracking-[-0.2px] text-black lg:text-[32px]">
            <p className="mb-0 leading-[1.4]">
              Unlike traditional providers with a fragmented approach,
            </p>
            <p className="mb-0 leading-[1.4]">
              we combine AI-led platforms, automation, and human expertise
            </p>
            <p className="mb-0 leading-[1.4] lg:hidden">
              to deliver continuous, measurable cost savings -{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #17a5fb 0%, #9a4bff 50%, #ed0082 100%)",
                }}
              >
                seamlessly and at scale.
              </span>
            </p>
            <p className="mb-0 hidden leading-[1.4] lg:block">
              to deliver continuous, measurable cost savings -{" "}
              <span className="invisible">seamlessly and at scale.</span>
            </p>
          </div>
        </div>

        {/* Gradient overlay — Figma 8294:8758 at x=1007, y=147 */}
        <p
          className="pointer-events-none absolute left-5 top-auto hidden w-[calc(100%-2.5rem)] bg-clip-text text-right text-[32px] leading-[1.3] tracking-[-0.2px] text-transparent lg:block lg:left-[1007px] lg:top-[147px] lg:w-[337px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #17a5fb 0%, #9a4bff 50%, #ed0082 100%)",
          }}
          aria-hidden
        >
          seamlessly and at scale.
        </p>
      </div>
    </section>
  );
}
