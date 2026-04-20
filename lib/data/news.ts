import type { NewsPost } from "@/lib/types/content";

export const newsPosts: NewsPost[] = [
  {
    id: "n-001",
    slug: "sharelogic-raises-series-c-to-accelerate-enterprise-workflows",
    title: "ShareLogic raises Series C to accelerate enterprise workflow adoption",
    excerpt:
      "New funding will expand R&D, global support, and partner programs for regulated industries.",
    body: `
## What this means for customers

ShareLogic is investing where enterprises feel the most pain: making integrations operable under real-world governance constraints. This release outlines how we’ll deepen platform capabilities while keeping customer outcomes measurable.

### Focus areas

We’re prioritizing reliability engineering patterns for integration teams, expanded observability defaults, and faster time-to-value for complex multi-system programs.

### Partner ecosystem

We’re also growing our partner certification program so implementation quality stays consistent as adoption scales.

---

**Forward-looking statements:** This post includes plans and intentions that may change.
    `.trim(),
    featuredImage: "/news/feature-img.png",
    publishedAt: "2026-03-02",
    author: { name: "Jordan Ellis", role: "VP Communications" },
    tags: ["Company", "Funding"],
    topic: "company",
    featured: true,
  },
  {
    id: "n-002",
    slug: "introducing-unified-execution-insights",
    title: "Introducing unified execution insights for long-running workflows",
    excerpt:
      "Trace orchestration steps across systems with structured timelines designed for operators—not only developers.",
    body: `
## Built for incident response and change reviews

Execution insights consolidate signals from orchestration runs so teams can answer “what happened” without stitching logs manually.

### Highlights

- Step-level timelines with retry and compensation markers
- Correlation IDs propagated across common enterprise endpoints
- Export-friendly summaries for change advisory boards

We’re rolling this out in phases; contact your account team for availability in your region.
    `.trim(),
    featuredImage: "/news/image-1.png",
    publishedAt: "2026-02-18",
    author: { name: "Priya Nandakumar", role: "Director of Product" },
    tags: ["Platform", "Observability"],
    topic: "platform",
    featured: false,
  },
  {
    id: "n-003",
    slug: "governance-checks-for-api-lifecycle",
    title: "Governance checks that keep API lifecycles aligned with policy",
    excerpt:
      "New policy hooks help security and platform teams enforce standards before changes reach production.",
    body: `
## Policy as a workflow participant

Instead of governance being a late review gate, ShareLogic lets teams encode requirements as checks tied to promotion workflows.

### What you can enforce

- Authentication and authorization baselines
- Required documentation and consumer notifications
- Compatibility signals for dependent integrations

This is designed to reduce “surprise” deployments while preserving delivery velocity for well-behaved changes.
    `.trim(),
    featuredImage: "/news/Image.jpg",
    publishedAt: "2026-02-04",
    author: { name: "Marcus Chen", role: "Principal Architect" },
    tags: ["Governance", "APIs"],
    topic: "governance",
    featured: false,
  },
  {
    id: "n-004",
    slug: "expanded-connectors-for-itsm-and-cmdb-ecosystems",
    title: "Expanded connectors for ITSM and CMDB ecosystems",
    excerpt:
      "Additional certified connectors and field mapping templates reduce time-to-first-value for service operations programs.",
    body: `
## Faster time to trustworthy service data

Our connector roadmap focuses on the messy middle: field mapping, reconciliation rules, and operational playbooks.

### Notes for administrators

We recommend pairing connector rollout with a data stewardship model—connectors accelerate work, but ownership still matters.

Documentation includes migration notes for common upgrade paths.
    `.trim(),
    featuredImage: "/news/image-3.png",
    publishedAt: "2026-01-21",
    author: { name: "Elena Marquez", role: "Head of Integrations" },
    tags: ["Integrations", "ITSM"],
    topic: "integrations",
    featured: false,
  },
  {
    id: "n-005",
    slug: "security-bulletin-hardening-secrets-handling",
    title: "Security bulletin: hardening secrets handling in distributed agents",
    excerpt:
      "Recommendations and platform updates for teams using ShareLogic agents in hybrid environments.",
    body: `
## Summary

We’re releasing additional controls for secret rotation, least-privilege defaults, and audit evidence for agent actions.

### Actions for customers

- Review agent roles and narrow permissions where possible
- Enable rotation policies aligned to your IdP and vault standards
- Validate network egress rules for agent connectivity

If you have questions, contact support or your customer success manager.
    `.trim(),
    featuredImage: "/news/image-4.png",
    publishedAt: "2026-01-07",
    author: { name: "Samira Okonkwo", role: "Chief Information Security Officer" },
    tags: ["Security", "Advisory"],
    topic: "security",
    featured: false,
  },
  {
    id: "n-006",
    slug: "how-we-think-about-safe-rollouts",
    title: "How we think about safe rollouts for integration changes",
    excerpt:
      "A ShareLogic engineering perspective on progressive delivery when integrations touch production data flows.",
    body: `
## Principles

1. **Make blast radius obvious** before you ship.
2. **Prefer reversible steps** when systems are coupled.
3. **Measure customer-impacting signals**, not only technical metrics.

### Practical patterns

Canary cohorts, synthetic checks, and operational dashboards are most valuable when tied to ownership and escalation paths.
    `.trim(),
    featuredImage: "/news/image-5.png",
    publishedAt: "2025-12-16",
    author: { name: "Noah Patel", role: "Engineering Manager" },
    tags: ["Engineering", "Reliability"],
    topic: "platform",
    featured: false,
  },
  {
    id: "n-007",
    slug: "partner-program-updates-for-2026",
    title: "Partner program updates for 2026",
    excerpt:
      "New enablement tracks, certification paths, and co-sell resources for global system integrators and boutique firms.",
    body: `
## What partners asked for

Clearer implementation standards, repeatable reference architectures, and faster access to technical specialists.

### What’s new

- Updated certification curriculum aligned to enterprise security reviews
- Expanded sandbox environments for proof-of-concept work
- A partner portal refresh for asset discovery

We’re excited to grow responsibly with partners who value outcomes over slide decks.
    `.trim(),
    featuredImage: "/news/image-6.png",
    publishedAt: "2025-12-02",
    author: { name: "Jordan Ellis", role: "VP Communications" },
    tags: ["Partners", "Company"],
    topic: "company",
    featured: false,
  },
  {
    id: "n-008",
    slug: "data-residency-roadmap-preview",
    title: "Data residency roadmap preview",
    excerpt:
      "A look at upcoming region controls for customers with strict data localization requirements.",
    body: `
## Why this matters

Enterprises increasingly need predictable residency behavior—not only for storage, but for processing and operational telemetry.

### Roadmap themes

We’re working through region-specific deployment models, encryption controls, and support processes that respect local regulatory expectations.

This remains a moving area; we’ll publish firmer timelines as contracts and certifications progress.
    `.trim(),
    featuredImage: "/news/image-7.png",
    publishedAt: "2025-11-19",
    author: { name: "Samira Okonkwo", role: "Chief Information Security Officer" },
    tags: ["Security", "Compliance"],
    topic: "security",
    featured: false,
  },
  {
    id: "n-009",
    slug: "blueprint-library-for-industry-reference-architectures",
    title: "Blueprint library for industry reference architectures",
    excerpt:
      "Starter templates for common enterprise footprints—designed to be adapted, not treated as one-size-fits-all.",
    body: `
## Blueprints are guardrails, not guarantees

Reference architectures help teams align quickly, but every estate has constraints. Our blueprint library emphasizes decision points and trade-offs.

### Initial industries

- Banking and insurance
- Healthcare delivery networks
- Manufacturing and supply chain

We’ll continue expanding based on customer demand and partner feedback.
    `.trim(),
    featuredImage: "/news/image-8.png",
    publishedAt: "2025-11-05",
    author: { name: "Marcus Chen", role: "Principal Architect" },
    tags: ["Architecture", "Industries"],
    topic: "integrations",
    featured: false,
  },
  {
    id: "n-010",
    slug: "meet-us-at-connect-enterprise-2026",
    title: "Meet us at Connect Enterprise 2026",
    excerpt:
      "Sessions on governed automation, operational metrics for integration teams, and customer roundtables.",
    body: `
## Where to find us

We’ll host architecture reviews, live demos, and office hours for existing customers.

### Agenda highlights

- **Tuesday:** Governance patterns that don’t slow shipping
- **Wednesday:** Workflow reliability and incident response
- **Thursday:** Roadmap Q&A with product leadership

Registration details are available on the conference site.
    `.trim(),
    featuredImage: "/news/image-9.png",
    publishedAt: "2025-10-22",
    author: { name: "Jordan Ellis", role: "VP Communications" },
    tags: ["Events", "Company"],
    topic: "company",
    featured: false,
  },
  {
    id: "n-011",
    slug: "improving-documentation-for-api-consumers",
    title: "Improving documentation for API consumers",
    excerpt:
      "How ShareLogic keeps consumer guides aligned with runtime behavior—reducing integration drift over time.",
    body: `
## The documentation problem

When docs diverge from reality, integrations fail in subtle ways. We treat documentation as part of the product surface.

### What we ship

- Generated artifacts tied to deployment versions
- Clear deprecation windows and migration notes
- Examples validated against sandbox environments

If you’ve struggled with drift, we’d love your feedback on what evidence your teams need most.
    `.trim(),
    featuredImage: "/news/feature-img.png",
    publishedAt: "2025-10-08",
    author: { name: "Priya Nandakumar", role: "Director of Product" },
    tags: ["APIs", "Developer experience"],
    topic: "platform",
    featured: false,
  },
  {
    id: "n-012",
    slug: "customer-advisory-board-insights-q4",
    title: "Customer Advisory Board insights — Q4 notes",
    excerpt:
      "Themes from our latest CAB: operational ownership, reducing integration toil, and making audits less painful.",
    body: `
## What we heard

Customers consistently asked for clearer operational ownership models and better ways to demonstrate control effectiveness.

### What we’re doing next

We’re prioritizing product investments that reduce manual evidence collection and improve cross-team visibility.

Thank you to every participant—your specifics help us build responsibly.
    `.trim(),
    featuredImage: "/news/image-2.png",
    publishedAt: "2025-09-24",
    author: { name: "Elena Marquez", role: "Head of Customer Success" },
    tags: ["Customers", "Governance"],
    topic: "governance",
    featured: false,
  },
];

export function getPostBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((p) => p.slug === slug);
}

export function getAllPostsSorted(): NewsPost[] {
  return [...newsPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getFeaturedPost(): NewsPost | undefined {
  return newsPosts.find((p) => p.featured) ?? getAllPostsSorted()[0];
}

export function getRelatedPosts(current: NewsPost, limit = 3): NewsPost[] {
  const scored = newsPosts
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      let score = 0;
      if (p.topic === current.topic) score += 3;
      const sharedTags = p.tags.filter((t) => current.tags.includes(t)).length;
      score += sharedTags;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score || (a.post.publishedAt < b.post.publishedAt ? 1 : -1));
  return scored.slice(0, limit).map((s) => s.post);
}

export const newsTopics = [
  { id: "platform", label: "Platform" },
  { id: "governance", label: "Governance" },
  { id: "integrations", label: "Integrations" },
  { id: "security", label: "Security" },
  { id: "company", label: "Company" },
] as const;

export function allNewsTags(): string[] {
  const set = new Set<string>();
  newsPosts.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
