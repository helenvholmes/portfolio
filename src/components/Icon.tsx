import clsx from "clsx";

import { icons } from "./icons";

type IconName = (typeof icons)[number]["iconName"];

export interface IconProps {
  className?: string;
  /** Allows you to pass fill data to the `path` element. */
  fill?: string;
  /** Maps to the keys in `icons.ts`. */
  iconName?: IconName;
  /** Sets the width and height of the icon. */
  size?: "small" | "medium" | "large" | "x-large";
}
export default function Icon({
  className,
  fill,
  iconName,
  size = "medium",
}: IconProps) {
  let paths;

  for (var i = 0; i < icons.length; i++) {
    if (iconName === icons[i].iconName) {
      paths = icons[i].paths;
    }
  }

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="currentColor"
      className={clsx(
        size === "x-large" && "h-12 w-12",
        size === "large" && "h-8 w-8",
        size === "medium" && "h-6 w-6",
        size === "small" && "h-4 w-4",
        className,
      )}
    >
      {paths &&
        paths.map((path, index) => (
          <path d={path} key={index} fill={fill && fill}></path>
        ))}
    </svg>
  );
}

Icon.displayName = "Icon";
