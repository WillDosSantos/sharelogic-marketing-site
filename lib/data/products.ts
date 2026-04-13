import type { ProductPageContent } from "@/lib/types/content";

export const products: ProductPageContent[] = [
  {
    slug: "easy-api",
    shortName: "Easy API",
    title: "Easy API",
    tagline: "Governed APIs that meet enterprise standards without slowing delivery.",
    seo: {
      title: "Easy API | ShareLogic",
      description:
        "Design, publish, and operate integration APIs with policy, observability, and lifecycle controls built in.",
    },
    intro:
      "Easy API gives platform teams a structured way to expose capabilities to partners and internal consumers. Standardize authentication, versioning, and documentation while keeping ownership clear across lines of business.",
    features: [
      {
        title: "Policy-aware endpoints",
        description: "Apply consistent authZ rules, rate limits, and data contracts at the edge of your integrations.",
      },
      {
        title: "Operational visibility",
        description: "Trace requests across environments with structured logs and health signals for API products.",
      },
      {
        title: "Developer-ready artifacts",
        description: "Generate stable OpenAPI specs and consumer guides that stay aligned with runtime behavior.",
      },
    ],
    problem: {
      title: "The integration surface is growing faster than governance",
      body: "Ad-hoc APIs create inconsistent security posture, unclear ownership, and fragile consumer experiences. Teams need speed without sacrificing auditability.",
    },
    solution: {
      title: "A product-minded API layer",
      body: "Easy API treats every endpoint as a managed product: documented, measurable, and governed—so delivery accelerates instead of accumulating risk.",
    },
    supportingCards: [
      {
        title: "Lifecycle management",
        description: "Promote changes through environments with checks that mirror how you ship software.",
      },
      {
        title: "Ecosystem readiness",
        description: "Support partner onboarding with predictable SLAs and transparent change windows.",
      },
      {
        title: "Enterprise patterns",
        description: "Reuse templates for common B2B flows: ticketing, entitlements, and master data sync.",
      },
    ],
    cta: {
      headline: "See Easy API in a guided architecture review",
      body: "Walk through reference patterns for API governance and operational controls tailored to your stack.",
      primaryLabel: "Talk to sales",
      primaryHref: "/contact",
    },
  },
  {
    slug: "unifi",
    shortName: "Unifi",
    title: "Unifi",
    tagline: "Connect systems once. Orchestrate workflows with confidence across the enterprise.",
    seo: {
      title: "Unifi | ShareLogic",
      description:
        "Unifi unifies integration endpoints, workflow orchestration, and monitoring so teams can operate complex automations reliably.",
    },
    intro:
      "Unifi is ShareLogic’s connectivity fabric for enterprises that need dependable sync and orchestration between SaaS, on‑prem, and custom applications—without a patchwork of one-off scripts.",
    features: [
      {
        title: "Unified integration graph",
        description: "Model dependencies and data flows so changes are visible before they hit production.",
      },
      {
        title: "Resilient orchestration",
        description: "Retry, compensate, and alert with patterns designed for long-running business processes.",
      },
      {
        title: "Operational guardrails",
        description: "Separate duties, enforce approvals, and keep evidence for audits and retrospectives.",
      },
    ],
    problem: {
      title: "Point-to-point integrations don’t scale",
      body: "As systems multiply, brittle connections create outages, duplicated logic, and opaque ownership. Operations teams need a coherent control plane.",
    },
    solution: {
      title: "One place to connect, observe, and govern",
      body: "Unifi centralizes how integrations are built and run—reducing surprises while making it easier to evolve the stack responsibly.",
    },
    supportingCards: [
      {
        title: "Change intelligence",
        description: "Understand blast radius when schemas, APIs, or credentials change.",
      },
      {
        title: "Multi-team workflows",
        description: "Coordinate safely across platform, app, and security teams with shared visibility.",
      },
      {
        title: "Operational excellence",
        description: "Measure throughput, error budgets, and recovery time with dashboards teams actually use.",
      },
    ],
    cta: {
      headline: "Explore Unifi for your integration roadmap",
      body: "We’ll map your critical systems and outline a pragmatic path to unified orchestration.",
      primaryLabel: "Request a briefing",
      primaryHref: "/contact",
    },
  },
  {
    slug: "product-comparison",
    shortName: "Product Comparison",
    title: "Product Comparison",
    tagline: "Choose the right ShareLogic capabilities for your operating model.",
    seo: {
      title: "Product Comparison | ShareLogic",
      description:
        "Compare ShareLogic products across governance, connectivity, and operational needs for enterprise integration programs.",
    },
    intro:
      "Use this overview to align stakeholders on what to adopt first. ShareLogic products are composable—many customers start with a focused footprint and expand as maturity increases.",
    features: [
      {
        title: "Easy API",
        description: "Best when API products and external consumption are the primary constraint.",
      },
      {
        title: "Unifi",
        description: "Best when orchestration, reliability, and cross-system workflows are the bottleneck.",
      },
      {
        title: "Together",
        description: "Combine both when you need governed APIs and dependable orchestration in one program.",
      },
    ],
    problem: {
      title: "Teams need clarity before they standardize",
      body: "Without a shared vocabulary, integration initiatives stall. A crisp comparison helps security, ops, and engineering align on outcomes.",
    },
    solution: {
      title: "A pragmatic decision framework",
      body: "Match product strengths to your constraints: time-to-value, risk posture, and existing toolchain investments.",
    },
    supportingCards: [
      {
        title: "Governance-first rollouts",
        description: "Start where audits and access controls matter most, then expand connectivity.",
      },
      {
        title: "Workflow-first rollouts",
        description: "Start where incidents and customer impact are highest, then tighten API standards.",
      },
      {
        title: "Phased adoption",
        description: "Land a thin slice, prove value, and scale patterns across business units.",
      },
    ],
    cta: {
      headline: "Get a tailored recommendation",
      body: "Tell us about your systems and priorities—we’ll propose a sequenced adoption plan.",
      primaryLabel: "Contact us",
      primaryHref: "/contact",
    },
  },
];

export function getProductBySlug(slug: string): ProductPageContent | undefined {
  return products.find((p) => p.slug === slug);
}
