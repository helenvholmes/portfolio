import React from "react";
import clsx from "clsx";

interface ContainerProps {
  // as?: "div" | "main";
  className?: string;
  subPageSideBar?: boolean;
}

/** JSDoc description for the item. [Documentation]() */
export default function Container({
  children,
  className,
  subPageSideBar,
}: React.PropsWithChildren<ContainerProps>) {
  return (
    <div
      className={clsx(
        "mx-auto flex max-w-[1120px] flex-col gap-12 py-14 lg:gap-32",
        subPageSideBar ? "pl-12 pr-12 md:pr-0 xl:pl-24" : "px-12 xl:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
}

Container.displayName = "Container";
