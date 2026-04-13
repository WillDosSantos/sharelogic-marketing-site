import { CtaBand } from "@/components/sections/CtaBand";
import { FadeUp } from "@/components/motion/FadeUp";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ContentCard } from "@/components/ui/ContentCard";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about ShareLogic’s mission, values, and leadership—built for enterprise integration and workflow governance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Built for enterprises that can’t afford fragile integrations"
        subtitle="ShareLogic exists to help organizations connect systems responsibly: with clear ownership, measurable reliability, and controls that satisfy security and compliance stakeholders."
      />

      <SectionIntro
        title="Our story"
        description="ShareLogic started where most integration programs break: not at the connector catalog, but at the operating model. We focus on governance, visibility, and scalable patterns so modernization doesn’t trade speed for trust."
      />

      <section className="border-t border-slate-200 bg-slate-50/60">
        <Container className="py-12 sm:py-14">
          <FadeUp>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Mission</h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600">
              Make enterprise integration operable: predictable change, accountable ownership, and evidence that stands up to audits—without forcing teams back to spreadsheets and heroics.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <FadeUp>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Leadership (placeholder)</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
              Executive bios and photography typically live here. This starter uses neutral placeholders so design can slot in final assets without restructuring routes.
            </p>
          </FadeUp>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["CEO", "CTO", "CPO"].map((role, index) => (
              <FadeUp key={role} delay={index * 0.06}>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="h-12 w-12 rounded-full border border-slate-200 bg-white" aria-hidden />
                  <p className="mt-4 text-sm font-semibold text-slate-900">Name placeholder</p>
                  <p className="mt-1 text-sm text-slate-600">{role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <Container className="py-12 sm:py-14">
          <FadeUp>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Values</h2>
          </FadeUp>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FadeUp delay={0.05}>
              <ContentCard
                title="Integrity in operations"
                description="We optimize for what’s true in production—not demo-day polish that falls apart under scrutiny."
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <ContentCard
                title="Clarity over complexity"
                description="Enterprise software should reduce ambiguity. We prefer explicit workflows and measurable outcomes."
              />
            </FadeUp>
            <FadeUp delay={0.15}>
              <ContentCard
                title="Partnership with practitioners"
                description="We build with the people who carry pagers: operators, architects, and security partners."
              />
            </FadeUp>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Want to explore ShareLogic with your team?"
        body="We’ll align on your constraints, priorities, and success metrics—then propose a pragmatic adoption path."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}
