import { useState } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

const TABS = [
  {
    id: "tab1",
    labelKey: "process.tab1",
    descKey: "process.tab1Desc",
    tools: ["Figma", "PRD", "User Flow", "Schema"],
    metric: "Week 1",
    previewTitle: "Scope & Architecture",
  },
  {
    id: "tab2",
    labelKey: "process.tab2",
    descKey: "process.tab2Desc",
    tools: ["Design System", "Tailwind", "Responsive UI"],
    metric: "Week 1–2",
    previewTitle: "Interactive UI System",
  },
  {
    id: "tab3",
    labelKey: "process.tab3",
    descKey: "process.tab3Desc",
    tools: ["React", "Next.js", "PostgreSQL", "Claude AI", "Midtrans"],
    metric: "Week 2–3",
    previewTitle: "Fullstack & AI Build",
  },
  {
    id: "tab4",
    labelKey: "process.tab4",
    descKey: "process.tab4Desc",
    tools: ["Vercel", "Analytics", "SEO", "Monitoring"],
    metric: "Week 4",
    previewTitle: "Production Launch",
  },
] as const;

export function ProcessSection() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>("tab1");
  const activeTab = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

  return (
    <section id="process" className="bg-[#010101] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-4xl">
          <div className="text-sm font-medium text-white/60">
            {t("process.eyebrow")}
          </div>
          <h2 className="mt-4 text-4xl font-normal leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-[64px]">
            {t("process.headline")}
          </h2>
        </div>

        <div className="mt-16 border-t border-white/12 pt-14">
          <h3 className="text-2xl font-medium tracking-[-0.02em] text-white sm:text-4xl">
            {t("process.aiTitle")}
          </h3>

          {/* 4-Tab Bar */}
          <div className="mt-8 flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={cn(
                  "cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                  activeId === tab.id
                    ? "bg-white text-[#010101]"
                    : "border border-white/15 bg-[#111113] text-white/70 hover:text-white"
                )}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>

          {/* Interactive Tab Card */}
          <div className="mt-8 grid gap-8 rounded-[28px] bg-[#f9fafa] p-7 text-[#010101] sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-5 lg:col-span-6">
              <span className="inline-flex rounded-full border border-[#e9eaef] bg-white px-3.5 py-1 text-xs font-medium text-[#52525b]">
                {activeTab.metric}
              </span>
              <h4 className="text-2xl font-medium tracking-tight sm:text-3xl">
                {t(activeTab.labelKey)}
              </h4>
              <p className="text-base leading-relaxed text-[#52525b]">
                {t(activeTab.descKey)}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {activeTab.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[#e9eaef] bg-white px-3 py-1 text-xs font-medium text-[#010101]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#010101] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <span>{t("process.cta")}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#e9eaef] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#e9eaef] pb-4">
                  <span className="text-sm font-semibold text-[#010101]">
                    {activeTab.previewTitle}
                  </span>
                  <span className="rounded-full bg-[#010101] px-2.5 py-0.5 text-[11px] font-medium text-white">
                    {activeTab.metric}
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-[#f3f4f6] px-4 py-3 text-xs font-medium text-[#010101]">
                    <span>Deliverable Ready</span>
                    <span className="text-[#16a34a]">Verified ✓</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#e9eaef] p-4">
                      <div className="text-[11px] text-[#52525b]">Stack</div>
                      <div className="mt-1 text-sm font-semibold text-[#010101]">
                        {activeTab.tools[0]}
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#e9eaef] p-4">
                      <div className="text-[11px] text-[#52525b]">Focus</div>
                      <div className="mt-1 text-sm font-semibold text-[#010101]">
                        Production Ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
