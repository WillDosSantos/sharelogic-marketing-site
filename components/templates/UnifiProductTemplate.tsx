"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { ContentCard } from "@/components/ui/ContentCard";
import type { ProductPageContent } from "@/lib/types/content";

const HERO_BG = "#2D5BFF";

const BULLETS = [
  { lead: "Standardize", rest: " how integrations are built" },
  { lead: "Enforce policy", rest: " without slowing delivery" },
  { lead: "Gain visibility", rest: " across every ServiceNow environment" },
];

const REALITY_BULLETS = [
  "Each partner builds integrations differently",
  "Governance becomes reactive instead of proactive",
  "Policy enforcement slows delivery",
  "Visibility disappears across environments",
  "Small changes trigger cascading failures",
];

const CAPABILITY_CARDS = [
  {
    icon: "/unifi/icons/building-08.svg",
    title: "Governance embedded by design",
    description: "Message history and payload inspection directly within record context",
  },
  {
    icon: "/unifi/icons/shield-tick.svg",
    title: "Native security alignment",
    description: "Runs entirely inside ServiceNow with no external processing layer",
  },
  {
    icon: "/unifi/icons/dataflow-03.svg",
    title: "Not a connector toolkit.",
    description: "It is a complete integration framework for long-term stability.",
  },
  {
    icon: "/unifi/icons/arrow-up-right.svg",
    title: "Upgrade and change confidence",
    description:
      "Built-in regression testing verifies behavior as APIs, processes and platform versions evolve.",
  },
  {
    icon: "/unifi/icons/code-02.svg",
    title: "Pro-code control at scale",
    description: "Engineered for complex logic and advanced transformations",
  },
  {
    icon: "/unifi/icons/refresh-ccw-04.svg",
    title: "Multi-system synchronization",
    description:
      "One ServiceNow record can integrate with one or many external systems while maintaining traceability.",
  },
];

type Props = {
  product: ProductPageContent;
};

export function UnifiProductTemplate({ product }: Props) {
  const MotionLink = motion.create(Link);

  return (
    <>
      <section className="border-b border-white/10 text-white" style={{ backgroundColor: HERO_BG }}>
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <FadeUp className="relative mb-6 inline-flex items-center justify-center">
              <Image
                src="/unifi/unifi-logo.png"
                alt=""
                width={78}
                height={40}
                className="h-auto w-full object-contain"
              />
            </FadeUp>
            <FadeUp delay={0.08} className="max-w-4xl">
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                The Unified Layer for Every ServiceNow Integration
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#2D5BFF] shadow-sm transition-colors hover:bg-white/95"
              >
                Talk to a specialist
              </MotionLink>
            </FadeUp>
          </div>

          <div className="relative mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-6 xl:gap-8">
            <FadeUp
              delay={0.1}
              className="relative order-2 flex w-full flex-col items-center gap-5 text-center lg:order-none lg:col-span-2 lg:items-start lg:text-left"
            >
              <div className="relative w-full max-w-[200px] lg:max-w-none">
                <Image
                  src="/unifi/arrows.svg"
                  alt=""
                  width={270}
                  height={267}
                  className="absolute left-[80px] top-[-100px] z-10 h-auto max-w-[200px] object-contain"
                />
              </div>
              <p className="text-sm font-medium leading-relaxed text-white/90 lg:text-[0.9375rem]">
                Seamless governance framework for ServiceNow integrations
              </p>
            </FadeUp>

            <FadeUp delay={0.06} className="order-1 w-full lg:order-none lg:col-span-8">
              <div className="overflow-hidden">
                <Image
                  src="/unifi/unifi-ui.png"
                  alt="Unifi product interface showing integration diagnostics and settings"
                  width={716}
                  height={410}
                  className="relative z-0 h-auto w-full rounded-[0.875rem] object-cover object-top"
                  priority
                />
              </div>
            </FadeUp>

            <ul className="order-3 flex w-full flex-col gap-5 lg:order-none lg:col-span-2">
              {BULLETS.map((item, index) => (
                <li key={item.lead}>
                  <FadeUp delay={0.12 + index * 0.06} className="flex gap-3 text-left">
                    <Image
                      src="/unifi/icon-check.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="mt-0.5 h-6 w-6 shrink-0"
                    />
                    <p className="text-sm leading-relaxed text-white/95">
                      <span className="font-semibold text-white">{item.lead}</span>
                      {item.rest}
                    </p>
                  </FadeUp>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section
        id="unifi-reality"
        className="border-t border-slate-200 bg-white"
        aria-labelledby="unifi-reality-heading"
      >
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="min-w-0">
              <FadeUp>
                <p className="text-xs font-bold uppercase tracking-wide text-[#2750F5]">Reality</p>
              </FadeUp>
              <FadeUp delay={0.06}>
                <h2
                  id="unifi-reality-heading"
                  className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
                >
                  Why most integrations become operational risk
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600">
                  Integrations rarely fail at launch. They fail quietly over time as APIs change, upgrades shift behavior, and
                  processes evolve. Control erodes. Visibility fades. Complexity compounds.
                </p>
              </FadeUp>
              <FadeUp delay={0.12}>
                <p className="mt-5 text-base leading-relaxed text-slate-600">As organizations grow, so does integration complexity:</p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600 marker:text-slate-400">
                  {REALITY_BULLETS.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p className="mt-6 text-base font-medium leading-relaxed text-slate-600">
                  Without a unified framework, integration becomes technical debt.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.08} className="flex min-w-0 justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-[2rem] bg-[#2750F5] p-6 shadow-[0_24px_48px_-20px_rgba(39,80,245,0.45)] sm:max-w-lg sm:p-8 lg:max-w-none lg:p-10">
                <Image
                  src="/unifi/unifi-image-2.svg"
                  alt=""
                  width={488}
                  height={554}
                  className="h-auto w-full object-contain"
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section
        id="unifi-capabilities"
        className="border-t border-white/10 text-white"
        style={{ backgroundColor: HERO_BG }}
        aria-labelledby="unifi-capabilities-heading"
      >
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-wide text-white/80">Capabilities</p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2
                id="unifi-capabilities-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                What Unifi enables
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
                Structural control across complex integration environments
              </p>
            </FadeUp>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITY_CARDS.map((card, index) => (
              <FadeUp key={card.title} delay={0.14 + index * 0.05}>
                <article className="h-full rounded-3xl bg-white p-6 text-left text-slate-900 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2750F5]">
                    <Image src={card.icon} alt="" width={20} height={20} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <SectionIntro title="Overview" description={product.intro} />

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
              <h2 className="text-lg font-semibold text-slate-900">{product.problem.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.problem.body}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{product.solution.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.solution.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Supporting capabilities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {product.supportingCards.map((c) => (
              <ContentCard key={c.title} title={c.title} description={c.description} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline={product.cta.headline}
        body={product.cta.body}
        primaryLabel={product.cta.primaryLabel}
        primaryHref={product.cta.primaryHref}
      />
    </>
  );
}
