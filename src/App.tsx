import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Pricing } from "@/components/Pricing";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { HatchedDivider } from "@/components/ui/section-divider";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--bg)] text-[var(--fg)]">
      <Header />
      <main className="grow">
        <Hero />
        <HatchedDivider />
        <Story />
        <HatchedDivider />
        <Portfolio />
        <HatchedDivider />
        <Services />
        <HatchedDivider />
        <TechStack />
        <HatchedDivider />
        <Pricing />
        <HatchedDivider />
        <TestimonialsSection />
      </main>
      <HatchedDivider />
      <Footer />
    </div>
  );
}

export default App;
