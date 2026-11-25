import { useEffect, useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  BadgeCheckIcon,
  MapPinIcon,
} from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

const TECH_LOGOS = [
  { src: "https://cdn.simpleicons.org/react/000000", alt: "React" },
  { src: "https://cdn.simpleicons.org/typescript/000000", alt: "TypeScript" },
  { src: "https://cdn.simpleicons.org/nextdotjs/000000", alt: "Next.js" },
  { src: "https://cdn.simpleicons.org/tailwindcss/000000", alt: "Tailwind CSS" },
  { src: "https://cdn.simpleicons.org/nodedotjs/000000", alt: "Node.js" },
  { src: "https://cdn.simpleicons.org/postgresql/000000", alt: "PostgreSQL" },
  { src: "https://cdn.simpleicons.org/vite/000000", alt: "Vite" },
  { src: "https://cdn.simpleicons.org/figma/000000", alt: "Figma" },
];

export function Hero() {
  const { t } = useTranslation();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20">
      {/* Subtle Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent-soft),transparent_70%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Agency Positioning */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-3.5 py-1.5 text-xs font-medium text-[var(--fg)]">
              <span className="inline-block size-2 rounded-full bg-[var(--ok)]" />
              <span>{t("hero.badge")}</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--fg)] sm:text-5xl lg:text-[56px]">
              {t("hero.title")}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[var(--mut)] sm:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition-opacity hover:opacity-90"
              >
                <span>{t("hero.ctaPrimary")}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold text-[var(--fg)] transition-colors hover:bg-[var(--surface)]"
              >
                <span>{t("hero.ctaSecondary")}</span>
                <ArrowDownIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Right: Founder / Product Studio Card */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5 shadow-2xl shadow-black/20 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="size-16 shrink-0 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] sm:size-20">
                  <img
                    src="/images/profile-hero.jpg"
                    alt="Ahmad Na'im"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                    loading="eager"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h2 className="truncate text-lg font-bold tracking-tight text-[var(--fg)]">
                      Ahmad Na&apos;im
                    </h2>
                    <BadgeCheckIcon className="size-4 shrink-0 text-[var(--accent)]" />
                  </div>
                  <p className="text-xs font-medium text-[var(--mut)] sm:text-sm">
                    {t("hero.role")}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[var(--mut)]">
                    <MapPinIcon className="size-3.5 text-[var(--accent)]" />
                    <span>{t("hero.location")}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--mut)]">
                    Local Time
                  </div>
                  <div className="mt-0.5 font-mono text-xl font-bold text-[var(--fg)] tabular-nums">
                    {timeString} <span className="text-xs font-normal text-[var(--mut)]">WIB</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between text-right">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-[var(--mut)]">
                    Direct Email
                  </div>
                  <a
                    href="mailto:ahmdnaim3@gmail.com"
                    className="truncate text-xs font-semibold text-[var(--fg)] underline-offset-4 hover:underline"
                  >
                    ahmdnaim3@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/zayeenjavas"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 rounded-xl border border-[var(--line)] bg-[var(--surface)] py-2 text-xs font-medium text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
                >
                  GitHub <ArrowUpRightIcon className="size-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmadznaim/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 rounded-xl border border-[var(--line)] bg-[var(--surface)] py-2 text-xs font-medium text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
                >
                  LinkedIn <ArrowUpRightIcon className="size-3" />
                </a>
                <a
                  href="https://www.instagram.com/ahmaadznaeem/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 rounded-xl border border-[var(--line)] bg-[var(--surface)] py-2 text-xs font-medium text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
                >
                  Instagram <ArrowUpRightIcon className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics / Trust Strip */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 sm:grid-cols-4 sm:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl font-extrabold tracking-tight text-[var(--fg)] sm:text-3xl">
                {t(`hero.stat${i}Val`)}
              </div>
              <div className="text-xs font-medium text-[var(--mut)] sm:text-sm">
                {t(`hero.stat${i}Label`)}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="mt-12 space-y-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--mut)]">
            {t("hero.marqueeLabel")}
          </p>
          <LogoCloud logos={TECH_LOGOS} />
        </div>
      </div>
    </section>
  );
}
