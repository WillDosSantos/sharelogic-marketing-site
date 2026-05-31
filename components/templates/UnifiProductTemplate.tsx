"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GridStreakOverlay } from "@/components/effects/GridStreakOverlay";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import { HomeSectionFollow } from "@/components/home/HomeSectionFollow";
import type { ProductPageContent } from "@/lib/types/content";

const HERO_BG = "#2D5BFF";
/** Same base blue as the Easy API product hero (`HERO_NAVY` there). */
const HERO_NAVY = "#2750F5";

const CAPABILITY_CARDS = [
  {
    icon: "/unifi/icons/building-08.svg",
    title: "Governance embedded by design",
    description: "Complete message history, payload inspection, and transformation visibility — all directly within the ServiceNow record context.",
  },
  {
    icon: "/unifi/icons/arrow-up-right.svg",
    title: "Upgrade & Change Confidence",
    description: "Built-in regression testing ensures your eBonding integrations remain reliable as APIs, processes, and ServiceNow versions evolve.",
  },
  {
    icon: "/unifi/icons/shield-tick.svg",
    title: "Native ServiceNow Security",
    description: "Fully native to ServiceNow with no middleware or third-party infrastructure, keeping your data secure and compliant.",
  },
  {
    icon: "/unifi/icons/code-02.svg",
    title: "Pro-Code Power at Enterprise Scale",
    description: "Handles complex logic, advanced transformations, and edge cases common in large-scale eBonding environments.",
  },
  {
    icon: "/unifi/icons/dataflow-03.svg",
    title: "Multi-System Integration",
    description: "Seamlessly eBond one ServiceNow record with multiple external systems while maintaining full state integrity and traceability.",
  },
  {
    icon: "/unifi/icons/refresh-ccw-04.svg",
    title: "Long-Term Stability",
    description: "Purpose-built to keep your integrations governed, visible, and reliable as your ecosystem grows.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    id: "01",
    title: "Mission-Critical Operations",
    lines: [
      "Agents and operations staff can see integration activity, replay messages, and resolve issues without needing specialist help.",
      "Empowering the whole team, not just developers.",
    ],
  },
  {
    id: "02",
    title: "Reliable Messaging",
    lines: [
      "Robust asynchronous integration with real-time monitoring and delivery assurance, so your most important messages always arrive.",
      "Guaranteed delivery for business-critical flows.",
    ],
  },
  {
    id: "03",
    title: "Automated Testing",
    lines: [
      "Quickly create and run automated regression tests to ensure your integrations remain reliable after every update.",
      "Never fear an upgrade again.",
    ],
  },
  {
    id: "04",
    title: "Delightful Development",
    lines: [
      "Build integrations faster with Unifi Integration Designer. Even complex requirements like asynchronous messaging become simple.",
      "Low-code to pro-code flexibility.",
    ],
  },
];

// const SAFETY_CARDS = [
//   {
//     icon: "/unifi/icons/refresh-ccw-04.svg",
//     title: "Regression testing for integration behavior",
//     description: "Validate payload structure, mapping accuracy, and state transitions",
//   },
//   {
//     icon: "/unifi/icons/code-02.svg",
//     title: "API response handling and edge cases",
//     description: "Manage unexpected behaviors and system variations",
//   },
//   {
//     icon: "/unifi/icons/dataflow-03.svg",
//     title: "Data boundaries remain clear as integrations grow",
//     description: "Prevent unintended data exposure across systems",
//   },
//   {
//     icon: "/unifi/icons/arrow-up-right.svg",
//     title: "Explicit data boundaries at the integration level",
//     description: "Define what data is shared, how it transforms, and when",
//   },
//   {
//     icon: "/unifi/icons/building-08.svg",
//     title: "Audit trails for compliance and accountability",
//     description: "Complete message history stored in context",
//   },
//   {
//     icon: "/unifi/icons/shield-tick.svg",
//     title: "Transformations stay inspectable and traceable",
//     description: "Integration logic remains visible inside ServiceNow",
//   },
// ];

const MotionLink = motion.create(Link);

type Props = {
  product: ProductPageContent;
};

