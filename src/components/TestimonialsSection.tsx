import { StarIcon } from "lucide-react";
import { EmptyTestimonial } from "@/components/EmptyTestimonial";
import { useTranslation } from "@/providers/language-provider";

const TESTIMONIALS = [
  {
    text: "Sistem operasional dan katalog online Sabana Adventure membuat pengelolaan stok alat camping, ekstraksi pesanan WhatsApp, dan pelacakan booking pelanggan jadi jauh lebih rapi.",
    name: "Owner Sabana Adventure",
    role: "Owner, Sabana Adventure",
  },
  {
    text: "Professional, reliable, and detail-oriented. Delivered the Scholarify project on time with zero issues. The platform handles thousands of users smoothly.",
    name: "M. Maldini",
    role: "Founder, Scholarify Academy",
  },
  {
    text: "The Aira Dry Cleaning website exceeded our expectations. Fast, responsive, and the design perfectly captures our brand identity. Highly recommended!",
    name: "Aira Wahyuni",
    role: "Owner, Aira Dry Cleaning",
  },
];

export function TestimonialsSection() {
  const { t } = useTranslation();

  if (TESTIMONIALS.length === 0) {
    return <EmptyTestimonial />;
  }

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--panel)] px-3.5 py-1 text-xs font-semibold text-[var(--accent)]">
            {t("testimonials.badge")}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[var(--fg)] sm:text-4xl lg:text-5xl">
            {t("testimonials.title")}
          </h2>
          <p className="mt-3 text-base text-[var(--mut)]">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-7"
            >
              <div>
                <div className="mb-4 flex gap-1 text-amber-400">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <StarIcon key={s} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[var(--fg)]/90">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--line)] pt-4">
                <div className="text-sm font-bold text-[var(--fg)]">
                  {item.name}
                </div>
                <div className="text-xs text-[var(--mut)]">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
