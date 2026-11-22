import { cn } from "@/lib/utils";

export function HatchedDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("hatched-band relative", className)}
    />
  );
}

type SectionHeaderProps = {
  title: string;
  indexLabel: string;
  showCrosshair?: boolean;
};

export function SectionHeader({
  title,
  indexLabel,
  showCrosshair = false,
}: SectionHeaderProps) {
  return (
    <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] px-5 py-6 md:px-8">
      {showCrosshair && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-[9px] -left-[6px] select-none font-mono text-xs leading-none text-[var(--mut)]"
        >
          +
        </span>
      )}
      <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--fg)] md:text-[32px] md:leading-none">
        {title}
      </h2>
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[var(--mut)]">
        <span
          aria-hidden="true"
          className="inline-block size-2 bg-[var(--alert)]"
        />
        <span>{indexLabel}</span>
      </div>
    </div>
  );
}
