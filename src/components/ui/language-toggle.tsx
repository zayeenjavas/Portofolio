import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex shrink-0 items-center rounded-full border border-[var(--line)] bg-[var(--surface)] p-0.5">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={cn(
          "cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors",
          language === "en"
            ? "bg-[var(--fg)] text-[var(--bg)]"
            : "text-[var(--mut)] hover:text-[var(--fg)]"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={cn(
          "cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors",
          language === "id"
            ? "bg-[var(--fg)] text-[var(--bg)]"
            : "text-[var(--mut)] hover:text-[var(--fg)]"
        )}
      >
        ID
      </button>
    </div>
  );
}
