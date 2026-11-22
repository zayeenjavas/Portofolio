import { SectionHeader } from "@/components/ui/section-divider";
import { EmptyTestimonial } from "@/components/EmptyTestimonial";
import { useTranslation } from "@/providers/language-provider";

const TESTIMONIALS = [
  {
    text: "The Aira Dry Cleaning website exceeded our expectations. Fast, responsive, and the design perfectly captures our brand identity. Highly recommended!",
    name: "Aira Wahyuni",
    role: "Owner, Aira Dry Cleaning",
  },
  {
    text: "Professional, reliable, and detail-oriented. Delivered the Scholarify project on time with zero issues. The platform handles thousands of users smoothly.",
    name: "Rizky Hidayat",
    role: "Founder, Scholarify Academy",
  },
  {
    text: "Shipped our redesign ahead of schedule. Best frontend engineer we've worked with — communication was crystal clear the whole way.",
    name: "Sarah Lestari",
    role: "Product Manager",
  },
  {
    text: "A rare developer who understands both design and code. The UI elevated our landing page and conversion rate improved significantly.",
    name: "Dewi Permata",
    role: "Marketing Lead",
  },
  {
    text: "His frontend skills are top-notch. React components were well-structured, reusable, and easy to maintain. Our dev team learned a lot from his code.",
    name: "Maya Anggraini",
    role: "Senior Engineer",
  },
  {
    text: "Clean code, clean design, clean communication. Three things I value most in a developer, and Ahmad delivers all of them consistently.",
    name: "Sari Indah",
    role: "Design Director",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.name}
              className={[
                "flex flex-col justify-between border-[var(--line)] bg-[var(--bg)] p-6 transition-colors hover:bg-[var(--panel)]",
                idx % 3 !== 2 ? "lg:border-r" : "",
                idx % 2 === 0 ? "sm:border-r lg:border-r" : "sm:border-r-0",
                idx < 3 ? "lg:border-b" : "",
                idx < 4 ? "sm:border-b lg:border-b-0" : "",
                idx < 5 ? "border-b sm:border-b-0" : "",
              ].join(" ")}
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
