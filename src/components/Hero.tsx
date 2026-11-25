import { useEffect, useState } from "react";
import { ArrowUpRightIcon, GlobeIcon, StarIcon } from "lucide-react";
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
  const badges = [t("hero.badge1"), t("hero.badge2"), t("hero.badge3")];
  const [badgeIdx, setBadgeIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIdx((prev) => (prev + 1) % badges.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [badges.length]);

  return (
    <>
      {/* Full-bleed Sky & Meadow Hero matching Orbix Studio */}
      <section
        id="home"
        className="relative flex min-h-[760px] flex-col items-center justify-center overflow-hidden bg-[#f3f4f6] px-5 pt-28 pb-24 text-center sm:min-h-[860px]"
      >
        {/* Atmospheric Sky + Sunlit Green Meadow Backdrop */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* Sky gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#d8e6f3_0%,#edf2f7_45%,#f5f7f8_68%,#a4be6b_80%,#688a35_90%,#f3f4f6_100%)]" />
          {/* Soft white clouds */}
          <div className="absolute -top-12 left-[10%] h-64 w-96 rounded-full bg-white/70 blur-3xl" />
          <div className="absolute top-12 right-[8%] h-72 w-[420px] rounded-full bg-white/65 blur-3xl" />
          {/* Layered meadow hills at bottom */}
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute right-0 bottom-0 left-0 h-[240px] w-full sm:h-[290px]"
          >
            <defs>
              <linearGradient id="meadow1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#86a947" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#f3f4f6" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="meadow2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#65882f" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f3f4f6" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0 110 C280 55 560 155 880 95 C1150 45 1310 95 1440 80 L1440 320 L0 320 Z"
              fill="url(#meadow1)"
            />
            <path
              d="M0 160 C340 120 640 200 980 145 C1210 110 1350 145 1440 135 L1440 320 L0 320 Z"
              fill="url(#meadow2)"
            />
          </svg>
          {/* Bottom fade into #F3F4F6 / #FAFAFA */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/80 to-transparent" />
        </div>

        {/* Centered Hero Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          {/* Rotating Frosted Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e9eaef] bg-white/85 px-4 py-1.5 text-xs font-medium text-[#010101] shadow-sm backdrop-blur-md">
            <GlobeIcon className="size-3.5 text-[#52525b]" />
            <span>{badges[badgeIdx]}</span>
          </div>

          <h1 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.035em] text-[#010101] sm:text-5xl md:text-[64px]">
            {t("hero.title")}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#010101]/70 sm:text-lg">
            {t("hero.subtitle")}
          </p>

          {/* Rating / Trust Signal */}
          <div className="mt-6 flex items-center gap-2.5 text-sm font-medium text-[#010101]">
            <span className="flex size-6 items-center justify-center rounded-full bg-[#0f766e] text-xs font-bold text-white">
              A
            </span>
            <span className="font-semibold">{t("hero.ratingText")}</span>
            <div className="flex items-center gap-0.5 text-[#ff6b35]">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span className="text-xs text-[#52525b]">{t("hero.ratingSub")}</span>
          </div>

          {/* Dual Pill CTAs */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#pricing"
              className="orbix-shadow inline-flex h-12 w-full items-center justify-center rounded-full bg-[#010101] px-7 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              {t("hero.ctaPrimary")}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="orbix-shadow inline-flex h-12 w-full items-center justify-center rounded-full border border-[#e9eaef] bg-white px-7 text-sm font-medium text-[#010101] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </div>
      </section>

      {/* Logo Marquee Section (#FAFAFA) */}
      <section className="bg-[#fafafa] py-12">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="mb-6 text-sm font-medium text-[#52525b]">
            {t("hero.marqueeTitle")}
          </p>
          <LogoCloud logos={TECH_LOGOS} />
        </div>
      </section>

      {/* Value Track Section (#F9FAFA) */}
      <section className="bg-[#f9fafa] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-medium leading-[1.12] tracking-[-0.03em] text-[#010101] sm:text-5xl">
            {t("value.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#52525b] sm:text-lg">
            {t("value.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="orbix-shadow inline-flex h-12 items-center justify-center rounded-full bg-[#010101] px-7 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              {t("value.cta")}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#52525b]">
            <span>{t("value.socialsLabel")}:</span>
            <a
              href="https://github.com/zayeenjavas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#010101] hover:underline"
            >
              GitHub <ArrowUpRightIcon className="size-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadznaim/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#010101] hover:underline"
            >
              LinkedIn <ArrowUpRightIcon className="size-3" />
            </a>
            <a
              href="https://www.instagram.com/ahmaadznaeem/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#010101] hover:underline"
            >
              Instagram <ArrowUpRightIcon className="size-3" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
