import { FactCard } from "@/components/FactCard";
import factsBackground from "@/assets/facts-background.jpg";
import agnobottel from "@/assets/agnobottel.png";
import olivebasket from "@/assets/olivebasket.png";
import lab from "@/assets/lab.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const OliveFacts = () => {
  const { t } = useLanguage();
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
            {t('facts.title')}<br />{t('facts.titleLine2')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <FactCard
            image={agnobottel}
            title={t('facts.fresh.title')}
            description={t('facts.fresh.description')}
          />
          <FactCard
            image={olivebasket}
            title={t('facts.notBlended.title')}
            description={t('facts.notBlended.description')}
          />
          <FactCard
            image={lab}
            title={t('facts.labTested.title')}
            description={t('facts.labTested.description')}
          />
        </div>
      </div>
    </section>
  );
};