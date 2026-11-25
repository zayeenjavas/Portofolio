import { ArrowUpRightIcon, FolderGit2Icon, LockIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";

const PROJECTS = [
  {
    id: "sabana",
    nameKey: "portfolio.sabanaName",
    catKey: "portfolio.sabanaCat",
    descKey: "portfolio.sabanaDesc",
    metricKey: "portfolio.sabanaMetric",
    url: "https://sabana-adventure.vercel.app/",
    isPrivate: true,
    tint: "from-[#d8efe4] to-[#f3f4f6]",
    badge: "PWA · A26-CS204",
  },
  {
    id: "scholarify",
    nameKey: "portfolio.scholarifyName",
    catKey: "portfolio.scholarifyCat",
    descKey: "portfolio.scholarifyDesc",
    metricKey: "portfolio.scholarifyMetric",
    url: "https://scholarify.id/",
    repoUrl:
      "https://github.com/ZayeenJavas313/Company-Profile---Scholarify-Academy/tree/main/landing-page",
    tint: "from-[#dbeafe] to-[#f3f4f6]",
    badge: "Next.js · SNBT",
  },
  {
    id: "aira",
    nameKey: "portfolio.airaName",
    catKey: "portfolio.airaCat",
    descKey: "portfolio.airaDesc",
    metricKey: "portfolio.airaMetric",
    url: "https://aira-dry-cleaning.vercel.app/",
    repoUrl: "https://github.com/ZayeenJavas313/Aira-Dry-Cleaning",
    tint: "from-[#ede9fe] to-[#f3f4f6]",
    badge: "React · Booking",
  },
];

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="work" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.03em] text-[#010101] sm:text-[52px]">
            {t("portfolio.title")}
          </h2>
          <a
            href="#pricing"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#010101] underline-offset-4 hover:underline"
          >
            <span>{t("portfolio.viewAll")}</span>
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>

        <div className="mt-14 space-y-10">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="grid gap-8 rounded-[28px] border border-[#e9eaef] bg-white p-6 transition-shadow hover:shadow-xl sm:p-10 lg:grid-cols-12 lg:items-center"
            >
              {/* Left: Visual Preview Frame */}
              <div
                className={`flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br ${project.tint} p-6 sm:h-80 lg:col-span-6`}
              >
                <div className="w-full max-w-sm rounded-2xl border border-black/8 bg-white p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-black/15" />
                      <span className="size-2.5 rounded-full bg-black/15" />
                      <span className="size-2.5 rounded-full bg-black/15" />
                    </div>
                    <span className="rounded-full bg-[#010101] px-2.5 py-0.5 text-[10px] font-medium text-white">
                      {project.badge}
                    </span>
                  </div>
                  <div className="mt-5 text-lg font-semibold text-[#010101]">
                    {t(project.nameKey)}
                  </div>
                  <div className="mt-1 text-xs text-[#52525b]">
                    {t(project.metricKey)}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-xl bg-[#f3f4f6]" />
                    <div className="h-12 rounded-xl bg-[#f3f4f6]" />
                    <div className="h-12 rounded-xl bg-[#f3f4f6]" />
                  </div>
                </div>
              </div>

              {/* Right: Case Study Info */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-6 lg:pl-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e9eaef] bg-[#f9fafa] px-3 py-1 text-xs font-medium text-[#52525b]">
                    {project.isPrivate && <LockIcon className="size-3 text-[#010101]" />}
                    <span>{t(project.catKey)}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-[#010101] sm:text-[32px]">
                    {t(project.nameKey)}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-[#52525b]">
                    {t(project.descKey)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="orbix-shadow inline-flex h-11 items-center gap-2 rounded-full bg-[#010101] px-6 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                  >
                    <span>{t("portfolio.liveDemo")}</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-[#e9eaef] bg-white px-5 text-sm font-medium text-[#010101] transition-colors hover:bg-[#f3f4f6]"
                    >
                      <FolderGit2Icon className="size-4" />
                      <span>{t("portfolio.repo")}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
