import { LanguageToggle } from "@/components/ui/language-toggle";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function OrbixMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 4C11.5 4 7.8 6.8 6.4 10.8"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M25.6 10.8C24.2 6.8 20.5 4 16 4"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M7 22C9.2 25.6 12.4 27.5 16 27.5C19.6 27.5 22.8 25.6 25 22"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="3.2" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="absolute top-0 right-0 left-0 z-30 w-full">
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 text-[#010101]">
          <OrbixMark className="size-7 shrink-0" />
          <span className="hidden text-lg font-semibold tracking-tight sm:inline">
            Ahmad <span className="font-serif text-[21px] italic font-normal">Na&apos;im</span>
          </span>
        </a>

        <div className="flex items-center gap-2.5">
          <LanguageToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="orbix-shadow inline-flex h-10 items-center justify-center rounded-full bg-[#010101] px-5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            {t("nav.contactUs")}
          </a>
        </div>
      </div>
    </header>
  );
}
