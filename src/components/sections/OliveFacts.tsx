import { FactCard } from "@/components/FactCard";
import factsBackground from "@/assets/facts-background.jpg";
import agnobottel from "@/assets/agnobottel.png";
import olivebasket from "@/assets/olivebasket.png";
import lab from "@/assets/lab.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const OliveFacts = () => {
  const factsRef = useRef(null);
  const isInView = useInView(factsRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${factsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto">
        <div ref={factsRef} className="text-center mb-16">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#22372b' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            How We Guarantee Real,<br />High-Quality Olive Oil
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <FactCard
            image={agnobottel}
            title="Fresh"
            description="We bottle only the latest harvest — because freshness is everything."
          />
          <FactCard
            image={olivebasket}
            title="Not Blended"
            description="Every bottle comes from a single region — no blends, no shortcuts."
          />
          <FactCard
            image={lab}
            title="Third Party Lab-Tested"
            description="Tested, verified, trusted — because you deserve the real thing."
          />
        </div>
      </div>
    </section>
  );
};