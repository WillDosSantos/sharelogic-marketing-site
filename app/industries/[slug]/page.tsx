import { notFound } from "next/navigation";
import { IndustryTemplate } from "@/components/templates/IndustryTemplate";
import { getIndustryBySlug, industries } from "@/lib/data/industries";
import { buildMetadata } from "@/lib/utils/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryTemplate industry={industry} />;
}
