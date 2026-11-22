import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

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
      <div className="rail-container flex h-full items-center justify-between px-5 md:px-8">
        <a
          href="#home"
          className="flex size-9 items-center justify-center border border-[var(--line)] bg-[var(--panel)] font-mono text-sm font-bold tracking-tighter text-[var(--fg)] transition-colors hover:border-[var(--fg)]"
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
            aria-label="Toggle menu"
            className="flex size-8 cursor-pointer items-center justify-center border border-[var(--line)] bg-[var(--panel)] text-[var(--fg)]"
          >
            <MenuToggleIcon open={open} className="size-4" duration={300} />
          </button>
        </div>
      </div>

      <MobileMenu open={open}>
        <div className="flex flex-col divide-y divide-[var(--line)] border border-[var(--line)] bg-[var(--panel)]">
          {NAV_KEYS.map((link, idx) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-5 py-4 text-sm font-medium uppercase tracking-[0.12em] text-[var(--fg)] transition-colors hover:bg-[var(--bg)]"
            >
              <span>{t(`nav.${link.key}`)}</span>
              <span className="font-mono text-xs text-[var(--mut)]">
                0{idx + 1}
              </span>
            </a>
          ))}
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="chamfer-btn flex w-full items-center justify-center bg-[var(--fg)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--bg)]"
        >
          {t("nav.letsTalk")} →
        </a>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = {
  open: boolean;
  children: React.ReactNode;
};

function MobileMenu({ open, children }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;
  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-x-0 top-[73px] bottom-0 z-30 flex flex-col justify-between bg-[var(--bg)]/98 p-6 backdrop-blur-md md:hidden"
      )}
    >
      {children}
    </div>,
    document.body
  );
}
