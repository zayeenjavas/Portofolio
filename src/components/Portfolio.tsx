import { ArrowUpRightIcon, FolderGit2Icon, LockIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-divider";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

type ProjectItem = {
  id: string;
  nameKey: string;
  badgeKey: string;
  descKey: string;
  categoryKey: string;
  stack: string;
  url: string;
  repoUrl?: string;
  isPrivate?: boolean;
  isCta?: boolean;
};

const PROJECTS: ProjectItem[] = [
  {
    id: "sabana",
    nameKey: "portfolio.sabanaName",
    badgeKey: "portfolio.sabanaBadge",
    descKey: "portfolio.sabanaDesc",
    categoryKey: "portfolio.sabanaCategory",
    stack: "React · Vite · PWA",
    url: "https://sabana-adventure.vercel.app/",
    isPrivate: true,
  },
  {
    id: "scholarify",
    nameKey: "portfolio.scholarifyName",
    badgeKey: "portfolio.scholarifyBadge",
    descKey: "portfolio.scholarifyDesc",
    categoryKey: "portfolio.scholarifyCategory",
    stack: "Next.js · TypeScript",
    url: "https://scholarify.id/",
    repoUrl:
      "https://github.com/ZayeenJavas313/Company-Profile---Scholarify-Academy/tree/main/landing-page",
  },
  {
    id: "aira",
    nameKey: "portfolio.airaName",
    badgeKey: "portfolio.airaBadge",
    descKey: "portfolio.airaDesc",
    categoryKey: "portfolio.airaCategory",
    stack: "React · Tailwind",
    url: "https://aira-dry-cleaning.vercel.app/",
    repoUrl: "https://github.com/ZayeenJavas313/Aira-Dry-Cleaning",
  },
  {
    id: "custom",
    nameKey: "portfolio.customName",
    badgeKey: "portfolio.customBadge",
    descKey: "portfolio.customDesc",
    categoryKey: "portfolio.customCategory",
    stack: "Fullstack · AI · Payment",
    url: WHATSAPP_URL,
    isCta: true,
  },
];

function WireframeIllustration({ id }: { id: string }) {
  if (id === "sabana") {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" fill="none">
        {/* Mountain & Basecamp Inventory Wireframe */}
        <path
          d="M35 95 L95 32 L135 72 L175 26 L235 95 Z"
          stroke="var(--fg)"
          strokeWidth="1.2"
          strokeOpacity="0.65"
        />
        <path
          d="M95 32 L110 50 L125 46"
          stroke="var(--alert)"
          strokeWidth="1.5"
        />
        <rect
          x="215"
          y="22"
          width="76"
          height="52"
          stroke="var(--line)"
          fill="var(--bg)"
          fillOpacity="0.7"
        />
        <line x1="224" y1="34" x2="268" y2="34" stroke="var(--alert)" strokeWidth="2" />
        <line x1="224" y1="45" x2="280" y2="45" stroke="var(--mut)" strokeWidth="1" />
        <line x1="224" y1="54" x2="262" y2="54" stroke="var(--mut)" strokeWidth="1" />
        <circle cx="175" cy="26" r="3" fill="var(--alert)" />
      </svg>
    );
  }
  if (id === "scholarify") {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" fill="none">
        {/* Analytics & SNBT Tryout Chart Wireframe */}
        <rect x="36" y="20" width="248" height="80" stroke="var(--line)" />
        <polyline
          points="54,82 96,64 138,70 180,42 222,48 264,28"
          stroke="var(--alert)"
          strokeWidth="1.8"
        />
        <circle cx="96" cy="64" r="3" fill="var(--fg)" />
        <circle cx="180" cy="42" r="3" fill="var(--fg)" />
        <circle cx="264" cy="28" r="3.5" fill="var(--alert)" />
        <line x1="54" y1="90" x2="264" y2="90" stroke="var(--mut)" strokeDasharray="3 3" />
      </svg>
    );
  }
  if (id === "aira") {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" fill="none">
        {/* Booking Flow & Drum Wireframe */}
        <circle cx="105" cy="60" r="34" stroke="var(--fg)" strokeOpacity="0.65" strokeWidth="1.2" />
        <circle cx="105" cy="60" r="20" stroke="var(--alert)" strokeWidth="1.5" strokeDasharray="6 4" />
        <rect x="165" y="28" width="110" height="64" stroke="var(--line)" />
        <line x1="178" y1="44" x2="245" y2="44" stroke="var(--alert)" strokeWidth="2" />
        <line x1="178" y1="58" x2="260" y2="58" stroke="var(--mut)" />
        <line x1="178" y1="70" x2="235" y2="70" stroke="var(--mut)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" fill="none">
      {/* Custom System Blueprint */}
      <rect x="48" y="28" width="64" height="64" stroke="var(--line)" />
      <rect x="128" y="28" width="64" height="64" stroke="var(--alert)" strokeWidth="1.4" />
      <rect x="208" y="28" width="64" height="64" stroke="var(--line)" />
      <line x1="112" y1="60" x2="128" y2="60" stroke="var(--alert)" />
      <line x1="192" y1="60" x2="208" y2="60" stroke="var(--alert)" />
      <circle cx="160" cy="60" r="6" fill="var(--alert)" />
    </svg>
  );
}

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="work" className="w-full">
      <div className="rail-container">
        <SectionHeader
          title={t("portfolio.title")}
          indexLabel={t("portfolio.index")}
          showCrosshair
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className={[
                "flex flex-col justify-between border-[var(--line)] bg-[var(--bg)] transition-colors hover:bg-[var(--panel)]",
                idx % 2 === 0 ? "md:border-r" : "",
                idx < 2 ? "border-b" : idx === 2 ? "border-b md:border-b-0" : "",
              ].join(" ")}
            >
              <div>
                {/* Blueprint Wireframe Header */}
                <div className="blueprint-grid h-36 w-full border-b border-[var(--line)] bg-[var(--panel)]/60 p-3">
                  <WireframeIllustration id={project.id} />
                </div>

                {/* Card Body */}
                <div className="space-y-3 p-5 md:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-[var(--fg)]">
                      {t(project.nameKey)}
                    </h3>
                    <span className="inline-flex items-center gap-1 border border-[var(--line)] bg-[var(--panel)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--mut)]">
                      {project.isPrivate && <LockIcon className="size-2.5 text-[var(--alert)]" />}
                      {t(project.badgeKey)}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--mut)]">
                    {t(project.descKey)}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] px-5 py-3.5 md:px-6">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--mut)]">
                  <span className="inline-block size-2 bg-[var(--alert)]" />
                  <span>{project.stack}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="border border-[var(--line)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--mut)]">
                    {t(project.categoryKey)}
                  </span>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--fg)] transition-colors hover:border-[var(--fg)]"
                    >
                      <FolderGit2Icon className="size-3" />
                      <span>{t("portfolio.repo")}</span>
                    </a>
                  )}

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      project.isCta
                        ? "chamfer-btn inline-flex items-center gap-1 bg-[var(--fg)] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--bg)] transition-opacity hover:opacity-85"
                        : "inline-flex items-center gap-1 border border-[var(--fg)] bg-[var(--fg)] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--bg)] transition-opacity hover:opacity-85"
                    }
                  >
                    <span>
                      {project.isCta
                        ? t("portfolio.customCta")
                        : t("portfolio.liveDemo")}
                    </span>
                    <ArrowUpRightIcon className="size-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
