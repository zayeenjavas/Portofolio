import { useTranslation } from "@/providers/language-provider";

const STEPS = [
  { num: "01", titleKey: "process.step1Title", descKey: "process.step1Desc" },
  { num: "02", titleKey: "process.step2Title", descKey: "process.step2Desc" },
  { num: "03", titleKey: "process.step3Title", descKey: "process.step3Desc" },
  { num: "04", titleKey: "process.step4Title", descKey: "process.step4Desc" },
];

export function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--panel)] px-3.5 py-1 text-xs font-semibold text-[var(--accent)]">
            {t("process.badge")}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[var(--fg)] sm:text-4xl lg:text-5xl">
            {t("process.title")}
          </h2>
          <p className="mt-3 text-base text-[var(--mut)]">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-6"
            >
              <span className="font-mono text-xs font-bold text-[var(--accent)]">
                STEP {step.num}
              </span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-[var(--fg)]">
                {t(step.titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--mut)]">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
