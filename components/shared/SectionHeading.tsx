import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <p
          className={cn(
            "text-xs font-semibold tracking-[0.2em] uppercase mb-3",
            light ? "text-ck-leaf-light" : "text-ck-leaf"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight",
          light ? "text-ck-cream" : "text-ck-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-ck-cream/75" : "text-ck-charcoal/65"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
