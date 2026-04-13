"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { FilterBar } from "@/components/ui/FilterBar";
import { Pagination } from "@/components/ui/Pagination";
import { SearchInput } from "@/components/ui/SearchInput";
import { TagPill } from "@/components/ui/TagPill";
import type { ResourceCategory, ResourceItem } from "@/lib/types/content";
import { cn } from "@/lib/utils/cn";

const PAGE_SIZE = 6;

type Props = {
  categorySlug: ResourceCategory;
  items: ResourceItem[];
};

function uniqTags(items: ResourceItem[]): string[] {
  const s = new Set<string>();
  items.forEach((i) => i.tags.forEach((t) => s.add(t)));
  return Array.from(s).sort((a, b) => a.localeCompare(b));
}

export function ResourceListingClient({ categorySlug, items }: Props) {
  const allTags = useMemo(() => uniqTags(items), [items]);
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((t) => item.tags.includes(t));
      return matchesQuery && matchesTags;
    });
  }, [items, query, selectedTags]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const pageItems = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function toggleTag(tag: string) {
    setPage(1);
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  return (
    <section className="border-t border-slate-200 bg-white">
      <Container className="py-10 sm:py-12">
        <FilterBar title="Find resources">
          <div className="w-full lg:max-w-md">
            <SearchInput
              id={`resource-search-${categorySlug}`}
              label="Search resources"
              placeholder="Search…"
              value={query}
              onChange={(v) => {
                setPage(1);
                setQuery(v);
              }}
            />
          </div>
          <p className="text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filtered.length}</span> of{" "}
            <span className="font-semibold text-slate-900">{items.length}</span>
          </p>
        </FilterBar>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tags</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {allTags.map((tag) => {
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
          {selectedTags.length ? (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500">Active filters:</span>
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
                Clear
              </button>
            </div>
          ) : null}
        </div>

        {pageItems.length === 0 ? (
          <EmptyState
            className="mt-10"
            title="No resources match your filters"
            description="Try clearing tags or broadening your search keywords."
            action={
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                onClick={() => {
                  setQuery("");
                  setSelectedTags([]);
                  setPage(1);
                }}
              >
                Reset filters
              </button>
            }
          />
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((item) => (
              <div key={item.id} id={`resource-${item.slug}`} className="scroll-mt-24">
                <ArticleCard
                  href={`/resources/${categorySlug}#resource-${item.slug}`}
                  title={item.title}
                  excerpt={item.excerpt}
                  meta={`${item.publishedAt} · ${item.readTimeMinutes} min read`}
                  tags={item.tags}
                />
              </div>
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
  );
}
