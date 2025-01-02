"use client";

import { useState } from "react";
import React from "next";

import { Clickable, WorkLayout } from "~/components";
import { Match as MatchStory } from "~/components/Playground/AISuggestionCard.stories";
import { AISuggestionsCard } from "~/components/Playground/AISuggestions";

export default function AIMappingUI() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <>
      <WorkLayout
        hero={
          <div className="-z-10 flex min-h-44 w-full items-center justify-items-stretch md:w-2/3">
            <AISuggestionsCard {...MatchStory.args} loading={loading} />
          </div>
        }
        sideBarVideo={[
          {
            src: "/work/ai-mapping-ui/reconcile.mp4",
          },
          {
            src: "/work/ai-mapping-ui/suggested-rules.mp4",
          },
        ]}
        subMenu={{
          children: "Work",
          destination: "internal",
          direction: "backwards",
          href: "/work",
          type: "index",
        }}
        team={{
          members: [
            {
              name: "Mafaz Chaudhry",
              role: "Engineering Colleague",
            },
            {
              name: "Alden Spence",
              role: "Designer",
            },
          ],
          year: "2024",
        }}
        title={{
          children: "AI Mapping UI, Transfer 2024",
          destination: "external",
          href: "https://www.moderntreasury.com/resources/money-movement-goes-beyond-payments",
          openInNewTab: true,
        }}
      >
        <div>
          <p>
            Modern Treasury automatically reconciles 99.9% of payments for
            customers, but that last 0.1% can be a daunting number to manually
            reconcile for customers with thousands of transactions a day. For
            that last 0.1% we rolled out an mapping tool, where customers could
            upload their own data column mappings and use MT&apos;s AI engine to
            quickly reconcile those final data points.
          </p>
          <p>
            My part of the project included building the suggestions card that
            could be used across different app views to show AI suggestions. It
            was a fun exercise in getting looping animations and loading
            transitions done with Tailwind, along with group-hover interactions.
            {/* You can check
            out the code for the suggestions card in the{" "}
            <Clickable destination="internal" href="/playground">
              Playground
            </Clickable>
            . */}
          </p>
          <p>
            Built on a tight deadline and unveiled at Transfer 2024. Product
            demonstration on MT&apos;s site begins at{" "}
            <Clickable
              href="https://www.moderntreasury.com/resources/money-movement-goes-beyond-payments"
              destination="external"
              openInNewTab
            >
              35m00
            </Clickable>
            . I touched almost all of the UI shown in the video in one way or
            another—check out my other project page for{" "}
            <Clickable destination="internal" href="/work/tables-tables-tables">
              tables
            </Clickable>{" "}
            to see more.
          </p>
        </div>
      </WorkLayout>
    </>
  );
}
