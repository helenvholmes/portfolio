import { useEffect, useState } from "react";
import clsx from "clsx";

interface ClockProps {
  /** Sets the time to the time zone passed. Defaults to New York. */
  showDigitalTime?: boolean;
}

/** Creates a working clock. [Documentation](http://localhost:6006/?path=/docs/playground-clock--docs) */
export default function Clock({ showDigitalTime = true }: ClockProps) {
  const [currentSeconds, setSeconds] = useState(0);
  const [currentMinutes, setMinutes] = useState(0);
  const [currentHours, setHours] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();
      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
    }, 1000);

    // clearing interval
    return () => clearInterval(timer);
  });

  const handClasses =
    "origin-right rotate-90 bg-surface absolute top-1/2 rounded-xl";
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24 rounded-full border-4 border-surface p-2 transition-all duration-100 ease-in-out">
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1 rounded-full bg-surface" />
          <div
            className={clsx(handClasses, "h-2 w-1/2")}
            style={{
              transform: `rotate(${(currentHours / 60) * 360 + 90}deg)`,
            }}
          />
          <div
            className={clsx(handClasses, "h-1.5 w-1/2")}
            style={{
              transform: `rotate(${(currentMinutes / 60) * 360 + 90}deg)`,
            }}
          />
          <div
            className={clsx(handClasses, "h-1 w-1/2")}
            style={{
              transform: `rotate(${(currentSeconds / 60) * 360 + 90}deg)`,
            }}
          />
        </div>
      </div>
      {showDigitalTime && (
        <>
          {currentHours}:{currentMinutes}:{currentSeconds}
        </>
      )}
    </div>
  );
}

Clock.displayName = "Clock";
