import { SectionHeader } from "@/components/ui/section-divider";
import { useTranslation } from "@/providers/language-provider";

const STACK_ROWS = [
  { labelKey: "tools.frontendLabel", valueKey: "tools.frontendValue" },
  { labelKey: "tools.backendLabel", valueKey: "tools.backendValue" },
  { labelKey: "tools.integrationsLabel", valueKey: "tools.integrationsValue" },
];

export function TechStack() {
  const { t } = useTranslation();

  return (
    <section id="tools" className="w-full">
      <div className="rail-container">
        <SectionHeader
          title={t("tools.title")}
          indexLabel={t("tools.index")}
        />

        <div className="divide-y divide-[var(--line)]">
          {STACK_ROWS.map((row) => (
            <div
              key={row.labelKey}
              className="grid grid-cols-1 gap-2 px-5 py-4 md:grid-cols-12 md:items-center md:px-8"
            >
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--mut)] md:col-span-4">
                {t(row.labelKey)}
              </div>
              <div className="text-sm font-medium text-[var(--fg)] md:col-span-8">
                {t(row.valueKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
