"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { animate } from "framer-motion/dom";
import { useRouter } from "next/navigation";
import { TransitionRouter } from "next-transition-router";

import Clickable, { ClickableProps } from "./Clickable";
import FadeIn from "./FadeIn";
import Float from "./Float";
import Icon from "./Icon";

const anim = (variants: {
  enter:
    | {
        d: string;
        transition: { delay: number; duration: number; ease: number[] };
      }
    | {
        top: string;
        transition: { delay: number; duration: number; ease: number[] };
      };
  exit:
    | {
        d: string;
        transition: { delay: number; duration: number; ease: number[] };
      }
    | {
        top: string;
        transition: { delay: number; duration: number; ease: number[] };
      };
  initial: { d: string } | { top: string };
}) => {
  return {
    animate: "enter",
    exit: "exit",
    initial: "initial",
    variants,
  };
};

const SVG = ({ height, width }: { height: number; width: number }) => {
  const wrapperRef = useRef<SVGSVGElement>(null!);

  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
  L0 300
  `;

  const targetPath = `
    M0 0
    Q${width} 0 ${width} 0
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
  L0 300
  `;

  const transition = {
    delay: 0,
    duration: 1,
    ease: [0.76, 0, 0.24, 1],
  };

  const curve = {
    enter: {
      d: targetPath,
      transition: transition,
    },
    exit: {
      d: initialPath,
      transition: transition,
    },
    initial: {
      d: initialPath,
    },
  };

  const slide = {
    enter: {
      top: "0vh",
      transition: transition,
    },
    exit: {
      top: "-150vh",
      transition: transition,
    },
    initial: {
      top: "-150vh",
    },
  };

  return (
    <AnimatePresence>
      <TransitionRouter
        auto
        leave={(next) => {
          animate(
            wrapperRef.current,
            { opacity: [1, 0], y: [0, 20] },
            {
              duration: 0.65,
              ease: [0.34, -1.75, 0.64, 1],
              onComplete: next,
            },
          );
        }}
      >
        <motion.svg
          className="pointer-events-auto fixed left-0 top-0 z-10 h-[calc(100vh+600px)] w-screen fill-surface"
          {...anim(slide)}
          ref={wrapperRef}
        >
          <motion.path {...anim(curve)}></motion.path>
        </motion.svg>
      </TransitionRouter>
    </AnimatePresence>
  );
};

export default function Nav() {
  // Needs to be a button to set state, but we still need to push
  // the new value to the router
  const router = useRouter();
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [fontFamily, setFontFamily] = useState(0);

  const linkClassName = "capitalize";

  const fontFamilies = [
    " font-nav0 text-8xl lg:text-[12rem]",
    " font-nav1 text-5xl lg:text-9xl",
    " font-nav2 text-5xl lg:text-9xl",
    " font-nav3 text-5xl lg:text-9xl",
    " font-nav4 text-5xl lg:text-9xl",
  ];

  const links = [
    {
      children: "home",
      className: clsx(
        linkClassName,
        fontFamilies[fontFamily],
        "lg:order-1 lg:col-span-3 lg:col-start-1 lg:row-span-1 lg:row-start-1",
      ),
      href: "/",
    },
    {
      children: "work",
      className: clsx(
        linkClassName,
        fontFamilies[fontFamily],
        "lg:order-2 lg:col-span-3 lg:col-start-3 lg:row-span-1 lg:row-start-2",
      ),
      href: "/work",
    },
    {
      children: "playground",
      className: clsx(
        linkClassName,
        "lg:order-4 lg:col-span-5 lg:col-start-2 lg:row-span-1 lg:row-start-4",
        fontFamilies[fontFamily],
      ),
      href: "/playground",
    },
    {
      children: "resume",
      className: clsx(
        linkClassName,
        "lg:order-3 lg:col-span-4 lg:col-start-6 lg:row-span-1 lg:row-start-3",
        fontFamilies[fontFamily],
      ),
      href: "/resume",
    },
    {
      children: "about",
      className: clsx(
        linkClassName,
        "lg:order-5 lg:col-span-4 lg:col-start-6 lg:row-start-5",
        fontFamilies[fontFamily],
      ),
      href: "/about",
    },
  ] as ClickableProps[];

  // Gets the dimensions for the SVG takeover
  useEffect(() => {
    const resize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [fontFamily]);

  return (
    <div
      className={clsx(
        isOpen && "absolute bottom-0 left-0 right-0 top-0 h-screen w-full",
      )}
    >
      <Clickable
        data-cursor-text="🪩"
        data-cursor-size="100px"
        type="unstyled"
        className={clsx("flex flex-col gap-px px-8 pb-8", isOpen && "hidden")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="h-1">—</span>
        <span className="h-1">—</span>
        <span className="h-1">—</span>
      </Clickable>

      {isOpen && (
        <>
          {dimensions.width > 0 && <SVG {...dimensions} />}
          <div
            className={clsx(
              "pointer-events-auto fixed left-0 top-0 mx-auto flex h-screen w-screen items-center fill-surface p-12 xl:px-24",
              isOpen && "z-20",
            )}
            // data-cursor-color="rgba(var(--shadow-color), 100%)"
          >
            <div className="grid h-full w-full grid-cols-1 grid-rows-5 lg:h-3/4 lg:grid-cols-[2fr_4fr_1fr_2fr_2fr_4fr_1fr_4fr_1fr_2fr]">
              {links &&
                links.map((props, index) => (
                  <FadeIn
                    key={index}
                    className={props.className}
                    delay={index === 0 ? 1.25 : 1.25 + index / 15}
                  >
                    <Float delay={index / 2}>
                      <Clickable
                        {...props}
                        destination="button"
                        type="unstyled"
                        onClick={() => {
                          setIsOpen(false);
                          fontFamily < 4
                            ? setFontFamily(fontFamily + 1)
                            : setFontFamily(0);
                          router.push(props.href || "");
                        }}
                      />
                    </Float>
                  </FadeIn>
                ))}
            </div>
            <FadeIn className="!fixed right-0 top-0 p-6" delay={1.25}>
              <Clickable
                data-cursor-text="🪩"
                data-cursor-size="100px"
                data-cursor-magnetic
                type="unstyled"
                onClick={() => {
                  setIsOpen(!isOpen);
                  fontFamily < 4
                    ? setFontFamily(fontFamily + 1)
                    : setFontFamily(0);
                }}
              >
                <Icon iconName="clean" size="x-large" />
              </Clickable>
            </FadeIn>
          </div>
        </>
      )}
    </div>
  );
}
