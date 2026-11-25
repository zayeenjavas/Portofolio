import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRightIcon, PlusIcon } from "lucide-react";
import { useTranslation } from "@/providers/language-provider";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/6287841549562?text=Halo%20Ahmad%2C%20saya%20ingin%20diskusi%20project.";

export function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [1, 2, 3, 4].map((i) => ({
    q: t(`faq.q${i}`),
    a: t(`faq.a${i}`),
  }));

  return (
    <section id="faq" className="bg-[#f3f4f6] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Sticky CTA Card */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] border border-[#e9eaef] bg-white p-8 lg:sticky lg:top-24">
              <div className="flex items-center gap-3">
                <img
                  src="/images/profile-hero.jpg"
                  alt="Ahmad Na'im"
                  className="size-12 rounded-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
                <div>
                  <div className="text-sm font-semibold text-[#010101]">
                    {t("faq.cardTitle")}
                  </div>
                  <div className="text-xs text-[#52525b]">{t("faq.cardSub")}</div>
                </div>
              </div>

              <h2 className="mt-6 text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-[#010101] sm:text-4xl">
                {t("faq.title")}
              </h2>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="orbix-shadow mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-[#010101] px-6 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                <span>{t("faq.cardCta")}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Right Expandable Accordion */}
          <div className="divide-y divide-[#e2e4ea] lg:col-span-7">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                  >
                    <h3 className="text-lg font-medium text-[#222222] sm:text-[22px]">
                      {item.q}
                    </h3>
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full border border-[#d6d8df] bg-white text-[#010101] transition-transform duration-200",
                        isOpen && "rotate-45"
                      )}
                    >
                      <PlusIcon className="size-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 pr-10 text-base leading-relaxed text-[#52525b]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
