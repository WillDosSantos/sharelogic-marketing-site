import type { SiteConfig } from "@/lib/types/content";

export const siteConfig: SiteConfig = {
  name: "ShareLogic",
  legalName: "ShareLogic, Inc.",
  description:
    "ShareLogic helps enterprises connect systems, orchestrate workflows, and operate with governance at scale.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sharelogic.example",
  ogImage: "/og-placeholder.svg",
  contact: {
    email: "hello@sharelogic.example",
    phone: "+1 (555) 010-4200",
    addressLines: ["500 Market Street", "Suite 1200", "San Francisco, CA 94105", "United States"],
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sharelogic" },
    { label: "X", href: "https://x.com/sharelogic" },
    { label: "GitHub", href: "https://github.com/sharelogic" },
  ],
};
