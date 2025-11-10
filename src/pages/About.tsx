import { Navbar } from "@/components/navigation/Navbar";
import { NewsletterFooter } from "@/components/sections/NewsletterFooter";
import { WhereQualityConnectsDesktop } from "@/components/sections/WhereQualityConnectsDesktop";
import { WhereQualityConnectsMobile } from "@/components/sections/WhereQualityConnectsMobile";
import { PageTransition } from "@/components/PageTransition";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import basketSvg from "@/assets/basket.svg";
import oliveSvg from "@/assets/olive.svg";
import funnelSvg from "@/assets/funnel.svg";
import oliveDropSvg from "@/assets/olivedrop.svg";
import agnoGreenSvg from "@/assets/agnogreen.svg";
import thasosMapImage from "@/assets/thassosmap.png";
import islandImage from "@/assets/islandimage.png";
import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import oliveFarmImage from "@/assets/olivefarm.png";
import pickingOlivesImage from "@/assets/pickingolives.png";
import arrowSvg from "@/assets/arrow.svg";
import arrowMobSvg from "@/assets/ARROWMOB.svg";
import labTestPdf from "@/assets/LabTest2025.pdf";


const About = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [timerProgress, setTimerProgress] = useState(0);
    const heroRef = useRef(null);
    const ourOlivesRef = useRef(null);
    const olivesRef = useRef(null);
    const basketRef = useRef(null);
    const oliveDropRef = useRef(null);
    const freshlyHarvestedRef = useRef(null);
    const labTestedRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const isOurOlivesInView = useInView(ourOlivesRef, { once: true, margin: "-100px" });
    const isOlivesInView = useInView(olivesRef, { once: true, margin: "-100px" });
    const isFreshlyHarvestedInView = useInView(freshlyHarvestedRef, { once: true, margin: "-50px" });
    const isLabTestedInView = useInView(labTestedRef, { once: true, margin: "-50px" });

    // Auto-rotate cards on mobile every 3.2 seconds (pauses for 8 seconds on click)
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            setActiveCardIndex((prev) => (prev + 1) % 4);
            setTimerProgress(0); // Reset progress when card changes
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused]);

    // Timer progress bar animation
    useEffect(() => {
        setTimerProgress(0); // Reset on card change
        
        const duration = isPaused ? 8000 : 3200; // Slower when paused
        const startTime = Date.now();
        
        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min((elapsed / duration) * 100, 100);
            setTimerProgress(progress);
            
            if (progress < 100) {
                requestAnimationFrame(updateProgress);
            }
        };
        
        const animationFrame = requestAnimationFrame(updateProgress);
        return () => cancelAnimationFrame(animationFrame);
    }, [activeCardIndex, isPaused]);

    // Handle card click - if paused, go to next card and resume; if playing, pause for 8 seconds
    const handleCardClick = () => {
        if (isPaused) {
            // If already paused, go to next card and resume
            setActiveCardIndex((prev) => (prev + 1) % 4);
            setIsPaused(false);
        } else {
            // If playing, pause for 8 seconds
            setIsPaused(true);
            setTimeout(() => {
                setIsPaused(false);
            }, 8000);
        }
    };

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

    return (
        <PageTransition>
            <style>{`
                .olives-section-mobile {
                    min-height: 1600px;
                }
                @media (max-width: 767px) {
                    .olives-section-mobile {
                        min-height: 1350px;
                    }
                }
                @keyframes marquee-mobile {
                    from {
                        transform: translate3d(100vw, 0, 0);
                    }
                    to {
                        transform: translate3d(-100%, 0, 0);
                    }
                }
                @keyframes marquee-desktop {
                    from {
                        transform: translate3d(0, 0, 0);
                    }
                    to {
                        transform: translate3d(-50%, 0, 0);
                    }
                }
                .marquee-container {
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                .marquee-content {
                    display: flex;
                    align-items: center;
                    width: fit-content;
                    will-change: transform;
                    animation: marquee-mobile 12s linear infinite;
                }
                .marquee-track {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    flex-shrink: 0;
                    padding-right: 3rem;
                }
                .marquee-track:last-child {
                    display: none;
                }
                @media (min-width: 768px) {
                    .marquee-content {
                        animation: marquee-desktop 20s linear infinite;
                    }
                    .marquee-track {
                        gap: 5rem;
                        padding-right: 5rem;
                    }
                    .marquee-track:last-child {
                        display: flex;
                    }
                }
            `}</style>
            <div className="min-h-screen bg-[#f5f1eb] flex flex-col">
                <Navbar />

                {/* Hero Section */}
                <section ref={heroRef} className="pt-32 pb-0 md:pb-8 px-4 md:px-8 lg:px-16">
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

                    </div>
                </section>

                {/* Origin Section */}
                <section className="py-8 px-4 md:px-8 lg:px-16">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="flex flex-col lg:flex-row gap-8 lg:gap-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-center lg:text-left" style={{ color: '#22372b' }}>
                                    Origin: Thassos, Greece
                                </h2>
                                <p className="text-base md:text-lg leading-relaxed text-center lg:text-left" style={{ color: '#22372b' }}>
                                    Our olive oil is born on Thassos, Greece, where the Aegean sun hits just right, and olive trees have been part of life for centuries. Grown by local families and pressed all within a few km away, every bottle captures the island's sun, sea, and slow living, bottled.
                                </p>

                                {/* Island Image */}
                                <div className="hidden md:block rounded-2xl h-64 overflow-hidden">
                                    <img
                                        src={islandImage}
                                        alt="Thasos island view"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Map Placeholder - Full height match */}
                            <div className="flex-1 bg-[#22372b] rounded-2xl p-8 min-h-[200px] md:min-h-[5000px] lg:min-h-full relative overflow-hidden flex items-end">


                                {/* Thasos Map Image - Full coverage */}
                                <img
                                    src={thasosMapImage}
                                    alt="Thasos, Greece location map"
                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                    style={{ objectPosition: 'center 40%' }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* From Grove to Bottle Section - Sized to end under bottle */}
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
                            From Grove to Bottle
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
                                ref={freshlyHarvestedRef}
                                className="absolute space-y-2 md:space-y-8 text-center md:text-right pointer-events-none left-[30%] md:left-[70%] transform -translate-x-1/2 -translate-y-1/2 md:translate-x-[-50%]"
                                style={{
                                    top: '-30px'
                                }}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isFreshlyHarvestedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <p className="text-lg font-serif scale-100 md:scale-[3]" style={{ color: '#22372b' }}>Freshly harvested</p>
                                <p className="text-lg font-serif scale-100 md:scale-[3]" style={{ color: '#22372b' }}>With care</p>
                            </motion.div>
                        </div>

                        {/* Funnel Container - Hugs SVG */}
                        <div className="relative flex items-center justify-center mt-32">
                            {/* Left description for funnel */}
                            <motion.div
                                ref={labTestedRef}
                                className="absolute space-y-3 text-center md:text-left left-[20%] md:left-[14%] transform -translate-x-1/2 md:translate-x-[-50%]"
                                style={{
                                    marginTop: '580px'
                                }}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isLabTestedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
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

                {/* Our Olives Section */}
                <section ref={ourOlivesRef} className="pt-16 pb-16 px-4 md:px-8 lg:px-16 bg-[#f5f1eb]">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
                            {/* Arrow pointing from olive farm to picking olives - Desktop only */}
                            <img
                                src={arrowSvg}
                                alt="Arrow pointing to olive picking"
                                className="hidden lg:block absolute top-[37%] left-[39%] transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] z-10 pointer-events-none"
                            />

                            {/* Mobile Arrow pointing from down to up - Mobile only */}
                            <motion.img
                                src={arrowMobSvg}
                                alt="Mobile arrow pointing up"
                                className="block lg:hidden absolute top-[38%] left-[-0%] transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[30%] z-10 pointer-events-none"
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={isOurOlivesInView ? {
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -6, 0]
                                } : {
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 10
                                }}
                                transition={{
                                    opacity: { duration: 0.8, ease: "easeOut", delay: 0.6 },
                                    scale: { duration: 0.8, ease: "easeOut", delay: 0.6 },
                                    y: {
                                        duration: 1.8,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        delay: 1.4
                                    }
                                }}
                            />

                            {/* Left Column - Text Content */}
                            <div className="space-y-8">
                                {/* Main Headline */}
                                <div>
                                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4" style={{ color: '#22372b' }}>
                                        Harvested, cold-pressed, and bottled within the same season.
                                    </h2>
                                </div>

                                {/* Spacer to push content down by 50% - desktop only */}
                                <div className="lg:h-40"></div>

                                {/* Bottom Left - Small Image and Text */}
                                <div className="flex gap-6 items-start md:items-center lg:items-end">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={pickingOlivesImage}
                                            alt="Picking olives"
                                            className="w-[128px] h-[180px] md:w-[160px] md:h-[220px] lg:w-[220px] lg:h-[384px] object-cover rounded-2xl"
                                        />
                                    </div>
                                    <div className="flex-1 lg:pb-0">
                                        <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 uppercase tracking-wide" style={{ color: '#22372b' }}>
                                            The art of patience
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed font-mono" style={{ color: '#22372b' }}>
                                            On the island of Thassos, time moves differently.
                                            The air is warm with sea salt, and the Throumba olives ripen slowly under the sun, shrinking, darkening, and filling with flavor.

                                            When the moment is right, we hand-pick each olive,
                                            press it within 1-2 hours in small batches
                                            and bottle it in the very same season.

                                            Never mixed, never rushed.

                                            This is how we honor the rhythm of Thassos
                                            slow, patient, and profoundly pure.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Large Image */}
                            <div className="flex justify-center lg:justify-end">
                                <img
                                    src={oliveFarmImage}
                                    alt="Olive farm landscape"
                                    className="w-full max-w-md h-80 md:h-96 lg:w-70 lg:h-[600px] object-cover rounded-2xl"
                                />
                            </div>
                        </div>


                    </div>
                </section>

                {/* Lab Results Section */}
                <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#f5f1eb]">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#22372b' }}>
                                Lab Results
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: '#22372b' }}>
                                You deserve food that's honest and traceable. That's why every batch of our olive oil is independently lab-tested for purity and quality, with results we proudly share with you.
                            </p>
                            <motion.a
                                href={labTestPdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border-2 border-[#22372b] text-[#22372b] font-serif text-base md:text-lg rounded-full hover:bg-[#22372b] hover:text-[#f5f1eb] transition-all inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Link to lab results
                                <ExternalLink className="w-5 h-5" />
                            </motion.a>

                            {/* Lab Results Cards - Mobile Carousel / Desktop Grid */}
                            <div className="mt-12 mx-auto px-4">
                                {/* Mobile Carousel - Single card with slide animation */}
                                <div className="lg:hidden flex justify-center overflow-hidden">
                                    <div className="relative w-[266px] h-[266px]">
                                        <motion.div
                                            key={`card-${activeCardIndex}`}
                                            className="absolute inset-0 bg-[#22372b] rounded-2xl p-5 flex flex-col justify-between cursor-pointer overflow-hidden"
                                            onClick={handleCardClick}
                                            initial={{ x: 300, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -300, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            whileTap={{ scale: 0.80}}
                                        >
                                            <div className="flex flex-col justify-center flex-1">
                                            {activeCardIndex === 0 && (
                                                <div>
                                                    <h3 className="font-serif text-base font-bold text-[#f5f1eb] mb-2 text-center">POLYPHENOLS</h3>
                                                    <p className="text-[#f5f1eb] text-sm font-semibold mb-1 text-center">355 mg/kg (HPLC)</p>
                                                    <p className="text-[#f5f1eb] text-xs italic mb-2 text-center">standard &gt; 180 mg/kg</p>
                                                    <p className="text-[#f5f1eb] text-xs leading-relaxed text-center">
                                                        Rich in bioactive antioxidants that protect your cells from oxidative stress. These natural compounds are responsible for the bold taste, vibrant aroma, and many of olive oil's scientifically proven health effects.
                                                    </p>
                                                </div>
                                            )}
                                            {activeCardIndex === 1 && (
                                                <div>
                                                    <h3 className="font-serif text-base font-bold text-[#f5f1eb] mb-2 text-center">OLEIC ACID</h3>
                                                    <p className="text-[#f5f1eb] text-sm font-semibold mb-1">69.71 %</p>
                                                    <p className="text-[#f5f1eb] text-xs italic mb-2">standard ≈ 67 %</p>
                                                    <p className="text-[#f5f1eb] text-xs leading-relaxed">
                                                        The main monounsaturated fat found in olive oil — essential for heart and brain health. A high oleic content ensures a rich texture, delicate fruitiness, and a naturally long shelf life.
                                                    </p>
                                                </div>
                                            )}
                                            {activeCardIndex === 2 && (
                                                <div>
                                                    <h3 className="font-serif text-base font-bold text-[#f5f1eb] mb-2 text-center">ACIDITY</h3>
                                                    <p className="text-[#f5f1eb] text-sm font-semibold mb-1">0.42 %</p>
                                                    <p className="text-[#f5f1eb] text-xs italic mb-2">standard &lt; 0.8 %</p>
                                                    <p className="text-[#f5f1eb] text-xs leading-relaxed">
                                                        An exceptional indicator of purity and freshness. Low acidity reflects early harvesting and gentle extraction — resulting in a smoother taste and superior stability.
                                                    </p>
                                                </div>
                                            )}
                                            {activeCardIndex === 3 && (
                                                <div>
                                                    <h3 className="font-serif text-base font-bold text-[#f5f1eb] mb-2 text-center">PEROXIDES</h3>
                                                    <p className="text-[#f5f1eb] text-sm font-semibold mb-1">4.8 meq O₂/kg</p>
                                                    <p className="text-[#f5f1eb] text-xs italic mb-2">standard &lt; 20 meq O₂/kg</p>
                                                    <p className="text-[#f5f1eb] text-xs leading-relaxed">
                                                        A measure of oxidation and freshness. This remarkably low value means the oil is stable, recently produced, and retains its full nutritional strength for longer.
                                                    </p>
                                                </div>
                                            )}
                                            </div>
                                            
                                            {/* Timer Progress Bar */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-2xl overflow-hidden">
                                                <div 
                                                    className="h-full bg-white transition-all"
                                                    style={{ width: `${100 - timerProgress}%` }}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Desktop Grid - All 4 cards */}
                                <div className="hidden lg:grid grid-cols-4 gap-72 justify-items-center place-content-center">
                                    <motion.div
                                        className="bg-[#22372b] rounded-2xl p-5 flex flex-col justify-center w-[266px] h-[266px]"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    >
                                        <h3 className="font-serif text-base font-bold text-[#f5f1eb] mb-2 text-center">POLYPHENOLS</h3>
                                        <p className="text-[#f5f1eb] text-sm font-semibold mb-1 text-center">355 mg/kg (HPLC)</p>
                                        <p className="text-[#f5f1eb] text-xs italic mb-2 text-center">standard &gt; 180 mg/kg</p>
                                        <p className="text-[#f5f1eb] text-xs leading-relaxed text-center">
                                            Rich in bioactive antioxidants that protect your cells from oxidative stress. These natural compounds are responsible for the bold taste, vibrant aroma, and many of olive oil's scientifically proven health effects.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-[#22372b] rounded-2xl p-5 flex flex-col justify-center w-[266px] h-[266px]"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                    >
                                        <h3 className="font-serif text-base font-bold text-[#f5f1eb] mb-2 text-center">OLEIC ACID</h3>
                                        <p className="text-[#f5f1eb] text-sm font-semibold mb-1">69.71 %</p>
                                        <p className="text-[#f5f1eb] text-xs italic mb-2">standard ≈ 67 %</p>
                                        <p className="text-[#f5f1eb] text-xs leading-relaxed">
                                            The main monounsaturated fat found in olive oil — essential for heart and brain health. A high oleic content ensures a rich texture, delicate fruitiness, and a naturally long shelf life.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-[#22372b] rounded-2xl p-5 flex flex-col justify-center w-[266px] h-[266px]"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                                    >
                                        <h3 className="font-serif text-base font-bold text-[#f5f1eb] mb-2 text-center">ACIDITY</h3>
                                        <p className="text-[#f5f1eb] text-sm font-semibold mb-1">0.42 %</p>
                                        <p className="text-[#f5f1eb] text-xs italic mb-2">standard &lt; 0.8 %</p>
                                        <p className="text-[#f5f1eb] text-xs leading-relaxed">
                                            An exceptional indicator of purity and freshness. Low acidity reflects early harvesting and gentle extraction — resulting in a smoother taste and superior stability.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-[#22372b] rounded-2xl p-5 flex flex-col justify-center w-[266px] h-[266px]"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                    >
                                        <h3 className="font-serif text-base font-bold text-[#f5f1eb] mb-2 text-center">PEROXIDES</h3>
                                        <p className="text-[#f5f1eb] text-sm font-semibold mb-1">4.8 meq O₂/kg</p>
                                        <p className="text-[#f5f1eb] text-xs italic mb-2">standard &lt; 20 meq O₂/kg</p>
                                        <p className="text-[#f5f1eb] text-xs leading-relaxed">
                                            A measure of oxidation and freshness. This remarkably low value means the oil is stable, recently produced, and retains its full nutritional strength for longer.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Where Quality Connects - Desktop */}
                <WhereQualityConnectsDesktop />

                {/* Where Quality Connects - Mobile */}
                <WhereQualityConnectsMobile />

                <NewsletterFooter />
            </div>
        </PageTransition>
    );
};

export default About;