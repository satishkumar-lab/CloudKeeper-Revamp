"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { CtaArrow } from "@/components/home/primary-button";
import {
  FOOTER_NEWSLETTER_BG,
  footerAssets,
  footerByPrograms,
  footerByServices,
  footerByUseCase,
  footerCapabilities,
  footerCol1Top,
  footerCompany,
  footerContent,
  footerIndustries,
  footerInsights,
  footerLegalLinks,
  footerSocialLinks,
  type FooterGroup,
} from "@/config/footer-section";
import { cn } from "@/lib/utils";

export type SiteFooterProps = {
  className?: string;
};

const footerLinkClassName = "footer-nav-link inline-flex min-h-6 items-center text-sm font-medium leading-5 tracking-[-0.2px]";

function FooterLinkItem({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className={footerLinkClassName}>
      {label}
    </Link>
  );
}

function FooterSocialIcon({
  href,
  label,
  icon,
  medium,
}: {
  href: string;
  label: string;
  icon: string;
  medium?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex size-[25px] shrink-0 items-center justify-center no-underline hover:no-underline focus-visible:outline-none"
    >
      {medium ? (
        <span className="relative flex size-[25px] items-center justify-center overflow-hidden">
          <img
            src={icon}
            alt=""
            width={21}
            height={21}
            className="size-[21px] object-contain"
            decoding="async"
          />
        </span>
      ) : (
        <img
          src={icon}
          alt=""
          width={25}
          height={25}
          className="size-[25px] object-contain"
          decoding="async"
        />
      )}
    </Link>
  );
}

