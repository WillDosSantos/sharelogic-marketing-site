"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { ContentCard } from "@/components/ui/ContentCard";
import type { ProductPageContent } from "@/lib/types/content";

const HERO_BG = "#2D5BFF";

type Props = {
  product: ProductPageContent;
};

export function EasyApiProductTemplate({ product }: Props) {
  const MotionLink = motion.create(Link);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 text-white" style={{ backgroundColor: HERO_BG }}>
        <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <FadeUp className="mb-6 inline-flex">
              <Image
                src="/easyapi/easyapi.svg"
                alt="Easy API logo"
                width={152}
                height={32}
                className="h-24 w-auto object-contain"
                priority
              />
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
                The secure replacement for ServiceNow Table APIs
              </h1>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-white/90 sm:text-[1.45rem]">
                ServiceNow Table APIs are available by default, allowing ungoverned and often undesired integrations into your
                platform. Easy API puts you back in control.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#2D5BFF] shadow-sm transition-colors hover:bg-white/95"
              >
                Start Free Trial
              </MotionLink>
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See How It Works
              </MotionLink>
            </FadeUp>
          </div>
        </Container>

        <div className="pointer-events-none absolute left-[4%] top-[42%] hidden md:block">
          <div className="h-12 w-12 rotate-45 border border-white/70 bg-white/10" />
          <div className="mt-4 ml-8 h-7 w-7 rotate-45 border border-white/70 bg-white/10" />
        </div>
        <div className="pointer-events-none absolute right-[6%] top-[34%] hidden md:block">
          <div className="h-14 w-14 rotate-45 border border-white/70 bg-white/10" />
          <div className="mt-5 ml-10 h-8 w-8 rotate-45 border border-white/70 bg-white/10" />
        </div>
      </section>

      <SectionIntro title="Overview" description={product.intro} />

      <FeatureGrid items={product.features} />

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
