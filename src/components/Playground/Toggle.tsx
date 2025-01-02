import React from "react";
import { motion } from "framer-motion";

interface ToggleProps {
  onChange: Function;
  value?: boolean;
}

function Toggle({ onChange, value, ...delegated }: ToggleProps) {
  return (
    <button
      aria-checked={value}
      className="block h-[50px] w-24 cursor-pointer rounded-full border-2 border-interactive p-2"
      onClick={() => onChange(!value)}
      type="button"
      role="switch"
      {...delegated}
    >
      <motion.div
        animate={{
          x: value ? "100%" : "0%",
        }}
        className="block aspect-square h-full rounded-full bg-interactive"
        transition={{
          damping: 13,
          stiffness: 150,
          type: "spring",
        }}
      />
    </button>
  );
}

export default Toggle;
