import { notFound } from "next/navigation";
import { ResourceCategoryTemplate } from "@/components/templates/ResourceCategoryTemplate";
import { getResourceCategory, getResourcesByCategory, resourceCategories } from "@/lib/data/resources";
import { buildMetadata } from "@/lib/utils/metadata";
import { isResourceCategory } from "@/lib/utils/resource";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resourceCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!isResourceCategory(slug)) return {};
  const category = getResourceCategory(slug);
  if (!category) return {};
  return buildMetadata({
    title: category.seo.title,
    description: category.seo.description,
    path: `/resources/${slug}`,
  });
}

export default async function ResourceCategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!isResourceCategory(slug)) notFound();
  const category = getResourceCategory(slug);
  if (!category) notFound();
  const items = getResourcesByCategory(slug);
  return <ResourceCategoryTemplate category={category} items={items} />;
}
