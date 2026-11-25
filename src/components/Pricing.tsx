import { ArrowUpRightIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium leading-[1.12] tracking-[-0.03em] text-[#010101] sm:text-[52px]">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 text-base text-[#52525b] sm:text-lg">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((i) => {
            const isPopular = i === 2;
            return (
              <div
                key={i}
                className={cn(
                  "flex flex-col justify-between rounded-[28px] border p-8 transition-shadow",
                  isPopular
                    ? "border-[#010101] bg-[#010101] text-white shadow-2xl"
                    : "border-[#e9eaef] bg-[#f9fafa] text-[#010101]"
                )}
              >
                <div>
                  <span
                    className={cn(
                      "inline-flex rounded-full px-3 py-1 text-[11px] font-medium tracking-wider",
                      isPopular
                        ? "bg-white text-[#010101]"
                        : "border border-[#e9eaef] bg-white text-[#52525b]"
                    )}
                  >
                    {t(`pricing.card${i}Tag`)}
                  </span>

                  <h3 className="mt-5 text-2xl font-medium tracking-tight">
                    {t(`pricing.card${i}Title`)}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      isPopular ? "text-white/75" : "text-[#52525b]"
                    )}
                  >
                    {t(`pricing.card${i}Subtitle`)}
                  </p>

                  <div className="mt-8 text-3xl font-medium tracking-tight">
                    {t(`pricing.card${i}Price`)}
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-medium transition-opacity hover:opacity-90",
                    isPopular
                      ? "bg-white text-[#010101]"
                      : "bg-[#010101] text-white"
                  )}
                >
                  <span>{t("pricing.cta")}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-[#52525b]">
          {t("pricing.disclaimer")}
        </p>
      </div>
    </section>
  );
}
