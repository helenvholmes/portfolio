"use client";

import React, {
  FC,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { Expo, gsap, Power4 } from "gsap";

interface Pos {
  x?: number;
  y?: number;
}

interface Vel {
  x?: number;
  y?: number;
}

type Diff = number | undefined;

function getScale(diffX: Diff, diffY: Diff) {
  if (diffX && diffY) {
    const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    return Math.min(distance / 735, 0.35);
  }
  return;
}

function getAngle(diffX: Diff, diffY: Diff) {
  if (diffX && diffY) {
    return (Math.atan2(diffY, diffX) * 180) / Math.PI;
  }
  return;
}

const EMPTY = {};
function useInstance(value = {}) {
  const ref = useRef(EMPTY);
  if (ref.current === EMPTY) {
    ref.current = typeof value === "function" ? value() : value;
  }
  return ref.current;
}

function useTicker(callback: () => void, paused?: boolean) {
  useLayoutEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback);
    }
    return () => {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
}

interface CursorProps {
  animationDuration?: number;
  animationEase?: string | gsap.EaseFunction | undefined;
  backgroundImageAnimationDuration?: number;
  backgroundImageAnimationEase?: string | gsap.EaseFunction | undefined;
  colorAnimationDuration?: number;
  colorAnimationEase?: string | gsap.EaseFunction | undefined;
  cursorBackgroundColor?: string;
  cursorInnerColor?: string;
  cursorSize?: number;
  cursorSizeY?: number;
  exclusionBackgroundColor?: string;
  gellyAnimationAmount?: number;
  gellyAnimationDuration?: number;
  isGelly?: boolean;
  magneticAnimationAmount?: number;
  magneticAnimationDuration?: number;
  magneticAnimationEase?: string | gsap.EaseFunction | undefined;
  sizeAnimationDuration?: number;
  sizeAnimationEase?: string | gsap.EaseFunction | undefined;
  stickAnimationAmount?: number;
  stickAnimationDuration?: number;
  stickAnimationEase?: string | gsap.EaseFunction | undefined;
  textAnimationDuration?: number;
  textAnimationEase?: string | gsap.EaseFunction | undefined;
}

