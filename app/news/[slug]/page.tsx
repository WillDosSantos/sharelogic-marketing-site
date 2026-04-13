import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/news/ArticleBody";
import { Container } from "@/components/layout/Container";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { TagPill } from "@/components/ui/TagPill";
import { getPostBySlug, getRelatedPosts, newsPosts, newsTopics } from "@/lib/data/news";
import { buildMetadata } from "@/lib/utils/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/news/${slug}`,
    ogImage: post.featuredImage,
  });
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const topicLabel = newsTopics.find((t) => t.id === post.topic)?.label ?? post.topic;

  return (
    <>
      <article>
        <div className="border-b border-slate-200 bg-white">
          <Container className="py-10 sm:py-12">
            <Link href="/news" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
              ← Back to news
            </Link>
            <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <TagPill key={t}>{t}</TagPill>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              {post.publishedAt} · {post.author.name}
              {post.author.role ? ` · ${post.author.role}` : ""}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Topic: <span className="font-medium text-slate-800">{topicLabel}</span>
            </p>
          </Container>
        </div>

        <div className="relative aspect-[21/9] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
          <Image
            src={post.featuredImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
            unoptimized
          />
        </div>

        <Container className="py-10 sm:py-12">
          <ArticleBody content={post.body} />
        </Container>
      </article>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <Container className="py-12 sm:py-14">
          <h2 className="text-xl font-semibold text-slate-900">Related posts</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <ArticleCard
                key={r.id}
                href={`/news/${r.slug}`}
                title={r.title}
                excerpt={r.excerpt}
                meta={`${r.publishedAt} · ${r.author.name}`}
                tags={r.tags}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
