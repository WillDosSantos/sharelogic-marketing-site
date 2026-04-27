import { cn } from "@/lib/utils/cn";

type GridStreakOverlayProps = {
  className?: string;
};

export function GridStreakOverlay({ className }: GridStreakOverlayProps) {
  return (
    <div className={cn("grid-streak-overlay", className)} aria-hidden>
      <div className="grid-streak-base" />
      <div className="grid-streak-node grid-streak-node-h grid-streak-node-1" />
      <div className="grid-streak-node grid-streak-node-v grid-streak-node-2" />
      <div className="grid-streak-node grid-streak-node-h grid-streak-node-3" />
      <div className="grid-streak-node grid-streak-node-v grid-streak-node-4" />
    </div>
  );
}
