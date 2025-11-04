import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const showcaseRef = useRef(null);
  const isInView = useInView(showcaseRef, { once: true, margin: "-100px" });

  // Filter to show only the main 3 products on homepage
  const mainProducts = products.filter(product => 
    ['spiced-olive-oil-500ml', 'extra-virgin-olive-oil-500ml', 'pine-tree-honey-400g'].includes(product.id)
  );

  return (
    <section id="products" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div ref={showcaseRef} className="text-center mb-16">
          <motion.h2 
            className="font-serif text-xl md:text-2xl font-bold mb-2" 
            style={{ color: '#22372b' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Agnó Pronunciation: /aɡˈnó/
          </motion.h2>
          <motion.p 
            className="text-sm max-w-2xl mx-auto" 
            style={{ color: '#22372b' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            A Concept derived from the Greek word ἄγνω, meaning “pure”. it symbolizes purity, authenticity, and natural excellence, reflecting the Mediterranean lifestyle and artisanal Greek products like olive oil, oregano and honey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mainProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              volume={product.volume}
              purchaseLink={product.purchaseLink}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <button 
              className="text-sm font-medium border px-6 py-2 rounded-sm hover:text-white transition-colors duration-300"
              style={{ 
                color: '#22372b', 
                borderColor: '#22372b',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#22372B';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#22372b';
              }}
            >
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};