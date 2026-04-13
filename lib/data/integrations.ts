import type { IntegrationPageContent } from "@/lib/types/content";

export const integrations: IntegrationPageContent[] = [
  {
    slug: "it-service-management",
    title: "IT Service Management",
    tagline: "Keep incidents, changes, and CMDB signals aligned as your service estate evolves.",
    seo: {
      title: "IT Service Management Integrations | ShareLogic",
      description:
        "Connect ITSM platforms with monitoring, identity, and collaboration tools using governed workflows and auditable automation.",
    },
    businessProblem: {
      title: "Service operations depend on fragmented signals",
      summary:
        "When tickets, alerts, and configuration records disagree, teams lose time reconciling truth instead of restoring service.",
      bullets: [
        "Duplicate records across tools slow routing and approvals.",
        "Change windows create risk when dependencies aren’t visible.",
        "Audit requests require evidence that spans multiple systems.",
      ],
    },
    capabilities: [
      {
        title: "Bidirectional sync with guardrails",
        description: "Map fields and lifecycle states with validation rules that prevent silent drift.",
      },
      {
        title: "Incident correlation",
        description: "Link alerts, changes, and service maps so responders see context fast.",
      },
      {
        title: "Controlled automation",
        description: "Orchestrate standard changes with approvals, rollback hooks, and traceable execution.",
      },
    ],
    workflow: {
      title: "A reference ITSM workflow",
      steps: [
        {
          title: "Detect",
          description: "Normalize events from monitoring into structured incidents with ownership and priority.",
        },
        {
          title: "Triage",
          description: "Enrich tickets with CMDB relationships and recent changes for faster classification.",
        },
        {
          title: "Resolve",
          description: "Coordinate tasks across teams with updates flowing back to the system of record.",
        },
        {
          title: "Learn",
          description: "Capture post-incident actions and feed improvements into change and problem processes.",
        },
      ],
    },
    outcomes: {
      title: "What teams measure after go-live",
      items: [
        "Mean time to acknowledge and resolve trending down",
        "Fewer reconciliation tasks between ITSM and adjacent tools",
        "Cleaner audit trails for change and access reviews",
      ],
    },
    cta: {
      headline: "Blueprint your ITSM integration architecture",
      body: "We’ll review your toolchain and propose a phased connectivity model with clear ownership.",
      primaryLabel: "Speak with an architect",
      primaryHref: "/contact",
    },
  },
  {
    slug: "customer-service-management",
    title: "Customer Service Management",
    tagline: "Deliver consistent customer outcomes when cases span CRM, billing, and fulfillment systems.",
    seo: {
      title: "Customer Service Management Integrations | ShareLogic",
      description:
        "Unify customer service workflows across channels with governed data sync and reliable orchestration.",
    },
    businessProblem: {
      title: "Customer journeys break at system boundaries",
      summary:
        "Agents shouldn’t re-key data or chase status across portals. Customers expect continuity—even when the back office is complex.",
      bullets: [
        "Siloed histories create repeat contacts and longer handle times.",
        "Order and entitlement mismatches erode trust.",
        "Operational reporting lacks a single timeline of work performed.",
      ],
    },
    capabilities: [
      {
        title: "360° case context",
        description: "Aggregate relevant records with field-level controls for privacy and policy.",
      },
      {
        title: "Order-to-cash alignment",
        description: "Synchronize milestones between service and fulfillment with exception handling.",
      },
      {
        title: "Quality and coaching signals",
        description: "Stream structured outcomes to analytics without exporting sensitive payloads.",
      },
    ],
    workflow: {
      title: "A reference customer service workflow",
      steps: [
        {
          title: "Intake",
          description: "Normalize requests from chat, email, and voice into a governed case model.",
        },
        {
          title: "Diagnose",
          description: "Pull subscription, billing, and entitlement context with least-privilege access.",
        },
        {
          title: "Act",
          description: "Trigger fulfillment tasks and updates while preserving audit trails.",
        },
        {
          title: "Close the loop",
          description: "Confirm resolution with the customer and capture structured feedback.",
        },
      ],
    },
    outcomes: {
      title: "What teams measure after go-live",
      items: [
        "First-contact resolution improving quarter over quarter",
        "Reduced handle time for complex multi-system cases",
        "Higher CSAT with fewer escalations",
      ],
    },
    cta: {
      headline: "Design customer service integrations that scale",
      body: "We’ll map your critical journeys and propose a staged rollout plan with measurable checkpoints.",
      primaryLabel: "Schedule a workshop",
      primaryHref: "/contact",
    },
  },
  {
    slug: "configuration-management",
    title: "Configuration Management",
    tagline: "Keep authoritative configuration data trustworthy as infrastructure changes.",
    seo: {
      title: "Configuration Management Integrations | ShareLogic",
      description:
        "Integrate CMDB and discovery sources with validation, reconciliation, and ownership workflows.",
    },
    businessProblem: {
      title: "CMDB quality decays without continuous integration",
      summary:
        "If configuration isn’t trustworthy, change risk, incident response, and compliance reporting all suffer.",
      bullets: [
        "Duplicate CI records obscure dependencies.",
        "Manual updates can’t keep pace with cloud velocity.",
        "Teams disagree on what “owned” means for shared assets.",
      ],
    },
    capabilities: [
      {
        title: "Discovery ingestion",
        description: "Normalize attributes from multiple sources with reconciliation rules and conflict surfacing.",
      },
      {
        title: "Relationship integrity",
        description: "Model dependencies with validation to prevent impossible graphs.",
      },
      {
        title: "Operational ownership",
        description: "Route stewardship tasks to the right teams with SLAs and evidence trails.",
      },
    ],
    workflow: {
      title: "A reference configuration workflow",
      steps: [
        {
          title: "Observe",
          description: "Continuously ingest changes from cloud, network, and endpoint sources.",
        },
        {
          title: "Reconcile",
          description: "Identify duplicates and conflicts, then queue remediation with approvals.",
        },
        {
          title: "Certify",
          description: "Publish trusted snapshots for change planning and incident response.",
        },
        {
          title: "Improve",
          description: "Track data quality trends and tighten rules as the estate evolves.",
        },
      ],
    },
    outcomes: {
      title: "What teams measure after go-live",
      items: [
        "Higher CMDB completeness and accuracy scores",
        "Faster impact analysis during incidents",
        "More confident change approvals with fewer rollbacks",
      ],
    },
    cta: {
      headline: "Strengthen your configuration management program",
      body: "We’ll assess your sources of truth and propose a reconciliation model that fits your operating model.",
      primaryLabel: "Book a discovery session",
      primaryHref: "/contact",
    },
  },
  {
    slug: "knowledge-management",
    title: "Knowledge Management",
    tagline: "Make knowledge articles actionable by connecting them to live systems and workflows.",
    seo: {
      title: "Knowledge Management Integrations | ShareLogic",
      description:
        "Integrate knowledge bases with ITSM, HR, and customer systems so answers stay current and trusted.",
    },
    businessProblem: {
      title: "Knowledge rots when it isn’t tied to operational reality",
      summary:
        "Articles that contradict live systems increase rework and risk. Teams need a loop between knowledge and execution.",
      bullets: [
        "Duplicate articles create conflicting guidance.",
        "Updates lag behind releases and policy changes.",
        "Usage signals rarely feed back into content owners.",
      ],
    },
    capabilities: [
      {
        title: "Lifecycle-linked publishing",
        description: "Trigger reviews when upstream systems change, with approvals routed to owners.",
      },
      {
        title: "Contextual surfacing",
        description: "Recommend relevant articles based on incident class, service, and recent changes.",
      },
      {
        title: "Feedback loops",
        description: "Capture deflection and resolution signals to prioritize content quality work.",
      },
    ],
    workflow: {
      title: "A reference knowledge workflow",
      steps: [
        {
          title: "Capture",
          description: "Ingest structured knowledge from authoritative sources and map ownership.",
        },
        {
          title: "Certify",
          description: "Publish through review workflows aligned to risk and audience.",
        },
        {
          title: "Deliver",
          description: "Surface knowledge at the right moment in service workflows with access controls.",
        },
        {
          title: "Measure",
          description: "Track effectiveness and feed improvements back to content owners.",
        },
      ],
    },
    outcomes: {
      title: "What teams measure after go-live",
      items: [
        "Higher self-service success and deflection",
        "Shorter resolution time for repeat issues",
        "Improved content freshness scores",
      ],
    },
    cta: {
      headline: "Modernize your knowledge management integrations",
      body: "We’ll map your content lifecycle and propose a governance model that scales.",
      primaryLabel: "Talk to a specialist",
      primaryHref: "/contact",
    },
  },
  {
    slug: "foundation-data",
    title: "Foundation Data",
    tagline: "Synchronize master data so downstream systems operate on consistent definitions.",
    seo: {
      title: "Foundation Data Integrations | ShareLogic",
      description:
        "Integrate master data domains with validation, stewardship, and event-driven distribution across the enterprise.",
    },
    businessProblem: {
      title: "Downstream chaos starts upstream",
      summary:
        "When customer, supplier, and asset definitions diverge, analytics, billing, and service operations all pay the tax.",
      bullets: [
        "Duplicate golden records create conflicting customer views.",
        "Batch updates are too slow for real-time operations.",
        "Stewardship is unclear across business and IT owners.",
      ],
    },
    capabilities: [
      {
        title: "Domain modeling",
        description: "Define entities, relationships, and rules that match how the business actually operates.",
      },
      {
        title: "Match and merge",
        description: "Apply survivorship rules with human-in-the-loop for edge cases.",
      },
      {
        title: "Event distribution",
        description: "Publish changes with ordering guarantees so consumers stay consistent.",
      },
    ],
    workflow: {
      title: "A reference foundation data workflow",
      steps: [
        {
          title: "Ingest",
          description: "Bring in authoritative sources with validation and lineage tracking.",
        },
        {
          title: "Harmonize",
          description: "Resolve duplicates and normalize attributes across domains.",
        },
        {
          title: "Publish",
          description: "Distribute updates to subscribing systems with policy checks.",
        },
        {
          title: "Govern",
          description: "Monitor quality metrics and route stewardship tasks proactively.",
        },
      ],
    },
    outcomes: {
      title: "What teams measure after go-live",
      items: [
        "Improved data quality scores across key domains",
        "Fewer reconciliation projects between finance and operations",
        "More trustworthy reporting and forecasting",
      ],
    },
    cta: {
      headline: "Plan foundation data integrations with confidence",
      body: "We’ll help you prioritize domains and define a pragmatic rollout with measurable milestones.",
      primaryLabel: "Request a briefing",
      primaryHref: "/contact",
    },
  },
  {
    slug: "custom-workflows",
    title: "Custom Workflows",
    tagline: "Automate complex business processes with controls that satisfy security and operations.",
    seo: {
      title: "Custom Workflows | ShareLogic",
      description:
        "Build custom orchestrations across SaaS and on‑prem systems with approvals, observability, and auditability.",
    },
    businessProblem: {
      title: "Every enterprise has unique processes",
      summary:
        "Off-the-shelf connectors rarely cover end-to-end business logic. Teams still need reliability and governance.",
      bullets: [
        "Scripts are brittle and hard to operationalize.",
        "Cross-functional approvals require durable state and evidence.",
        "Failure handling is often an afterthought.",
      ],
    },
    capabilities: [
      {
        title: "Composable orchestration",
        description: "Model branching, retries, and compensations with clear ownership boundaries.",
      },
      {
        title: "Policy enforcement",
        description: "Embed approvals, segregation of duties, and access controls into the flow.",
      },
      {
        title: "Operational visibility",
        description: "Trace executions across steps with structured logs and actionable alerts.",
      },
    ],
    workflow: {
      title: "A reference custom workflow",
      steps: [
        {
          title: "Initiate",
          description: "Kick off from events, schedules, or APIs with validated inputs.",
        },
        {
          title: "Coordinate",
          description: "Route tasks across teams and systems with durable checkpoints.",
        },
        {
          title: "Decide",
          description: "Apply business rules with human approvals where required.",
        },
        {
          title: "Finalize",
          description: "Persist outcomes and notify stakeholders with audit-ready records.",
        },
      ],
    },
    outcomes: {
      title: "What teams measure after go-live",
      items: [
        "Reduced manual handoffs and cycle time",
        "Fewer errors from re-keying and inconsistent state",
        "Clearer accountability for process ownership",
      ],
    },
    cta: {
      headline: "Prototype a custom workflow with your team",
      body: "Bring a high-priority process—we’ll outline a governed architecture and delivery plan.",
      primaryLabel: "Start a conversation",
      primaryHref: "/contact",
    },
  },
];

export function getIntegrationBySlug(slug: string): IntegrationPageContent | undefined {
  return integrations.find((i) => i.slug === slug);
}
