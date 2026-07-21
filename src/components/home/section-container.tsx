import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
};

export function SectionContainer({
  children,
  className,
  id,
  as: Tag = "section",
}: SectionContainerProps) {
  return (
    <Tag id={id} className={cn("w-full", className)}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">{children}</div>
    </Tag>
  );
}
