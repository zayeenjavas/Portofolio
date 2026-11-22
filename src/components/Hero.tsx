import { useEffect, useState } from "react";
import {
  ArrowUpRightIcon,
  BadgeCheckIcon,
  BriefcaseIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import { HatchedDivider } from "@/components/ui/section-divider";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Hero() {
  const { t, language } = useTranslation();
  const roles = t("hero.roles").split("|");
  const [roleIndex, setRoleIndex] = useState(0);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(roleTimer);
  }, [roles.length]);

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(clockTimer);
  }, []);

  const timeString = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  const dateString = new Intl.DateTimeFormat(
    language === "id" ? "id-ID" : "en-US",
    {
      timeZone: "Asia/Jakarta",
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  ).format(now);

  return (
    <section id="home" className="w-full">
      <div className="rail-container">
        {/* Top Architectural Banner */}
        <div className="blueprint-grid relative h-36 w-full overflow-hidden border-b border-[var(--line)] bg-[var(--panel)] sm:h-44">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_srgb,var(--alert)_14%,transparent),transparent)]"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 880 180"
            className="absolute inset-0 h-full w-full opacity-35"
            fill="none"
          >
            <circle
              cx="440"
              cy="90"
              r="140"
              stroke="var(--line)"
              strokeDasharray="4 4"
            />
            <circle cx="440" cy="90" r="78" stroke="var(--line)" />
            <line x1="0" y1="90" x2="880" y2="90" stroke="var(--line)" />
            <line x1="440" y1="0" x2="440" y2="180" stroke="var(--line)" />
            <rect
              x="436"
              y="86"
              width="8"
              height="8"
              fill="var(--alert)"
            />
          </svg>

          <div className="absolute top-3 left-3 flex items-center gap-2 border border-[var(--line)] bg-[var(--bg)]/90 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--fg)] backdrop-blur-sm">
            <span className="inline-block size-2 bg-[var(--alert)]" />
            <span>{t("hero.bannerBadge")}</span>
          </div>

          <div className="absolute right-3 bottom-3 border border-[var(--line)] bg-[var(--bg)]/90 px-2.5 py-1 font-mono text-[11px] tracking-wider text-[var(--mut)] backdrop-blur-sm">
            {t("hero.coords")}
          </div>
        </div>

        {/* Profile Identity Row */}
        <div className="relative flex flex-col gap-5 border-b border-[var(--line)] bg-[var(--bg)] px-5 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div className="flex items-center gap-5">
            <div className="size-20 shrink-0 overflow-hidden border border-[var(--line)] bg-[var(--panel)] sm:size-24">
              <img
                src="/images/profile-hero.jpg"
                alt="Ahmad Na'im"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 20%" }}
                loading="eager"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-[-0.02em] text-[var(--fg)] sm:text-[28px]">
                  {t("hero.name")}
                </h1>
                <BadgeCheckIcon
                  className="size-5 shrink-0 text-[var(--alert)]"
                  aria-label="Verified"
                />
              </div>
              <p className="h-5 font-mono text-xs uppercase tracking-[0.1em] text-[var(--mut)] sm:text-sm">
                {roles[roleIndex]}
              </p>
            </div>
          </div>

          {/* Subtle technical monogram watermark */}
          <div
            aria-hidden="true"
            className="hidden select-none font-mono text-5xl font-bold tracking-tighter text-[var(--line)]/50 sm:block"
          >
            &lt;DEV/&gt;
          </div>
        </div>

        {/* Status & Quick Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] bg-[var(--panel)] px-5 py-3.5 md:px-8">
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="chamfer-btn inline-flex items-center gap-2 bg-[var(--fg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--bg)] transition-opacity hover:opacity-85"
            >
              <span>{t("hero.cta")}</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--mut)]">
              <span className="inline-block size-2 bg-[var(--ok)]" />
              <span className="hidden uppercase tracking-wider sm:inline">
                {t("hero.statusLabel")}:
              </span>
              <span className="text-[var(--fg)]">{t("hero.statusText")}</span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="hidden h-4 items-end gap-1 sm:flex"
          >
            <span className="animate-eq-1 h-full w-0.5 origin-bottom bg-[var(--alert)]" />
            <span className="animate-eq-2 h-full w-0.5 origin-bottom bg-[var(--alert)]" />
            <span className="animate-eq-3 h-full w-0.5 origin-bottom bg-[var(--alert)]" />
            <span className="animate-eq-4 h-full w-0.5 origin-bottom bg-[var(--alert)]" />
          </div>
        </div>
      </div>

      {/* Hatched Divider */}
      <HatchedDivider />

      {/* Basic Info & Inverted Local Time Split Grid */}
      <div className="rail-container grid grid-cols-1 md:grid-cols-12">
        {/* Left: Basic Info (65% -> 8 cols) */}
        <div className="flex flex-col justify-between border-b border-[var(--line)] md:col-span-8 md:border-r md:border-b-0">
          <div>
            <div className="border-b border-[var(--line)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--mut)] md:px-8">
              {t("hero.basicInfo")}
            </div>
            <div className="divide-y divide-[var(--line)]">
              <div className="flex items-center justify-between px-5 py-3.5 text-sm md:px-8">
                <span className="flex items-center gap-2.5 text-[var(--mut)]">
                  <MapPinIcon className="size-4 text-[var(--alert)]" />
                  {t("hero.locationLabel")}
                </span>
                <span className="font-medium text-[var(--fg)]">
                  {t("hero.locationValue")}
                </span>
              </div>
              <div className="flex items-center justify-between px-5 py-3.5 text-sm md:px-8">
                <span className="flex items-center gap-2.5 text-[var(--mut)]">
                  <BriefcaseIcon className="size-4 text-[var(--alert)]" />
                  {t("hero.roleLabel")}
                </span>
                <span className="font-medium text-[var(--fg)]">
                  {t("hero.roleValue")}
                </span>
              </div>
              <div className="flex items-center justify-between px-5 py-3.5 text-sm md:px-8">
                <span className="flex items-center gap-2.5 text-[var(--mut)]">
                  <MailIcon className="size-4 text-[var(--alert)]" />
                  {t("hero.emailLabel")}
                </span>
                <a
                  href={`mailto:${t("hero.emailValue")}`}
                  className="font-mono text-xs font-medium text-[var(--fg)] underline-offset-4 hover:underline sm:text-sm"
                >
                  {t("hero.emailValue")}
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-[var(--line)] border-t border-[var(--line)]">
            <a
              href="https://github.com/ZayeenJavas313"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>GitHub</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadznaim/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>LinkedIn</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <a
              href="https://www.instagram.com/ahmaadznaeem/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>Instagram</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Inverted-Contrast Local Time Card (35% -> 4 cols) */}
        <div className="flex flex-col justify-between bg-[var(--fg)] p-5 text-[var(--bg)] md:col-span-4 md:p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-75">
              {t("hero.localTime")}
            </span>
            <span className="border border-[var(--bg)]/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
              {t("hero.tzBadge")}
            </span>
          </div>

          <div className="my-6 font-mono text-4xl font-bold tracking-tight tabular-nums sm:text-[40px]">
            {timeString}
          </div>

          <div className="flex items-center justify-between border-t border-[var(--bg)]/20 pt-3 font-mono text-xs opacity-80">
            <span>{dateString}</span>
            <span>ID</span>
          </div>
        </div>
      </div>
    </section>
  );
}
