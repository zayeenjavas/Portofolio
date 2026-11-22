import { ArrowUpRightIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="w-full border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="rail-container">
        <div className="grid grid-cols-2 divide-y divide-[var(--line)] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {/* Column 1: NAVIGATE */}
          <div className="border-r border-[var(--line)] p-5 sm:border-r-0 md:p-6">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--mut)]">
              {t("footer.navigate")}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-[var(--fg)] hover:text-[var(--alert)]">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" className="text-[var(--fg)] hover:text-[var(--alert)]">
                  {t("nav.work")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-[var(--fg)] hover:text-[var(--alert)]">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[var(--fg)] hover:text-[var(--alert)]">
                  {t("nav.pricing")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: PROJECTS */}
          <div className="p-5 md:p-6">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--mut)]">
              {t("footer.projects")}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://sabana-adventure.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--fg)] hover:text-[var(--alert)]"
                >
                  <span>Sabana Adventure</span>
                  <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://scholarify.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--fg)] hover:text-[var(--alert)]"
                >
                  <span>Scholarify</span>
                  <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://aira-dry-cleaning.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--fg)] hover:text-[var(--alert)]"
                >
                  <span>Aira Dry Cleaning</span>
                  <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: SOCIAL */}
          <div className="border-r border-[var(--line)] p-5 sm:border-r-0 md:p-6">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--mut)]">
              {t("footer.social")}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/ZayeenJavas313"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--fg)] hover:text-[var(--alert)]"
                >
                  <span>GitHub</span>
                  <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ahmadznaim/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--fg)] hover:text-[var(--alert)]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ahmaadznaeem/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--fg)] hover:text-[var(--alert)]"
                >
                  <span>Instagram</span>
                  <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div className="p-5 md:p-6">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--mut)]">
              {t("footer.contact")}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:ahmdnaim3@gmail.com"
                  className="inline-flex items-center gap-1 text-[var(--fg)] hover:text-[var(--alert)]"
                >
                  <span>{t("footer.sendEmail")}</span>
                  <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--fg)] hover:text-[var(--alert)]"
                >
                  <span>{t("footer.whatsapp")}</span>
                  <ArrowUpRightIcon className="size-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col items-start justify-between gap-2 border-t border-[var(--line)] bg-[var(--panel)] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--mut)] sm:flex-row sm:items-center md:px-8">
          <span>{t("footer.copyright")}</span>
          <span className="flex items-center gap-2">
            <span className="inline-block size-2 bg-[var(--alert)]" />
            {t("footer.locationTag")}
          </span>
        </div>
      </div>
    </footer>
  );
}
