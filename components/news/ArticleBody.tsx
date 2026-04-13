import type { ReactNode } from "react";

type Props = {
  content: string;
};

export function ArticleBody({ content }: Props) {
  const lines = content.trim().split("\n");
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  function flushList() {
    if (!listItems.length) return;
    blocks.push(
      <ul key={`ul-${key++}`} className="my-4 list-disc space-y-2 pl-5 text-slate-700">
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>,
    );
    listItems = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const t = line.trim();

    if (t === "") {
      flushList();
      continue;
    }

    if (t === "---") {
      flushList();
      blocks.push(<hr key={`hr-${key++}`} className="my-8 border-slate-200" />);
      continue;
    }

    if (t.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2 key={`h2-${key++}`} className="mt-10 scroll-mt-28 text-xl font-semibold tracking-tight text-slate-900 first:mt-0">
          {t.slice(3)}
        </h2>,
      );
      continue;
    }

    if (t.startsWith("### ")) {
      flushList();
      blocks.push(
        <h3 key={`h3-${key++}`} className="mt-8 text-lg font-semibold text-slate-900">
          {t.slice(4)}
        </h3>,
      );
      continue;
    }

    if (t.startsWith("- ")) {
      listItems.push(t.slice(2));
      continue;
    }

    flushList();
    blocks.push(
      <p key={`p-${key++}`} className="mt-4 text-base leading-relaxed text-slate-700">
        {t}
      </p>,
    );
  }

  flushList();

  return <div className="prose-custom">{blocks}</div>;
}
