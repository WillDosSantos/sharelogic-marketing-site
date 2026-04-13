import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { mainNavigation } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <Container as="div" className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">{siteConfig.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="text-sm font-semibold text-slate-800 underline underline-offset-4 hover:text-slate-950"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-5">
            {mainNavigation.map((group) => (
              <div key={group.id}>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{group.label}</p>
                <ul className="mt-3 space-y-2">
                  {group.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="text-sm text-slate-700 hover:text-slate-950">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span className="text-slate-500">Privacy placeholder</span>
            <span className="text-slate-500">Terms placeholder</span>
            <span className="text-slate-500">Security placeholder</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
