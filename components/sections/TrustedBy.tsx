import Image from "next/image";
import { Container } from "@/components/layout/Container";

/** Logos under `public/trust-by-logos/` — update this list when files change. */
const TRUSTED_LOGO_SRCS = [
  "/trust-by-logos/logo.svg",
  "/trust-by-logos/logo-1.svg",
  "/trust-by-logos/logo-2.svg",
  "/trust-by-logos/logo-3.svg",
  "/trust-by-logos/logo-4.svg",
  "/trust-by-logos/logo-5.svg",
  "/trust-by-logos/logo-6.svg",
  "/trust-by-logos/logo-7.svg",
] as const;

export function TrustedBy() {
  return (
    <section className="border-t border-slate-200 bg-white" aria-labelledby="trusted-by-heading">
      <Container className="py-24 sm:py-32">
        <h2 id="trusted-by-heading" className="text-center text-sm font-medium tracking-wide text-slate-500">
          Trusted by
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6">
          {TRUSTED_LOGO_SRCS.map((src) => (
            <li key={src}>
              <div className="flex min-h-[4.5rem] items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <Image
                  src={src}
                  alt=""
                  width={180}
                  height={48}
                  className="h-10 w-auto max-w-full object-contain object-center"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
