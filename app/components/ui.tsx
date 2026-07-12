import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

/** Minimal className joiner (avoids a runtime dependency). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Page container: centers content and applies the Figma section padding
 * (24px on mobile, 80px on wide screens) while keeping a max content width.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-20", className)}>
      {children}
    </div>
  );
}

/**
 * 12-column grid. Pairs with the `.grid-12` component class in globals.css,
 * whose gap is the Figma gutter token (24px). Children set their own width
 * with Tailwind `col-span-*` utilities.
 */
export function Grid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("grid-12", className)}>{children}</div>;
}

type ButtonVariant = "solid" | "dark" | "outline";

const buttonVariants: Record<ButtonVariant, string> = {
  // Rust CTA on light backgrounds.
  solid: "bg-secondary text-white hover:bg-secondary/90",
  // Deep-green CTA used on the rust band.
  dark: "bg-primary-dark text-white hover:bg-primary-dark/90",
  // Bordered CTA for use on colored backgrounds.
  outline: "border border-white text-white hover:bg-white/10",
};

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Button / link styled to the Figma CTA spec (4px radius, semibold label).
 * Renders as an `<a>` by default; pass `as` to change the element.
 */
export function Button<T extends ElementType = "a">({
  as,
  variant = "solid",
  children,
  className,
  ...rest
}: ButtonProps<T>) {
  const Component = (as ?? "a") as ElementType;
  return (
    <Component
      className={cn(
        "flex items-center justify-center gap-2 rounded-btn px-8 py-3.5 text-[15px] font-semibold whitespace-nowrap transition-colors md:px-8 md:py-4 md:text-base",
        buttonVariants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
