import { SectionHeader } from "@/components/ui/section-divider";
import { useTranslation } from "@/providers/language-provider";

const SERVICE_KEYS = [
  { titleKey: "services.webDev", descKey: "services.webDevDesc" },
  { titleKey: "services.uiUx", descKey: "services.uiUxDesc" },
  { titleKey: "services.backend", descKey: "services.backendDesc" },
  { titleKey: "services.deployment", descKey: "services.deploymentDesc" },
  { titleKey: "services.chatbot", descKey: "services.chatbotDesc" },
  { titleKey: "services.payment", descKey: "services.paymentDesc" },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="w-full">
      <div className="rail-container">
        <SectionHeader
          title={t("services.title")}
          indexLabel={t("services.index")}
        />

        <div className="border-b border-[var(--line)] bg-[var(--panel)]/40 px-5 py-4 text-sm text-[var(--mut)] md:px-8">
          {t("services.description")}
        </div>

        <div className="divide-y divide-[var(--line)]">
          {SERVICE_KEYS.map((item, idx) => (
            <div
              key={item.titleKey}
              className="grid grid-cols-1 gap-1.5 px-5 py-4 transition-colors hover:bg-[var(--panel)] md:grid-cols-12 md:items-center md:gap-6 md:px-8 md:py-5"
            >
              <div className="flex items-center gap-3 md:col-span-5">
                <span className="font-mono text-xs font-semibold text-[var(--alert)]">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-semibold tracking-tight text-[var(--fg)] md:text-lg">
                  {t(item.titleKey)}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--mut)] md:col-span-7">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
