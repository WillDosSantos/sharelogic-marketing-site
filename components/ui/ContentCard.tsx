import { cn } from "@/lib/utils/cn";

type Props = {
  title: string;
  description: string;
  className?: string;
};

export function ContentCard({ title, description, className }: Props) {
  return (
    <div className={cn("rounded-xl border border-slate-200 bg-white p-6 shadow-sm", className)}>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
