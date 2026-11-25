import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { FloatingDock } from "@/components/FloatingDock";

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#fafafa] text-[#010101]">
      <Header />
      <main className="grow">
        <Hero />
        <ProcessSection />
        <Portfolio />
        <Services />
        <Pricing />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  );
}

export default App;
