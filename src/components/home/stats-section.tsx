import { statsCards } from "@/config/home-content";
import { StatsPartnerBadges } from "@/components/home/stats-partner-badges";

/** Figma 8251:20736 — card-stats-badge-big (1440×662) */
export function StatsSection() {
  return (
    <section
      id="why-us"
      className="bg-white font-sans"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[50px] px-5 pb-20 pt-24 sm:px-8 lg:px-[80px] lg:pb-[80px] lg:pt-[140px]">
        {/* Title row — Figma 3775:19265 */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="stats-heading"
            className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.5] tracking-[-0.2px] text-black lg:whitespace-nowrap lg:text-[40px]"
          >
            Built for Scale.
            <br />
            Proven in the Real World.
          </h2>

          <StatsPartnerBadges />
        </div>

        {/* Stat cards — Figma 3001:26558 */}
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-[20px]">
          {statsCards.map((card) => (
            <div
              key={card.label}
              className="relative h-[305px] min-w-0 flex-1 overflow-hidden rounded-[10px]"
              style={{ backgroundColor: card.bg }}
            >
              <div className="absolute left-0 top-[calc(50%-41.53px)] flex w-[240px] -translate-y-1/2 flex-col gap-5 pl-[30px] pr-[50px]">
                <p className="flex items-center gap-1 text-[36px] font-semibold leading-[52px] tracking-[-2px] text-black">
                  <span>{card.value}</span>
                  <span>{card.suffix}</span>
                </p>
                <p className="whitespace-pre-line pl-0.5 text-xl leading-[1.3] tracking-[-0.3125px] text-[#253746]">
                  {card.label}
                </p>
              </div>
              {card.illustrationInsetBottom ? (
                <div
                  className="pointer-events-none absolute"
                  style={{
                    width: card.illustrationWidth,
                    height: card.illustrationHeight,
                    left: card.illustrationLeft,
                    top: card.illustrationTop,
                    opacity: card.illustrationOpacity,
                  }}
                  aria-hidden
                >
                  <div
                    className="absolute inset-x-0 top-0"
                    style={{ bottom: card.illustrationInsetBottom }}
                  >
                    <img
                      src={card.illustration}
                      alt=""
                      className="block size-full max-w-none"
                      decoding="async"
                      aria-hidden
                    />
                  </div>
                </div>
              ) : (
                <img
                  src={card.illustration}
                  alt=""
                  className="pointer-events-none absolute max-w-none"
                  style={{
                    width: card.illustrationWidth,
                    height: card.illustrationHeight,
                    left: card.illustrationLeft,
                    top: card.illustrationTop,
                    opacity: card.illustrationOpacity,
                  }}
                  decoding="async"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
