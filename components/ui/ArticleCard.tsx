import Link from "next/link";
import { TagPill } from "@/components/ui/TagPill";
import { cn } from "@/lib/utils/cn";

type Props = {
  href: string;
  title: string;
  excerpt: string;
  meta?: string;
  tags?: string[];
  className?: string;
};

export function ArticleCard({ href, title, excerpt, meta, tags, className }: Props) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300",
        className,
      )}
    >
      <div className="flex flex-wrap gap-2">
        {tags?.map((t) => (
          <TagPill key={t}>{t}</TagPill>
        ))}
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>
      {meta ? <p className="mt-4 text-xs text-slate-500">{meta}</p> : null}
    </article>
  );
}
