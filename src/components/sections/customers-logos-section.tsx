"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  customersLogosAssets,
  defaultCustomersLogosContent,
  type CustomerLogo,
  type CustomersLogosContent,
} from "@/config/customers-logos-section";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

export type CustomersLogosSectionProps = {
  heading?: string;
  rows?: CustomersLogosContent["rows"];
  backgroundSrc?: string;
  className?: string;
  id?: string;
};

function LogoCell({
  logo,
  index,
  reduceMotion,
}: {
  logo: CustomerLogo;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.li
      className="relative flex h-[58px] min-w-0 flex-1 items-center justify-center"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : 0.06 + index * 0.05,
      }}
    >
      <img
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="max-h-[58px] w-auto max-w-full object-contain object-center"
        decoding="async"
      />
    </motion.li>
  );
}

/**
 * Shared customer logos grid (Figma card: customer logo).
 * Pass `heading` / `rows` to customize per page; defaults to the AZ logo set.
 */
export function CustomersLogosSection({
  heading = defaultCustomersLogosContent.heading,
  rows = defaultCustomersLogosContent.rows,
  backgroundSrc = customersLogosAssets.bg,
  className,
  id = "customers-logos",
}: CustomersLogosSectionProps = {}) {
  const reduceMotion = useReducedMotion() === true;
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={cn("relative w-full overflow-hidden font-sans", className)}
      aria-labelledby={headingId}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={backgroundSrc}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[40px] px-5 py-[50px] sm:px-8 lg:px-0">
        <motion.h2
          id={headingId}
          className="text-center text-[32px] font-normal leading-[1.5] text-black"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: easeSmooth }}
        >
          {heading}
        </motion.h2>

        <div className="flex w-full flex-col gap-10">
          {rows.map((row, rowIndex) => (
            <ul
              key={`row-${rowIndex}`}
              className="flex w-full flex-col gap-[30px] sm:flex-row sm:items-start sm:gap-[30px]"
            >
              {row.map((logoItem, logoIndex) => (
                <LogoCell
                  key={logoItem.name}
                  logo={logoItem}
                  index={rowIndex * 6 + logoIndex}
                  reduceMotion={reduceMotion}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
