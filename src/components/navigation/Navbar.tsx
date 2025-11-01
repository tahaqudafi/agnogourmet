import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import agnoLogo from "@/assets/Agno_Logo_2.png";

export const Navbar = () => {
  const { scrollY, scrollDirection } = useScrollPosition();
  
  // Assuming hero section is roughly viewport height (100vh)
  // We'll make the navbar opaque after scrolling past 80% of viewport height
  const heroHeight = window.innerHeight * 0.8;
  const isScrolledPastHero = scrollY > heroHeight;
  
  // Hide navbar when scrolling down, show when scrolling up or at top
  const shouldHideNavbar = scrollDirection === 'down' && scrollY > 100;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolledPastHero
          ? "bg-[#22372b] backdrop-blur-md shadow-sm"
          : "bg-transparent",
        shouldHideNavbar
          ? "opacity-0 -translate-y-full"
          : "opacity-100 translate-y-0"
      )}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* AGNO Logo */}
          <div className="flex items-center ml-8">
            <img
              src={agnoLogo}
              alt="AGNO"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-300 text-white hover:bg-white/20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};