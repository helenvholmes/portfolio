"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatProps {
  className?: string;
  /** Sets the delay on the animation. */
  delay?: number;
  exitDelay?: number;
}

/** JSDoc description for the item. [Documentation]() */
export default function Float({
  children,
  className,
  delay,
}: React.PropsWithChildren<FloatProps>) {
  return (
    <motion.div
      animate={["float"]}
      variants={{
        float: {
          transition: {
            delay: delay,
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          },
          y: [5, -5, 5],
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.55 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

Float.displayName = "Float";
