"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { CtaButton } from "@/components/home/primary-button";
import { platformSuiteDeployment } from "@/config/platform-suite";
import {
  THOUGHT_LEADERSHIP_BG,
  THOUGHT_LEADERSHIP_GLOW_TOP,
} from "@/config/thought-leadership-section";
import { cn } from "@/lib/utils";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const selectTransition = {
  duration: 0.5,
  ease: easeSmooth,
} as const;

/** Figma 202:21003 — Flexible Deployment Options */
export function PlatformSuiteDeploymentSection() {
  const reduceMotion = useReducedMotion() === true;
  const { heading, subtitle, options, cta } = platformSuiteDeployment;
  const defaultId =
    options.find((o) => o.variant === "filled")?.id ?? options[0]?.id;
  const [activeId, setActiveId] = useState(defaultId);

  return (
    <section
      id="deployment"
      className="relative isolate overflow-hidden bg-black font-sans"
      aria-labelledby="deployment-heading"
      style={{ background: THOUGHT_LEADERSHIP_BG }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[888px] top-[-140px] z-[2] size-[452px] rounded-full opacity-30 blur-[50px]"
        style={{ background: THOUGHT_LEADERSHIP_GLOW_TOP }}
      />

      <div className="relative z-[3] mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-16 sm:px-8 lg:px-[90px] lg:py-[60px]">
        <div className="flex w-full max-w-[1068px] flex-col items-center gap-10">
          <motion.div
            className="flex w-full flex-col items-center gap-2.5 text-center text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: easeSmooth }}
          >
            <h2
              id="deployment-heading"
              className="w-full text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.5] lg:text-[40px]"
            >
              {heading}
            </h2>
            <p className="max-w-[1122px] text-lg leading-[1.5]">{subtitle}</p>
          </motion.div>

          <div
            className="flex w-full flex-col gap-[26px]"
            onMouseLeave={() => {
              if (!reduceMotion) setActiveId(defaultId);
            }}
          >
            {options.map((option, index) => {
              const isActive = activeId === option.id;

              return (
                <motion.div
                  key={option.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.65,
                    ease: easeSmooth,
                    delay: reduceMotion ? 0 : 0.1 + index * 0.08,
                  }}
                >
                  <motion.div
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveId(option.id)}
                    onFocus={() => setActiveId(option.id)}
                    onClick={() => setActiveId(option.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveId(option.id);
                      }
                    }}
                    className={cn(
                      "relative rounded-xl p-[1.5px]",
                      "outline-none focus-visible:ring-2 focus-visible:ring-[#17a5fb]/50",
                    )}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: isActive ? -6 : 0,
                            scale: isActive ? 1.01 : 1,
                            boxShadow: isActive
                              ? "0px 14px 36px 0px rgba(0, 40, 100, 0.42)"
                              : "0px 4px 22px 0px rgba(0, 0, 0, 0.1)",
                          }
                    }
                    transition={selectTransition}
                  >
                    {/* Inactive dashed border */}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-xl border-[0.7px] border-dashed border-[rgba(108,184,238,0.2)]"
                      animate={{ opacity: isActive ? 0 : 1 }}
                      transition={selectTransition}
                    />

                    {/* Active — slow loading-style stroke moving along border */}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-xl"
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={selectTransition}
                    >
                      {/* Soft base border */}
                      <div className="absolute inset-0 rounded-xl border border-[rgba(23,165,251,0.28)]" />

                      <svg className="absolute inset-0 size-full overflow-visible">
                        <defs>
                          <linearGradient
                            id={`dep-border-grad-${option.id}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#17a5fb"
                              stopOpacity="0"
                            />
                            <stop
                              offset="35%"
                              stopColor="#37e0ff"
                              stopOpacity="1"
                            />
                            <stop
                              offset="65%"
                              stopColor="#9a4bff"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#ed0082"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        <motion.rect
                          x="1.25"
                          y="1.25"
                          width="99.5%"
                          height="98.5%"
                          rx="11"
                          ry="11"
                          fill="none"
                          stroke={`url(#dep-border-grad-${option.id})`}
                          strokeWidth="2"
                          strokeLinecap="round"
                          pathLength={100}
                          strokeDasharray="48 52"
                          initial={false}
                          animate={
                            isActive && !reduceMotion
                              ? { strokeDashoffset: [0, -100] }
                              : { strokeDashoffset: 0 }
                          }
                          transition={
                            isActive && !reduceMotion
                              ? {
                                  duration: 12,
                                  ease: "linear",
                                  repeat: Infinity,
                                }
                              : { duration: 0.3 }
                          }
                        />
                      </svg>
                    </motion.div>

                    {/* Card face */}
                    <div className="relative z-10 flex w-full cursor-pointer flex-col items-start gap-6 overflow-hidden rounded-[10.5px] px-6 py-6 sm:flex-row sm:items-center sm:gap-10 sm:px-[50px] sm:py-[30px]">
                      {/* Inactive fill */}
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[10.5px] bg-[#02183a]"
                        animate={{ opacity: isActive ? 0 : 1 }}
                        transition={selectTransition}
                      />

                      {/* Active fill */}
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[10.5px] bg-gradient-to-r from-[#03235b] to-[#044868]"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={selectTransition}
                      />

                      <div className="relative z-10 flex size-[90px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#02183a]">
                        <motion.span
                          aria-hidden
                          className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.2)]"
                          animate={{ opacity: isActive ? 0 : 1 }}
                          transition={selectTransition}
                        />
                        <img
                          src={option.icon}
                          alt=""
                          className="relative h-[42px] w-auto max-w-[52px] object-contain"
                          decoding="async"
                          aria-hidden
                        />
                      </div>

                      <motion.div
                        className={cn(
                          "relative z-10 flex min-w-0 flex-1 flex-col",
                          option.note ? "gap-2.5" : "",
                        )}
                        animate={{ opacity: isActive ? 1 : 0.65 }}
                        transition={selectTransition}
                      >
                        <p className="text-left text-xl tracking-[-0.25px] text-white sm:leading-8">
                          <span className="font-semibold">{option.label} - </span>
                          <span className="font-normal">
                            {option.description}
                          </span>
                        </p>
                        {option.note ? (
                          <p className="whitespace-nowrap rounded-sm bg-[rgba(32,73,110,0.1)] px-[15px] py-1 text-left text-[11px] leading-[22px] tracking-[0.4px] text-white sm:text-xs sm:leading-[27px] sm:tracking-[0.5px]">
                            {option.note}
                          </p>
                        ) : null}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: easeSmooth, delay: 0.2 }}
          >
            <CtaButton href={cta.href} variant="outlineDark">
              {cta.label}
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
