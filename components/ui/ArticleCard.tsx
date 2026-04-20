import Link from "next/link";
import Image from "next/image";
import { TagPill } from "@/components/ui/TagPill";
import { cn } from "@/lib/utils/cn";

type Props = {
  href: string;
  title: string;
  excerpt: string;
  meta?: string;
  tags?: string[];
  imageSrc?: string;
  topicLabel?: string;
  authorName?: string;
  publishedAt?: string;
  className?: string;
};

function formatDisplayDate(value: string): string {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function authorInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function ArticleCard({
  href,
  title,
  excerpt,
  meta,
  tags,
  imageSrc,
  topicLabel,
  authorName,
  publishedAt,
  className,
}: Props) {
  const displayMeta = publishedAt && authorName ? `${formatDisplayDate(publishedAt)}` : meta;

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300",
        className,
      )}
    >
      {imageSrc ? (
        <Link href={href} className="relative block aspect-[16/10] bg-slate-100">
          <Image src={imageSrc} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" unoptimized />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        {topicLabel ? <p className="text-xs font-semibold text-blue-600">{topicLabel}</p> : null}
        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          <Link href={href} className="inline-flex items-start gap-2 hover:underline">
            <span>{title}</span>
            {imageSrc ? <span aria-hidden>↗</span> : null}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>
        {tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </div>
        ) : null}
        {displayMeta ? (
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            {authorName ? (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-[10px] font-semibold text-slate-700">
                {authorInitials(authorName)}
              </span>
            ) : null}
            <span>{authorName ? `${authorName} · ${displayMeta}` : displayMeta}</span>
          </div>
        ) : null}
      </div>
    </article>
  );
}
