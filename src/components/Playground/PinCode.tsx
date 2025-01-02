"use client";

import { ChangeEvent, useEffect, useState } from "react";
import clsx from "clsx";

import Icon from "../Icon";
import Loading from "../Loading";

interface PinCodeProps {
  /** When `true`, disables the inputs. */
  disabled?: boolean;
  /** Appears when authentication fails. */
  // errorMessage?: string;
  id?: string;
  /** When `true`, shows `errorMessage`. */
  isError?: boolean;
  /** When `true`, shows "Authenticating..." text. */
  isLoading?: boolean;
  /** When `true`, shows `successMessage`. */
  isSuccess?: boolean;
  /** Pin code values. Length determines how many inputs appear. Defaults to 4. */
  length: number;
  /** When true, hides the digits entered with the `maskingPlaceholder`. */
  mask?: boolean;
  /** Used when `masking` is set to `true`. Defaults to "*". */
  maskPlaceholder?: string;
  /** Sets the placeholder values on the inputs. */
  placeholder?: string;
  /** Appears when authentication succeeds. */
  successMessage?: string;
}

/** Creates a pin code entry that accepts numbers. */
export default function PinCode({
  disabled,
  // errorMessage,
  id = "pincode",
  isLoading,
  isSuccess,
  length = 4,
  mask,
  maskPlaceholder = "*",
  placeholder,
}: PinCodeProps) {
  let inputStates = [];

  for (let i = 0; i < length; i++) {
    const [digit, setDigit] = useState("");
    inputStates.push({ digit, setDigit });
  }

  let [code, setCode] = useState<string | null>(null);
  let [loading, setIsLoading] = useState(isLoading);

  // const inputClass = "input";

  const handleKeyDown = (e: { key: string; preventDefault: () => any }) => {
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();
    if (e.key === "Escape") {
      document.activeElement && (document.activeElement as HTMLElement).blur();
    }
    if (e.key === "Enter") {
      setIsLoading(!isLoading);
    }
    if (e.key === "ArrowLeft") {
      let currentFocus = Number(
        document.activeElement && document.activeElement.getAttribute("id"),
      );
      currentFocus &&
        (
          document.querySelectorAll(
            `input[name="pincode-${currentFocus - 1}"]`,
          )[0] as HTMLInputElement
        ).focus();
    }
    if (e.key === "ArrowRight") {
      let currentFocus = Number(
        document.activeElement && document.activeElement.getAttribute("id"),
      );
      currentFocus &&
        (
          document.querySelectorAll(
            `input[name="pincode-${currentFocus + 1}"]`,
          )[0] as HTMLInputElement
        ).focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    // Store user entry
    let entry = e.target.value;

    // function escFunction(event: { key: string }) {}

    if (Number.isNaN(entry)) {
      // TBD: send error
      // console.log(entry);
    }
    // Limit user entry per input to 1 numeric character
    if (entry.length <= 1 && !Number.isNaN(entry)) {
      // Limit code per input box to 1 digit
      inputStates[index].setDigit(e.target.value);

      if (entry.length === 1) {
        // When user enters a digit move focus to next empty input box
        if (index < length - 1) {
          let nextInput = document.querySelectorAll(
            `input[name="pincode-${index + 1}"]`,
          )[0] as HTMLInputElement;

          if (nextInput.value === "") nextInput.focus();
        }
      } else if (entry.length === 0) {
        // When user deletes a digit move focus to the previous input box
        let prevInput = document.querySelectorAll(
          `input[name="pincode-${index - 1}"]`,
        )[0] as HTMLInputElement;

        // TBD: not working as expected on the zero index
        // Focus if prevInput is defined
        if (prevInput !== undefined) prevInput.focus();
      }
    } else return;
  };

  useEffect(() => {
    if (isSuccess) {
      setIsLoading(false);
    }

    let finalCode = inputStates
      .map((input) => {
        return input.digit;
      })
      .join("");

    // Provide the complete code when complete
    if (finalCode.length === length) {
      setCode(finalCode);
    } else setCode(null);
  }, [inputStates, isSuccess, length]);

  const placeholderStyles = "text-gray-700 dark:text-gray-alpha-400";

  return (
    <div className="light:text-gray-alpha-0 dark:text-gray-alpha-1000 flex flex-col justify-center gap-5">
      <div
        className={clsx(
          "h-5 text-sm opacity-0",
          (loading || isSuccess) &&
            "opacity-100 transition-opacity duration-1000",
        )}
      >
        {loading && (
          <div className="flex -translate-y-2 items-center justify-center gap-2 transition-transform duration-1000">
            <Loading className="h-4 w-4" />
            <div className="flex">
              <div>Authenticating</div>
              <div className="animate-subtleBounce duration-200">.</div>
              <div className="animate-subtleBounce ml-px duration-200 [animation-delay:_0.25s]">
                .
              </div>
              <div className="animate-subtleBounce ml-px duration-200 [animation-delay:_0.5s]">
                .
              </div>
            </div>
          </div>
        )}
        {isSuccess && (
          <div className="animate-translateUp flex items-center justify-center gap-2 transition-all duration-200">
            <Icon iconName="checkmark_circle" />
            Authenticated
          </div>
        )}
      </div>
      <div
        className={clsx(
          "bg-alpha-400 rounded-medium flex",
          isSuccess && "opacity-0",
        )}
        id={`pincode-${id}`}
      >
        {inputStates.map((state, index) => {
          return (
            <div className="relative flex" key={index}>
              <input
                value={state.digit}
                className="peer/pincode absolute bottom-0 left-0 right-0 top-0 h-12 w-11 opacity-0 disabled:cursor-not-allowed"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={handleKeyDown}
                maxLength={1}
                name={`pincode-${index}`}
                id={index.toString()}
                disabled={disabled ? disabled : !!loading}
              />
              <div
                className={clsx(
                  "flex h-12 w-11 items-center justify-center text-base",
                  "border-gray-alpha-200 first:rounded-s-medium border-y border-l",
                  "peer-focus/pincode:border-2 peer-focus/pincode:border-blue-700",
                  index === 0 && "rounded-s-medium",
                  index === inputStates.length - 1 &&
                    "rounded-e-medium border-r",
                  loading
                    ? "bg-gray-100 text-gray-700"
                    : "dark:text-gray-alpha-1000 dark:bg-background-100",
                )}
              >
                {!state.digit && !mask && (
                  <div className={placeholderStyles}>
                    {placeholder && placeholder}
                  </div>
                )}
                {!state.digit && mask && (
                  <div className={clsx(placeholderStyles, "mt-2")}>
                    {maskPlaceholder && maskPlaceholder}
                  </div>
                )}
                {/* {state.digit && mask && ( // TBD, masking digits as you type
                <div className={clsx(placeholderStyles, "mt-2")}>
                  {maskPlaceholder && maskPlaceholder}
                </div>
              )}
              {!mask && <>{state.digit}</>} */}
                {state.digit}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

PinCode.displayName = "PinCode";
