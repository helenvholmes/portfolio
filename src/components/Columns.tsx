import React from "react";
import clsx from "clsx";

interface ColumnsProps {
  alignLabel?: boolean;
  className?: string;
  collapseBehavior?: "oneCol" | "twoCol";
  firstColumn?: React.ReactNode;
  /** Prop description. */
  hideOnCollapse?: 0 | 1 | 2;
  label?: React.ReactNode;
  numberOfColumns?: 1 | 2;
  secondColumn?: React.ReactNode;
  secondColumnClassName?: string;
}

/** JSDoc description for the item. [Documentation]() */
export default function Columns({
  alignLabel = false,
  className,
  collapseBehavior,
  firstColumn,
  hideOnCollapse,
  label,
  numberOfColumns,
  secondColumn,
  secondColumnClassName,
}: ColumnsProps) {
  return (
    <div className={clsx("@container/columns", className)}>
      <div
        className={clsx(
          "grid gap-4 @xl/columns:gap-16",
          numberOfColumns === 1 &&
            "grid-cols-1 @xl/columns:grid-cols-[1fr_4fr]",
          numberOfColumns === 2 &&
            "grid-cols-1 @2xl/columns:grid-cols-[1fr_2fr_2fr]",
          numberOfColumns === 1 &&
            collapseBehavior === "oneCol" &&
            "@md/columns:grid-cols-[1fr] @2xl/columns:grid-cols-[1fr_2fr_2fr]",
          numberOfColumns === 2 &&
            collapseBehavior === "twoCol" &&
            "@md/columns:grid-cols-[1fr_1fr] @2xl/columns:grid-cols-[1fr_2fr_2fr]",
        )}
      >
        <div
          className={clsx(
            hideOnCollapse === 0 && "hidden",
            "@2xl/columns:block",
            numberOfColumns === 1 &&
              collapseBehavior === "oneCol" &&
              "col-span-3 @2xl/columns:col-span-1",
            alignLabel && "mt-6",
          )}
        >
          {label}
        </div>
        <div
          className={clsx(
            hideOnCollapse === 1 && "hidden",
            "flex flex-col gap-16 @2xl/columns:block",
            numberOfColumns === 1 &&
              collapseBehavior === "oneCol" &&
              "col-span-2",
          )}
        >
          {firstColumn}
        </div>
        <div
          className={clsx(
            hideOnCollapse === 2 && "hidden",
            "flex w-full flex-col gap-16 @2xl/columns:block",
            secondColumnClassName,
          )}
        >
          {secondColumn}
        </div>
      </div>
    </div>
  );
}

Columns.displayName = "Columns";
