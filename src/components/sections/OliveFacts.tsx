import { FactCard } from "@/components/FactCard";
import factsBackground from "@/assets/facts-background.jpg";
import agnobottel from "@/assets/agnobottel.png";
import olivebasket from "@/assets/olivebasket.png";
import lab from "@/assets/lab.png";

export const OliveFacts = () => {
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
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#22372b' }}>
            How We Guarantee Real,<br />High-Quality Olive Oil
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <FactCard
            image={agnobottel}
            title="Fresh"
            description="We give you oil from the latest harvest, because fresher = better."
          />
          <FactCard
            image={olivebasket}
            title="Not Blended"
            description="Every bottle comes from just one region – no blends, no sneaky stuff."
          />
          <FactCard
            image={lab}
            title="Lab-Tested"
            description="We lab-test the olive oil to ensure you get the real deal."
          />
        </div>
      </div>
    </section>
  );
};