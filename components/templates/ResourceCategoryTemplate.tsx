import { Hero } from "@/components/sections/Hero";
import { NewsletterBlock } from "@/components/ui/NewsletterBlock";
import { ResourceListingClient } from "@/components/resources/ResourceListingClient";
import type { ResourceCategoryMeta, ResourceItem } from "@/lib/types/content";

type Props = {
  category: ResourceCategoryMeta;
  items: ResourceItem[];
};

export function ResourceCategoryTemplate({ category, items }: Props) {
  return (
    <>
      <Hero title={category.title} subtitle={category.intro} />

      <ResourceListingClient categorySlug={category.slug} items={items} />

      <NewsletterBlock
        title="Stay current on integration patterns"
        description="Get updates when we publish new patterns, comparisons, and implementation notes. Frontend-only placeholder for now."
      />
    </>
  );
}
