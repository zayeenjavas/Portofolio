import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex shrink-0 items-center border border-[var(--line)] bg-[var(--panel)]">
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={cn(
          "cursor-pointer px-2.5 py-1.5 font-mono text-[11px] font-semibold tracking-wider transition-colors",
          language === "id"
            ? "bg-[var(--fg)] text-[var(--bg)]"
            : "text-[var(--mut)] hover:text-[var(--fg)]"
        )}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={cn(
          "cursor-pointer border-l border-[var(--line)] px-2.5 py-1.5 font-mono text-[11px] font-semibold tracking-wider transition-colors",
          language === "en"
            ? "bg-[var(--fg)] text-[var(--bg)]"
            : "text-[var(--mut)] hover:text-[var(--fg)]"
        )}
      >
        EN
      </button>
    </div>
  );
}
