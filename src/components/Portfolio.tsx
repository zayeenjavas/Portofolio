import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  FolderGit2Icon,
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
  {
    id: "custom",
    nameKey: "pricing.card3Title",
    catKey: "pricing.card3Tag",
    descKey: "pricing.card3Subtitle",
    metricKey: "pricing.card3Price",
    url: WHATSAPP_URL,
    tint: "from-[#fef3c7] to-[#f3f4f6]",
    badge: "Custom · 2–4 Weeks",
    isCta: true,
  },
];

export function Portfolio() {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.min(540, el.clientWidth * 0.82);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current = {
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
    };
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.4;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <section id="work" className="overflow-hidden bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <h2 className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.03em] text-[#010101] sm:text-[52px]">
            {t("portfolio.title")}
          </h2>

          {/* Left / Right Horizontal Scroll Controls + DRAG indicator */}
          <div className="flex items-center gap-2.5 self-start sm:self-end">
            <span className="hidden rounded-full border border-[#e9eaef] bg-white px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[#52525b] sm:inline-flex">
              DRAG ↔
            </span>
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll projects left"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#e9eaef] bg-white text-[#010101] transition-colors hover:bg-[#010101] hover:text-white"
            >
              <ArrowLeftIcon className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Scroll projects right"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#e9eaef] bg-white text-[#010101] transition-colors hover:bg-[#010101] hover:text-white"
            >
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Left-Right Scrollable & Draggable Project Track */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className={[
          "mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 lg:px-[max(2rem,calc((100vw-1200px)/2+2rem))]",
          isDragging ? "cursor-grabbing select-none" : "cursor-grab",
        ].join(" ")}
      >
        {PROJECTS.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: idx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex w-[85vw] max-w-[520px] shrink-0 snap-start flex-col justify-between rounded-[28px] border border-[#e9eaef] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[480px] sm:p-8"
          >
            <div>
              {/* Visual Preview Frame */}
              <div
                className={`flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br ${project.tint} p-5 sm:h-60`}
              >
                <div className="w-full max-w-xs rounded-2xl border border-black/8 bg-white p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-black/15" />
                      <span className="size-2 rounded-full bg-black/15" />
                      <span className="size-2 rounded-full bg-black/15" />
                    </div>
                    <span className="rounded-full bg-[#010101] px-2.5 py-0.5 text-[10px] font-medium text-white">
                      {project.badge}
                    </span>
                  </div>
                  <div className="mt-4 text-base font-semibold text-[#010101]">
                    {t(project.nameKey)}
                  </div>
                  <div className="mt-0.5 text-xs text-[#52525b]">
                    {t(project.metricKey)}
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-10 rounded-xl bg-[#f3f4f6]" />
                    <div className="h-10 rounded-xl bg-[#f3f4f6]" />
                    <div className="h-10 rounded-xl bg-[#f3f4f6]" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e9eaef] bg-[#f9fafa] px-3 py-1 text-xs font-medium text-[#52525b]">
                  {project.isPrivate && <LockIcon className="size-3 text-[#010101]" />}
                  <span>{t(project.catKey)}</span>
                </div>

                <h3 className="mt-3.5 text-2xl font-medium tracking-[-0.02em] text-[#010101]">
                  {t(project.nameKey)}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#52525b] sm:text-base">
                  {t(project.descKey)}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#e9eaef] pt-5">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="orbix-shadow inline-flex h-10 items-center gap-2 rounded-full bg-[#010101] px-5 text-xs font-medium text-white transition-transform hover:-translate-y-0.5 sm:text-sm"
              >
                <span>
                  {project.isCta ? t("pricing.cta") : t("portfolio.liveDemo")}
                </span>
                <ArrowUpRightIcon className="size-4" />
              </a>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-[#e9eaef] bg-white px-4 text-xs font-medium text-[#010101] transition-colors hover:bg-[#f3f4f6] sm:text-sm"
                >
                  <FolderGit2Icon className="size-4" />
                  <span>{t("portfolio.repo")}</span>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
