import React from "react";

import Clickable, { ClickableProps } from "./Clickable";

interface IndexClickableProps extends ClickableProps {
  cursorImage?: string;
}

export default function IndexClickable({
  children,
  cursorImage,
  href,
}: React.PropsWithChildren<IndexClickableProps>) {
  return (
    <Clickable
      className="group/indexClickable flex w-full flex-col gap-4 pt-4 text-4xl lg:gap-8 lg:pt-6 lg:text-6xl"
      destination="internal"
      data-cursor-background-image={cursorImage}
      data-cursor-size={cursorImage && "250px"}
      data-cursor-size-y={cursorImage && "400px"}
      href={href}
      openInNewTab={false}
      type="unstyled"
    >
      {children}
      <div
        className="h-1 group-hover/indexClickable:animate-backgroundMovement"
        style={{
          background:
            "linear-gradient(to left, rgb(var(--background-color)), rgb(var(--background-color)) 50%, rgb(var(--color)) 50%, rgb(var(--color)) 100%)",
          backgroundSize: "200%",
        }}
      />
    </Clickable>
  );
}

IndexClickable.displayName = "IndexClickable";
