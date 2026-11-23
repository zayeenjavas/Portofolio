import { ArrowUpIcon, ArrowUpRightIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-[var(--bg)]">
      {/* 4-Column Link Grid + Copyright inside 880px Rail */}
      <div className="rail-container border-t border-[var(--line)]">
        <div className="grid grid-cols-2 divide-y divide-[var(--line)] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {/* Column 1: NAVIGATE */}
          <div className="divide-y divide-[var(--line)] border-r border-[var(--line)] sm:border-r-0">
            <div className="px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
              {t("footer.navigate")}
            </div>
            <a
              href="#home"
              className="block px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              Home
            </a>
            <a
              href="#work"
              className="block px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              {t("nav.work")}
            </a>
            <a
              href="#services"
              className="block px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              {t("nav.services")}
            </a>
            <a
              href="#pricing"
              className="block px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              {t("nav.pricing")}
            </a>
          </div>

          {/* Column 2: PROJECTS */}
          <div className="divide-y divide-[var(--line)]">
            <div className="px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
              {t("footer.projects")}
            </div>
            <a
              href="https://sabana-adventure.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>Sabana Adventure</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <a
              href="https://scholarify.id/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>Scholarify</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <a
              href="https://aira-dry-cleaning.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>Aira Dry Cleaning</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          </div>

          {/* Column 3: SOCIAL */}
          <div className="divide-y divide-[var(--line)] border-r border-[var(--line)] sm:border-r-0">
            <div className="px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
              {t("footer.social")}
            </div>
            <a
              href="https://github.com/ZayeenJavas313"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>GitHub</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadznaim/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>LinkedIn</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <a
              href="https://www.instagram.com/ahmaadznaeem/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>Instagram</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          </div>

          {/* Column 4: CONTACT */}
          <div className="divide-y divide-[var(--line)]">
            <div className="px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg)]">
              {t("footer.contact")}
            </div>
            <a
              href="mailto:ahmdnaim3@gmail.com"
              className="flex items-center justify-between px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>{t("footer.sendEmail")}</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-3 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
            >
              <span>{t("footer.whatsapp")}</span>
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="flex flex-col items-start justify-between gap-2 border-t border-[var(--line)] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--mut)] sm:flex-row sm:items-center">
          <span>{t("footer.copyright")}</span>
          <span className="flex items-center gap-2">
            <span className="inline-block size-2 bg-[var(--alert)]" />
            {t("footer.locationTag")}
          </span>
        </div>
      </div>

      {/* Full-Width Hatched Band with Square Scroll-to-Top Button */}
      <div className="hatched-band relative">
        <div className="rail-container relative h-full">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute top-0 right-0 flex size-7 cursor-pointer items-center justify-center bg-[var(--fg)] text-[var(--bg)] transition-opacity hover:opacity-85"
          >
            <ArrowUpIcon className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Giant Outlined Wordmark ("ahmadnaim") */}
      <div className="w-full overflow-hidden border-b border-[var(--line)]">
        <div className="rail-container flex items-end justify-center overflow-hidden pt-6 sm:pt-8">
          <div
            aria-hidden="true"
            className="w-full select-none text-center font-sans text-[15vw] font-bold leading-[0.78] tracking-[-0.04em] text-transparent sm:text-[138px]"
            style={{
              WebkitTextStroke:
                "1.5px color-mix(in srgb, var(--fg) 42%, transparent)",
            }}
          >
            ahmadnaim
          </div>
        </div>
      </div>
    </footer>
  );
}
