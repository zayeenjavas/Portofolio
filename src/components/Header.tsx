import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "lucide-react";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useTranslation } from "@/providers/language-provider";

const NAV_KEYS = [
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 h-[73px] w-full border-b border-[var(--line)] bg-[var(--bg)]/92 backdrop-blur-md">
      <div className="rail-container flex h-full items-center justify-between px-4 md:px-8">
        <a
          href="#home"
          className="flex size-10 items-center justify-center border border-[var(--fg)] bg-[var(--panel)] font-mono text-base font-bold tracking-tighter text-[var(--fg)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          aria-label="Ahmad Na'im Home"
        >
          AN
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_KEYS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <div className="flex items-center gap-2 border-l border-[var(--line)] pl-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="flex size-8 cursor-pointer items-center justify-center border border-[var(--line)] bg-[var(--panel)] text-[var(--fg)]"
          >
            <MenuToggleIcon open={open} className="size-4" duration={300} />
          </button>
        </div>
      </div>

      <MobileDrawer open={open} onClose={() => setOpen(false)}>
        <div className="flex h-14 items-center justify-between border-b border-[var(--line)] px-5">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--mut)]">
            MENU
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex size-8 cursor-pointer items-center justify-center text-[var(--mut)] hover:text-[var(--fg)]"
          >
            <XIcon className="size-4" />
          </button>
        </div>

        <div className="flex flex-1 flex-col">
          {NAV_KEYS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex h-10 items-center justify-between border-b border-[var(--line)] px-5 font-mono text-xs uppercase tracking-[0.06em] text-[var(--fg)] transition-colors hover:bg-[var(--panel)]"
            >
              <span>{t(`nav.${link.key}`)}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-[var(--line)] p-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="chamfer-btn flex w-full items-center justify-center bg-[var(--fg)] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--bg)]"
          >
            {t("nav.letsTalk")} →
          </a>
        </div>
      </MobileDrawer>
    </header>
  );
}

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function MobileDrawer({ open, onClose, children }: MobileDrawerProps) {
  if (!open || typeof window === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" id="mobile-menu">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-[2px]"
      />
      <div className="fixed inset-y-0 right-0 flex w-3/4 max-w-xs flex-col border-l border-[var(--line)] bg-[var(--bg)] shadow-2xl">
        {children}
      </div>
    </div>,
    document.body
  );
}
