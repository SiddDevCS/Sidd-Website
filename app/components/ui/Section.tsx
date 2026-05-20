import { cn } from "@/app/lib/cn";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  size?: "default" | "narrow" | "wide";
  spacing?: "default" | "tight" | "loose";
}

const spacingMap = {
  tight: "py-16 md:py-20",
  default: "py-20 md:py-28",
  loose: "py-24 md:py-32",
};

export default function Section({
  children,
  className,
  containerClassName,
  id,
  size = "default",
  spacing = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn(spacingMap[spacing], className)}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
