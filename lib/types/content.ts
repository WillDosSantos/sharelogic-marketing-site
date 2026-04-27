/** Shared content models — structured for future CMS migration. */

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type NavGroup = {
  id: string;
  label: string;
  href?: string;
  children?: NavChild[];
};

export type ProductPageContent = {
  slug: string;
  title: string;
  shortName: string;
  tagline: string;
  seo: { title: string; description: string };
  intro: string;
  features: { title: string; description: string }[];
  problem: { title: string; body: string };
  solution: { title: string; body: string };
  supportingCards: { title: string; description: string }[];
  cta: { headline: string; body: string; primaryLabel: string; primaryHref: string };
};

export type IntegrationPageContent = {
  slug: string;
  title: string;
  seo: { title: string; description: string };
  tagline: string;
  businessProblem: { title: string; summary: string; bullets: string[] };
  capabilities: { title: string; description: string }[];
  workflow: { title: string; steps: { title: string; description: string }[] };
  outcomes: { title: string; items: string[] };
  cta: { headline: string; body: string; primaryLabel: string; primaryHref: string };
};

export type IndustryPageContent = {
  slug: string;
  title: string;
  seo: { title: string; description: string };
  tagline: string;
  challenges: { title: string; items: string[] };
  howWeHelp: { title: string; body: string; bullets: string[] };
  useCases: { title: string; description: string }[];
  cta: { headline: string; body: string; primaryLabel: string; primaryHref: string };
};

export type ResourceCategory = "case-studies" | "concepts" | "patterns" | "comparisons" | "articles";

export type ResourceItem = {
  id: string;
  slug: string;
  category: ResourceCategory;
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  readTimeMinutes: number;
};

export type ResourceCategoryMeta = {
  slug: ResourceCategory;
  title: string;
  seo: { title: string; description: string };
  intro: string;
};

export type Author = {
  name: string;
  role?: string;
};

export type NewsTopic =
  | "platform"
  | "governance"
  | "integrations"
  | "security"
  | "company";

export type NewsPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  featuredImage: string;
  publishedAt: string;
  author: Author;
  tags: string[];
  topic: NewsTopic;
  featured: boolean;
};

export type JobOpening = {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    email: string;
    phone: string;
    addressLines: string[];
  };
  social: { label: string; href: string }[];
};
