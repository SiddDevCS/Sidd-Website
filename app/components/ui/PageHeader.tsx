import { cn } from "@/app/lib/cn";

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function PageHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && <p className="text-label mb-4 text-blue-400/80">{label}</p>}
      <h1 className="text-headline text-gradient mb-4">{title}</h1>
      {description && (
        <p className="text-subhead text-neutral-500">{description}</p>
      )}
    </header>
  );
}
