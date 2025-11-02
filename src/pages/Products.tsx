import { Navbar } from "@/components/navigation/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState, useEffect, useRef } from "react";
import { PageTransition } from "@/components/PageTransition";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { motion, useInView } from "framer-motion";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const heroRef = useRef(null);
    const isInView = useInView(heroRef, { once: true, margin: "-100px" });

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'olive-oil', label: 'Olive Oil' },
        { id: 'honey', label: 'Honey' },
        { id: 'spices', label: 'Spices' }
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <PageTransition>
            <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
                <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1 
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" 
                        style={{ color: '#22372b' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Our Products
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-xl max-w-3xl mx-auto mb-12" 
                        style={{ color: '#22372b' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        Discover our collection of premium Greek products, crafted with tradition and passion.
                        From extra virgin olive oils to natural honey, each product embodies the authentic taste of the Mediterranean.
                    </motion.p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="pb-8 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                                    ? 'text-white shadow-lg'
                                    : 'text-[#22372b] bg-white border border-[#22372b] hover:bg-[#22372b] hover:text-white'
                                    }`}
                                style={{
                                    backgroundColor: selectedCategory === category.id ? '#22372b' : undefined
                                }}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-24 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer className="flex flex-wrap justify-center gap-6 lg:gap-8" delay={0.3}>
                        {filteredProducts.map((product) => (
                            <StaggerItem key={product.id} className="w-full max-w-xs">
                                <ProductCard
                                    image={product.image}
                                    name={product.name}
                                    description={product.description}
                                    volume={product.volume}
                                />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-xl" style={{ color: '#22372b' }}>
                                No products found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="pb-24 px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-3xl p-12 shadow-lg">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: '#22372b' }}>
                            Can't Find What You're Looking For?
                        </h2>
                        <p className="text-lg mb-8" style={{ color: '#22372b' }}>
                            We're constantly expanding our product line. Contact us for special requests or to learn about upcoming products.
                        </p>
                        <button
                            className="text-lg font-medium border-2 px-8 py-4 rounded-full hover:text-white transition-colors duration-300"
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
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
            </div>
        </PageTransition>
    );
};

export default Products;