import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { LOGOS } from "@/lib/constants";

export function LogosSection() {
  return (
    <section
      id="customers"
      className="border-border/50 scroll-mt-24 border-y py-14 sm:py-16"
    >
      <Container>
        <Reveal>
          <p className="text-muted-foreground text-center text-sm">
            Trusted by finance and platform teams at growth-stage and enterprise companies
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {LOGOS.map((logo) => (
              <li
                key={logo}
                className="font-heading text-foreground/35 text-sm font-semibold tracking-wide sm:text-base"
              >
                {logo}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
