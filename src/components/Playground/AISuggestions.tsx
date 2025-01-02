import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import Clickable from "../Clickable";
import Icon from "../Icon";

export interface AITagProps {
  className?: string;
  message: string;
  state: "match" | "partial_match" | "no_match";
}

export function AITag({ className, message, state }: AITagProps) {
  let colorClasses = "";
  let iconName = "";

  switch (state) {
    case "match":
      colorClasses = "text-mt-purple-700 bg-mt-purple-50 border-mt-purple-100";
      iconName = "checkmark_circle";
      break;
    case "partial_match":
      colorClasses = "text-mt-gray-700 bg-mt-gray-50 border-mt-gray-100";
      iconName = "time_30_s";
      break;
    case "no_match":
      colorClasses = "text-mt-gray-700 bg-mt-gray-50 border-mt-gray-100";
      iconName = "clear_circle_outlined";
      break;
    default:
      iconName = "time_30_s";
      colorClasses = "text-mt-gray-700 bg-mt-gray-50 border-mt-gray-100";
  }

  return (
    <div className={className}>
      <div
        className={clsx(
          "group/item flex max-h-5 w-fit max-w-[200px] items-center gap-1 rounded border px-2 py-0.5 text-sm font-medium transition-colors duration-300 ease-in-out",
          colorClasses,
        )}
      >
        <Icon
          iconName={iconName}
          size="small"
          className="relative inline-block"
        />
        <span className="mb-px max-h-5 w-full flex-1 truncate">{message}</span>
      </div>
    </div>
  );
}

interface AISuggestionProps {
  className?: string;
  suggestions: AITagProps[];
}

export function AISuggestion({ className, suggestions }: AISuggestionProps) {
  return (
    <div
      className={clsx(
        "group/suggestion transition-color relative flex w-full cursor-pointer items-center justify-between gap-2 rounded bg-mt-alpha-black-50 pl-4 duration-300 ease-in-out hover:bg-mt-alpha-black-100",
        className,
      )}
    >
      {suggestions.map((suggestion, index) => (
        <div className="flex items-center gap-2" key={index}>
          <AITag {...suggestion} />
        </div>
      ))}
      <div className="invisible sticky right-0 flex h-full items-center gap-2 bg-gradient-to-r from-transparent from-10% via-20% to-mt-purple-100 to-40% px-4 py-2 ps-20 group-hover/suggestion:visible">
        <Clickable
          type="unstyled"
          className="transition-color rounded-sm px-2 py-1 text-sm font-medium ease-in-out hover:bg-white"
        >
          Reconcile
        </Clickable>
      </div>
    </div>
  );
}

interface AISuggestionsCardProps {
  className?: string;
  loading?: boolean;
  suggestionGroups?: AISuggestionProps[];
  title?: string;
}

export function AISuggestionsCard({
  className,
  loading,
  suggestionGroups,
  title,
}: AISuggestionsCardProps) {
  return (
    <motion.div
      className={clsx("w-full min-w-0 text-mt-purple-800", className)}
      data-cursor-color="rgba(var(--shadow-color), 10%)"
      animate={{
        height: loading ? "36px" : "auto",
        transition: {
          height: { duration: 0.65, ease: [0.5, 1, 0.89, 1] },
        },
      }}
    >
      <div
        className={clsx(
          "relative rounded-lg border-2 border-double border-transparent bg-mt-ai-looping-gradient-with-border bg-[size:300%] bg-origin-border transition-all [background-clip:content-box,_border-box]",
          loading && "animate-mt-backgroundPulse",
        )}
      >
        <div
          className={clsx(
            "pointer-events-none absolute left-0 top-0 h-full w-full bg-mt-ai-looping-gradient bg-[size:300%] py-4 opacity-25",
            loading && "animate-mt-backgroundPulse",
          )}
        ></div>
        <div
          className={clsx(
            "flex flex-col gap-4 px-4",
            loading ? "py-2" : "py-4",
          )}
        >
          <div className="flex items-center justify-center gap-2 font-medium">
            <Icon iconName="flare" size="small" />{" "}
            {loading ? (
              <div className="flex gap-1">
                Loading
                <div className="flex gap-px">
                  <div className="animate-mt-fadeInOut rounded-full [animation-delay:-0.3s]">
                    .
                  </div>
                  <div className="animate-mt-fadeInOut rounded-full [animation-delay:-0.15s]">
                    .
                  </div>
                  <div className="animate-mt-fadeInOut rounded-full">.</div>
                </div>
              </div>
            ) : (
              title
            )}
          </div>
          {!loading && (
            <div className="grid gap-2 overflow-x-scroll">
              {suggestionGroups &&
                suggestionGroups.map((props, index) => (
                  <AISuggestion {...props} key={index} />
                ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
