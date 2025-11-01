import { useEffect, useState } from "react";
import mobileImage from "@/assets/mobile.webp";
import { SocialMediaIcons } from "@/components/SocialMediaIcons";

export const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <img
        src={mobileImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Hero Text Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div
          className="absolute top-[45%] -translate-y-1/2 hidden md:block"
          style={{
            left: windowWidth <= 1440 ? '22%' : '23%'
          }}
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-left">
            Olive oil<br />
            makes
          </h1>
        </div>

        <div
          className="absolute top-[45%] -translate-y-1/2 hidden md:block"
          style={{
            right: windowWidth <= 1440 ? '16%' : '20%'
          }}
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-right">
            Everything<br />
            better
          </h1>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="hidden md:block">
        <SocialMediaIcons />
      </div>
    </section>
  );
};