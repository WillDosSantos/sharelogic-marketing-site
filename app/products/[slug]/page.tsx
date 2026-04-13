import { notFound } from "next/navigation";
import { ProductTemplate } from "@/components/templates/ProductTemplate";
import { UnifiProductTemplate } from "@/components/templates/UnifiProductTemplate";
import { getProductBySlug, products } from "@/lib/data/products";
import { buildMetadata } from "@/lib/utils/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  if (product.slug === "unifi") {
    return <UnifiProductTemplate product={product} />;
  }
  return <ProductTemplate product={product} />;
}
