import { cn } from "@/app/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted" | "success";
  className?: string;
}

const variants = {
  default: "bg-white/[0.04] text-neutral-400 border-white/[0.06]",
  accent: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  muted: "bg-neutral-800/50 text-neutral-500 border-transparent",
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
