import { useTranslation } from "@/providers/language-provider";

export function Story() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-8 sm:p-12">
          <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1 text-xs font-semibold text-[var(--accent)]">
            {t("story.badge")}
          </span>

          <h2 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            <span className="text-[var(--fg)]">{t("story.headline1")} </span>
            <span className="text-[var(--mut)]">{t("story.headline2")}</span>
          </h2>

          <div className="mt-8 grid gap-6 border-t border-[var(--line)] pt-8 lg:grid-cols-12 lg:items-center">
            <p className="text-base leading-relaxed text-[var(--mut)] lg:col-span-8">
              {t("story.paragraph")}
            </p>
            <blockquote className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 text-sm font-medium italic text-[var(--fg)] lg:col-span-4">
              {t("story.quote")}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
