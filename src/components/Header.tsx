import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRightIcon, MenuIcon, XIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useScroll } from "@/hooks/use-scroll";
import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

const NAV_KEYS = [
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
  { key: "process", href: "#process" },
  { key: "pricing", href: "#pricing" },
  { key: "about", href: "#about" },
] as const;

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(12);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full px-4 pt-3 sm:px-6">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-4 transition-all duration-200 sm:px-5",
          scrolled
            ? "border-[var(--line)] bg-[var(--panel)]/85 shadow-lg shadow-black/15 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid size-8 place-content-center rounded-lg bg-[var(--accent)] text-xs font-extrabold tracking-tight text-white">
            AN
          </span>
          <span className="text-sm font-bold tracking-tight text-[var(--fg)]">
            Ahmad Na&apos;im
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_KEYS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-xs font-medium text-[var(--mut)] transition-colors hover:text-[var(--fg)]"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--fg)] px-4 py-2 text-xs font-semibold text-[var(--bg)] transition-opacity hover:opacity-90"
          >
            <span>{t("nav.letsTalk")}</span>
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--fg)]"
          >
            <MenuIcon className="size-4" />
          </button>
        </div>
      </div>

      <MobileDrawer open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
          <span className="text-sm font-bold text-[var(--fg)]">
            Ahmad Na&apos;im
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] text-[var(--mut)] hover:text-[var(--fg)]"
          >
            <XIcon className="size-4" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 p-4">
          {NAV_KEYS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--fg)] transition-colors hover:bg-[var(--surface)]"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="border-t border-[var(--line)] p-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--fg)] px-5 py-3 text-xs font-semibold text-[var(--bg)]"
          >
            <span>{t("nav.letsTalk")}</span>
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </div>
      </MobileDrawer>
    </header>
  );
}

function MobileDrawer({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open || typeof window === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-xs"
      />
      <div className="fixed inset-y-0 right-0 flex w-3/4 max-w-xs flex-col border-l border-[var(--line)] bg-[var(--panel)] shadow-2xl">
        {children}
      </div>
    </div>,
    document.body
  );
}
