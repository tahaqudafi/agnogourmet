import { ProductCard } from "@/components/ProductCard";
import pureOil500ml from "@/assets/500ML.png";
import spicedOil500ml from "@/assets/Spiced 500ML Olive.png";
import hofney from "@/assets/Hofney.png";

export const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-2" style={{ color: '#22372b' }}>
            Agnó Pronunciation: /aɡˈnó/
          </h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: '#22372b' }}>
            A Concept derived from the Greek word ἄγνω, meaning “pure”. it symbolizes purity, authenticity, and natural excellence, reflecting the Mediterranean lifestyle and artisanal Greek products like olive oil, oregano and honey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ProductCard
            image={spicedOil500ml}
            name="Spiced Olive Oil"
            description="For roasting and bold flavor"
            volume="500ml"
          />
          <ProductCard
            image={pureOil500ml}
            name="Extra Virgin Olive Oil"
            description="A staple for all your dishes"
            volume="500ml"
          />
          <ProductCard
            image={hofney}
            name="Pine Tree Honey"
            description="Natural sweetness"
            volume="400g"
          />
        </div>
      </div>
    </section>
  );
};