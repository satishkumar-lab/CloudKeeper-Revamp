import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,oklch(0.28_0.04_230),oklch(0.22_0.03_220)_55%,oklch(0.3_0.05_55))] px-8 py-14 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,oklch(0.7_0.1_210_/0.35),transparent_40%),radial-gradient(circle_at_80%_70%,oklch(0.72_0.1_55_/0.3),transparent_35%)] opacity-40"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to bring order to cloud spend?
              </h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                See how CloudKeeper helps enterprises cut waste, improve forecast
                accuracy, and align finance with engineering.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-white text-[oklch(0.25_0.03_230)] hover:bg-white/90"
                  asChild
                >
                  <Link href="mailto:hello@cloudkeeper.ai">Talk to sales</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="#platform">View platform</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
