import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex shrink-0 items-center rounded-full border border-[#e9eaef] bg-white/85 p-0.5 backdrop-blur-md">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={cn(
          "cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors",
          language === "en"
            ? "bg-[#010101] text-white"
            : "text-[#52525b] hover:text-[#010101]"
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
            ? "bg-[#010101] text-white"
            : "text-[#52525b] hover:text-[#010101]"
        )}
      >
        ID
      </button>
    </div>
  );
}
