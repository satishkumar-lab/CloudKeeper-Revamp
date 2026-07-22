"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import { VideoPlayerModal } from "@/components/shared/video-player-modal";
import {
  solutionsPpaPlusAssets,
  solutionsPpaPlusVideoExplainer,
} from "@/config/solutions-ppa-plus";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

/** Figma 8200:166839 — AWS PPA/EDP video explainer */
export function PpaPlusVideoExplainerSection() {
  const reduceMotion = useReducedMotion() === true;
  const { heading, videoHref, cta } = solutionsPpaPlusVideoExplainer;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="bg-white font-sans"
        aria-labelledby="ppa-plus-video-explainer-heading"
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-12 sm:px-8 lg:px-20 lg:py-[50px] lg:pb-20">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[70px]">
            <motion.div
              className="w-full shrink-0 lg:max-w-[724px]"
              initial={reduceMotion ? false : { opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: easeSmooth }}
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="group/video relative block w-full rounded-[10px] border border-[rgba(217,238,253,0.5)] bg-white p-3.5 text-left shadow-[0px_4px_12px_rgba(29,140,242,0.1)] transition-shadow duration-300 hover:shadow-[0px_8px_24px_rgba(29,140,242,0.16)] sm:p-[14px]"
                aria-label={`Play video: ${heading}`}
              >
                <div className="relative aspect-[696/394] w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={solutionsPpaPlusAssets.videoExplainer.thumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 696px"
                    className="object-cover transition-transform duration-500 group-hover/video:scale-[1.02]"
                  />
                </div>

                <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover/video:scale-105">
                  <span className="flex size-16 items-center justify-center rounded-full bg-white/80">
                    <Image
                      src={solutionsPpaPlusAssets.videoExplainer.playIcon}
                      alt=""
                      width={26}
                      height={24}
                      className="ml-1 h-6 w-[26px] object-contain"
                      aria-hidden
                    />
                  </span>
                </span>
              </button>
            </motion.div>

            <motion.div
              className="flex w-full max-w-[486px] flex-col items-start gap-8 lg:gap-[37px]"
              initial={reduceMotion ? false : { opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: easeSmooth, delay: 0.08 }}
            >
              <h2
                id="ppa-plus-video-explainer-heading"
                className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-[1.3] tracking-[-0.5px] text-black"
              >
                {heading}
              </h2>

              <CtaButton
                href={cta.href}
                className="h-[52px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.label}
              </CtaButton>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoPlayerModal
        open={isVideoOpen}
        onOpenChange={setIsVideoOpen}
        videoHref={videoHref}
        title={heading}
      />
    </>
  );
}
