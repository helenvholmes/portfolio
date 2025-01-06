"use client";

import { useRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import Clickable, { ClickableProps } from "./Clickable";
import Team, { TeamProps } from "./Team";

interface ItemProps {
  cursorImage?: string;
  description?: string;
  team?: TeamProps;
  title: {
    clickableProps?: ClickableProps;
    title?: string;
    titleClickable?: ClickableProps;
  };
  year?: string;
}

/** Creates a dt/dd pair. [Documentation](http://localhost:6006/?path=/story/components-item--primary) */
export default function Item({
  cursorImage,
  description,
  team,
  title,
  year,
}: ItemProps) {
  const wrapperRef = useRef<HTMLDivElement>(null!);

  function renderChildren(title: ItemProps["title"]) {
    return (
      <>
        <div
          className={clsx(
            "flex flex-col gap-5",
            title.clickableProps &&
              "-ml-6 cursor-pointer p-6 transition-all duration-300 xl:group-hover/item:bg-surface",
          )}
        >
          <dt className="font-medium">
            {title && (
              <>
                {title.title}{" "}
                {title.clickableProps && (
                  <div className="underline">
                    {title.clickableProps.children}
                  </div>
                )}{" "}
                {title.titleClickable && (
                  <>
                    <br />
                    <Clickable
                      {...title.titleClickable}
                      className="underline"
                    />
                  </>
                )}
              </>
            )}
          </dt>
          <dd className="ml-0 flex flex-col gap-3">
            <div>
              {description}
              {!team && (
                <>
                  <br />
                  <span className="text-sm italic">{year}</span>
                </>
              )}
            </div>
            {team && <Team {...team} />}
          </dd>
        </div>
        <div className="hidden lg:relative lg:flex lg:w-full">
          <div
            className="absolute -bottom-6 -left-4 h-6 skew-y-[45deg] transition-colors duration-300 group-hover/item:bg-surface-shadow"
            style={{
              transform: "perspective(10px) rotateX(-1deg)",
              width: "calc(100% + 6px)",
            }}
          />
        </div>
      </>
    );
  }

  return (
    <>
      {title.clickableProps ? (
        <motion.div
          whileHover={title.clickableProps && { scale: 1.05 }}
          whileTap={title.clickableProps && { scale: 0.95 }}
          ref={wrapperRef}
          transition={{
            damping: 10,
            ease: [0.34, 1.56, 0.64, 1],
            stiffness: 150,
            type: "spring",
          }}
        >
          <Clickable
            type="unstyled"
            className="group/item"
            data-cursor-color={!cursorImage && "rgba(var(--shadow-color), 50%)"}
            data-cursor-background-image={cursorImage}
            data-cursor-size={cursorImage && "250px"}
            data-cursor-size-y={cursorImage && "400px"}
            {...title.clickableProps}
          >
            {renderChildren(title)}
          </Clickable>
        </motion.div>
      ) : (
        <>{renderChildren(title)}</>
      )}
    </>
  );
}

Item.displayName = "Item";
