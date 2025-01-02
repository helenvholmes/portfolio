"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { animate } from "framer-motion/dom";
import { TransitionRouter } from "next-transition-router";

interface FadeInProps {
  className?: string;
  /** Sets the delay on the animation. */
  delay?: number;
  exitDelay?: number;
}

/** JSDoc description for the item. [Documentation]() */
export default function FadeIn({
  children,
  className,
  delay,
  exitDelay,
}: React.PropsWithChildren<FadeInProps>) {
  const wrapperRef = useRef<HTMLDivElement>(null!);

  const anim = (variants: {
    enter: {
      opacity: number;
      scale: number;
      transition: {
        delay: number | undefined;
        duration: number;
        ease: number[];
      };
      y: number;
    };
    initial: {
      opacity: number;
      scale: number;
      transition: { duration: number; ease: number[] };
      y: number;
    };
  }) => {
    return {
      animate: "enter",
      initial: "initial",
      variants,
    };
  };

  const fadeIn = {
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.55,
        ease: [0.34, 1.75, 0.64, 1],
      },
      y: 0,
    },
    initial: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.55,
        ease: [0.34, 1.56, 0.64, 1],
      },
      y: 20,
    },
  };

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        animate(
          wrapperRef.current,
          { opacity: [1, 0], y: [0, 20] },
          {
            delay: exitDelay,
            duration: 0.65,
            ease: [0.34, -1.75, 0.64, 1],
            onComplete: next,
          },
        );
      }}
    >
      <motion.div {...anim(fadeIn)} className={className} ref={wrapperRef}>
        {children}
      </motion.div>
    </TransitionRouter>
  );
}

FadeIn.displayName = "FadeIn";
