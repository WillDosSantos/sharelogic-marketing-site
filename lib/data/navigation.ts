import type { NavGroup } from "@/lib/types/content";

/** Top-level nav supports dropdown groups and direct links. */
export const mainNavigation: NavGroup[] = [
  {
    id: "products",
    label: "Products",
    children: [
      { label: "Easy API", href: "/products/easy-api", description: "Composable API surfaces for governed integrations." },
      { label: "Unifi", href: "/products/unifi", description: "Unified connectivity across enterprise systems." },
    ],
  },
  {
    id: "news",
    label: "News",
    href: "/news",
  },
  {
    id: "case-studies",
    label: "Case Studies",
    href: "/resources/case-studies",
  },
  {
    id: "company",
    label: "Company",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
