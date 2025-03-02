"use client";

import React from "next";
import Image from "next/image";

import { Clickable, WorkLayout } from "~/components";

export default function ApprovalsTimeline() {
  return (
    <>
      <WorkLayout
        hero={
          <div className="flex min-h-44 w-full items-center justify-items-stretch md:w-2/3">
            <Image
              src="/work/approvals-timeline/approvals-timeline.png"
              alt="Approvals Timeline"
              width={1962}
              height={812}
            />
          </div>
        }
        sideBar={[
          {
            alt: "Required",
            height: 252,
            src: "/work/approvals-timeline/required.png",
            width: 2006,
          },
          {
            alt: "Multi Role",
            height: 258,
            src: "/work/approvals-timeline/multi-role.png",
            width: 2046,
          },
          {
            alt: "Approved",
            height: 174,
            src: "/work/approvals-timeline/approved.png",
            width: 1440,
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
              name: "Nisha Pant",
              role: "Engineering Colleague",
            },
            {
              name: "Alden Spence",
              role: "Designer",
            },
          ],
          year: "2023",
        }}
        title={{
          children: "Approvals Timeline",
          destination: "external",
          href: "https://docs.moderntreasury.com/payments/docs/approval-rules-overview",
          openInNewTab: true,
        }}
      >
        <div>
          <p>
            The Modern Treasury API allows users to set up sequential rules for
            approvals on things like moving money over a certain limit, moving
            assets to particular accounts, etc. The design team was tasked with
            illustrating this in the UI, which was a challenge with all of its
            many intricate permutations for how the UI might appear to different
            users at different points in an approvals process.
          </p>
          <p>
            The team came up with a timeline design. I build out all of the
            subcomponents and their numerous permutations working with a backend
            engineer to understand how the data would come down the pipeline.
            Those components can be seen on the{" "}
            <Clickable href="https://mt.style" destination="external">
              MT Storybook
            </Clickable>
            .
          </p>
        </div>
      </WorkLayout>
    </>
  );
}
