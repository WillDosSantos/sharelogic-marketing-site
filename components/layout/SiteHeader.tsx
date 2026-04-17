"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { LinkButton } from "@/components/ui/LinkButton";
import { EASE_IN_OUT } from "@/lib/motion";
import { mainNavigation } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

const dropdownTransition = { duration: 0.22, ease: EASE_IN_OUT as [number, number, number, number] };
const mobilePanelTransition = { duration: 0.28, ease: EASE_IN_OUT as [number, number, number, number] };

export function SiteHeader() {
  const pathname = usePathname();
  const baseId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const activeHref = useMemo(() => pathname, [pathname]);

  function closeNav() {
    setMobileOpen(false);
    setOpenGroupId(null);
  }

  function onNavigateClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.defaultPrevented) return;
    closeNav();
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenGroupId(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function scheduleClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenGroupId(null), 120);
  }

  function cancelClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#2750F5]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Logo variant="onBrand" />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {mainNavigation.map((group) => {
              if (!group.children?.length && group.href) {
                return (
                  <Link
                    key={group.id}
                    href={group.href}
                    onClick={onNavigateClick}
                    className="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    {group.label}
                  </Link>
                );
              }

              const menuId = `${baseId}-menu-${group.id}`;
              const btnId = `${baseId}-btn-${group.id}`;
              const open = openGroupId === group.id;

              return (
                <div
                  key={group.id}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenGroupId(group.id);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    id={btnId}
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-white hover:bg-white/10",
                      open && "bg-white/10",
                    )}
                    aria-expanded={open}
                    aria-haspopup="true"
                    aria-controls={menuId}
                    onClick={() => setOpenGroupId(open ? null : group.id)}
                  >
                    {group.label}
                    <span className="text-white/70" aria-hidden>
                      ▾
                    </span>
                  </button>
                  <AnimatePresence>
                    {open ? (
                      <motion.div
                        key={menuId}
                        id={menuId}
                        role="menu"
                        aria-labelledby={btnId}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={dropdownTransition}
                        className="absolute left-0 top-full z-50 mt-2 w-[min(100vw-2rem,28rem)] origin-top rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                      >
                        <ul className="max-h-[70vh] overflow-auto py-1">
                          {group.children?.map((child) => {
                            const active = activeHref === child.href;
                            return (
                              <li key={child.href}>
                                <Link
                                  role="menuitem"
                                  href={child.href}
                                  onClick={onNavigateClick}
                                  className={cn(
                                    "block rounded-lg px-3 py-2 text-sm hover:bg-slate-50",
                                    active && "bg-slate-50",
                                  )}
                                >
                                  <span className="font-medium text-slate-900">{child.label}</span>
                                  {child.description ? (
                                    <span className="mt-1 block text-xs text-slate-600">{child.description}</span>
                                  ) : null}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LinkButton href="/contact" variant="nav" onClick={closeNav}>
            Talk with a specialist
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls={`${baseId}-mobile`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-nav"
            id={`${baseId}-mobile`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={mobilePanelTransition}
            className="overflow-hidden border-t border-white/15 bg-[#2750F5] lg:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <div className="space-y-2">
                {mainNavigation.map((group) => {
                  if (!group.children?.length && group.href) {
                    return (
                      <Link
                        key={group.id}
                        href={group.href}
                        onClick={onNavigateClick}
                        className="block rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
                      >
                        {group.label}
                      </Link>
                    );
                  }

                  const expanded = openGroupId === `m-${group.id}`;
                  return (
                    <div key={group.id} className="rounded-lg border border-white/20 bg-white/5">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white"
                        aria-expanded={expanded}
                        onClick={() => setOpenGroupId(expanded ? null : `m-${group.id}`)}
                      >
                        {group.label}
                        <span className="text-white/70" aria-hidden>
                          {expanded ? "▴" : "▾"}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded ? (
                          <motion.div
                            key={`sub-${group.id}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={dropdownTransition}
                            className="border-t border-white/15 bg-[#2750F5]"
                          >
                            <div className="px-2 py-2">
                              <ul className="space-y-1">
                                {group.children?.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={onNavigateClick}
                                      className="block rounded-full px-3 py-2 text-sm text-white hover:bg-white/10"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/news"
                  onClick={onNavigateClick}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  News
                </Link>
                <LinkButton href="/contact" variant="nav" className="w-full" onClick={closeNav}>
                  Talk with a specialist
                </LinkButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
