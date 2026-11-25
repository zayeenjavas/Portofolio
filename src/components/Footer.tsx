import { ArrowUpRightIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="border-t border-[var(--line)] bg-[var(--bg)] pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Agency Pre-Footer CTA Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-8 text-center sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_70%)] blur-2xl"
          />
          <span className="relative inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1 text-xs font-semibold text-[var(--accent)]">
            {t("footer.ctaBadge")}
          </span>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-[var(--fg)] sm:text-4xl lg:text-5xl">
            {t("footer.ctaTitle")}
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-base text-[var(--mut)]">
            {t("footer.ctaSubtitle")}
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition-opacity hover:opacity-90"
            >
              <MessageCircleIcon className="size-4" />
              <span>{t("footer.whatsapp")}</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a
              href="mailto:ahmdnaim3@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--fg)] transition-colors hover:bg-[var(--panel)]"
            >
              <MailIcon className="size-4" />
              <span>{t("footer.sendEmail")}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Links */}
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--fg)]">
              {t("footer.navigate")}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--mut)]">
              <li>
                <a href="#home" className="hover:text-[var(--fg)]">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[var(--fg)]">
                  {t("nav.work")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--fg)]">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[var(--fg)]">
                  {t("nav.pricing")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--fg)]">
              {t("footer.projects")}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--mut)]">
              <li>
                <a
                  href="https://sabana-adventure.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--fg)]"
                >
                  Sabana Adventure <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://scholarify.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--fg)]"
                >
                  Scholarify <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://aira-dry-cleaning.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--fg)]"
                >
                  Aira Dry Cleaning <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--fg)]">
              {t("footer.social")}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--mut)]">
              <li>
                <a
                  href="https://github.com/zayeenjavas"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--fg)]"
                >
                  GitHub <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ahmadznaim/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--fg)]"
                >
                  LinkedIn <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ahmaadznaeem/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--fg)]"
                >
                  Instagram <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--fg)]">
              {t("footer.contact")}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--mut)]">
              <li>
                <a href="mailto:ahmdnaim3@gmail.com" className="hover:text-[var(--fg)]">
                  ahmdnaim3@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--fg)]"
                >
                  +62 878-4154-9562
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--mut)] sm:flex-row">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.locationTag")}</span>
        </div>
      </div>
    </footer>
  );
}
