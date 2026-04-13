import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

const baseUrl = siteConfig.url;

export function buildMetadata(override: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = override.path ? `${baseUrl}${override.path}` : baseUrl;
  const og = override.ogImage ?? siteConfig.ogImage;

  return {
    title: override.title,
    description: override.description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: override.title,
      description: override.description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: og, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: override.title,
      description: override.description,
      images: [og],
    },
  };
}
