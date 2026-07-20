"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.78_0.09_210_/0.35),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_20%,oklch(0.82_0.08_55_/0.22),transparent_50%),linear-gradient(180deg,oklch(0.985_0.01_230)_0%,oklch(0.97_0.01_220)_45%,oklch(0.99_0_0)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(oklch(0.55_0.02_230_/0.08)_1px,transparent_1px),linear-gradient(90deg,oklch(0.55_0.02_230_/0.08)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)] [background-size:64px_64px] opacity-[0.35]"
      />

      <Container className="flex min-h-[100svh] flex-col justify-center pt-28 pb-20 sm:pt-32 sm:pb-24">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="font-heading text-foreground mb-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-foreground/90 max-w-2xl text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl md:text-4xl"
          >
            Cloud cost clarity for enterprises that move fast.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mt-5 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" asChild>
              <Link href="#contact">Book a demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#platform">Explore platform</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[42%] overflow-hidden"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="border-border/50 from-background/80 to-background/20 mx-auto h-full max-w-5xl rounded-t-[2rem] border bg-gradient-to-b shadow-[0_-20px_80px_oklch(0.45_0.04_220_/0.12)] backdrop-blur-sm">
            <div className="border-border/40 flex h-10 items-center gap-1.5 border-b px-4">
              <span className="bg-border size-2.5 rounded-full" />
              <span className="bg-border size-2.5 rounded-full" />
              <span className="bg-border size-2.5 rounded-full" />
            </div>
            <div className="grid h-[calc(100%-2.5rem)] grid-cols-12 gap-3 p-4 sm:p-6">
              <div className="bg-muted/70 col-span-3 hidden rounded-lg sm:block" />
              <div className="col-span-12 space-y-3 sm:col-span-9">
                <div className="bg-muted h-8 w-2/5 rounded-md" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-muted/80 h-24 rounded-lg" />
                  <div className="bg-muted/60 h-24 rounded-lg" />
                  <div className="h-24 rounded-lg bg-[linear-gradient(135deg,oklch(0.72_0.1_210_/0.45),oklch(0.78_0.08_55_/0.35))]" />
                </div>
                <div className="bg-muted/50 h-28 rounded-lg" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
