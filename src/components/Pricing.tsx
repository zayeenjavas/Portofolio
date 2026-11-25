import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--panel)] px-3.5 py-1 text-xs font-semibold text-[var(--accent)]">
            {t("pricing.badge")}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[var(--fg)] sm:text-4xl lg:text-5xl">
            {t("pricing.title")}
          </h2>
          <p className="mt-3 text-base text-[var(--mut)]">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((i) => {
            const isPopular = i === 2;
            return (
              <div
                key={i}
                className={cn(
                  "flex flex-col justify-between rounded-3xl border bg-[var(--panel)] p-7 transition-colors",
                  isPopular
                    ? "border-[var(--accent)] shadow-xl shadow-[var(--accent)]/10"
                    : "border-[var(--line)]"
                )}
              >
                <div>
                  <span
                    className={cn(
                      "inline-flex rounded-full px-3 py-1 text-[11px] font-bold tracking-wider",
                      isPopular
                        ? "bg-[var(--accent)] text-white"
                        : "border border-[var(--line)] bg-[var(--surface)] text-[var(--mut)]"
                    )}
                  >
                    {t(`pricing.card${i}Tag`)}
                  </span>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--fg)]">
                    {t(`pricing.card${i}Title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--mut)]">
                    {t(`pricing.card${i}Subtitle`)}
                  </p>

                  <div className="mt-6 text-2xl font-extrabold tracking-tight text-[var(--fg)] sm:text-3xl">
                    {t(`pricing.card${i}Price`)}
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--fg)]/90">
                    {[1, 2, 3].map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" />
                        <span>{t(`pricing.card${i}Feat${f}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold transition-opacity hover:opacity-90",
                    isPopular
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--fg)] text-[var(--bg)]"
                  )}
                >
                  <span>{t("pricing.cta")}</span>
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-[var(--mut)]">
          {t("pricing.disclaimer")}
        </p>
      </div>
    </section>
  );
}
