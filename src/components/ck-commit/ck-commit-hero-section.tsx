"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import { CkCommitHeroDashboard } from "@/components/ck-commit/ck-commit-hero-dashboard";
import {
  CK_COMMIT_HEADING_GRADIENT,
  ckCommitAssets,
  ckCommitHero,
} from "@/config/ck-commit";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

function Breadcrumbs({ reduceMotion }: { reduceMotion: boolean }) {
  const items = ckCommitHero.breadcrumbs;

  return (
    <motion.nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5"
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeSmooth }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.label} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span
                className="relative flex h-2 w-1 shrink-0 items-center justify-center"
                aria-hidden
              >
                <Image
                  src={ckCommitAssets.breadcrumbChevron}
                  alt=""
                  width={8}
                  height={4}
                  className="h-1 w-2 -rotate-90 object-contain"
                />
              </span>
            ) : null}

            {"href" in item && item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-sm font-medium leading-5 text-[#17a5fb] transition-colors hover:text-[#0e95ea]"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-sm font-medium leading-5 text-[#828282]"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </motion.nav>
  );
}

function PointerText({
  parts,
}: {
  parts: readonly { text: string; bold?: boolean }[];
}) {
  return (
    <p className="w-full text-center text-base leading-[1.5] tracking-[-0.3px] text-black">
      {parts.map((part, index) => {
        const lines = part.text.split("\n");

        return (
          <span
            key={`${index}-${part.text.slice(0, 12)}`}
            className={part.bold ? "font-semibold" : undefined}
          >
            {lines.map((line, lineIndex) => (
              <Fragment key={`${index}-${lineIndex}`}>
                {lineIndex > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </span>
        );
      })}
    </p>
  );
}

/** Figma 8141:116195 — Platforms-Commit hero */
export function CkCommitHeroSection() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white from-[75%] to-[#f3faff] font-sans"
      aria-labelledby="ck-commit-hero-heading"
    >
      {/* Top-left soft blobs — Figma bgtop-left */}
      <div
        className="pointer-events-none absolute left-0 top-0 hidden h-[114px] w-[66px] overflow-hidden sm:block"
        aria-hidden
      >
        <Image
          src={ckCommitAssets.heroBlobA}
          alt=""
          width={110}
          height={110}
          className="absolute -left-12 -top-5 size-[110px] mix-blend-multiply"
        />
        <Image
          src={ckCommitAssets.heroBlobB}
          alt=""
          width={42}
          height={42}
          className="absolute -left-4 top-[68px] size-[42px] mix-blend-multiply"
        />
      </div>

      {/* Bottom-left abstract deco */}
      <motion.div
        className="pointer-events-none absolute bottom-[-110px] left-0 z-0 hidden opacity-30 sm:block lg:bottom-[-94px] lg:left-0"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={
          reduceMotion
            ? { opacity: 0.3 }
            : { opacity: 0.3, scale: 1, y: [0, -8, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                opacity: { duration: 1, ease: easeSmooth, delay: 0.45 },
                scale: { duration: 1, ease: easeSmooth, delay: 0.45 },
                y: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1.2,
                },
              }
        }
      >
        <div className="origin-center rotate-[13deg]">
          <Image
            src={ckCommitAssets.heroDecoAbstract}
            alt=""
            width={226}
            height={216}
            className="h-auto w-[182px] max-w-none object-contain lg:w-[228px]"
            priority
          />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-0 pt-10 sm:px-8 lg:px-10 lg:pt-10">
        <Breadcrumbs reduceMotion={reduceMotion} />

        <div className="mx-auto mt-10 flex max-w-[1228px] flex-col items-center gap-[50px] lg:mt-[40px]">
          <div className="flex w-full flex-col items-center gap-[38px]">
            <div className="flex w-full flex-col items-center gap-5">
              <div className="flex w-full flex-col items-center gap-3.5">
                <motion.span
                  className="rounded-full border-[0.7px] border-[rgba(247,159,207,0.4)] bg-white px-3 py-[3px] text-sm capitalize leading-[27px] tracking-[0.1px] text-[#e80584]"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easeSmooth }}
                >
                  {ckCommitHero.pageTag}
                </motion.span>

                <h1
                  id="ck-commit-hero-heading"
                  className="flex w-full flex-col items-center text-center text-[clamp(1.75rem,4vw,2.75rem)] font-normal tracking-[-0.5px] lg:text-[44px]"
                >
                  <motion.span
                    className="leading-[1.2] text-black"
                    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      ease: easeSmooth,
                      delay: 0.08,
                    }}
                  >
                    {ckCommitHero.headingLine1}
                  </motion.span>
                  <motion.span
                    className="bg-clip-text leading-[1.3] text-transparent"
                    style={{ backgroundImage: CK_COMMIT_HEADING_GRADIENT }}
                    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      ease: easeSmooth,
                      delay: 0.18,
                    }}
                  >
                    {ckCommitHero.headingGradient}
                  </motion.span>
                </h1>
              </div>

              <ul className="mx-auto flex w-full max-w-[1150px] flex-col items-stretch gap-6 py-5 sm:flex-row sm:items-center sm:justify-center sm:gap-3.5 lg:gap-3.5">
                {ckCommitHero.pointers.map((pointer, index) => (
                  <motion.li
                    key={pointer.parts.map((p) => p.text).join("")}
                    className={cn(
                      "flex flex-1 items-center justify-center",
                      index < ckCommitHero.pointers.length - 1 &&
                        "sm:border-r sm:border-[#d0d5dd]",
                    )}
                    initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      ease: easeSmooth,
                      delay: reduceMotion ? 0 : 0.28 + index * 0.08,
                    }}
                  >
                    <div className="w-full max-w-[266px] px-1 sm:px-2">
                      <PointerText parts={pointer.parts} />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.65,
                ease: easeSmooth,
                delay: reduceMotion ? 0 : 0.58,
              }}
            >
              <CtaButton href={ckCommitHero.cta.href}>
                {ckCommitHero.cta.label}
              </CtaButton>
            </motion.div>
          </div>

          <div className="w-full max-w-[1140px]">
            <CkCommitHeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
