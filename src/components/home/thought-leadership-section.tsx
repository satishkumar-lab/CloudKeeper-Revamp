"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { CtaArrow } from "@/components/home/primary-button";
import {
  NEWSLETTER_BG,
  THOUGHT_LEADERSHIP_BG,
  THOUGHT_LEADERSHIP_GLOW_BOTTOM,
  THOUGHT_LEADERSHIP_GLOW_TOP,
  thoughtLeadershipAssets,
  thoughtLeadershipContent,
  thoughtLeadershipItems,
  thoughtLeadershipTagStyles,
  type ThoughtLeadershipItem,
  type ThoughtLeadershipTag,
} from "@/config/thought-leadership-section";
import { cn } from "@/lib/utils";

function BlogTagIcon() {
  const parts = thoughtLeadershipAssets.iconBlogParts;

  return (
    <span className="relative size-5 shrink-0 overflow-hidden" aria-hidden>
      <span className="absolute left-1/2 top-1/2 contents -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-[calc(50%+3.6px)] top-[calc(50%+0.12px)] h-[10.24px] w-[6.4px] -translate-x-1/2 -translate-y-1/2">
          <img src={parts[0]} alt="" className="block size-full max-w-none" decoding="async" />
        </span>
        <span className="absolute left-[calc(50%-2.8px)] top-[calc(50%+0.12px)] h-[10.24px] w-[6.4px] -translate-x-1/2 -translate-y-1/2">
          <img src={parts[1]} alt="" className="block size-full max-w-none" decoding="async" />
        </span>
        <span className="absolute left-[calc(50%+4.24px)] top-[calc(50%+3.96px)] h-px w-[5.12px] -translate-x-1/2 -translate-y-1/2">
          <img src={parts[2]} alt="" className="block size-full max-w-none" decoding="async" />
        </span>
        <span className="absolute left-[calc(50%-3.44px)] top-[calc(50%+3.96px)] h-px w-[5.12px] -translate-x-1/2 -translate-y-1/2">
          <img src={parts[3]} alt="" className="block size-full max-w-none" decoding="async" />
        </span>
        <span className="absolute left-[calc(50%+1.04px)] top-[calc(50%+4.6px)] size-[1.28px] -translate-x-1/2 -translate-y-1/2">
          <img src={parts[4]} alt="" className="block size-full max-w-none" decoding="async" />
        </span>
        <span className="absolute left-[calc(50%-0.24px)] top-[calc(50%+4.6px)] size-[1.28px] -translate-x-1/2 -translate-y-1/2">
          <img src={parts[5]} alt="" className="block size-full max-w-none" decoding="async" />
        </span>
      </span>
    </span>
  );
}

function TagIcon({ tag }: { tag: ThoughtLeadershipTag }) {
  const iconType = thoughtLeadershipTagStyles[tag].icon;

  if (iconType === "blog") return <BlogTagIcon />;

  const src =
    iconType === "whitepaper"
      ? thoughtLeadershipAssets.iconWhitepaper
      : thoughtLeadershipAssets.iconReports;

  return (
    <span
      className={cn(
        "relative shrink-0",
        iconType === "whitepaper" ? "size-[18px]" : "size-[18px]",
      )}
      aria-hidden
    >
      <img src={src} alt="" className="absolute inset-0 block size-full max-w-none" decoding="async" />
    </span>
  );
}

function ThoughtLeadershipTag({ tag }: { tag: ThoughtLeadershipTag }) {
  const { bg } = thoughtLeadershipTagStyles[tag];

  return (
    <span
      className="inline-flex h-7 shrink-0 items-center justify-center rounded-[30px] px-4"
      style={{ backgroundColor: bg }}
    >
      <span className="inline-flex items-center gap-1.5">
        <TagIcon tag={tag} />
        <span className="text-sm font-medium tracking-[-0.14px] text-black">{tag}</span>
      </span>
    </span>
  );
}

function CardArrow() {
  return (
    <span className="relative flex size-6 shrink-0 items-center justify-center" aria-hidden>
      <span className="relative size-5">
        <span className="absolute left-1/2 top-1/2 flex size-[19.12px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <span className="rotate-45">
            <img
              src={thoughtLeadershipAssets.cardArrow}
              alt=""
              className="block h-[13.525px] w-[13.514px] max-w-none"
              decoding="async"
            />
          </span>
        </span>
      </span>
    </span>
  );
}

