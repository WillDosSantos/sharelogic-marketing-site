import type { IndustryPageContent } from "@/lib/types/content";

export const industries: IndustryPageContent[] = [
  {
    slug: "automotive",
    title: "Automotive",
    tagline: "Connect manufacturing, supply chain, and aftersales systems without compromising traceability.",
    seo: {
      title: "Automotive | ShareLogic",
      description:
        "ShareLogic helps automotive enterprises integrate plant systems, dealer networks, and customer platforms with governance and scale.",
    },
    challenges: {
      title: "Operational realities in automotive",
      items: [
        "Global supplier networks require synchronized engineering and logistics data.",
        "Vehicle programs span years; integration changes must be controlled and auditable.",
        "Aftersales and connected services demand reliable real-time workflows.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We provide integration patterns that respect plant constraints, dealer ecosystems, and customer privacy—while keeping operational telemetry visible.",
      bullets: [
        "Orchestrate workflows across ERP, MES, and quality systems with clear ownership.",
        "Standardize APIs for partners and marketplaces with policy controls.",
        "Improve incident response when production or logistics signals degrade.",
      ],
    },
    useCases: [
      { title: "Recall and service campaigns", description: "Coordinate parts, dealers, and customer communications with traceable execution." },
      { title: "Supply continuity", description: "Align demand signals with supplier capacity and inbound logistics." },
      { title: "Connected services", description: "Integrate telematics and service platforms with consistent customer identity." },
    ],
    cta: {
      headline: "Discuss automotive integration priorities",
      body: "We’ll map your critical domains and propose a pragmatic roadmap aligned to program milestones.",
      primaryLabel: "Contact us",
      primaryHref: "/contact",
    },
  },
  {
    slug: "banking",
    title: "Banking",
    tagline: "Integrate core systems, channels, and risk platforms with controls regulators expect.",
    seo: {
      title: "Banking | ShareLogic",
      description:
        "ShareLogic supports banks with governed integrations across cores, payments, fraud, and customer channels.",
    },
    challenges: {
      title: "Operational realities in banking",
      items: [
        "Regulatory scrutiny requires evidence-rich change and access trails.",
        "Legacy cores coexist with modern digital channels—consistency is hard.",
        "Operational resilience expectations continue to rise.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We emphasize segregation of duties, auditable orchestration, and operational visibility—so modernization doesn’t outpace controls.",
      bullets: [
        "Model integrations as governed products with clear lifecycle management.",
        "Reduce manual reconciliation between risk, operations, and customer systems.",
        "Support controlled experimentation with sandboxed connectivity patterns.",
      ],
    },
    useCases: [
      { title: "Customer onboarding", description: "Orchestrate KYC, core booking, and channel provisioning with checkpoints." },
      { title: "Payments modernization", description: "Coordinate ISO messaging, fraud screening, and settlement workflows." },
      { title: "Operational reporting", description: "Stream consistent reference data to analytics with lineage." },
    ],
    cta: {
      headline: "Plan banking integrations with governance in mind",
      body: "We’ll align technical architecture to your risk framework and delivery constraints.",
      primaryLabel: "Request a briefing",
      primaryHref: "/contact",
    },
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Unify clinical and operational workflows while respecting privacy and interoperability standards.",
    seo: {
      title: "Healthcare | ShareLogic",
      description:
        "ShareLogic helps healthcare organizations integrate EHRs, payers, labs, and enterprise platforms with strong controls.",
    },
    challenges: {
      title: "Operational realities in healthcare",
      items: [
        "Patient data must flow with least privilege and clear purpose.",
        "Mergers and partnerships multiply systems and identity complexity.",
        "Operational teams need reliable integrations during high-stress periods.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We focus on traceable workflows, consent-aware patterns, and operational resilience—so clinicians and staff get dependable tools.",
      bullets: [
        "Standardize interfaces between care settings and back-office systems.",
        "Improve incident response when interfaces degrade or data conflicts emerge.",
        "Support interoperability initiatives with measurable quality gates.",
      ],
    },
    useCases: [
      { title: "Care coordination", description: "Synchronize referrals, authorizations, and scheduling across providers." },
      { title: "Revenue cycle alignment", description: "Connect clinical documentation to billing with fewer denials." },
      { title: "Population health reporting", description: "Aggregate operational signals for quality programs with governance." },
    ],
    cta: {
      headline: "Explore healthcare integration patterns",
      body: "We’ll review your ecosystem and propose a roadmap that balances speed with compliance.",
      primaryLabel: "Speak with us",
      primaryHref: "/contact",
    },
  },
  {
    slug: "insurance",
    title: "Insurance",
    tagline: "Connect policy, claims, and distribution systems to improve speed and accuracy.",
    seo: {
      title: "Insurance | ShareLogic",
      description:
        "ShareLogic helps insurers integrate policy administration, claims, and partner channels with governed automation.",
    },
    challenges: {
      title: "Operational realities in insurance",
      items: [
        "Complex products and rating logic span multiple systems.",
        "Partner ecosystems require stable APIs and predictable change management.",
        "Fraud and compliance checks must be embedded—not bolted on late.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We help insurers orchestrate end-to-end processes with clear evidence trails and operational metrics that leadership can trust.",
      bullets: [
        "Reduce manual touchpoints in underwriting and claims handling.",
        "Improve data consistency across distribution and servicing platforms.",
        "Make integrations observable so outages don’t cascade silently.",
      ],
    },
    useCases: [
      { title: "Claims orchestration", description: "Route tasks across adjusters, vendors, and payment systems with controls." },
      { title: "Agency and broker connectivity", description: "Standardize submissions and status updates with auditability." },
      { title: "Core modernization", description: "Phase migrations with parallel-run patterns and reconciliation." },
    ],
    cta: {
      headline: "Modernize insurance integrations responsibly",
      body: "We’ll help prioritize journeys that reduce loss adjustment expense and improve customer outcomes.",
      primaryLabel: "Contact sales",
      primaryHref: "/contact",
    },
  },
  {
    slug: "life-sciences",
    title: "Life Sciences",
    tagline: "Integrate R&D, manufacturing, and quality systems with validation-friendly controls.",
    seo: {
      title: "Life Sciences | ShareLogic",
      description:
        "ShareLogic supports life sciences organizations with traceable integrations across clinical, manufacturing, and commercial operations.",
    },
    challenges: {
      title: "Operational realities in life sciences",
      items: [
        "GxP environments require controlled changes and strong evidence.",
        "Global trials and supply chains generate complex data dependencies.",
        "Partnerships multiply interfaces and data exchange obligations.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We emphasize audit trails, change discipline, and operational monitoring—so integrations support compliance rather than undermine it.",
      bullets: [
        "Model workflows with explicit approvals and segregation of duties.",
        "Improve visibility when integrations touch regulated records.",
        "Support phased rollouts aligned to validation milestones.",
      ],
    },
    useCases: [
      { title: "Clinical operations", description: "Coordinate sites, labs, and safety reporting with consistent workflows." },
      { title: "Manufacturing release", description: "Synchronize batch records, quality holds, and ERP movements." },
      { title: "Commercial operations", description: "Align HCP engagement systems with compliance guardrails." },
    ],
    cta: {
      headline: "Plan life sciences integrations with quality in mind",
      body: "We’ll align technical patterns to your validation approach and risk profile.",
      primaryLabel: "Request a consultation",
      primaryHref: "/contact",
    },
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    tagline: "Connect plant systems, ERP, and suppliers for resilient operations and quality.",
    seo: {
      title: "Manufacturing | ShareLogic",
      description:
        "ShareLogic helps manufacturers integrate OT/IT boundaries, supply networks, and service operations with reliability.",
    },
    challenges: {
      title: "Operational realities in manufacturing",
      items: [
        "Downtime is expensive; integrations must fail predictably and recover quickly.",
        "Supplier variability requires flexible yet controlled connectivity.",
        "Quality and traceability expectations span the value chain.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We focus on durable orchestration, operational telemetry, and controlled change—so production stays stable as systems evolve.",
      bullets: [
        "Orchestrate workflows across MES, QMS, and ERP with clear ownership.",
        "Improve supplier collaboration without sacrificing security posture.",
        "Reduce manual reconciliation between inventory and production signals.",
      ],
    },
    useCases: [
      { title: "Production scheduling", description: "Align capacity, materials, and orders with fewer surprises." },
      { title: "Quality holds", description: "Coordinate containment actions across plants and suppliers." },
      { title: "Aftermarket service", description: "Connect installed base data to parts and technician workflows." },
    ],
    cta: {
      headline: "Strengthen manufacturing integrations",
      body: "We’ll prioritize high-impact workflows and define a phased connectivity plan.",
      primaryLabel: "Talk to an expert",
      primaryHref: "/contact",
    },
  },
  {
    slug: "national-government",
    title: "National Government",
    tagline: "Integrate agencies and programs with security, transparency, and operational accountability.",
    seo: {
      title: "National Government | ShareLogic",
      description:
        "ShareLogic supports public sector organizations with governed integrations across agencies, contractors, and citizen services.",
    },
    challenges: {
      title: "Operational realities in government",
      items: [
        "Mission systems span decades of technology and vendor ecosystems.",
        "Security and privacy requirements are non-negotiable.",
        "Citizen services demand reliability during peak demand.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We design integrations with strong access controls, evidence trails, and operational visibility—so modernization improves service without increasing risk.",
      bullets: [
        "Standardize interfaces between agencies and shared services responsibly.",
        "Improve incident response with coherent telemetry across programs.",
        "Support incremental modernization with measurable milestones.",
      ],
    },
    useCases: [
      { title: "Eligibility and benefits", description: "Orchestrate verification steps across authoritative sources." },
      { title: "Emergency operations", description: "Coordinate cross-agency workflows under pressure with auditability." },
      { title: "Grants and compliance", description: "Track obligations and reporting with consistent data flows." },
    ],
    cta: {
      headline: "Discuss public sector integration requirements",
      body: "We’ll align architecture to security controls, procurement realities, and mission outcomes.",
      primaryLabel: "Contact government team",
      primaryHref: "/contact",
    },
  },
  {
    slug: "nonprofit",
    title: "Nonprofit",
    tagline: "Connect fundraising, programs, and finance systems to amplify impact and stewardship.",
    seo: {
      title: "Nonprofit | ShareLogic",
      description:
        "ShareLogic helps nonprofits integrate donor platforms, program operations, and finance with transparency.",
    },
    challenges: {
      title: "Operational realities in nonprofits",
      items: [
        "Resources are constrained; integrations must earn their keep.",
        "Donors and boards expect transparency and responsible data handling.",
        "Program delivery often spans partners and field systems.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We emphasize pragmatic automation, clear ownership, and measurable outcomes—so teams spend less time reconciling and more time delivering mission.",
      bullets: [
        "Reduce duplicate data entry across CRM, finance, and program tools.",
        "Improve reporting for grants and compliance without manual spreadsheets.",
        "Make integrations maintainable as volunteer-led teams change.",
      ],
    },
    useCases: [
      { title: "Donor stewardship", description: "Synchronize engagement history across channels with privacy controls." },
      { title: "Program operations", description: "Connect field data to outcomes reporting with validation." },
      { title: "Grant management", description: "Orchestrate milestones, documentation, and disbursements." },
    ],
    cta: {
      headline: "Explore nonprofit integration options",
      body: "We’ll help prioritize workflows that improve stewardship and reduce overhead.",
      primaryLabel: "Get in touch",
      primaryHref: "/contact",
    },
  },
  {
    slug: "retail",
    title: "Retail",
    tagline: "Unify stores, ecommerce, and supply chain systems for consistent customer experiences.",
    seo: {
      title: "Retail | ShareLogic",
      description:
        "ShareLogic helps retailers integrate POS, OMS, WMS, and customer platforms with speed and reliability.",
    },
    challenges: {
      title: "Operational realities in retail",
      items: [
        "Peak seasons amplify integration failures.",
        "Inventory truth is contested across channels and partners.",
        "Promotions and loyalty programs span many systems.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We focus on resilient orchestration and operational visibility—so teams can respond quickly when demand shifts or supply tightens.",
      bullets: [
        "Improve order orchestration across stores, warehouses, and dropship partners.",
        "Reduce reconciliation between merchandising, pricing, and finance.",
        "Make customer identity and entitlements consistent across touchpoints.",
      ],
    },
    useCases: [
      { title: "Omnichannel fulfillment", description: "Route orders with inventory accuracy and exception handling." },
      { title: "Returns and exchanges", description: "Coordinate refunds and restocking across systems." },
      { title: "Supplier collaboration", description: "Align inbound shipments with promotions and capacity." },
    ],
    cta: {
      headline: "Strengthen retail integrations",
      body: "We’ll map your peak-risk workflows and propose a phased improvement plan.",
      primaryLabel: "Contact us",
      primaryHref: "/contact",
    },
  },
  {
    slug: "technology-providers",
    title: "Technology Providers",
    tagline: "Ship integrations your customers trust—secure, documented, and operable at scale.",
    seo: {
      title: "Technology Providers | ShareLogic",
      description:
        "ShareLogic helps software and cloud providers deliver enterprise-grade integrations with governance and observability.",
    },
    challenges: {
      title: "Operational realities for technology providers",
      items: [
        "Enterprise buyers expect SLAs, security evidence, and predictable change.",
        "Customer environments vary; you need patterns—not one-off scripts.",
        "Support teams need visibility when integrations fail in the field.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We help product teams treat integrations as a first-class capability: versioned, measurable, and supportable across customer estates.",
      bullets: [
        "Standardize connector behavior with policy hooks and diagnostics.",
        "Improve time-to-value for complex customer deployments.",
        "Reduce escalations with better telemetry and runbooks.",
      ],
    },
    useCases: [
      { title: "Enterprise onboarding", description: "Orchestrate provisioning across customer IdP, CRM, and ITSM." },
      { title: "Multi-tenant operations", description: "Isolate workloads while sharing operational insights safely." },
      { title: "Partner ecosystem", description: "Publish stable APIs and lifecycle practices for ISV integrations." },
    ],
    cta: {
      headline: "Build integration programs that scale with your product",
      body: "We’ll review your delivery model and propose patterns for enterprise readiness.",
      primaryLabel: "Talk to product specialists",
      primaryHref: "/contact",
    },
  },
  {
    slug: "telecom",
    title: "Telecom",
    tagline: "Integrate OSS/BSS, network inventory, and customer systems for reliable service delivery.",
    seo: {
      title: "Telecom | ShareLogic",
      description:
        "ShareLogic helps telecom operators integrate service assurance, fulfillment, and customer operations with resilience.",
    },
    challenges: {
      title: "Operational realities in telecom",
      items: [
        "Service delivery spans legacy stacks and modern digital channels.",
        "Network events must trigger coordinated operational responses.",
        "Regulatory reporting depends on consistent reference data.",
      ],
    },
    howWeHelp: {
      title: "How ShareLogic helps",
      body: "We emphasize orchestration across complex stacks, operational telemetry, and controlled change—so customer-impacting issues are detected and resolved faster.",
      bullets: [
        "Coordinate fulfillment workflows across provisioning systems.",
        "Improve incident correlation across network and customer channels.",
        "Support modernization with phased cutovers and reconciliation.",
      ],
    },
    useCases: [
      { title: "Service activation", description: "Orchestrate provisioning steps with rollback and status transparency." },
      { title: "Assurance workflows", description: "Link alarms, tickets, and field operations with traceability." },
      { title: "Billing integrity", description: "Align usage, rating, and customer care with fewer disputes." },
    ],
    cta: {
      headline: "Modernize telecom integrations with confidence",
      body: "We’ll help prioritize workflows that improve NPS and reduce operational toil.",
      primaryLabel: "Request a session",
      primaryHref: "/contact",
    },
  },
];

export function getIndustryBySlug(slug: string): IndustryPageContent | undefined {
  return industries.find((i) => i.slug === slug);
}
