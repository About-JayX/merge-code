import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const Section = ({
  children,
  type = "top",
  className = "",
}: {
  type?: "top" | "left" | "right" | "bottom";
  children?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    top: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    bottom: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={type}
      animate={isInView ? "visible" : type}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}; 