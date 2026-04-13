import type { ResourceCategory } from "@/lib/types/content";

const SLUGS: ResourceCategory[] = ["case-studies", "concepts", "patterns", "comparisons", "articles"];

export function isResourceCategory(slug: string): slug is ResourceCategory {
  return (SLUGS as string[]).includes(slug);
}
