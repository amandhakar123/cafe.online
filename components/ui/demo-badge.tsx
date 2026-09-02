import { cafeConfig } from "@/data/cafe";

interface DemoBadgeProps {
  label: string;
}

export function DemoBadge({ label }: DemoBadgeProps) {
  if (!cafeConfig.demoMode) return null;

  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 border border-amber-500/30 text-amber-400/80 text-[10px] tracking-widest uppercase backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
      <span>DEMO: {label}</span>
    </div>
  );
}
