import { FadeUp } from "@/components/motion/FadeUp";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils/cn";

type Props = {
  title: string;
  logos: string[];
  className?: string;
};

export function LogoStrip({ title, logos, className }: Props) {
  return (
    <section className={cn("border-t border-slate-200 bg-white", className)}>
      <Container className="py-10 sm:py-12">
        <FadeUp>
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
        </FadeUp>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {logos.map((name, index) => (
            <FadeUp key={name} delay={0.05 + index * 0.04}>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                {name}
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
