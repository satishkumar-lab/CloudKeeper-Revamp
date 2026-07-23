"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  platformSuiteAssets,
  platformSuiteValueAdds,
} from "@/config/platform-suite";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;
const hoverEase = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Extra space so blue/pink borders can fan out on hover. */
const HOVER_BLEED = 14;

/** Figma 202:21074 — Platform Suite value-add cards (Check / Expert / Gen AI) */
export function PlatformSuiteValueAdds() {
  const reduceMotion = useReducedMotion() === true;
  const { headingLine1, headingLine2, cards } = platformSuiteValueAdds;

  return (
    <div className="mt-5 flex w-full flex-col items-center gap-[50px]">
      <h3 className="max-w-[1170px] text-center text-[clamp(1.35rem,2.5vw,1.875rem)] leading-[1.5] text-black lg:text-[30px]">
        {headingLine1}
        <br />
        {headingLine2}
      </h3>

      <ul className="grid w-full max-w-[1260px] grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.li
            key={card.id}
            className="relative mx-auto w-full max-w-[388px] overflow-visible lg:mx-0 lg:max-w-none"
            style={{ padding: HOVER_BLEED }}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              ease: easeSmooth,
              delay: reduceMotion ? 0 : index * 0.08,
            }}
          >
            <div className="group/card relative size-full overflow-visible">
              {/* Blue accent — fans top-left on hover */}
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute rounded-[9px] border border-solid border-[rgba(23,158,255,0.6)]",
                  "inset-[2px_4px_4px_2px]",
                  "transition-[inset,border-radius] duration-300",
                  "group-hover/card:inset-[-8px_12px_12px_-8px] group-hover/card:rounded-[11px]",
                )}
                style={{ transitionTimingFunction: hoverEase }}
              />

              {/* Pink accent — fans bottom-right on hover */}
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute rounded-[9px] border border-solid border-[#ffbee1]",
                  "inset-[4px_2px_2px_4px]",
                  "transition-[inset,border-radius] duration-300",
                  "group-hover/card:inset-[12px_-8px_-8px_12px] group-hover/card:rounded-[11px]",
                )}
                style={{ transitionTimingFunction: hoverEase }}
              />

              <article
                className={cn(
                  "relative z-10 flex h-full min-h-[190px] flex-col justify-center gap-4 overflow-hidden",
                  "rounded-xl border border-[#f1f1f1] bg-white px-[30px] py-2.5 text-black",
                  "shadow-[0px_2px_20px_0px_rgba(29,140,242,0.1)]",
                  "transition-[border-radius,border-color,box-shadow] duration-300",
                  "group-hover/card:rounded-[14px] group-hover/card:border-transparent",
                  "group-hover/card:shadow-[0px_8px_28px_0px_rgba(29,140,242,0.16)]",
                )}
                style={{ transitionTimingFunction: hoverEase }}
              >
                {/* Soft corner glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-3 -right-2 h-[90px] w-[120px] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                  style={{ transitionTimingFunction: hoverEase }}
                >
                  <span className="absolute bottom-2 right-6 size-[58px] rounded-full bg-[#ff9ed0]/55 blur-[18px]" />
                  <span className="absolute bottom-0 right-0 size-[48px] rounded-full bg-[#c4a8ff]/50 blur-[16px]" />
                  <img
                    src={platformSuiteAssets.valueAdds.glowA}
                    alt=""
                    className="absolute bottom-3 right-5 size-[52px] max-w-none opacity-80 mix-blend-multiply"
                  />
                  <img
                    src={platformSuiteAssets.valueAdds.glowB}
                    alt=""
                    className="absolute bottom-0 right-1 size-[40px] max-w-none opacity-80 mix-blend-multiply"
                  />
                </div>

                <div className="relative size-[46px] shrink-0 overflow-hidden">
                  <img
                    src={card.icon}
                    alt=""
                    className="absolute left-1/2 top-1/2 size-8 max-w-none -translate-x-1/2 -translate-y-1/2"
                    decoding="async"
                    aria-hidden
                  />
                </div>

                <div className="relative flex flex-col gap-[5px]">
                  <div className="flex flex-col gap-3">
                    <p className="text-base leading-5 text-black">
                      {card.eyebrow}
                    </p>
                    <h4
                      className={cn(
                        "text-2xl font-medium leading-[1.5] text-[#253746]",
                        "transition-[color] duration-300",
                        "group-hover/card:bg-clip-text group-hover/card:text-transparent",
                        "group-hover/card:[background-image:linear-gradient(90deg,rgb(23,165,251)_0%,rgb(154,75,255)_50%,rgb(237,0,130)_100%)]",
                      )}
                      style={{ transitionTimingFunction: hoverEase }}
                    >
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-sm leading-6 tracking-[-0.5px] text-black">
                    {card.description}
                  </p>
                </div>
              </article>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