export function UnifiProductTemplate({ product }: Props) {
  return (
    <>
      {/* <section className="border-b border-white/10 text-white" style={{ backgroundColor: HERO_BG }}>
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
              Enterprise Integrations for ServiceNow, Done Right
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
          </div> */}
      <section
        className="relative overflow-hidden border-b border-white/10 text-white"
        style={{ backgroundColor: HERO_NAVY }}
      >
        <GridStreakOverlay />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(43,89,255,0.2),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] hidden h-[min(480px,65vh)] w-[min(380px,88vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.35] sm:block"
          aria-hidden
          style={{
            backgroundImage: "url('/easyapi/dot-grid.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-[min(420px,58vh)] w-[min(340px,92vw)] -translate-x-1/2 -translate-y-1/2 opacity-30 sm:hidden"
          aria-hidden
          style={{
            backgroundImage: "url('/easyapi/dot-grid.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />

        <Container className="relative z-10 pt-12 pb-[9em] sm:pt-16 lg:pt-20">
          <div className="relative mx-auto w-full max-w-4xl pb-6 sm:pb-8 lg:pb-10">
            <div className="relative z-10 flex flex-col items-center text-center">
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
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#2750F5] shadow-sm transition-colors hover:bg-white/95"
                >
                  Talk to a specialist
                </MotionLink>
              </FadeUp>
            </div>

            <div
              className="pointer-events-none absolute inset-0 -left-8 -right-8 z-0 overflow-visible sm:-left-12 sm:-right-12 lg:-left-20 lg:-right-20"
              aria-hidden
            >
              <Image
                src="/unifi/ring.svg"
                alt=""
                width={348}
                height={338}
                className="absolute right-0 top-[6%] h-auto w-[min(52vw,220px)] max-w-none sm:top-[4%] sm:w-[min(48vw,260px)] lg:top-[2%] lg:w-[min(28vw,300px)] xl:w-[320px]"
              />
              <Image
                src="/unifi/ring.svg"
                alt=""
                width={348}
                height={338}
                className="absolute left-0 top-[40%] h-auto w-[min(48vw,200px)] max-w-none sm:top-[38%] sm:w-[min(42vw,240px)] lg:top-[36%] lg:w-[min(24vw,280px)] xl:w-[300px]"
              />
            </div>
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
                  className={cn(sectionHeadingH2, "mt-3 text-slate-900")}
                >
                  Why most integrations become an operational risk
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600">
                  Integrations rarely blow up on day one. They become liabilities
                  over time. An API changes. An upgrade shifts behaviour.
                  A process evolves.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600">
                  Everything still technically works… but you&apos;ve lost 
                  control. Technical debt piles up. Risk compounds.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600">
                Most ServiceNow integrations focus on short-term delivery.
                Very few are built for long-term resilience.
                </p>
              </FadeUp>
              <FadeUp delay={0.22}>
                <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600">
                Enterprise integration isn&apos;t just a connectivity problem.
                It&apos;s an operational discipline.
                </p>
              </FadeUp>
              <FadeUp delay={0.26}>
                <p className="mt-6 text-base font-bold leading-relaxed text-slate-600">
                This is why Unifi exists.
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
                className={cn(sectionHeadingH2, "mt-3 text-balance")}
              >
                Take the risk out of eBonding with Unifi
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
              Unifi delivers the control, visibility, and stability needed for
              robust enterprise integrations in ServiceNow
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

      <section id="unifi-architecture" className="border-t border-slate-200 bg-white" aria-labelledby="unifi-architecture-heading">
        <div
          className="border-b border-slate-100"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15, 23, 42, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.045) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        >
          <Container className="py-14 sm:py-16 lg:py-20">
            {/* <div className="mx-auto max-w-4xl text-center">
              <FadeUp>
                <p className="text-xs font-bold uppercase tracking-wide text-[#2750F5]">Architecture</p>
              </FadeUp>
              <FadeUp delay={0.06}>
                <h2
                  id="unifi-architecture-heading"
                  className={cn(sectionHeadingH2, "mt-3 text-balance text-slate-900")}
                >
                  Built for eBonding
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
                While Unifi can handle many integration types, eBonding is where it truly excels.
                </p>
              </FadeUp>
            </div> */}

            <div className="mt-12 grid items-center gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">

                <FadeUp>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#2750F5]">Architecture</p>
                </FadeUp>
                <FadeUp delay={0.01}>
                  <h2
                    id="unifi-reality-heading"
                    className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
                  >
                    Designed for eBonding
                  </h2>
                </FadeUp>
                <FadeUp delay={0.04}>
                  <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600">
                  While Unifi can handle many integration types, eBonding is where it truly excels.
                  </p>
                </FadeUp>
                <FadeUp delay={0.08}>
                  <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600">
                    eBonding is one of the toughest integration challenges. 
                    It requires bi-directional sync, complex state management,
                    strict SLA alignment, and long-term reliability.
                  </p>
                </FadeUp>
                <FadeUp delay={0.12}>
                  <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600">
                    Most platforms struggle here. This is what Unifi was designed for.
                  </p>
                </FadeUp>
                <FadeUp delay={0.16}>
                  <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600 font-semibold">
                    Unifi makes it easy to handle your most difficult, business-critical integrations with
                    confidence and control.
                  </p>
                </FadeUp>
              </div>

              <FadeUp delay={0.12} className="lg:col-span-7">
                <div className="relative mx-auto w-full max-w-3xl">
                  <Image
                    src="/unifi/pattern-section/cubes.svg"
                    alt=""
                    width={163}
                    height={203}
                    className="pointer-events-none absolute -left-8 -top-10 z-[1] h-auto w-[clamp(110px,20vw,165px)]"
                  />
                  <Image
                    src="/unifi/pattern-section/cube.svg"
                    alt=""
                    width={204}
                    height={262}
                    className="pointer-events-none absolute -right-8 -bottom-8 z-[1] h-auto w-[clamp(130px,24vw,200px)]"
                  />
                  <Image
                    src="/unifi/pattern-section/UI.svg"
                    alt="Architecture flow between systems for eBonding"
                    width={566}
                    height={349}
                    className="relative z-[2] h-auto w-full"
                  />
                </div>
              </FadeUp>
            </div>
          </Container>
        </div>
      </section>

      {/* <section className="border-t border-[#F3B93A] bg-[#FDC443] text-slate-900" aria-labelledby="unifi-framework-heading">
        <Container className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
          <div className="pointer-events-none absolute inset-y-0 top-[80%] right-[10%] hidden w-[min(60vw,700px)] sm:block" aria-hidden>
            <Image
              src="/unifi/circles.svg"
              alt=""
              width={697}
              height={697}
              className="absolute right-0 top-[30%] h-auto w-full -translate-y-1/2"
            />
          </div>

          <FadeUp className="relative mx-auto z-[1] max-w-3xl">
            <h2
              id="unifi-framework-heading"
              className={cn(sectionHeadingH2, "text-balance text-slate-900")}
            >
              Trusted by leading MSPs and enterprises globally.
              Unifi delivers proven infrastructure and reliability for ServiceNow integrations.
            </h2>
          </FadeUp>
        </Container>
      </section> */}

      <section id="unifi-how-it-works" className="border-t border-slate-200 bg-white" aria-labelledby="unifi-how-it-works-heading">
        <Container className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
          <div className="relative z-[1] grid gap-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <FadeUp className="lg:col-span-4">
                <h2 id="unifi-how-it-works-heading" className={cn(sectionHeadingH2, "text-balance text-slate-900")}>
                  How Unifi Works
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Unifi does not replace how integrations are built. It introduces a governed control layer that
                  standardizes how they operate across every ServiceNow environment.
                </p>

                <div className="space-y-4">
                  {HOW_IT_WORKS_STEPS.slice(0, 2).map((step, index) => (
                    <article key={step.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <FadeUp delay={0.08 + index * 0.06}>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                          {/*step.id*/} {step.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">{step.lines[0]}</p>
                        <p className="mt-4 font-bold leading-relaxed tracking-tight text-slate-700">{step.lines[1]}</p>
                      </FadeUp>
                    </article>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.08} className="lg:col-span-8">
                <div className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-slate-50 shadow-sm">
                  <Image
                    src="/unifi/unifi-ui.png"
                    alt="Unifi dashboard showing monitored integration flow and diagnostics"
                    width={716}
                    height={410}
                    className="h-auto w-full object-cover object-top"
                  />
                </div>
              </FadeUp>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <FadeUp delay={0.12} className="lg:col-span-8">
                <div className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-slate-50 shadow-sm">
                  <Image
                    src="/unifi/unifi-ui.png"
                    alt="Unifi dashboard showing integration runtime details and state updates"
                    width={716}
                    height={410}
                    className="h-auto w-full object-cover object-center"
                  />
                </div>
              </FadeUp>

              <div className="lg:col-span-4">
                <div className="space-y-4">
                  {HOW_IT_WORKS_STEPS.slice(2).map((step, index) => (
                    <article key={step.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <FadeUp delay={0.14 + index * 0.06}>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                          {/*step.id*/} {step.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">{step.lines[0]}</p>
                        <p className="mt-4 font-bold leading-relaxed tracking-tight text-slate-700">{step.lines[1]}</p>
                      </FadeUp>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <FadeUp delay={0.16}>
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex items-center justify-center rounded-full bg-[#2750F5] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2148DD]"
              >
                Talk with a specialist
              </MotionLink>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section
        id="unifi-governance-clarity"
        className="border-t border-white/10 text-white"
        style={{
          backgroundColor: HERO_BG,
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-labelledby="unifi-governance-clarity-heading"
      >
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="text-xs font-bold uppercase tracking-wide text-white/80">Governance</p>
              </FadeUp>
              <FadeUp delay={0.01}>
                <h2
                  id="unifi-governance-clarity-heading"
                  className={cn(sectionHeadingH2, "mt-3 text-balance")}
                >
                  Operational clarity embedded in every record
                </h2>
              </FadeUp>
              <FadeUp delay={0.04}>
                <p className="mt-6 text-pretty text-base leading-relaxed text-white/90">
                  Most tools give you logs. Unifi gives you real operational clarity.
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <p className="mt-6 text-pretty text-base leading-relaxed text-white/90">
                From any integrated record, instantly see what was sent, received, how it was transformed, and where failures occurred — without switching systems or reconciling logs.
                </p>
              </FadeUp>
              <FadeUp delay={0.12}>
                <p className="mt-6 text-pretty text-base leading-relaxed text-white/90">
                  Because Unifi runs natively inside ServiceNow, it automatically inherits the platform&apos;s security model, audit controls, and access governance. No extra layers. No added risk.
                </p>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p className="mt-6 text-pretty text-base leading-relaxed text-white/90">
                  This is why so many organisations eventually make Unifi their internal integration standard.
                </p>
              </FadeUp>
              <FadeUp delay={0.20}>
                <p className="mt-6 text-pretty text-base font-bold leading-relaxed text-white/90">
                  Governance isn&apos;t bolted on later. It&apos;s embedded from day one.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.08} className="lg:col-span-7">
              <div className="relative mx-auto w-full max-w-3xl">
                <Image
                  src="/unifi/illustrations/img-platform.png"
                  alt="Platform illustration representing governed integration visibility"
                  width={686}
                  height={617}
                  className="h-auto w-full object-contain"
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* <section id="unifi-safety" className="border-t border-slate-200 bg-white" aria-labelledby="unifi-safety-heading">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-wide text-[#2750F5]">Safety</p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 id="unifi-safety-heading" className={cn(sectionHeadingH2, "mt-3 text-balance text-slate-900")}>
                Safe change and controlled exchange
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
                Upgrades introduce uncertainty. Process change introduces drift.
              </p>
            </FadeUp>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {SAFETY_CARDS.map((card, index) => (
              <FadeUp key={card.title} delay={0.12 + index * 0.05}>
                <article className="h-full rounded-3xl bg-[#F8FAFF] p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2750F5]">
                    <Image src={card.icon} alt="" width={22} height={22} className="h-5.5 w-5.5 brightness-0 invert" />
                  </div>
                  <h3 className="mt-6 text-balance text-lg font-semibold tracking-tight text-slate-900">{card.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">{card.description}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section> */}

      <section
        id="unifi-right-fit"
        className="border-t border-slate-200 bg-white"
        aria-labelledby="unifi-right-fit-heading"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.22) 1px, transparent 1.4px), radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.14) 1px, transparent 1.4px)",
          backgroundSize: "10px 10px, 10px 10px",
          backgroundPosition: "70% 0, 70% 0",
        }}
      >
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-wide text-[#2750F5]">The right fit</p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 id="unifi-right-fit-heading" className={cn(sectionHeadingH2, "mt-3 text-balance text-slate-900")}>
                Where Unifi is the right choice
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
              Unifi is designed for organisations that treat integrations as truly business-critical and long-lived.
              </p>
            </FadeUp>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <FadeUp delay={0.08}>
                {/* <p className="text-sm font-bold text-[#2750F5]">Enterprise</p> */}
                {/* <h3 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  Built for structure and control
                </h3> */}
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Unifi shines in environments with customer-facing or revenue-impacting workflows, multiple external systems and vendors, strict governance and audit requirements, and growing integration portfolios where upgrades and changes carry real operational risk.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Unifi is built for teams that need structure and control as complexity increases.
                </p>
              </FadeUp>
              <FadeUp delay={0.08} >
                {/* <h3 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Proven in production
                </h3> */}
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                For over a decade, Unifi has powered large, complex integration estates for enterprises and MSPs. Mature, stable, and continuously refined in real-world conditions, it has become a trusted integration backbone inside the ServiceNow ecosystem globally.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.12} className="lg:col-span-7">
              <div className="overflow-hidden rounded-[1.15rem] border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/unifi/ui-example.png"
                  alt="Unifi integration designer interface example"
                  width={1234}
                  height={700}
                  className="h-auto w-full object-cover object-center"
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <HomeSectionFollow />

      <CtaBand
        headline={product.cta.headline}
        body={product.cta.body}
        primaryLabel={product.cta.primaryLabel}
        primaryHref={product.cta.primaryHref}
      />
    </>
  );
}
