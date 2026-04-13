import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { HomeSection4Showcase } from "@/components/home/HomeSection4Showcase";
import { HomeSection5Showcase } from "@/components/home/HomeSection5Showcase";
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
            title: "What shows up during incidents",
            description:
              "When incidents occur, teams face unclear ownership, undocumented logic, and hidden dependencies in integrations. Fixes depend on tribal knowledge rather than a shared understanding. Effective governance is key to resolving incidents swiftly and preventing outages.",
            iconSrc: "/section-2/icon-incident.svg",
          },
          {
            title: "What accumulates over time",
            description:
              "Point-to-point logic spans various platforms. Documentation can become outdated, and exceptions accumulate. Each modification raises the risk, even if everything seems fine. Without proper governance, complexity builds up unnoticed.",
            iconSrc: "/section-2/icon-cube.svg",
          },
          {
            title: "What becomes hard to explain",
            description:
              "The reasons for an integration's existence, ownership, and potential impacts of changes are often unclear. Governance equips leaders with the necessary language to justify their decisions, conduct audits, and secure investments.",
            iconSrc: "/section-2/icon-warning.svg",
          },
        ]}
      />

      <section
        id="section-3"
        className="border-t border-slate-200 bg-[#2750F5]"
        aria-labelledby="section-3-heading"
      >
        <Container className="py-12 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
            <FadeUp className="flex min-w-0 shrink-0 justify-center lg:w-[46%] lg:justify-start">
              <div className="relative w-full max-w-xl">
                <Image
                  src="/section-3/illustrations/img-grid-cube.png"
                  alt=""
                  width={809}
                  height={740}
                  className="h-auto w-full object-contain object-left"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.06} className="min-w-0 lg:flex-1">
              <h2 id="section-3-heading" className="text-3xl font-semibold tracking-tight text-white">
                The integration governance layer for ServiceNow
              </h2>
              <p className="mt-4 text-pretty text-base text-xl leading-relaxed text-white">
                ShareLogic enhances governance and visibility in ServiceNow, ensuring consistent tool usage and informed
                decision-making across sectors.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      <HomeSection4Showcase />
      <HomeSection5Showcase />

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
