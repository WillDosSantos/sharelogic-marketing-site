import type { SiteConfig } from "@/lib/types/content";

export const siteConfig: SiteConfig = {
  name: "ShareLogic",
  legalName: "ShareLogic Ltd.",
  description:
    "ShareLogic helps enterprises connect systems, orchestrate workflows, and operate with governance at scale.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sharelogic.com",
  ogImage: "/og-placeholder.svg",
  contact: {
    email: "hello@sharelogic.com",
    phone: "+44 (0) 333 444 1337",
    addressLines: ["1 Canada Square", "London", "E14 5AA", "United Kingdom"],
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sharelogic" },
    { label: "X", href: "https://x.com/sharelogicapps" },
    // { label: "GitHub", href: "https://github.com/sharelogic" },
  ],
};
