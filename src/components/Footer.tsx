import { ArrowUpRightIcon } from "lucide-react";
import { OrbixMark } from "@/components/Header";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="border-t border-[#e9eaef] bg-white pt-16 pb-28 text-[#010101]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Top Brand Row */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#e9eaef] pb-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <OrbixMark className="size-7" />
            <span className="text-lg font-semibold tracking-tight">
              Ahmad <span className="font-serif text-[21px] italic font-normal">Na&apos;im</span>
            </span>
          </div>
          <p className="text-sm text-[#52525b]">{t("footer.tagline")}</p>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-12 py-14 lg:grid-cols-12">
          {/* Left Headline & Contact */}
          <div className="space-y-6 lg:col-span-5">
            <h2 className="text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-[#010101] sm:text-4xl">
              {t("footer.headline")}
            </h2>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-[#52525b]">
                  {t("footer.dropLine")}
                </div>
                <a
                  href="mailto:ahmdnaim3@gmail.com"
                  className="mt-1 inline-block text-sm font-medium text-[#010101] hover:underline"
                >
                  ahmdnaim3@gmail.com
                </a>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-[#52525b]">
                  {t("footer.whatsappLabel")}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm font-medium text-[#010101] hover:underline"
                >
                  +62 878-4154-9562
                </a>
              </div>
            </div>

            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="orbix-shadow inline-flex h-11 items-center gap-2 rounded-full bg-[#010101] px-6 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                <span>{t("footer.deckCta")}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Right 3 Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#010101]">
                {t("footer.servicesTitle")}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-[#52525b]">
                <li>
                  <a href="#services" className="hover:text-[#010101]">
                    Web App Dev
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#010101]">
                    UI/UX &amp; Frontend
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#010101]">
                    AI Chatbot
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#010101]">
                    Payment Gateway
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#010101]">
                {t("footer.linksTitle")}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-[#52525b]">
                <li>
                  <a
                    href="https://sabana-adventure.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#010101]"
                  >
                    Sabana Adventure
                  </a>
                </li>
                <li>
                  <a
                    href="https://scholarify.id/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#010101]"
                  >
                    Scholarify
                  </a>
                </li>
                <li>
                  <a
                    href="https://aira-dry-cleaning.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#010101]"
                  >
                    Aira Dry Cleaning
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#010101]">
                    {t("nav.pricing")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#010101]">
                {t("footer.followTitle")}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-[#52525b]">
                <li>
                  <a
                    href="https://github.com/zayeenjavas"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#010101]"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ahmadznaim/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#010101]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ahmaadznaeem/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#010101]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col items-start justify-between gap-2 border-t border-[#e9eaef] pt-6 text-xs text-[#52525b] sm:flex-row sm:items-center">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
