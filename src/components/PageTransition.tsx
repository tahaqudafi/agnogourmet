import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  type?: "fade" | "slide" | "scale";
}

const getPageVariants = (type: "fade" | "slide" | "scale") => {
  switch (type) {
    case "slide":
      return {
        initial: {
          opacity: 0,
          x: 30,
        },
        in: {
          opacity: 1,
          x: 0,
        },
        out: {
          opacity: 0,
          x: -30,
        },
      };
    case "scale":
      return {
        initial: {
          opacity: 0,
          scale: 0.95,
        },
        in: {
          opacity: 1,
          scale: 1,
        },
        out: {
          opacity: 0,
          scale: 1.05,
        },
      };
    default: // fade
      return {
        initial: {
          opacity: 0,
        },
        in: {
          opacity: 1,
        },
        out: {
          opacity: 0,
        },
      };
  }
};

const pageTransition = {
  type: "tween" as const,
  ease: "easeInOut",
  duration: 0.5,
};

export const PageTransition = ({ children, type = "fade" }: PageTransitionProps) => {
  const pageVariants = getPageVariants(type);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};