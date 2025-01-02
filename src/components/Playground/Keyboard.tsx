"use client";

import { useEffect } from "react";

interface KeyProps {
  /** User inputted key code. */
  keyCode?: string;
  /** Note to sound. */
  note?: string;
  /** Name of the sound being played. */
  sound?: string;
}

/** JSDoc description for the item. [Documentation]() */
export function Key({ keyCode, note, sound }: KeyProps) {
  useEffect(() => {
    const onScroll = (event: any) => console.info("keydown", event);

    window.addEventListener("keydown", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="key" data-key={keyCode}>
      <kbd>{note}</kbd>
      <span className="sound">{sound}</span>
    </div>
  );
}

Key.displayName = "Key";

interface KeyboardProps {
  /** User inputted key code. */
  keys?: KeyProps[];
}

/** JSDoc description for the item. [Documentation]() */
export function Keyboard({ keys }: KeyboardProps) {
  return (
    <div className="keys">
      {keys && keys.map((props, index) => <Key {...props} key={index} />)}
    </div>
  );
}

Key.displayName = "Key";
