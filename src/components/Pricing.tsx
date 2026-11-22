import { ArrowUpRightIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-divider";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="w-full">
      <div className="rail-container">
        <SectionHeader
          title={t("pricing.title")}
          indexLabel={t("pricing.index")}
          showCrosshair
        />

        <div className="grid grid-cols-1 divide-y divide-[var(--line)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[var(--bg)] p-6 transition-colors hover:bg-[var(--panel)]"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--alert)]">
                    {t(`pricing.card${i}Tag`)}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--mut)]">
                    0{i}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--fg)]">
                  {t(`pricing.card${i}Title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--mut)]">
                  {t(`pricing.card${i}Subtitle`)}
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--line)] pt-4 font-mono text-base font-bold text-[var(--fg)]">
                {t(`pricing.card${i}Price`)}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-[var(--line)] bg-[var(--panel)] px-5 py-5 sm:flex-row sm:items-center md:px-8">
          <p className="font-mono text-xs text-[var(--mut)]">
            {t("pricing.disclaimer")}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="chamfer-btn inline-flex shrink-0 items-center gap-2 bg-[var(--fg)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--bg)] transition-opacity hover:opacity-85"
          >
            <span>{t("pricing.cta")}</span>
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
