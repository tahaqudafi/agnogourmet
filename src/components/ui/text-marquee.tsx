import { cn } from "@/lib/utils";

interface TextMarqueeProps {
  text: string;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
}

export const TextMarquee = ({ 
  text, 
  className, 
  speed = "normal",
  direction = "left" 
}: TextMarqueeProps) => {
  const speedClasses = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast"
  };

  const directionClass = direction === "right" ? "animate-marquee-reverse" : "";

  return (
    <div className={cn("overflow-hidden whitespace-nowrap relative", className)}>
      <div 
        className={cn(
          "flex animate-marquee",
          speedClasses[speed],
          directionClass
        )}
      >
        {/* First set of text */}
        <div className="flex shrink-0">
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex shrink-0">
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
          <span className="px-4">{text}</span>
        </div>
      </div>
    </div>
  );
};