export const Cursor: FC<CursorProps> = ({
  animationDuration = 1.25,
  animationEase = Expo.easeOut,
  backgroundImageAnimationDuration = 0,
  backgroundImageAnimationEase = undefined,
  colorAnimationDuration = 0.2,
  colorAnimationEase = Power4.easeOut,
  cursorBackgroundColor = "var(--accent)",
  cursorInnerColor = "#fff",
  cursorSize = 48,
  cursorSizeY,
  exclusionBackgroundColor = "#fff",
  gellyAnimationAmount = 50,
  isGelly = false,
  magneticAnimationAmount = 0.2,
  magneticAnimationDuration = 0.7,
  magneticAnimationEase = Power4.easeOut,
  sizeAnimationDuration = 0.5,
  sizeAnimationEase = Expo.easeOut,
  stickAnimationAmount = 0.09,
  stickAnimationDuration = 0.7,
  stickAnimationEase = Power4.easeOut,
  textAnimationDuration = 1,
  textAnimationEase = Expo.easeOut,
}) => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorInner = useRef<HTMLDivElement | null>(null);

  const pos: Pos = useInstance(() => ({ x: 0, y: 0 }));
  const vel: Vel = useInstance(() => ({ x: 0, y: 0 }));
  const set: any = useInstance();

  useLayoutEffect(() => {
    set.x = gsap.quickSetter(cursor.current, "x", "px");
    set.y = gsap.quickSetter(cursor.current, "y", "px");

    if (isGelly) {
      set.r = gsap.quickSetter(cursor.current, "rotate", "deg");
      set.sx = gsap.quickSetter(cursor.current, "scaleX");
      set.sy = gsap.quickSetter(cursor.current, "scaleY");
      set.width = gsap.quickSetter(cursor.current, "width", "px");
      set.rt = gsap.quickSetter(cursorInner.current, "rotate", "deg");
    }
  });

  const loop = useCallback(() => {
    const rotation = getAngle(vel.x, vel.y);
    const scale = getScale(vel.x, vel.y);

    set.x(pos.x);
    set.y(pos.y);

    if (isGelly && scale && rotation && cursor.current) {
      set.width(cursor.current?.style.height + scale * gellyAnimationAmount);
      set.r(rotation);
      set.sx(1 + scale);
      set.sy(1 - scale);
      set.rt(-rotation);
    }
  }, [gellyAnimationAmount, isGelly, pos.x, pos.y, set, vel.x, vel.y]);

  const [isBorderRadius, setIsBorderRadius] = useState(false);

  useLayoutEffect(() => {
    const sizeElements = document.querySelectorAll(
      "[data-cursor-size]",
      // eslint-disable-next-line no-undef
    ) as unknown as NodeListOf<HTMLElement>;
    const textElements = document.querySelectorAll(
      "[data-cursor-text]",
      // eslint-disable-next-line no-undef
    ) as unknown as NodeListOf<HTMLElement>;
    const colorElements = document.querySelectorAll(
      "[data-cursor-color]",
      // eslint-disable-next-line no-undef
    ) as unknown as NodeListOf<HTMLElement>;
    const backgroundImageElements = document.querySelectorAll(
      "[data-cursor-background-image]",
      // eslint-disable-next-line no-undef
    ) as unknown as NodeListOf<HTMLElement>;
    const magneticElements = document.querySelectorAll(
      "[data-cursor-magnetic]",
      // eslint-disable-next-line no-undef
    ) as unknown as NodeListOf<HTMLElement>;
    const stickElements = document.querySelectorAll(
      "[data-cursor-stick]",
      // eslint-disable-next-line no-undef
    ) as unknown as NodeListOf<HTMLElement>;
    const exclusionElements = document.querySelectorAll(
      "[data-cursor-exclusion]",
      // eslint-disable-next-line no-undef
    ) as unknown as NodeListOf<HTMLElement>;

    let stickStatus = false;

    let hasExclusionAlready = false;

    const setFromEvent = (e: MouseEvent) => {
      const areatarget = e.target as HTMLElement;
      let target: Element | null;
      let bound: DOMRect | undefined;
      let x = e.clientX;
      let y = e.clientY;
      let duration = animationDuration;
      let ease = animationEase;

      if (stickStatus) {
        target = areatarget.querySelector(
          areatarget.dataset["cursorStick"] as string,
        );
        bound = target?.getBoundingClientRect();
        if (target && bound) {
          y =
            bound.top +
            target.clientHeight / 2 -
            (bound.top + target.clientHeight / 2 - e.clientY) *
              stickAnimationAmount;
          x =
            bound.left +
            target.clientWidth / 2 -
            (bound.left + target.clientWidth / 2 - e.clientX) *
              stickAnimationAmount;
          duration = stickAnimationDuration;
          ease = stickAnimationEase;
        }
      }

      gsap.set(pos, {});

      const xTo = gsap.quickTo(pos, "x", {
        duration,
        ease,
        onUpdate: () => {
          if (pos.x) vel.x = x - pos.x;
        },
      });

      const yTo = gsap.quickTo(pos, "y", {
        duration,
        ease,
        onUpdate: () => {
          if (pos.y) vel.y = y - pos.y;
        },
      });

      xTo(x);
      yTo(y);

      loop();
    };

    window.addEventListener("mousemove", (e) => {
      setFromEvent(e);
    });

    document.body.addEventListener("mouseenter", (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && cursor.current) {
        gsap.to(`#${cursor.current.id}`, {
          duration: animationDuration,
          ease: animationEase,
          opacity: 1,
        });
      }
    });

    document.body.addEventListener("mouseleave", (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && cursor.current) {
        gsap.to(`#${cursor.current.id}`, {
          duration: animationDuration,
          ease: animationEase,
          opacity: 0,
        });
      }
    });

    sizeElements.forEach((el) => {
      el.addEventListener("mouseenter", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursor.current) {
          gsap.to(`#${cursor.current.id}`, {
            duration: sizeAnimationDuration,
            ease: sizeAnimationEase,
            height: `${e.target.dataset["cursorSizeY"]}`
              ? `${e.target.dataset["cursorSizeY"]}`
              : `${e.target.dataset["cursorSize"]}`,
            width: `${e.target.dataset["cursorSize"]}`,
          });
        }
      });
    });
    sizeElements.forEach((el) => {
      el.addEventListener("mouseleave", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursor.current) {
          gsap.to(`#${cursor.current.id}`, {
            duration: sizeAnimationDuration,
            ease: sizeAnimationEase,
            height: `${cursorSize}`,
            width: `${cursorSize}`,
          });
        }
      });
    });

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInner.current) {
          cursorInner.current.textContent = `${e.target.dataset["cursorText"]}`;
          gsap.to(`#${cursorInner.current.id}`, {
            duration: textAnimationDuration,
            ease: textAnimationEase,
            opacity: 1,
            scale: 1,
          });
        }
      });
    });
    textElements.forEach((el) => {
      el.addEventListener("mouseleave", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInner.current) {
          cursorInner.current.textContent = "";
          gsap.to(`#${cursorInner.current.id}`, {
            duration: textAnimationDuration,
            ease: textAnimationEase,
            opacity: 0,
            scale: 0,
          });
        }
      });
    });

    colorElements.forEach((el) => {
      el.addEventListener("mouseenter", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursor.current) {
          gsap.to(`#${cursor.current.id}`, {
            backgroundColor: `${e.target.dataset["cursorColor"]}`,
            duration: colorAnimationDuration,
            ease: colorAnimationEase,
          });
        }
      });
    });
    colorElements.forEach((el) => {
      el.addEventListener("mouseleave", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursor.current) {
          gsap.to(`#${cursor.current.id}`, {
            backgroundColor: `${cursorBackgroundColor}`,
            duration: colorAnimationDuration,
            ease: colorAnimationEase,
          });
        }
      });
    });

    exclusionElements.forEach((el) => {
      el.addEventListener("mouseenter", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursor.current) {
          // @ts-ignore: Unreachable code error
          cursor.current.style.mixBlendMode = "exclusion";
          cursor.current.style.background = `${exclusionBackgroundColor}`;
        }
      });
    });
    exclusionElements.forEach((el) => {
      el.addEventListener("mouseleave", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursor.current) {
          // @ts-ignore: Unreachable code error
          cursor.current.style.mixBlendMode = "";
          cursor.current.style.background = `${cursorBackgroundColor}`;
        }
      });
    });

    backgroundImageElements.forEach((el) => {
      el.addEventListener("mouseenter", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInner.current) {
          if (cursor.current) {
            // @ts-ignore: Unreachable code error
            if (cursor.current.style.mixBlendMode === "exclusion")
              hasExclusionAlready = true;

            // @ts-ignore: Unreachable code error
            // cursor.current.style.mixBlendMode = "exclusion";
            cursor.current.style.backgroundColor = "transform";
          }
          gsap.to(`#${cursorInner.current.id}`, {
            backgroundImage: `url("${e.target.dataset["cursorBackgroundImage"]}")`,
            backgroundSize: "cover",
            borderRadius: "unset",
            duration: backgroundImageAnimationDuration,
            ease: backgroundImageAnimationEase,
            // filter: "invert(1)",
            opacity: 1,
            scale: 1,
          });
          setIsBorderRadius(true);
        }
      });
    });
    backgroundImageElements.forEach((el) => {
      el.addEventListener("mouseleave", (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInner.current) {
          if (cursor.current) {
            if (!hasExclusionAlready) {
              // @ts-ignore: Unreachable code error
              cursor.current.style.mixBlendMode = "";
              cursor.current.style.backgroundColor = `${cursorBackgroundColor}`;
            } else {
              cursor.current.style.backgroundColor = `${exclusionBackgroundColor}`;
            }
          }
          gsap.to(`#${cursorInner.current.id}`, {
            background: ``,
            duration: backgroundImageAnimationDuration,
            filter: "none",
            opacity: 0,
            scale: 0,
          });
          setIsBorderRadius(false);
        }
      });
    });

    magneticElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const areatarget = e.target as HTMLElement;
        gsap.to(areatarget, {
          duration: magneticAnimationDuration,
          ease: magneticAnimationEase,
          x:
            (e.clientX -
              (areatarget.offsetLeft - window.pageXOffset) -
              areatarget.clientWidth / 2) *
            magneticAnimationAmount,
          y:
            (e.clientY -
              (areatarget.offsetTop - window.pageYOffset) -
              areatarget.clientHeight / 2) *
            magneticAnimationAmount,
        });
      });
    });
    magneticElements.forEach((el) => {
      el.addEventListener("mouseleave", (e) => {
        const areatarget = e.target as HTMLElement;
        gsap.to(areatarget, {
          duration: magneticAnimationDuration,
          ease: magneticAnimationEase,
          x: 0,
          y: 0,
        });
      });
    });

    stickElements.forEach((el) => {
      el.addEventListener("mouseenter", () => (stickStatus = true));
    });
    stickElements.forEach((el) => {
      el.addEventListener("mouseleave", () => (stickStatus = false));
    });

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      document.body.removeEventListener("mouseenter", () => {});
      document.body.removeEventListener("mouseleave", () => {});

      sizeElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });

      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });

      colorElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });

      exclusionElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });

      backgroundImageElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });

      magneticElements.forEach((el) => {
        el.removeEventListener("mousemove", () => {});
        el.removeEventListener("mouseleave", () => {});
      });

      stickElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  });

  useTicker(loop);

  return (
    <div
      ref={cursor}
      id={"c-cursor"}
      className={clsx(
        "pointer-events-none fixed left-0 top-0 z-[999] will-change-[transform,height,width,color]",
        !isBorderRadius && "rounded-full",
      )}
      style={{
        background: cursorBackgroundColor,
        contain: "layout style size",
        height: cursorSizeY ? cursorSizeY : cursorSize,
        transform: "translate(-50%, -50%)",
        width: cursorSize,
      }}
    >
      <div
        style={{ color: cursorInnerColor, contain: "layout style size" }}
        ref={cursorInner}
        id={"c-cursorInner"}
        className={clsx(
          "absolute bottom-0 left-0 right-0 top-0 flex scale-0 items-center justify-center rounded-full bg-contain bg-center bg-no-repeat text-center opacity-0 will-change-[transform,height,width,opacity,color]",
          // "mix-blend-multiply",
          !isBorderRadius && "rounded-full",
        )}
      />
    </div>
  );
};
