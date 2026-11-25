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
    <section id="testimonials" className="bg-[#f9fafa] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <h2 className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.03em] text-[#010101] sm:text-[52px]">
          {t("testimonials.title")}
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-[24px] border border-[#e9eaef] bg-white p-7 shadow-sm"
            >
              <div>
                <div className="mb-4 flex gap-0.5 text-[#ff6b35]">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <StarIcon key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#010101]/85 sm:text-base">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-[#e9eaef] pt-4">
                <div className="text-sm font-semibold text-[#010101]">
                  {item.name}
                </div>
                <div className="text-xs text-[#52525b]">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
