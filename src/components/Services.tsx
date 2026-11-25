import { ArrowUpRightIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

const SERVICE_LIST = [
  { num: "/01", titleKey: "services.s1Title", descKey: "services.s1Desc" },
  { num: "/02", titleKey: "services.s2Title", descKey: "services.s2Desc" },
  { num: "/03", titleKey: "services.s3Title", descKey: "services.s3Desc" },
  { num: "/04", titleKey: "services.s4Title", descKey: "services.s4Desc" },
  { num: "/05", titleKey: "services.s5Title", descKey: "services.s5Desc" },
  { num: "/06", titleKey: "services.s6Title", descKey: "services.s6Desc" },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] divide-y divide-[#e9eaef] px-5 sm:px-8">
        {SERVICE_LIST.map((service) => (
          <div
            key={service.num}
            className="grid gap-6 py-12 sm:py-16 lg:grid-cols-12 lg:items-center"
          >
            <div className="font-mono text-sm font-medium text-[#52525b] lg:col-span-2">
              {service.num}
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-[#010101] sm:text-4xl">
                {t(service.titleKey)}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#52525b]">
                {t(service.descKey)}
              </p>
            </div>
            <div className="flex lg:col-span-4 lg:justify-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-[#e9eaef] bg-white px-6 text-sm font-medium text-[#010101] transition-colors hover:bg-[#010101] hover:text-white"
              >
                <span>{t("services.cta")}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
