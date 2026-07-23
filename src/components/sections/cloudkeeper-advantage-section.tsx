"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  CLOUDKEEPER_ADVANTAGE_SECTION_BG,
  cloudKeeperAdvantageAssets,
  defaultCloudKeeperAdvantageContent,
  type CloudKeeperAdvantageContent,
  type CloudKeeperAdvantageItem,
} from "@/config/cloudkeeper-advantage-section";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

export type CloudKeeperAdvantageSectionProps =
  Partial<CloudKeeperAdvantageContent> & {
    className?: string;
    id?: string;
    background?: string;
    decoSrc?: string;
    headingId?: string;
  };

function AdvantageItem({
  item,
  index,
  total,
  reduceMotion,
}: {
  item: CloudKeeperAdvantageItem;
  index: number;
  total: number;
  reduceMotion: boolean;
}) {
  const isLast = index === total - 1;

  return (
    <motion.li
      className={cn(
        "group relative flex list-none items-start justify-center overflow-hidden bg-white px-5 py-[30px] pb-10 sm:px-6",
        !isLast && "lg:border-r lg:border-[#e6ecf1]",
        index % 2 === 0 && "sm:max-lg:border-r sm:max-lg:border-[#e6ecf1]",
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.7,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : 0.1 + index * 0.08,
      }}
    >
      {/* Soft radial wash — white center, light blue edges */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out",
          reduceMotion
            ? "opacity-0"
            : "opacity-0 group-hover:opacity-100",
        )}
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 42%, #ffffff 0%, #ffffff 38%, rgba(23, 165, 251, 0.06) 68%, rgba(23, 165, 251, 0.12) 100%)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 flex w-full flex-col items-center gap-[30px]"
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -3,
                transition: { type: "spring", stiffness: 320, damping: 22 },
              }
        }
      >
        <div className="relative flex size-[46px] shrink-0 items-center justify-center">
          <Image
            src={item.icon}
            alt=""
            width={46}
            height={46}
            unoptimized
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <p className="w-full text-center text-base leading-[1.5] text-black">
          {item.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </motion.div>
    </motion.li>
  );
}

/**
 * Shared “The CloudKeeper Advantage” section — bordered card, 4 pillars, CTA.
 * Pass heading / items / cta to customize per page.
 */
export function CloudKeeperAdvantageSection({
  heading = defaultCloudKeeperAdvantageContent.heading,
  subtitle = defaultCloudKeeperAdvantageContent.subtitle,
  items = defaultCloudKeeperAdvantageContent.items,
  cta = defaultCloudKeeperAdvantageContent.cta,
  className,
  id = "cloudkeeper-advantage",
  background = CLOUDKEEPER_ADVANTAGE_SECTION_BG,
  decoSrc = cloudKeeperAdvantageAssets.deco,
  headingId = "cloudkeeper-advantage-heading",
}: CloudKeeperAdvantageSectionProps) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden font-sans", className)}
      style={{ background }}
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute -left-[180px] bottom-[-40px] z-0 hidden translate-x-[5%] translate-y-[35%] scale-90 opacity-30 lg:block"
        aria-hidden
      >
        <div className="-rotate-[49deg]">
          <Image
            src={decoSrc}
            alt=""
            width={520}
            height={400}
            className="h-auto w-[min(520px,48vw)] max-w-none object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-16 sm:px-8 lg:px-[80px] lg:py-[100px]">
        <motion.div
          className="flex w-full max-w-[1280px] flex-col items-start gap-10 rounded-[2px] border border-solid border-[#e6ecf1] bg-white py-10 sm:py-12 lg:gap-10 lg:py-[60px]"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: easeSmooth }}
        >
          <div className="flex w-full flex-col items-center gap-2.5 px-5 text-center sm:px-8">
            <h2
              id={headingId}
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.5] text-black"
            >
              {heading}
            </h2>
            <p className="max-w-[1038px] text-base leading-[1.5] text-black sm:text-lg">
              {subtitle}
            </p>
          </div>

          <ul className="grid w-full grid-cols-1 divide-y divide-[#e6ecf1] border-y border-[#e6ecf1] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {items.map((item, index) => (
              <AdvantageItem
                key={item.id}
                item={item}
                index={index}
                total={items.length}
                reduceMotion={reduceMotion}
              />
            ))}
          </ul>

          <div className="flex w-full items-center justify-center px-5">
            <CtaButton href={cta.href} className="h-[52px]">
              {cta.label}
            </CtaButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