function FooterLinkGroup({ group }: { group: FooterGroup }) {
  if (group.links.length === 0) {
    return (
      <div className="min-h-8">
        <p
          className={`text-sm font-semibold capitalize leading-[21px] tracking-[-0.3px] ${
            group.titleMuted ? "text-[#828282]" : "text-[#111b1a]"
          }`}
        >
          {group.title}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <p
        className={`text-sm font-semibold capitalize leading-[21px] tracking-[-0.3px] ${
          group.titleMuted ? "text-[#828282]" : "text-[#111b1a]"
        }`}
      >
        {group.title}
      </p>
      <ul className="flex flex-col gap-[5px]">
        {group.links.map((link) => (
          <li key={link.label}>
            <FooterLinkItem {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterAwsBadge() {
  return (
    <div className="relative size-[38px] shrink-0">
      <img
        src={footerAssets.aws.bg}
        alt=""
        className="absolute inset-0 size-full"
        decoding="async"
        aria-hidden
      />
      <img
        src={footerAssets.aws.border}
        alt=""
        className="absolute inset-0 size-full"
        decoding="async"
        aria-hidden
      />
      <img
        src={footerAssets.aws.logo}
        alt="AWS Partner"
        width={29}
        height={24}
        className="absolute left-[4.83px] top-[5.86px] h-[23.655px] w-[28.676px]"
        decoding="async"
      />
    </div>
  );
}

function FooterBadges() {
  return (
    <div className="relative mt-auto h-[100px] w-[253px] max-w-full">
      <div className="absolute left-0 top-0 flex items-center gap-[14px]">
        <FooterAwsBadge />
        <img
          src={footerAssets.gcpPartner}
          alt="Google Cloud Partner"
          width={113}
          height={27}
          className="h-[27.3px] w-[113px] object-contain"
          decoding="async"
        />
      </div>
      <img
        src={footerAssets.gpwt}
        alt="Great Place To Work Certified"
        width={55}
        height={94}
        className="absolute left-[198px] top-[4.72px] h-[93.67px] w-[55px] object-contain"
        decoding="async"
      />
      <div className="absolute left-[4.5px] top-[62px] flex items-center gap-[25px]">
        <img
          src={footerAssets.iso27001}
          alt="ISO 27001"
          width={38}
          height={38}
          className="size-[38px] object-contain"
          decoding="async"
        />
        <img
          src={footerAssets.aicpaSoc2}
          alt="AICPA SOC 2"
          width={38}
          height={38}
          className="size-[38px] object-contain"
          decoding="async"
        />
      </div>
    </div>
  );
}

function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const { newsletter } = footerContent;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl px-6 py-4 lg:pl-[110px] lg:pr-20"
      style={{ background: FOOTER_NEWSLETTER_BG }}
    >
      <div
        className="pointer-events-none absolute left-[-97px] top-[-80px] flex h-[264px] w-[237px] items-center justify-center"
        aria-hidden
      >
        <div className="rotate-[109deg] opacity-30">
          <img
            src={footerAssets.newsletterShape}
            alt=""
            className="h-[175px] w-[218px] object-cover"
            decoding="async"
          />
        </div>
      </div>

      <div className="relative z-[1] flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="text-black">
          <p className="text-lg leading-[1.3] tracking-[-0.3px]">{newsletter.line1}</p>
          <p className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] tracking-[-0.3px]">
            {newsletter.line2}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative z-[1] flex w-full max-w-[488px] flex-col sm:flex-row"
        >
          <label className="sr-only" htmlFor="footer-newsletter-email">
            Business email
          </label>
          <input
            id="footer-newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={`${newsletter.emailPlaceholder} *`}
            className="h-[54px] w-full rounded-t-[28px] border border-[#ddd] border-b border-l border-t bg-white px-6 text-base text-[#253746] outline-none placeholder:text-[#253746] sm:w-[290px] sm:rounded-bl-[28px] sm:rounded-tr-none sm:rounded-tl-[28px]"
          />
          <button
            type="submit"
            className="group/cta inline-flex h-[54px] min-w-[180px] items-center justify-center gap-2.5 rounded-b-[100px] bg-[#17a5fb] px-6 py-2.5 text-base font-medium tracking-[-0.44px] text-white shadow-[0px_8px_16px_rgba(67,152,215,0.4)] transition-colors hover:bg-[#0e95ea] sm:w-[198px] sm:rounded-bl-none sm:rounded-br-[100px] sm:rounded-tr-[100px]"
          >
            {newsletter.submitLabel}
            <CtaArrow />
          </button>
        </form>
      </div>
    </div>
  );
}

/** Figma 8306:12854 — Footer desktop */
export function SiteFooter({ className }: SiteFooterProps = {}) {
  const { copyright } = footerContent;

  return (
    <footer className={cn("site-footer bg-white font-sans", className)}>
      <div className="mx-auto w-full max-w-[1440px] border-t border-[#e5e5e5] px-6 pb-0 pt-[50px] lg:px-[60px]">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-x-5 gap-y-[30px] sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-5">
              {footerCol1Top.map((group) => (
                <FooterLinkGroup key={group.title} group={group} />
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <FooterLinkGroup group={footerCapabilities} />
              <FooterLinkGroup group={footerByUseCase} />
            </div>

            <div className="flex flex-col gap-3">
              <div className="min-h-8" aria-hidden />
              <FooterLinkGroup group={footerByServices} />
            </div>

            <div className="flex flex-col gap-3">
              <div className="min-h-8" aria-hidden />
              <FooterLinkGroup group={footerByPrograms} />
            </div>

            <FooterLinkGroup group={footerIndustries} />
            <FooterLinkGroup group={footerInsights} />
            <FooterLinkGroup group={footerCompany} />

            <div className="flex flex-col gap-[30px]">
              <div className="flex h-[64px] flex-col gap-[15px]">
                <p className="text-sm font-semibold capitalize leading-[21px] tracking-[-0.3px] text-[#111b1a]">
                  Follow us
                </p>
                <div className="flex items-center gap-[28px]">
                  {footerSocialLinks.map((social) => (
                    <FooterSocialIcon
                      key={social.id}
                      href={social.href}
                      label={social.label}
                      icon={social.icon}
                      medium={social.id === "medium"}
                    />
                  ))}
                </div>
              </div>
              <FooterBadges />
            </div>
          </div>

          <FooterNewsletter />

          <div className="relative flex min-h-[70px] flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-5">
              <Link
                href="/"
                aria-label="CloudKeeper home"
                className="inline-flex shrink-0 no-underline hover:no-underline"
              >
                <img
                  src={footerAssets.logo}
                  alt="CloudKeeper"
                  width={108}
                  height={24}
                  className="h-6 w-[108px] object-contain object-left"
                  decoding="async"
                />
              </Link>
              <div className="flex items-center gap-1">
                <img
                  src={footerAssets.copyright}
                  alt=""
                  width={12}
                  height={12}
                  className="size-3"
                  decoding="async"
                  aria-hidden
                />
                <p className="text-[13px] leading-normal text-black">{copyright}</p>
              </div>
            </div>

            <div className="flex items-center gap-[30px]">
              {footerLegalLinks.map((link) => (
                <FooterLinkItem key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
