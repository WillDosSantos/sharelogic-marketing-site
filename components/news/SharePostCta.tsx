"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  shareUrl: string;
  title: string;
};

function encoded(value: string): string {
  return encodeURIComponent(value);
}

export function SharePostCta({ shareUrl, title }: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  const xHref = `https://x.com/intent/tweet?url=${encoded(shareUrl)}&text=${encoded(title)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encoded(shareUrl)}`;
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encoded(shareUrl)}`;

  return (
    <section className="border-t border-slate-200">
      <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Share this post</h3>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onCopyLink}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-5 py-2 text-lg font-semibold text-blue-700 transition hover:bg-blue-50"
            aria-label="Copy article link"
          >
            <span aria-hidden>⧉</span>
            {copied ? "Copied!" : "Copy link"}
          </button>
          <Link
            href={xHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 text-lg font-semibold text-blue-700 transition hover:bg-blue-50"
            aria-label="Share on X"
          >
            X
          </Link>
          <Link
            href={facebookHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 text-lg font-semibold text-blue-700 transition hover:bg-blue-50"
            aria-label="Share on Facebook"
          >
            f
          </Link>
          <Link
            href={linkedInHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 text-lg font-semibold text-blue-700 transition hover:bg-blue-50"
            aria-label="Share on LinkedIn"
          >
            in
          </Link>
        </div>
      </div>
    </section>
  );
}
