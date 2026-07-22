"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { azFaqAssets, azFaqContent } from "@/config/solutions-az-faq";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

/** Figma 8200:170072 — Frequently Asked Questions */
export function AzFaqSection() {
  const { heading, items } = azFaqContent;
  const reduceMotion = useReducedMotion() === true;
  const [openId, setOpenId] = useState<string>(items[0]?.id ?? "");

  return (
    <section
      className="relative overflow-hidden bg-white font-sans"
      aria-labelledby="az-faq-heading"
    >
      <div
        className="pointer-events-none absolute -right-[12%] -top-[20%] hidden h-[420px] w-[360px] opacity-40 lg:block"
        aria-hidden
      >
        <Image
          src={azFaqAssets.bgDeco}
          alt=""
          fill
          className="object-contain object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute -bottom-[18%] -left-[14%] hidden h-[420px] w-[360px] opacity-40 lg:block"
        aria-hidden
      >
        <Image
          src={azFaqAssets.bgDeco}
          alt=""
          fill
          className="rotate-180 object-contain object-center"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[50px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <motion.h2
          id="az-faq-heading"
          className="text-center text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.5] tracking-[-0.5px] text-black"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.85, ease: easeSmooth }}
        >
          {heading}
        </motion.h2>

        <div className="flex w-full max-w-[980px] flex-col gap-2.5">
          {items.map((item, index) => {
            const isOpen = openId === item.id;
            const number = `${index + 1}.`;

            return (
              <motion.div
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: easeSmooth,
                  delay: reduceMotion ? 0 : index * 0.04,
                }}
                className={cn(
                  "rounded-lg border bg-white px-5 py-2.5 transition-shadow",
                  isOpen
                    ? "border-[#179eff] border-[0.8px] pb-3.5 pt-2.5 shadow-[0px_8px_12px_rgba(29,140,242,0.16)]"
                    : "border-[#d9dfe0] border-[0.74px]",
                )}
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenId((current) =>
                      current === item.id ? "" : item.id,
                    )
                  }
                >
                  <span
                    className={cn(
                      "flex min-w-0 items-center gap-2.5 text-lg leading-[31.214px] text-black",
                      isOpen ? "font-medium" : "font-normal",
                    )}
                  >
                    <span className="shrink-0">{number}</span>
                    <span className="min-w-0">{item.question}</span>
                  </span>
                  <span
                    className={cn(
                      "flex size-[42px] shrink-0 items-center justify-center rounded-full",
                      isOpen && "text-[#179eff]",
                    )}
                    aria-hidden
                  >
                    <ChevronDown
                      className={cn(
                        "size-5 transition-transform duration-300",
                        isOpen && "rotate-180 text-[#179eff]",
                      )}
                      strokeWidth={1.75}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={
                        reduceMotion
                          ? false
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={
                        reduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.35, ease: easeSmooth }}
                      className="overflow-hidden"
                    >
                      <p className="pl-[21px] pr-[30px] pt-1 text-base leading-[1.5] tracking-[-0.2px] text-black">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
