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
      {/* 4-Column (2x2 on Mobile) Link Grid + Copyright inside Rail */}
      <div className="rail-container border-t border-[var(--line)]">
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-[var(--line)]">
          {/* Column 1: NAVIGATE */}
          <div className="divide-y divide-[var(--line)] max-sm:border-r max-sm:border-[var(--line)]">
            <div className="px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg)] sm:px-5 sm:py-3.5">
              {t("footer.navigate")}
            </div>
            <a
              href="#home"
              className="block px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              Home
            </a>
            <a
              href="#work"
              className="block px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              {t("nav.work")}
            </a>
            <a
              href="#services"
              className="block px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              {t("nav.services")}
            </a>
            <a
              href="#pricing"
              className="block px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              {t("nav.pricing")}
            </a>
          </div>

          {/* Column 2: PROJECTS */}
          <div className="divide-y divide-[var(--line)]">
            <div className="px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg)] sm:px-5 sm:py-3.5">
              {t("footer.projects")}
            </div>
            <a
              href="https://sabana-adventure.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              <span className="truncate">Sabana Adventure</span>
              <ArrowUpRightIcon className="size-3.5 shrink-0" />
            </a>
            <a
              href="https://scholarify.id/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              <span className="truncate">Scholarify</span>
              <ArrowUpRightIcon className="size-3.5 shrink-0" />
            </a>
            <a
              href="https://aira-dry-cleaning.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              <span className="truncate">Aira Dry Cleaning</span>
              <ArrowUpRightIcon className="size-3.5 shrink-0" />
            </a>
          </div>

          {/* Column 3: SOCIAL */}
          <div className="divide-y divide-[var(--line)] max-sm:border-t max-sm:border-r max-sm:border-[var(--line)]">
            <div className="px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg)] sm:px-5 sm:py-3.5">
              {t("footer.social")}
            </div>
            <a
              href="https://github.com/ZayeenJavas313"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              <span>GitHub</span>
              <ArrowUpRightIcon className="size-3.5 shrink-0" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadznaim/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              <span>LinkedIn</span>
              <ArrowUpRightIcon className="size-3.5 shrink-0" />
            </a>
            <a
              href="https://www.instagram.com/ahmaadznaeem/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              <span>Instagram</span>
              <ArrowUpRightIcon className="size-3.5 shrink-0" />
            </a>
          </div>

          {/* Column 4: CONTACT */}
          <div className="divide-y divide-[var(--line)] max-sm:border-t max-sm:border-[var(--line)]">
            <div className="px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg)] sm:px-5 sm:py-3.5">
              {t("footer.contact")}
            </div>
            <a
              href="mailto:ahmdnaim3@gmail.com"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              <span>{t("footer.sendEmail")}</span>
              <ArrowUpRightIcon className="size-3.5 shrink-0" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--mut)] transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)] sm:px-5 sm:py-3"
            >
              <span>{t("footer.whatsapp")}</span>
              <ArrowUpRightIcon className="size-3.5 shrink-0" />
            </a>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="flex min-h-10 items-center justify-between gap-4 border-t border-[var(--line)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--mut)] sm:px-5 sm:text-[11px]">
          <span>{t("footer.copyright")}</span>
          <span className="flex shrink-0 items-center gap-1.5 text-right">
            <span className="inline-block size-2 bg-[var(--alert)]" />
            {t("footer.locationTag")}
          </span>
        </div>
      </div>

      {/* Hatched Band with 40x40px Square Scroll-to-Top Button */}
      <div className="hatched-band relative">
        <div className="relative mx-auto h-full max-w-[880px]">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute -top-[1px] right-0 flex size-10 cursor-pointer items-center justify-center bg-[var(--fg)] text-[var(--bg)] transition-opacity hover:opacity-85"
          >
            <ArrowUpIcon className="size-4" />
          </button>
        </div>
      </div>

      {/* Giant Outlined Wordmark ("ahmadnaim") */}
      <div className="w-full overflow-hidden border-b border-[var(--line)] pt-5 sm:pt-8">
        <div
          aria-hidden="true"
          className="mx-auto w-full max-w-[880px] select-none px-4 text-center font-sans text-[16.5vw] font-bold leading-[0.78] tracking-[-0.04em] text-transparent sm:px-0 sm:text-[138px]"
          style={{
            WebkitTextStroke:
              "1.5px color-mix(in srgb, var(--fg) 42%, transparent)",
          }}
        >
          ahmadnaim
        </div>
      </div>
    </footer>
  );
}
