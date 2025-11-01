import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import agnoLogo from "@/assets/Agno_Logo_2.png";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const { scrollY } = useScrollPosition();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Assuming hero section is roughly viewport height (100vh)
  // We'll make the navbar opaque after scrolling past 80% of viewport height
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800;
  const isScrolledPastHero = scrollY > heroHeight;

  // More stable visibility logic
  useEffect(() => {
    const handleVisibility = () => {
      const currentScrollY = scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Only change visibility if there's significant scroll movement
      if (scrollDifference > 5) {
        if (currentScrollY < 50) {
          // Always show at top
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
          // Hide when scrolling down significantly
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Show when scrolling up
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    const timeoutId = setTimeout(handleVisibility, 10);
    return () => clearTimeout(timeoutId);
  }, [scrollY, lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolledPastHero || isMobileMenuOpen
          ? "bg-[#22372b] backdrop-blur-md shadow-sm"
          : "bg-transparent",
        !isVisible
          ? "-translate-y-full"
          : "translate-y-0"
      )}
      style={{
        opacity: 1, // Force opacity to always be 1
        visibility: 'visible' // Force visibility
      }}
    >
      <div className="w-full px-6 py-4">
        {/* Mobile Layout - Logo centered */}
        <div className="flex md:hidden items-center justify-center w-full relative">
          {/* AGNO Logo - Centered on mobile */}
          <div className="flex items-center">
            <img
              src={agnoLogo}
              alt="AGNO"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </div>

          {/* Mobile menu button - Positioned absolutely to the right */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="absolute right-0 p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/20 hover:scale-105"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={cn(
                "w-6 h-6 transition-transform duration-300",
                isMobileMenuOpen && "rotate-90"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Layout - Original layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* AGNO Logo */}
          <div className="flex items-center ml-8">
            <img
              src={agnoLogo}
              alt="AGNO"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </div>

          {/* Navigation links */}
          <div className="flex items-center space-x-8">
            <a
              href="#home"
              className="text-white transition-colors duration-300 hover:opacity-80"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-white transition-colors duration-300 hover:opacity-80"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-white transition-colors duration-300 hover:opacity-80"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white transition-colors duration-300 hover:opacity-80"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu - Shows when hamburger is clicked */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 bg-[#22372b] backdrop-blur-md shadow-lg border-t border-white/10 overflow-hidden transition-all duration-300 ease-out",
            isMobileMenuOpen
              ? "max-h-80 opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="px-6 pt-4 pb-8 space-y-2">
            {[
              { href: "#home", label: "Home" },
              { href: "#products", label: "Products" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block text-white transition-all duration-300 hover:opacity-80 hover:translate-x-2 py-3 px-2 rounded-lg hover:bg-white/10",
                  isMobileMenuOpen
                    ? "transform translate-y-0 opacity-100"
                    : "transform -translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};