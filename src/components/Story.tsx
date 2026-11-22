import { ArrowUpRightIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-divider";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Story() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full">
      <div className="rail-container">
        <SectionHeader
          title={t("story.title")}
          indexLabel={t("story.index")}
        />

        <div className="px-5 py-10 md:px-8 md:py-12">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--mut)]">
            {t("story.greetings")}
          </div>

          <h3 className="text-3xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-[46px]">
            <span className="text-[var(--fg)]">{t("story.headline1")} </span>
            <span className="text-[var(--mut)]">{t("story.headline2")}</span>
          </h3>

          <div className="mt-10 flex flex-col gap-8 border-t border-[var(--line)] pt-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl space-y-4">
              <p className="text-sm leading-relaxed text-[var(--mut)] md:text-base">
                {t("story.paragraph")}
              </p>
              <p className="border-l-2 border-[var(--alert)] pl-4 font-mono text-xs italic text-[var(--fg)]/80 md:text-sm">
                {t("story.quote")}
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="chamfer-btn inline-flex shrink-0 items-center gap-2 self-start bg-[var(--fg)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--bg)] transition-opacity hover:opacity-85 md:self-end"
            >
              <span>{t("story.cta")}</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
