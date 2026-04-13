"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
  title?: string;
};

export function FilterBar({ children, className, title }: Props) {
  return (
    <div className={cn("rounded-xl border border-slate-200 bg-white p-4 shadow-sm", className)}>
      {title ? <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p> : null}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">{children}</div>
    </div>
  );
}
