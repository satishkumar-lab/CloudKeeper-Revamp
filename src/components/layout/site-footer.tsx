import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-border/60 bg-background border-t">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs space-y-3">
            <p className="font-heading text-xl font-semibold tracking-tight">
              {siteConfig.name}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.tagline}. Built for finance, trusted by engineering.
            </p>
          </div>

          {(
            [
              ["Product", footerNav.product],
              ["Company", footerNav.company],
              ["Resources", footerNav.resources],
            ] as const
          ).map(([label, items]) => (
            <div key={label}>
              <p className="text-foreground mb-4 text-sm font-medium">{label}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="text-muted-foreground flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
