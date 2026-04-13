import type { NavGroup } from "@/lib/types/content";

/** Top-level nav: groups are dropdown-only (no parent landing pages). */
export const mainNavigation: NavGroup[] = [
  {
    id: "products",
    label: "Products",
    children: [
      { label: "Easy API", href: "/products/easy-api", description: "Composable API surfaces for governed integrations." },
      { label: "Unifi", href: "/products/unifi", description: "Unified connectivity across enterprise systems." },
      {
        label: "Product Comparison",
        href: "/products/product-comparison",
        description: "Compare capabilities across the ShareLogic portfolio.",
      },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    children: [
      { label: "IT Service Management", href: "/integrations/it-service-management" },
      { label: "Customer Service Management", href: "/integrations/customer-service-management" },
      { label: "Configuration Management", href: "/integrations/configuration-management" },
      { label: "Knowledge Management", href: "/integrations/knowledge-management" },
      { label: "Foundation Data", href: "/integrations/foundation-data" },
      { label: "Custom Workflows", href: "/integrations/custom-workflows" },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    children: [
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Banking", href: "/industries/banking" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "Life Sciences", href: "/industries/life-sciences" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "National Government", href: "/industries/national-government" },
      { label: "Nonprofit", href: "/industries/nonprofit" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Technology Providers", href: "/industries/technology-providers" },
      { label: "Telecom", href: "/industries/telecom" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    children: [
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Concepts", href: "/resources/concepts" },
      { label: "Patterns", href: "/resources/patterns" },
      { label: "Comparisons", href: "/resources/comparisons" },
      { label: "Articles", href: "/resources/articles" },
    ],
  },
  {
    id: "company",
    label: "Company",
    children: [
      { label: "About", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
