import { cn } from "./ui";

/** Small uppercase label used above section headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[13px] font-semibold tracking-[1.5px] text-secondary",
        className,
      )}
    >
      {children}
    </p>
  );
}

