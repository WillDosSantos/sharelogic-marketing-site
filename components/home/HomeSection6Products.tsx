import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function HomeSection6Products() {
  return (
    <section
      id="section-6"
      className="relative overflow-hidden bg-white"
      aria-labelledby="section-6-heading"
    >
      {/* Dot grid: starts mid-section, extends to the right (behind cards) */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-[0.35] sm:w-[85%] lg:w-[68%]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at center, rgb(203 213 225) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      <Container className="relative z-10 py-12 sm:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          <div className="min-w-0 lg:pr-2">
            <h2 id="section-6-heading" className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.65rem]">
              The same standards, applied where you need them
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">
              This approach offers seamless access to Unifi and Easy API while maintaining a cohesive narrative. It emphasizes a
              unified philosophy applied across various scopes and facilitates early self-selection for buyers who are already aware
              of their needs.
            </p>
          </div>

          <article className="flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <Image
                src="/unifi-logo-full.svg"
                alt="Unifi"
                width={218}
                height={32}
                className="h-8 w-auto max-w-full object-left object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">Unifi</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              Connect systems once and orchestrate workflows with confidence. Unifi provides a governed integration fabric with
              visibility, ownership, and controls that scale across lines of business—without turning integrations into one-off
              projects.
            </p>
            <Link
              href="/products/unifi"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2750F5] transition-colors hover:text-[#1f40c4]"
            >
              Learn more
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </Link>
          </article>

          <article className="flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <Image
                src="/logo-easyapi.svg"
                alt="Easy API"
                width={242}
                height={32}
                className="h-8 w-auto max-w-full object-left object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">Easy API</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              Design and publish governed APIs with consistent contracts and lifecycle controls. Easy API helps teams ship
              consumer-ready endpoints with operational clarity—so speed and auditability move together, not in opposition.
            </p>
            <Link
              href="/products/easy-api"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2750F5] transition-colors hover:text-[#1f40c4]"
            >
              Learn more
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
}
