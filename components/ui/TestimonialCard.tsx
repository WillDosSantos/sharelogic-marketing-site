import { cn } from "@/lib/utils/cn";

type Props = {
  quote: string;
  name: string;
  title: string;
  className?: string;
};

export function TestimonialCard({ quote, name, title, className }: Props) {
  return (
    <figure
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-6 shadow-sm",
        className,
      )}
    >
      <blockquote className="text-sm leading-relaxed text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold text-slate-900">{name}</span>
        <span className="text-slate-500"> — {title}</span>
      </figcaption>
    </figure>
  );
}
