import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  LockIcon,
} from "lucide-react";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

const PROJECTS = [
  {
    id: "sabana",
    nameKey: "portfolio.sabanaName",
    catKey: "portfolio.sabanaCat",
    descKey: "portfolio.sabanaDesc",
    metricKey: "portfolio.sabanaMetric",
    url: "https://sabana-adventure.vercel.app/",
    isPrivate: true,
    bg: "bg-gradient-to-b from-[#0b261d] via-[#123d2f] to-[#081611]",
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
    bg: "bg-gradient-to-b from-[#0b1f3a] via-[#123564] to-[#081326]",
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
    bg: "bg-gradient-to-b from-[#1f1638] via-[#32225a] to-[#120d22]",
    badge: "React · Booking",
  },
  {
    id: "custom",
    nameKey: "pricing.card3Title",
    catKey: "pricing.card3Tag",
    descKey: "pricing.card3Subtitle",
    metricKey: "pricing.card3Price",
    url: WHATSAPP_URL,
    bg: "bg-gradient-to-b from-[#2b1d0e] via-[#4a3116] to-[#171008]",
    badge: "Custom · 2–4 Weeks",
    isCta: true,
  },
];

export function Portfolio() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);

  const stepTo = (nextIdx: number) => {
    const clamped = Math.max(0, Math.min(PROJECTS.length - 1, nextIdx));
    setActiveIndex(clamped);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Allow clicking buttons/links inside cards without hijacking
    if ((e.target as HTMLElement).closest("a, button")) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setDragX(e.clientX - startXRef.current);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX < -60 && activeIndex < PROJECTS.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (dragX > 60 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
    setDragX(0);
  };

  return (
    <section id="work" className="overflow-hidden bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.03em] text-[#010101] sm:text-[52px]">
            {t("portfolio.title")}
          </h2>

          {/* Controls + DRAG Pill */}
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => stepTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#e9eaef] bg-white text-[#010101] transition-colors hover:bg-[#010101] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowLeftIcon className="size-4" />
            </button>
            <span className="rounded-full border border-[#e9eaef] bg-white px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[#52525b]">
              DRAG ↔ {activeIndex + 1}/{PROJECTS.length}
            </span>
            <button
              type="button"
              onClick={() => stepTo(activeIndex + 1)}
              disabled={activeIndex === PROJECTS.length - 1}
              aria-label="Next project"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#e9eaef] bg-white text-[#010101] transition-colors hover:bg-[#010101] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Curved Arc-Tilted Card Deck (Orbix Studio style) */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={[
          "relative mx-auto mt-12 flex h-[500px] w-full max-w-[1440px] items-center justify-center touch-pan-y sm:h-[540px]",
          isDragging ? "cursor-grabbing select-none" : "cursor-grab",
        ].join(" ")}
      >
        {PROJECTS.map((project, idx) => {
          const dragShift = dragX / 320;
          const diff = idx - activeIndex + dragShift;
          const absDiff = Math.abs(diff);

          const translateX = diff * 340;
          const translateY = Math.pow(absDiff, 1.35) * 28;
          const rotate = diff * 7.5;
          const scale = Math.max(0.84, 1 - absDiff * 0.065);
          const opacity = absDiff > 2.2 ? 0 : Math.max(0.45, 1 - absDiff * 0.16);
          const zIndex = 20 - Math.round(absDiff * 5);

          return (
            <motion.article
              key={project.id}
              onClick={() => {
                if (!isDragging && Math.abs(dragX) < 6 && idx !== activeIndex) {
                  setActiveIndex(idx);
                }
              }}
              animate={{
                x: translateX,
                y: translateY,
                rotate,
                scale,
                opacity,
              }}
              transition={
                isDragging
                  ? { type: "tween", duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 26 }
              }
              style={{ zIndex }}
              className={`absolute flex h-[450px] w-[300px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/15 p-6 text-white shadow-2xl sm:h-[490px] sm:w-[340px] sm:p-7 ${project.bg}`}
            >
              {/* Top Pill + Title + Description */}
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                  <span className="inline-block size-1.5 rounded-full bg-[#3fd17a]" />
                  <span>Live Now</span>
                  {project.isPrivate && <LockIcon className="ml-0.5 size-2.5 opacity-80" />}
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
                  {t(project.nameKey)}
                </h3>

                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/75 sm:text-sm">
                  {t(project.descKey)}
                </p>
              </div>

              {/* Center Device / UI Mockup Preview */}
              <div className="my-4 flex flex-1 items-center justify-center">
                <div className="w-full max-w-[230px] rounded-2xl border border-white/15 bg-black/35 p-3.5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="size-2 rounded-full bg-white/25" />
                      <span className="size-2 rounded-full bg-white/25" />
                      <span className="size-2 rounded-full bg-white/25" />
                    </div>
                    <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-medium text-white">
                      {project.badge}
                    </span>
                  </div>

                  <div className="mt-3 text-xs font-semibold text-white">
                    {t(project.metricKey)}
                  </div>
                  <div className="mt-1 text-[10px] text-white/60">
                    {t(project.catKey)}
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <div className="h-9 rounded-lg bg-white/10" />
                    <div className="h-9 rounded-lg bg-white/10" />
                    <div className="h-9 rounded-lg bg-white/10" />
                  </div>
                </div>
              </div>

              {/* Bottom Centered White Pill CTA */}
              <div className="flex items-center justify-center gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-xs font-semibold text-[#010101] shadow-lg transition-transform hover:scale-105"
                >
                  <span>
                    {project.isCta ? t("pricing.cta") : t("portfolio.liveDemo")}
                  </span>
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center rounded-full border border-white/25 bg-white/10 px-4 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    {t("portfolio.repo")}
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
