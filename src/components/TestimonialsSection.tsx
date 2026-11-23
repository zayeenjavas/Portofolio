import { SectionHeader } from "@/components/ui/section-divider";
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
    <section id="testimonials" className="w-full">
      <div className="rail-container">
        <SectionHeader
          title={t("testimonials.title")}
          indexLabel={t("testimonials.index")}
        />

        <div className="grid grid-cols-1 divide-y divide-[var(--line)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between bg-[var(--bg)] p-6 transition-colors hover:bg-[var(--panel)]"
            >
              <p className="text-sm leading-relaxed text-[var(--mut)]">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="mt-6 border-t border-[var(--line)] pt-3">
                <div className="text-sm font-semibold text-[var(--fg)]">
                  {item.name}
                </div>
                <div className="font-mono text-[11px] text-[var(--mut)]">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
