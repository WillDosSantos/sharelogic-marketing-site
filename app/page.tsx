import Link from "next/link";
import { buildMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { StatsRow } from "@/components/sections/StatsRow";
import { HomeHeroArtboard } from "@/components/home/HomeHeroImages";
import { FadeUp } from "@/components/motion/FadeUp";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { LinkButton } from "@/components/ui/LinkButton";
import { siteConfig } from "@/lib/data/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Enterprise integration & workflows`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        title="Smarter ServiceNow Integrations"
        subtitle="Governance, visibility, and control for ServiceNow integrations that matter"
        visual={<HomeHeroArtboard />}
      >
        <LinkButton href="/contact" hero>
          Talk to an Integration Specialist
        </LinkButton>
        <LinkButton href="/products/easy-api" variant="secondary" hero>
          Watch Overview
        </LinkButton>
      </Hero>

      <SectionIntro
        title="Integration failures aren’t technical problems. They’re governance problems."
        description="This isn’t about poor engineering. It’s about how integrations are created and maintained under  real-world pressure. Governance defines whether integrations scale — or quietly decay."
      />

      <FeatureGrid
        columns={3}
        items={[
          {
            title: "Governance by design",
            description:
              "Embed policy checks, approvals, and audit trails into integration lifecycles—not as a late-stage scramble.",
          },
          {
            title: "Operational visibility",
            description:
              "Trace workflows across systems with signals operators can act on, not logs they have to decode.",
          },
          {
            title: "Scalable patterns",
            description:
              "Standardize how teams ship integrations so quality improves as adoption grows—not the other way around.",
          },
        ]}
      />

      <StatsRow
        stats={[
          { label: "Average reduction in manual reconciliation (sample)", value: "37%", hint: "Placeholder metric for demo content." },
          { label: "Faster incident correlation across toolchains (sample)", value: "2.1×", hint: "Placeholder metric for demo content." },
          { label: "Programs delivered with executive-ready reporting", value: "120+", hint: "Placeholder metric for demo content." },
        ]}
      />

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <FadeUp className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What leaders ask for—and what we optimize for</h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">
              ShareLogic is intentionally boring in the best way: clear ownership, predictable change, and measurable reliability. That’s what makes it possible to modernize without turning weekends into war rooms.
            </p>
          </FadeUp>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <FadeUp delay={0.08}>
              <TestimonialCard
                quote="We stopped treating integrations like side projects. The program finally has the same rigor we expect from customer-facing products."
                name="Placeholder CIO"
                title="Global Financial Services"
              />
            </FadeUp>
            <FadeUp delay={0.14}>
              <TestimonialCard
                quote="The biggest win was visibility—our operators could see where work was stuck before it became customer impact."
                name="Placeholder VP Operations"
                title="Healthcare Network"
              />
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <Container className="py-12 sm:py-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <FadeUp className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Start with a focused footprint</h2>
              <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600">
                Pick a high-impact workflow, prove reliability, then expand patterns across business units. ShareLogic is modular so your roadmap can stay pragmatic.
              </p>
            </FadeUp>
            <FadeUp delay={0.1} className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/news"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white"
              >
                Read the latest news
              </Link>
              <LinkButton href="/contact">Book a consultation</LinkButton>
            </FadeUp>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Ready for an integration architecture review?"
        body="ShareLogic can help you prioritize workflows, define governance guardrails, and build a roadmap that matches your risk profile."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Explore products"
        secondaryHref="/products/product-comparison"
      />
    </>
  );
}
