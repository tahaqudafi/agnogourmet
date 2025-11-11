import { MarqueeMobile } from "@/components/ui/marquee-mobile";
import violasSvg from "@/assets/viola.svg";
import tideSvg from "@/assets/tid.svg";
import wyldSvg from "@/assets/wyl.svg";
import annaSvg from "@/assets/ANNA.svg";
import bloomSvg from "@/assets/bloo.svg";
import { useLanguage } from "@/contexts/LanguageContext";

export const WhereQualityConnectsMobile = () => {
  const { t } = useLanguage();
  const brands = [
    { src: violasSvg, alt: "Violas", className: "h-6 lg:h-7" }, // 143mm x 29mm - very wide
    { src: tideSvg, alt: "Tide", className: "h-8 lg:h-9" }, // 144mm x 66mm - tallest
    { src: bloomSvg, alt: "Bloom", className: "h-6 lg:h-7" }, // 136mm x 23mm - wide and short
    { src: wyldSvg, alt: "Wyld", className: "h-7 lg:h-8" }, // 109mm x 52mm - medium
    { src: annaSvg, alt: "Anna", className: "h-5 lg:h-6" }, // 131mm x 13mm - very wide and short
  ];

  return (
    <section className="block md:hidden pt-4 pb-8 px-4 bg-[#f5f1eb]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 
            className="font-serif text-xl font-normal leading-tight"
            style={{ color: '#22372b' }}
          >
            {t('about.whereQualityConnects')}
          </h2>
        </div>

        {/* Mobile Marquee */}
        <MarqueeMobile speed="normal">
          {brands.map((brand, index) => (
            <img
              key={`mobile-${index}`}
              src={brand.src}
              alt={brand.alt}
              className={`w-auto object-contain ${brand.className}`}
            />
          ))}
        </MarqueeMobile>
      </div>
    </section>
  );
};
