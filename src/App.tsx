import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { ProcessSection } from "@/components/ProcessSection";
import { Pricing } from "@/components/Pricing";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--bg)] text-[var(--fg)]">
      <Header />
      <main className="grow">
        <Hero />
        <Portfolio />
        <Services />
        <ProcessSection />
        <Story />
        <Pricing />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
