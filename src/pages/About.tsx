import { Navbar } from "@/components/navigation/Navbar";
import { NewsletterFooter } from "@/components/sections/NewsletterFooter";
import { PageTransition } from "@/components/PageTransition";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import basketSvg from "@/assets/basket.svg";
import oliveSvg from "@/assets/olive.svg";
import funnelSvg from "@/assets/funnel.svg";
import oliveDropSvg from "@/assets/olivedrop.svg";
import agnoGreenSvg from "@/assets/agnogreen.svg";

const About = () => {
    const heroRef = useRef(null);
    const olivesRef = useRef(null);
    const basketRef = useRef(null);
    const oliveDropRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const isOlivesInView = useInView(olivesRef, { once: true, margin: "-100px" });

    // Scroll-based animation for the basket - simple tilt
    const { scrollYProgress } = useScroll({
        target: basketRef,
        offset: ["start end", "end start"]
    });

    // Olive drop animation - starts when scrolling past center of monitor
    const { scrollYProgress: oliveDropScrollProgress } = useScroll({
        target: oliveDropRef,
        offset: ["start center", "end start"]
    });

    const basketTilt = useTransform(scrollYProgress, [0, 1], [-20, 60]);

    // Olive falling animation - drops vertically, shrinks and disappears into funnel
    const oliveY = useTransform(scrollYProgress, [0.3, 0.8], [0, 385]);
    const oliveOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.78, 0.8], [0, 1, 1, 0]);
    const oliveScale = useTransform(scrollYProgress, [0.3, 0.5, 0.78, 0.8], [0.1, 0.5, 0.5, 0.05]);
    const oliveRotate = useTransform(scrollYProgress, [0.3, 0.8], [0, 720]);

    // Olive drop animation - starts when past center, 40% faster fall total
    const oliveDropY = useTransform(oliveDropScrollProgress, [0.0, 0.6], [0, 400]);
    const oliveDropOpacity = useTransform(oliveDropScrollProgress, [0.0, 0.05, 0.55, 0.6], [0, 1, 1, 0]);
    const oliveDropScale = useTransform(oliveDropScrollProgress, [0.0, 0.05, 0.55, 0.6], [0.5, 1, 1, 0.3]);

    // Bottle animation - simple scale up and back down when olive drop enters
    const bottleScale = useTransform(oliveDropScrollProgress, [0.55, 0.575, 0.6], [2.25, 3, 2.8]);

    // Funnel shake animation - triggers right after olive animation ends
    const funnelShakeX = useTransform(scrollYProgress, [0.8, 0.82, 0.84, 0.86, 0.88], [0, -3, 3, -2, 0]);
    const funnelShakeY = useTransform(scrollYProgress, [0.8, 0.82, 0.84, 0.86, 0.88], [0, -2, 2, -1, 0]);









    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <style>{`
                .olives-section-mobile {
                    min-height: 1500px;
                }
                @media (max-width: 767px) {
                    .olives-section-mobile {
                        min-height: 1250px;
                    }
                }
            `}</style>
            <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex flex-col">
                <Navbar />

                {/* Hero Section */}
                <section ref={heroRef} className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h1
                            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                            style={{ color: '#22372b' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            About Us
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
                            style={{ color: '#22372b' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            Welcome to Agnó, where tradition meets excellence in every bottle and jar.
                            Discover our story, our passion, and our commitment to bringing you the finest Mediterranean treasures.
                        </motion.p>
                    </div>
                </section>

                {/* Our Olives Section - Sized to end under bottle */}
                <section
                    ref={olivesRef}
                    className="py-16 px-4 md:px-8 lg:px-16 olives-section-mobile"
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2
                            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-0 md:mb-12"
                            style={{ color: '#22372b' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isOlivesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Our Olives
                        </motion.h2>

                        {/* Basket and Olive Animation Container */}
                        <div ref={basketRef} className="relative flex items-center justify-center py-8 h-96 overflow-visible">
                            {/* Basket SVG - Simple tilt animation */}
                            <motion.img
                                src={basketSvg}
                                alt="Olive Basket"
                                className="w-24 h-24 md:w-44 md:h-44 object-contain"
                                style={{
                                    rotate: basketTilt,
                                    marginLeft: '0px',
                                }}
                                initial={{ opacity: 0 }}
                                animate={isOlivesInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            />

                            {/* Falling Olive SVG - Centered and drops vertically */}
                            <motion.img
                                src={oliveSvg}
                                alt="Falling Olive"
                                className="absolute w-12 h-12 object-contain pointer-events-none left-1/2 transform -translate-x-1/2 -ml-4"
                                style={{
                                    y: oliveY,
                                    opacity: oliveOpacity,
                                    scale: oliveScale,
                                    rotate: oliveRotate,
                                    originX: 0.5,
                                    originY: 0.5,
                                }}
                                initial={{
                                    y: -20, // Start from top center
                                }}
                            />
                        </div>

                        {/* Independent Basket Description - Positioned next to basket */}
                        <div className="relative">
                            <motion.div
                                className="absolute space-y-2 md:space-y-8 text-center md:text-right pointer-events-none left-[30%] md:left-[70%] transform -translate-x-1/2 -translate-y-1/2 md:translate-x-[-50%]"
                                style={{
                                    top: '-30px'
                                }}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isOlivesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            >
                                <p className="text-lg font-serif scale-100 md:scale-[3]" style={{ color: '#22372b' }}>Freshly harvested</p>
                                <p className="text-lg font-serif scale-100 md:scale-[3]" style={{ color: '#22372b' }}>With care</p>
                            </motion.div>
                        </div>

                        {/* Funnel Container - Hugs SVG */}
                        <div className="relative flex items-center justify-center mt-32">
                            {/* Left description for funnel */}
                            <motion.div
                                className="absolute space-y-3 text-center md:text-left left-[20%] md:left-[14%] transform -translate-x-1/2 md:translate-x-[-50%]"
                                style={{
                                    marginTop: '580px'
                                }}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isOlivesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                            >
                                <p className="text-lg font-serif scale-100 md:scale-[2.3]" style={{ color: '#22372b' }}>Independently lab tested</p>
                                <p className="text-lg font-serif scale-100 md:scale-[2.3]" style={{ color: '#22372b' }}>Acidity below 0.45</p>
                                <p className="text-lg font-serif scale-100 md:scale-[2.3]" style={{ color: '#22372b' }}>& polyphenols 355 mg/kg</p>
                            </motion.div>

                            <motion.img
                                src={funnelSvg}
                                alt="Funnel"
                                className="w-40 h-40 md:w-56 md:h-56 object-contain ml-4"
                                style={{
                                    marginLeft: 'calc(1rem - 10px)',
                                    x: funnelShakeX,
                                    y: funnelShakeY,
                                }}
                            />



                            {/* Olive Drop Content */}
                            <div ref={oliveDropRef} className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 pointer-events-none pb-24 md:pb-96">
                                <motion.img
                                    src={oliveDropSvg}
                                    alt="Olive Drop"
                                    className="w-20 h-20 object-contain"
                                    style={{
                                        y: oliveDropY,
                                        opacity: oliveDropOpacity,
                                        scale: oliveDropScale,
                                        originX: 0.5,
                                        originY: 0.5,
                                    }}
                                />



                                {/* AGNO Green SVG at bottom of padding */}
                                <motion.img
                                    src={agnoGreenSvg}
                                    alt="AGNO Green Bottle"
                                    className="absolute w-16 h-16 md:w-32 md:h-32 object-contain left-1/2"
                                    style={{
                                        top: '400px',
                                        x: '-50%',
                                        scale: bottleScale,
                                        originX: 0.5,
                                        originY: 0.5,
                                    }}
                                />


                            </div>
                        </div>
                    </div>
                </section>

                {/* Groove to Bottle Section */}
                <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2
                            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
                            style={{ color: '#22372b' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Groove to Bottle
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl max-w-4xl mx-auto"
                            style={{ color: '#22372b' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            From the ancient groves of the Mediterranean to your table, every bottle of Agnó carries centuries of tradition.
                            Our time-honored process transforms the finest olives into liquid gold, preserving the authentic flavors and
                            nutritional benefits that have nourished generations. Experience the journey from grove to bottle,
                            where passion meets perfection in every drop.
                        </motion.p>
                    </div>
                </section>

                <NewsletterFooter />
            </div>
        </PageTransition>
    );
};

export default About;