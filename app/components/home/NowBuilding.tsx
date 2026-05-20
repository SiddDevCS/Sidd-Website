import Section from "@/app/components/ui/Section";
import { currentlyBuilding } from "@/app/data/stats";

export default function NowBuilding() {
  return (
    <Section spacing="tight" containerClassName="max-w-4xl">
      <div className="surface-elevated rounded-2xl p-6 md:p-8 glow-accent">
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-label text-emerald-400/90">
            {currentlyBuilding.status}
          </span>
        </div>
        <ul className="space-y-4">
          {currentlyBuilding.items.map((item) => (
            <li
              key={item.label}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-white/[0.04] last:border-0 pb-4 last:pb-0"
            >
              <span className="text-white font-medium">{item.label}</span>
              <span className="text-mono-accent">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
