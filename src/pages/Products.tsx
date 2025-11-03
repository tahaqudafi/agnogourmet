import { Navbar } from "@/components/navigation/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState, useEffect, useRef } from "react";
import { PageTransition } from "@/components/PageTransition";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { motion, useInView } from "framer-motion";
import { NewsletterFooter } from "@/components/sections/NewsletterFooter";
import pomoImage from "@/assets/pomo.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroRef = useRef(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(heroRef, { once: true, margin: "-100px" });

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Reset carousel when category changes
    useEffect(() => {
        setCurrentSlide(0);
    }, [selectedCategory]);

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'olive-oil', label: 'Olive Oil' },
        { id: 'honey', label: 'Honey' },
        { id: 'spices', label: 'Spices' }
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % filteredProducts.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const handleDragEnd = (event: any, info: any) => {
        const threshold = 50;
        if (info.offset.x > threshold) {
            prevSlide();
        } else if (info.offset.x < -threshold) {
            nextSlide();
        }
    };

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
                            Our Collection
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

                {/* Products Grid - Desktop */}
                <section className="pb-24 px-4 md:px-8 lg:px-16 hidden md:block">
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

                {/* Products Carousel - Mobile */}
                <section className="pb-24 px-4 md:hidden">
                    <div className="max-w-sm mx-auto">
                        {filteredProducts.length > 0 ? (
                            <div className="relative">
                                {/* Carousel Container */}
                                <div
                                    ref={carouselRef}
                                    className="overflow-hidden rounded-2xl"
                                >
                                    <motion.div
                                        className="flex cursor-grab active:cursor-grabbing"
                                        animate={{ x: -currentSlide * 100 + "%" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.2}
                                        onDragEnd={handleDragEnd}
                                        whileDrag={{ cursor: "grabbing" }}
                                    >
                                        {filteredProducts.map((product) => (
                                            <div key={product.id} className="w-full flex-shrink-0 px-2 pointer-events-none">
                                                <div className="pointer-events-auto">
                                                    <ProductCard
                                                        image={product.image}
                                                        name={product.name}
                                                        description={product.description}
                                                        volume={product.volume}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Navigation Buttons */}
                                {filteredProducts.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevSlide}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/30 transition-all duration-300 hover:bg-white/90"
                                            style={{ color: '#22372b' }}
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/30 transition-all duration-300 hover:bg-white/90"
                                            style={{ color: '#22372b' }}
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}

                                {/* Dots Indicator */}
                                {filteredProducts.length > 1 && (
                                    <div className="flex justify-center mt-6 gap-2">
                                        {filteredProducts.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                                    ? 'w-6'
                                                    : 'hover:opacity-80'
                                                    }`}
                                                style={{
                                                    backgroundColor: index === currentSlide ? '#22372b' : '#22372b40'
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-xl" style={{ color: '#22372b' }}>
                                    No products found in this category.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Coming Soon Section */}
                <section className="py-16 px-4 md:px-8 lg:px-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                            style={{ color: '#22372b' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Coming Soon
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl mb-8"
                            style={{ color: '#22372b' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            We're constantly expanding our collection with new authentic Greek treasures.
                            Stay tuned for exciting additions to our Mediterranean family.
                        </motion.p>

                        <motion.div
                            className="flex flex-col lg:flex-row gap-8 mt-12 max-w-5xl mx-auto items-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {/* Pomegranate Image */}
                            <div className="flex justify-center lg:justify-end flex-shrink-0">
                                <img
                                    src={pomoImage}
                                    alt="Pomegranate molasses from the Aegean"
                                    className="w-60 h-auto rounded-3xl shadow-lg object-cover"
                                />
                            </div>

                            {/* Product Information Card */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-lg flex-1">
                                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6" style={{ color: '#22372b' }}>
                                    Pomegranate molasses from the Aegean
                                </h3>

                                <div className="space-y-4 text-left">
                                    <p className="text-base" style={{ color: '#22372b' }}>
                                        <strong>100% pure pomegranate juice with no additives</strong>
                                    </p>
                                    <p className="text-base" style={{ color: '#22372b' }}>
                                        Slowly simmered at low temperature for an intense flavor
                                    </p>
                                    <p className="text-base" style={{ color: '#22372b' }}>
                                        Sweet and tangy taste with a deep fruity aroma
                                    </p>
                                    <p className="text-base" style={{ color: '#22372b' }}>
                                        Rich in antioxidants
                                    </p>
                                    <p className="text-base" style={{ color: '#22372b' }}>
                                        Rarely found in Germany
                                    </p>
                                    <p className="text-base" style={{ color: '#22372b' }}>
                                        Perfect for salads, marinades, appetizers, or desserts
                                    </p>
                                    <p className="text-base font-semibold mt-6" style={{ color: '#22372b' }}>
                                        Available from 2026
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <NewsletterFooter />

            </div>
        </PageTransition>
    );
};

export default Products;