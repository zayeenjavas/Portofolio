import { useState } from "react";
import { ArrowUpRightIcon, FolderGit2Icon, LockIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

type FilterCategory = "all" | "pwa" | "webapp" | "profile";

type CaseStudy = {
  id: string;
  filter: Exclude<FilterCategory, "all">;
  nameKey: string;
  badgeKey: string;
  categoryKey: string;
  problemKey: string;
  solutionKey: string;
  stack: string[];
  url: string;
  repoUrl?: string;
  isPrivate?: boolean;
  accent: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "sabana",
    filter: "pwa",
    nameKey: "portfolio.sabanaName",
    badgeKey: "portfolio.sabanaBadge",
    categoryKey: "portfolio.sabanaCategory",
    problemKey: "portfolio.sabanaProblem",
    solutionKey: "portfolio.sabanaSolution",
    stack: ["React", "Vite", "PWA", "Tailwind"],
    url: "https://sabana-adventure.vercel.app/",
    isPrivate: true,
    accent: "#10b981",
  },
  {
    id: "scholarify",
    filter: "webapp",
    nameKey: "portfolio.scholarifyName",
    badgeKey: "portfolio.scholarifyBadge",
    categoryKey: "portfolio.scholarifyCategory",
    problemKey: "portfolio.scholarifyProblem",
    solutionKey: "portfolio.scholarifySolution",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Analytics"],
    url: "https://scholarify.id/",
    repoUrl:
      "https://github.com/ZayeenJavas313/Company-Profile---Scholarify-Academy/tree/main/landing-page",
    accent: "#3b82f6",
  },
  {
    id: "aira",
    filter: "profile",
    nameKey: "portfolio.airaName",
    badgeKey: "portfolio.airaBadge",
    categoryKey: "portfolio.airaCategory",
    problemKey: "portfolio.airaProblem",
    solutionKey: "portfolio.airaSolution",
    stack: ["React", "Booking Flow", "Tailwind"],
    url: "https://aira-dry-cleaning.vercel.app/",
    repoUrl: "https://github.com/ZayeenJavas313/Aira-Dry-Cleaning",
    accent: "#8b5cf6",
  },
];

function MockupPreview({ id, accent }: { id: string; accent: string }) {
  return (
    <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accent}, transparent 70%)`,
        }}
      />
      <div className="relative w-full max-w-[260px] rounded-xl border border-[var(--line)] bg-[var(--panel)] p-3 shadow-lg">
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-red-400/70" />
            <span className="size-2 rounded-full bg-amber-400/70" />
            <span className="size-2 rounded-full bg-emerald-400/70" />
          </div>
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            {id === "sabana" ? "PWA · A26-CS204" : id === "scholarify" ? "SNBT CBT" : "BOOKING"}
          </span>
        </div>

        <div className="space-y-2">
          <div className="h-2.5 w-3/4 rounded-full bg-[var(--fg)]/15" />
          <div className="h-2 w-1/2 rounded-full bg-[var(--mut)]/25" />
          <div className="grid grid-cols-3 gap-1.5 pt-1.5">
            <div className="h-10 rounded-lg border border-[var(--line)] bg-[var(--surface)]" />
            <div className="h-10 rounded-lg border border-[var(--line)] bg-[var(--surface)]" />
            <div className="h-10 rounded-lg border border-[var(--line)] bg-[var(--surface)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filters: { key: FilterCategory; labelKey: string }[] = [
    { key: "all", labelKey: "portfolio.filterAll" },
    { key: "pwa", labelKey: "portfolio.filterPwa" },
    { key: "webapp", labelKey: "portfolio.filterWebApp" },
    { key: "profile", labelKey: "portfolio.filterProfile" },
  ];

  const visibleProjects =
    activeFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.filter === activeFilter);

  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--panel)] px-3.5 py-1 text-xs font-semibold text-[var(--accent)]">
              {t("portfolio.badge")}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[var(--fg)] sm:text-4xl lg:text-5xl">
              {t("portfolio.title")}
            </h2>
            <p className="mt-3 text-base text-[var(--mut)]">
              {t("portfolio.subtitle")}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
                  activeFilter === f.key
                    ? "border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]"
                    : "border-[var(--line)] bg-[var(--panel)] text-[var(--mut)] hover:text-[var(--fg)]"
                )}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--fg)]/25"
            >
              <div>
                <MockupPreview id={project.id} accent={project.accent} />

                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-[var(--fg)]">
                    {t(project.nameKey)}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--mut)]">
                    {project.isPrivate && <LockIcon className="size-3 text-[var(--accent)]" />}
                    {t(project.badgeKey)}
                  </span>
                </div>

                <div className="mt-4 space-y-2.5 text-sm">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--mut)]">
                      {t("portfolio.problemLabel")}:{" "}
                    </span>
                    <span className="text-[var(--mut)]">{t(project.problemKey)}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {t("portfolio.solutionLabel")}:{" "}
                    </span>
                    <span className="text-[var(--fg)]/90">{t(project.solutionKey)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-[var(--line)] pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--mut)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[var(--fg)] px-4 py-2 text-xs font-semibold text-[var(--bg)] transition-opacity hover:opacity-90"
                  >
                    <span>{t("portfolio.liveDemo")}</span>
                    <ArrowUpRightIcon className="size-3.5" />
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--fg)] transition-colors hover:bg-[var(--panel)]"
                    >
                      <FolderGit2Icon className="size-3.5" />
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
