import React from "react";

interface LabelProps {
  /** Prop description. */
  label?: string;
}

/** JSDoc description for the item. [Documentation]() */
export default function Label({
  children,
  label,
}: React.PropsWithChildren<LabelProps>) {
  return (
    <div className="font-medium">
      {children} {label}
    </div>
  );
}

Label.displayName = "Label";
