"use client";

import React from "next";

import { WorkLayout } from "~/components";

export default function LogosIllustrations() {
  return (
    <>
      <WorkLayout
        hero={
          <div className="-z-10 flex min-h-32 w-full items-center justify-items-stretch md:w-2/3">
            TBD, a video I guess
          </div>
        }
        sideBar={[
          {
            alt: "moderntreasury.com",
            height: 3248,
            src: "/work/modern-treasury-dot-com/dotcom.png",
            width: 2112,
          },
          {
            alt: "🍆 AI 💦",
            height: 3248,
            src: "/work/modern-treasury-dot-com/ai.png",
            width: 2112,
          },
          {
            alt: "haha it me",
            height: 1040,
            src: "/work/modern-treasury-dot-com/pretzel.png",
            width: 194,
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
              name: "TBD",
              role: "Tech Lead",
            },
            {
              name: "TBD",
              role: "Designers",
            },
          ],
          year: "2023",
        }}
        title={{
          children: "TBD",
          destination: "external",
          href: "TBD",
          openInNewTab: true,
        }}
      >
        <div>
          <p>TBD, NYPL</p>
        </div>
      </WorkLayout>
    </>
  );
}
