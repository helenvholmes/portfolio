import React from "react";
import { motion } from "framer-motion";

import Clickable, { ClickableProps } from "./Clickable";

export interface PlaygroundCardProps {
  clickableProps?: ClickableProps;
  label?: string;
  technology?: string;
}

/** [Documentation](http://localhost:6006/?path=/docs/components-playgroundcard--docs) */
export default function PlaygroundCard({
  children,
  clickableProps,
  label,
  technology,
}: React.PropsWithChildren<PlaygroundCardProps>) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        damping: 10,
        ease: [0.34, 1.56, 0.64, 1],
        stiffness: 150,
        type: "spring",
      }}
    >
      <Clickable
        className="group/pgcard cursor-pointer transition-all duration-300"
        type="unstyled"
        {...clickableProps}
      >
        <div className="pointer-events-auto flex h-64 items-center justify-center border border-surface">
          {children}
        </div>
        <div className="border-x border-b border-surface px-3 py-2 group-hover/pgcard:bg-surface">
          {label}, <span className="italic">{technology}</span>
        </div>
        <div className="relative flex w-full">
          <div
            className="absolute -bottom-6 left-1 h-6 skew-y-[45deg] transition-colors duration-300 group-hover/pgcard:bg-surface-shadow"
            style={{
              transform: "perspective(10px) rotateX(-1deg)",
              width: "calc(100% - 6px)",
            }}
          />
        </div>
      </Clickable>
    </motion.div>
  );
}

PlaygroundCard.displayName = "PlaygroundCard";
