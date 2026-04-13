import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils/cn";

export type FeatureItem = {
  title: string;
  description: string;
  /** Optional icon path under `public/` (e.g. `/section-2/icon-cube.svg`). */
  iconSrc?: string;
};

type Props = {
  items: FeatureItem[];
  className?: string;
  columns?: 2 | 3;
};

export function FeatureGrid({ items, className, columns = 3 }: Props) {
  const grid =
    columns === 2 ? "grid gap-6 sm:grid-cols-2" : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={cn(className)}>
      <Container className="pb-12 sm:py-14">
        <div className={grid}>
          {items.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.06} className="h-full">
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                {item.iconSrc ? (
                 
                    <Image
                      src={item.iconSrc}
                      alt=""
                      width={96}
                      height={96}
                      className="h-14 w-14 object-contain mb-4"
                    />
                 
                ) : null}
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
