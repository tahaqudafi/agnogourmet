import { Marquee } from "@/components/ui/marquee";
import violaSvg from "@/assets/viola.svg";
import tidSvg from "@/assets/tid.svg";
import wylSvg from "@/assets/wyl.svg";
import annSvg from "@/assets/ANNA.svg";
import blooSvg from "@/assets/bloo.svg";
import { useLanguage } from "@/contexts/LanguageContext";

export const WhereQualityConnectsDesktop = () => {
  const { t } = useLanguage();
  const brands = [
    { src: violaSvg, alt: "Violas", className: "h-6 lg:h-7" }, // 143mm x 29mm - very wide
    { src: tidSvg, alt: "Tide", className: "h-8 lg:h-9" }, // 144mm x 66mm - tallest
    { src: blooSvg, alt: "Bloom", className: "h-6 lg:h-7" }, // 136mm x 23mm - wide and short
    { src: wylSvg, alt: "Wyld", className: "h-7 lg:h-8" }, // 109mm x 52mm - medium
    { src: annSvg, alt: "Anna", className: "h-5 lg:h-6" }, // 131mm x 13mm - very wide and short
  ];

  return (
    <section className="hidden md:block pt-20 pb-16 px-4 md:px-8 lg:px-16 bg-[#f5f1eb]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="font-serif text-2xl md:text-2.5xl lg:text-3xl font-normal leading-tight"
            style={{ color: '#22372b' }}
          >
            {t('about.whereQualityConnects')}
          </h2>
        </div>

        {/* Desktop Marquee */}
        <Marquee speed="normal">
          {brands.map((brand, index) => (
            <img
              key={`desktop-${index}`}
              src={brand.src}
              alt={brand.alt}
              className={`w-auto object-contain ${brand.className}`}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
