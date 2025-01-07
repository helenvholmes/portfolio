import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";
import Link from "next/link";

/* ==========================================================================
   Links
   ========================================================================== */
// @keyframes BackgroundMovement {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }

// a {
//   background-color: var(--background-color);
//   color: var(--color);
//   display: inline-block;
//   text-decoration: none;
//   transform: translate(0, 0);
//   transition-timing-function: ease-out;
//   transition: 0.15s;
// }

// a:hover {
//   /* transform: translate(8px, 0); */
//   transition-timing-function: ease-out;
//   transition: 0.15s;
// }

// a:hover::after {
//   animation: BackgroundMovement 10s ease infinite;
//   background: var(--gradient);
//   background-size: 400% 400%;
//   content: "";
//   display: block;
//   height: 1px;
//   width: 100%;
// }

export interface ClickableProps {
  children?: React.ReactNode;
  className?: string;
  /** Determines what type of markup is generated. */
  destination?: "internal" | "external" | "button";
  direction?: "backwards" | "forwards";
  /** Sets a `href` for `a` elements. */
  href?: string;
  onClick?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >["onClick"];
  /** When `true`, opens item in a new tab. */
  openInNewTab?: boolean;
  /** Sets the view type for the clickable. */
  type?: "button" | "inline" | "unstyled" | "index";
}

/** Used for any clickable item. [Documentation]() */
export default function Clickable({
  children,
  className,
  destination = "internal",
  direction,
  href,
  onClick,
  openInNewTab,
  type = "inline",
  ...props
}: ClickableProps) {
  /*
a:hover::after {
  animation: BackgroundMovement 10s ease infinite;
  background: var(--gradient);
  background-size: 400% 400%;
  display: block;
  height: 1px;
  width: 100%;
} */

  const clickableClassNames = clsx(
    "transition-all duration-300",
    type === "inline" &&
      "after:content-['']  after:block after:bg-current inline-block no-underline after:h-px after:w-full",
    type === "index" &&
      "italic font-medium flex flex-row items-center gap-1 group",
    type === "button" &&
      "flex items-center rounded-sm outline-none focus:ring-interactive-focus focus:ring-offset-0 justify-center text-center px-3 gap-2 h-8 py-1 text-sm border border-interactive hover:border-interactive-hover focus:border-transparent focus:outline-none focus:ring-2 disabled:bg-interactive-disabled disabled:opacity-50 font-medium disabled:cursor-not-allowed w-full",
    className,
  );

  const renderClickableChildren = () => {
    return (
      <>
        {direction && direction === "backwards" && (
          <div className="transition-all duration-150 ease-in-out group-hover:-translate-x-0.5">
            ←{" "}
          </div>
        )}
        {children}
        {direction && direction === "forwards" && (
          <div className="transition-all duration-150 ease-in-out group-hover:translate-x-0.5">
            {" "}
            →
          </div>
        )}
      </>
    );
  };

  if (href && destination === "external") {
    return (
      <a
        href={href}
        className={clickableClassNames}
        target={openInNewTab ? "_blank" : "_self"}
        data-cursor-color="rgba(var(--shadow-color), 50%)"
        {...props}
      >
        {renderClickableChildren()}
      </a>
    );
  }

  if (href && destination === "internal") {
    return (
      <Link
        href={href}
        className={clickableClassNames}
        target={openInNewTab ? "_blank" : "_self"}
        data-cursor-color="rgba(var(--shadow-color), 50%)"
        {...props}
      >
        {renderClickableChildren()}
      </Link>
    );
  }

  return (
    <button
      className={clickableClassNames}
      data-cursor-color="rgba(var(--shadow-color), 50%)"
      onClick={onClick && onClick}
      {...props}
    >
      {renderClickableChildren()}
    </button>
  );
}

Clickable.displayName = "Clickable";
