import { HeroSection } from "@/components/sections/HeroSection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Reviews } from "@/components/sections/Reviews";
import { OliveFacts } from "@/components/sections/OliveFacts";
import { FAQ } from "@/components/sections/FAQ";
import { NewsletterFooter } from "@/components/sections/NewsletterFooter";
import { Navbar } from "@/components/navigation/Navbar";
import { ProductsShippingMarquee } from "@/components/sections/ProductsShippingMarquee";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <div className="bg-gradient-to-b from-background to-secondary/20">
          <ProductShowcase />
          <Reviews />
          <OliveFacts />
          <FAQ />
          <ProductsShippingMarquee />
          <NewsletterFooter />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
