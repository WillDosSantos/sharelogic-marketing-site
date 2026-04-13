import { FadeUp } from "@/components/motion/FadeUp";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils/cn";

type Props = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({ title, description, className }: Props) {
  return (
    <Container className={cn("py-12 sm:py-14", className)}>
      <FadeUp className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
        {description ? <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">{description}</p> : null}
      </FadeUp>
    </Container>
  );
}
