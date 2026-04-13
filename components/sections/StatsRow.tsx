import { FadeUp } from "@/components/motion/FadeUp";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils/cn";

export type Stat = {
  label: string;
  value: string;
  hint?: string;
};

type Props = {
  stats: Stat[];
  className?: string;
};

export function StatsRow({ stats, className }: Props) {
  return (
    <section className={cn("border-t border-slate-200 bg-white", className)}>
      <Container className="py-10 sm:py-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s, index) => (
            <FadeUp key={s.label} delay={index * 0.08}>
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <p className="text-2xl font-semibold tracking-tight text-slate-900">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-800">{s.label}</p>
                {s.hint ? <p className="mt-2 text-sm text-slate-600">{s.hint}</p> : null}
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
