import { BarChart3, Layers3, ShieldCheck, Workflow } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Reveal } from "@/components/motion/reveal";
import { FEATURES } from "@/lib/constants";

const icons = {
  layers: Layers3,
  workflow: Workflow,
  shield: ShieldCheck,
  chart: BarChart3,
} as const;

export function FeaturesSection() {
  return (
    <section id="platform" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-[oklch(0.45_0.08_210)]">
              Platform
            </p>
            <h2 className="font-heading text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for the way enterprises actually run cloud.
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
              One operating system for cloud spend — from discovery to decision to action.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {FEATURES.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons];

            return (
              <FadeIn key={feature.title} delay={index * 0.05}>
                <div className="group">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-[oklch(0.94_0.02_210)] text-[oklch(0.38_0.07_210)] transition-colors group-hover:bg-[oklch(0.9_0.04_210)]">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-foreground text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
