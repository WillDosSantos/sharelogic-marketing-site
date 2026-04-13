"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterBar } from "@/components/ui/FilterBar";
import { Pagination } from "@/components/ui/Pagination";
import { SearchInput } from "@/components/ui/SearchInput";
import { TagPill } from "@/components/ui/TagPill";
import type { NewsPost, NewsTopic } from "@/lib/types/content";
import { allNewsTags, newsTopics } from "@/lib/data/news";
import { cn } from "@/lib/utils/cn";

const PAGE_SIZE = 6;

type Props = {
  posts: NewsPost[];
  featured: NewsPost;
};

function postYear(publishedAt: string): number {
  return Number(publishedAt.slice(0, 4));
}

function postMonth(publishedAt: string): number {
  return Number(publishedAt.slice(5, 7));
}

export function NewsHubClient({ posts, featured }: Props) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<NewsTopic | "all">("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [year, setYear] = useState<string>("all");
  const [month, setMonth] = useState<string>("all");
  const [page, setPage] = useState(1);

  const tags = useMemo(() => allNewsTags(), []);
  const years = useMemo(() => {
    const ys = new Set<number>();
    posts.forEach((p) => ys.add(postYear(p.publishedAt)));
    return Array.from(ys).sort((a, b) => b - a);
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (p.slug === featured.slug) return false;
      const matchesTopic = topic === "all" || p.topic === topic;
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((t) => p.tags.includes(t));
      const y = postYear(p.publishedAt);
      const m = postMonth(p.publishedAt);
      const matchesYear = year === "all" || String(y) === year;
      const matchesMonth = month === "all" || String(m).padStart(2, "0") === month;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTopic && matchesTags && matchesYear && matchesMonth && matchesQuery;
    });
  }, [posts, featured.slug, query, topic, selectedTags, year, month]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const pageItems = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function toggleTag(tag: string) {
    setPage(1);
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10 sm:py-12">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 shadow-sm">
            <div className="grid gap-0 lg:grid-cols-12">
              <div className="relative aspect-[16/9] lg:col-span-7 lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src={featured.featuredImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Featured</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                  <Link href={`/news/${featured.slug}`} className="hover:underline">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{featured.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <TagPill key={t}>{t}</TagPill>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  {featured.publishedAt} · {featured.author.name}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/news/${featured.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Read article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10 sm:py-12">
          <FilterBar title="Filters">
            <div className="w-full lg:max-w-md">
              <SearchInput
                id="news-search"
                label="Search news"
                placeholder="Search by keyword…"
                value={query}
                onChange={(v) => {
                  setPage(1);
                  setQuery(v);
                }}
              />
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">{filtered.length}</span> articles match your filters
            </p>
          </FilterBar>

          <div className="mt-6 grid gap-4 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <label htmlFor="topic-filter" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Topic
              </label>
              <select
                id="topic-filter"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10"
                value={topic}
                onChange={(e) => {
                  setPage(1);
                  setTopic(e.target.value as NewsTopic | "all");
                }}
              >
                <option value="all">All topics</option>
                {newsTopics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:col-span-4">
              <div>
                <label htmlFor="year-filter" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Year
                </label>
                <select
                  id="year-filter"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10"
                  value={year}
                  onChange={(e) => {
                    setPage(1);
                    setYear(e.target.value);
                  }}
                >
                  <option value="all">All years</option>
                  {years.map((y) => (
                    <option key={y} value={String(y)}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="month-filter" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Month
                </label>
                <select
                  id="month-filter"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10"
                  value={month}
                  onChange={(e) => {
                    setPage(1);
                    setMonth(e.target.value);
                  }}
                >
                  <option value="all">All months</option>
                  {Array.from({ length: 12 }).map((_, idx) => {
                    const m = String(idx + 1).padStart(2, "0");
                    return (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tags</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag) => {
                  const active = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-medium transition",
                        active
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                      )}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {selectedTags.length ? (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500">Active tags:</span>
              {selectedTags.map((t) => (
                <TagPill key={t}>{t}</TagPill>
              ))}
              <button
                type="button"
                className="text-xs font-semibold text-slate-900 underline"
                onClick={() => {
                  setSelectedTags([]);
                  setPage(1);
                }}
              >
                Clear tags
              </button>
            </div>
          ) : null}

          {pageItems.length === 0 ? (
            <EmptyState
              className="mt-10"
              title="No articles match your filters"
              description="Try adjusting topic, date, tags, or search keywords."
              action={
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                  onClick={() => {
                    setQuery("");
                    setTopic("all");
                    setSelectedTags([]);
                    setYear("all");
                    setMonth("all");
                    setPage(1);
                  }}
                >
                  Reset filters
                </button>
              }
            />
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((p) => (
                <ArticleCard
                  key={p.id}
                  href={`/news/${p.slug}`}
                  title={p.title}
                  excerpt={p.excerpt}
                  meta={`${p.publishedAt} · ${p.author.name}`}
                  tags={p.tags}
                />
              ))}
            </div>
          )}

          <Pagination
            className="mt-10"
            page={safePage}
            pageCount={pageCount}
            onPageChange={(p) => setPage(p)}
          />
        </Container>
      </section>
    </>
  );
}
