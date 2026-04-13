import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "nav";
  /**
   * Styles for buttons on the blue hero (`#2750F5`):
   * - primary: white background, brand text
   * - secondary: glass style
   */
  hero?: boolean;
  className?: string;
  onClick?: () => void;
};

export function LinkButton({ href, children, variant = "primary", hero = false, className, onClick }: Props) {
  const heroSecondary =
    variant === "secondary" &&
    hero &&
    "bg-[rgba(255,255,255,0.15)] text-white shadow-[0_32px_32.4px_0_rgba(0,0,0,0.04)] backdrop-blur-[22px] hover:bg-[rgba(255,255,255,0.22)]";

  const styles =
    variant === "primary" && hero
      ? "bg-white text-[#2750F5] shadow-sm hover:bg-white/95"
      : variant === "primary"
        ? "bg-slate-900 text-white shadow-sm hover:bg-slate-800"
        : variant === "nav"
          ? "bg-white text-[#2750F5] shadow-sm hover:bg-white/95"
          : heroSecondary
            ? heroSecondary
            : "border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold",
        styles,
        className,
      )}
    >
      {children}
    </Link>
  );
}