function ThoughtLeadershipRow({
  item,
  bordered,
}: {
  item: ThoughtLeadershipItem;
  bordered?: boolean;
}) {
  return (
    <Link
      href={item.href ?? "#"}
      data-cursor="read"
      data-cursor-label="read here"
      className={cn(
        "group flex min-h-[214px] w-full items-center justify-between gap-6 px-[30px] py-[30px] transition-colors hover:bg-white/[0.03]",
        bordered && "border-b border-white/[0.22] pb-[31px]",
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-[30px]">
        <div className="flex flex-wrap items-center gap-6">
          <ThoughtLeadershipTag tag={item.tag} />
          <span className="text-sm leading-5 text-[#f5f5f5]/70">{item.date}</span>
        </div>
        <h3 className="text-[clamp(1.25rem,2.5vw,1.875rem)] font-light leading-[1.6] tracking-[-0.3px] text-white">
          {item.title}
        </h3>
      </div>
      <CardArrow />
    </Link>
  );
}

function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const { newsletter } = thoughtLeadershipContent;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full overflow-hidden rounded-[6px] border-4 border-[rgba(40,96,188,0.2)]">
      <div
        className="relative flex flex-col items-center gap-8 overflow-hidden px-6 py-6 lg:flex-row lg:gap-[30px] lg:pl-10 lg:pr-20 lg:py-6"
        style={{ background: NEWSLETTER_BG }}
      >
        <div
          className="pointer-events-none absolute left-[516px] top-[-122px] hidden h-[502px] w-[506px] items-center justify-center lg:flex"
          aria-hidden
        >
          <div className="rotate-[30deg] opacity-40">
            <img
              src={thoughtLeadershipAssets.newsletterPattern}
              alt=""
              className="h-[364px] w-[374px] max-w-none object-cover"
              decoding="async"
            />
          </div>
        </div>

        <div className="relative z-[1] flex-1 text-white">
          <p className="text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.64px]">
            {newsletter.title}
          </p>
          <p className="mt-[11px] text-base tracking-[-0.08px] text-white/60">
            {newsletter.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative z-[1] flex w-full max-w-[488px] flex-col sm:flex-row"
        >
          <label className="sr-only" htmlFor="thought-leadership-email">
            Business email
          </label>
          <input
            id="thought-leadership-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={`${newsletter.emailPlaceholder} *`}
            className="h-[54px] w-full rounded-t-[28px] border border-[#ddd] border-b border-l border-t bg-white px-6 text-base text-[#253746] outline-none placeholder:text-[#253746] sm:w-[290px] sm:rounded-bl-[28px] sm:rounded-tr-none sm:rounded-tl-[28px]"
          />
          <button
            type="submit"
            data-cursor-label="click here"
            className="group/cta inline-flex h-[54px] min-w-[180px] items-center justify-center gap-2.5 rounded-b-[100px] bg-[#17a5fb] px-6 py-2.5 text-base font-medium tracking-[-0.44px] text-white transition-colors hover:bg-[#0e95ea] sm:w-[198px] sm:rounded-bl-none sm:rounded-br-[100px] sm:rounded-tr-[100px]"
          >
            {newsletter.submitLabel}
            <CtaArrow />
          </button>
        </form>
      </div>
    </div>
  );
}

/** Figma 8251:20843 — card: thought leadership */
export function ThoughtLeadershipSection() {
  const { heading, subtitle, viewAllHref } = thoughtLeadershipContent;

  return (
    <section
      id="insights"
      className="relative isolate overflow-hidden bg-black font-sans"
      style={{ background: THOUGHT_LEADERSHIP_BG }}
      aria-labelledby="thought-leadership-heading"
    >
      <div
        className="pointer-events-none absolute left-[888px] top-[-140px] z-[2] size-[452px] rounded-full opacity-30 blur-[50px]"
        style={{ background: THOUGHT_LEADERSHIP_GLOW_TOP }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-30px] left-[-100px] z-[1] size-[452px] rounded-full opacity-20 blur-[50px]"
        style={{ background: THOUGHT_LEADERSHIP_GLOW_BOTTOM }}
        aria-hidden
      />

      <div className="relative z-[3] mx-auto w-full max-w-[1440px] px-6 pb-[60px] pt-16 lg:px-[100px] lg:pt-20">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-2.5 pl-0 lg:pl-[30px]">
            <div className="relative flex flex-col gap-4 lg:block">
              <h2
                id="thought-leadership-heading"
                className="text-[clamp(2rem,4vw,2.5rem)] font-normal leading-[1.5] text-white"
              >
                {heading}
              </h2>
              <Link
                href={viewAllHref}
                className="inline-flex w-fit items-center gap-1.5 text-base font-medium tracking-[-0.048px] text-[#17a5fb] transition-opacity hover:opacity-80 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
              >
                View All
                <img
                  src={thoughtLeadershipAssets.viewAllArrow}
                  alt=""
                  className="size-4"
                  decoding="async"
                  aria-hidden
                />
              </Link>
            </div>
            <p className="max-w-[1024px] text-lg leading-[1.5] text-[#d1d5dc]">{subtitle}</p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex w-full flex-col">
              {thoughtLeadershipItems.map((item, index) => (
                <ThoughtLeadershipRow
                  key={item.id}
                  item={item}
                  bordered={index < thoughtLeadershipItems.length - 1}
                />
              ))}
            </div>
            <NewsletterSubscribe />
          </div>
        </div>
      </div>
    </section>
  );
}
