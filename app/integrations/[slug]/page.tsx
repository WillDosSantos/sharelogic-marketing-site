import { notFound } from "next/navigation";
import { IntegrationTemplate } from "@/components/templates/IntegrationTemplate";
import { getIntegrationBySlug, integrations } from "@/lib/data/integrations";
import { buildMetadata } from "@/lib/utils/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);
  if (!integration) return {};
  return buildMetadata({
    title: integration.seo.title,
    description: integration.seo.description,
    path: `/integrations/${slug}`,
  });
}

export default async function IntegrationPage({ params }: Props) {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);
  if (!integration) notFound();
  return <IntegrationTemplate integration={integration} />;
}
