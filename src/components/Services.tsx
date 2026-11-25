import {
  BotIcon,
  Code2Icon,
  CreditCardIcon,
  DatabaseIcon,
  LayoutIcon,
  RocketIcon,
} from "lucide-react";
import { useTranslation } from "@/providers/language-provider";

const SERVICE_ITEMS = [
  { icon: Code2Icon, titleKey: "services.webDev", descKey: "services.webDevDesc" },
  { icon: LayoutIcon, titleKey: "services.uiUx", descKey: "services.uiUxDesc" },
  { icon: DatabaseIcon, titleKey: "services.backend", descKey: "services.backendDesc" },
  { icon: RocketIcon, titleKey: "services.deployment", descKey: "services.deploymentDesc" },
  { icon: BotIcon, titleKey: "services.chatbot", descKey: "services.chatbotDesc" },
  { icon: CreditCardIcon, titleKey: "services.payment", descKey: "services.paymentDesc" },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--panel)] px-3.5 py-1 text-xs font-semibold text-[var(--accent)]">
            {t("services.badge")}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[var(--fg)] sm:text-4xl lg:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-3 text-base text-[var(--mut)]">
            {t("services.description")}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_ITEMS.map(({ icon: Icon, titleKey, descKey }) => (
            <div
              key={titleKey}
              className="group rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-6 transition-colors hover:border-[var(--accent)]/50"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-[var(--fg)]">
                {t(titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--mut)]">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
