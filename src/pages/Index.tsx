import { HeroSection } from "@/components/sections/HeroSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { OliveFacts } from "@/components/sections/OliveFacts";
import { NewsletterFooter } from "@/components/sections/NewsletterFooter";
import { Navbar } from "@/components/navigation/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="bg-gradient-to-b from-background to-secondary/20">
        <ProductShowcase />
        <OliveFacts />
        <NewsletterFooter />
      </div>
    </div>
  );
};

export default Index;
