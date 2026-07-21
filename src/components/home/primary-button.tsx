import Image from "next/image";
import Link from "next/link";

import { homeAssets } from "@/config/home-assets";
import { cn } from "@/lib/utils";

export type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  /** Fixed height; width follows label length */
  size?: "md" | "sm";
  showArrow?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function CtaArrow({ className }: { className?: string }) {
  return (
    <span className={cn("relative size-4 shrink-0", className)}>
      <span className="absolute inset-[12%] flex items-center justify-center">
        <span className="rotate-45 transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 group-hover/cta:rotate-0">
          <Image
            src={homeAssets.arrowCta}
            alt=""
            width={16}
            height={16}
            className="size-4 object-contain"
            aria-hidden
          />
        </span>
      </span>
    </span>
  );
}

const sizeStyles = {
  md: "h-[50px] px-[28px] text-base rounded-[94.838px]",
  sm: "h-[38px] px-5 text-sm rounded-full",
} as const;

export function CtaButton({
  children,
  href = "#contact",
  className,
  size = "md",
  showArrow = true,
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
}: CtaButtonProps) {
  const classes = cn(
    "group/cta inline-flex w-fit max-w-full shrink-0 items-center justify-center gap-[9.484px]",
    "border-0 font-sans text-white shadow-none outline-none",
    "bg-[#17a5fb] transition-colors duration-200 hover:bg-[#0e95ea]",
    "focus-visible:ring-2 focus-visible:ring-[#17a5fb]/40 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    sizeStyles[size],
    fullWidth && "w-full",
    className,
  );

  const label = (
    <span className="whitespace-nowrap font-medium leading-[26.555px] tracking-[-0.4168px]">
      {children}
    </span>
  );

  const content = (
    <>
      {label}
      {showArrow ? <CtaArrow /> : null}
    </>
  );

  if (href && !onClick && type === "button") {
    return (
      <Link href={href} className={classes} data-cursor-label="click here">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      data-cursor-label="click here"
    >
      {content}
    </button>
  );
}

/** @deprecated Use CtaButton — kept for existing imports */
export const PrimaryButton = CtaButton;
