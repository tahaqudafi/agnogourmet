import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeMobileProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export const MarqueeMobile = ({ 
  children, 
  className, 
  speed = "normal", 
  direction = "left",
  pauseOnHover = false 
}: MarqueeMobileProps) => {
  const getAnimationDuration = () => {
    switch (speed) {
      case "slow": return "20s";
      case "fast": return "8s";
      default: return "12s";
    }
  };

  return (
    <div className={cn("relative overflow-hidden whitespace-nowrap", className)} style={{
      maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
    }}>
      <div 
        className={cn(
          "inline-block animate-marquee-mobile",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: getAnimationDuration(),
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <div className="inline-flex items-center gap-12 md:gap-20">
          {children}
        </div>
        <div className="inline-flex items-center gap-12" style={{ marginLeft: '57vw' }}>
          {children}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee-mobile {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-135.7%);
          }
        }
        
        .animate-marquee-mobile {
          animation: marquee-mobile linear infinite;
        }
      `}</style>
    </div>
  );
};
