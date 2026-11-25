import { useEffect, useState } from "react";
import {
  ArrowUpRightIcon,
  CalendarIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { OrbixMark } from "@/components/Header";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function FloatingDock() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollPct(0);
        return;
      }
      const pct = Math.min(
        100,
        Math.max(0, Math.round((window.scrollY / docHeight) * 100))
      );
      setScrollPct(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.work"), href: "#work", count: "3" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  return (
    <>
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm"
        />
      )}

      <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center">
        {/* Upward-expanding White Menu Card */}
        {open && (
          <div className="mb-3 w-[320px] rounded-3xl border border-[#e9eaef] bg-white p-5 text-[#010101] shadow-2xl sm:w-[360px]">
            <div className="mb-3 text-[11px] font-medium uppercase tracking-wider text-[#52525b]">
              {t("nav.menu")}
            </div>

            <nav className="flex flex-col divide-y divide-[#e9eaef]">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-2.5 text-sm font-medium text-[#010101] transition-colors hover:text-[#52525b]"
                >
                  <span>{item.label}</span>
                  {item.count && (
                    <span className="rounded-full bg-[#f3f4f6] px-2 py-0.5 text-[11px] font-medium text-[#52525b]">
                      {item.count}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#010101] px-4 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              <CalendarIcon className="size-3.5" />
              <span>{t("nav.bookCall")}</span>
            </a>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#e9eaef] pt-4 text-xs">
              <div>
                <div className="mb-1.5 font-medium text-[#52525b]">Social</div>
                <div className="flex flex-col gap-1 text-[#010101]">
                  <a
                    href="https://github.com/zayeenjavas"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    GitHub <ArrowUpRightIcon className="size-3" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmadznaim/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    LinkedIn <ArrowUpRightIcon className="size-3" />
                  </a>
                  <a
                    href="https://www.instagram.com/ahmaadznaeem/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    Instagram <ArrowUpRightIcon className="size-3" />
                  </a>
                </div>
              </div>

              <div>
                <div className="mb-1.5 font-medium text-[#52525b]">
                  {t("nav.dropLine")}
                </div>
                <div className="flex flex-col gap-1 text-[#010101]">
                  <a
                    href="mailto:ahmdnaim3@gmail.com"
                    className="truncate hover:underline"
                  >
                    ahmdnaim3@gmail.com
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    +62 878-4154-9562
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Black Floating Pill Dock */}
        <div className="flex h-12 items-center gap-4 rounded-full bg-[#010101] px-4 text-white shadow-2xl shadow-black/25">
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center text-white transition-opacity hover:opacity-80"
          >
            <OrbixMark className="size-5" />
          </a>

          <span className="h-4 w-px bg-white/15" />

          <span className="w-10 text-center font-mono text-xs font-medium tabular-nums text-white/85">
            {scrollPct}%
          </span>

          <span className="h-4 w-px bg-white/15" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-white transition-opacity hover:opacity-80"
          >
            {open ? (
              <>
                <XIcon className="size-3.5" />
                <span>{t("nav.close")}</span>
              </>
            ) : (
              <>
                <MenuIcon className="size-3.5" />
                <span>{t("nav.menu")}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
