"use client";

import React from "next";

import { FadeIn, WorkLayout } from "~/components";

export default function Artifacts() {
  return (
    <>
      <WorkLayout
        hero={
          <div className="-z-10 flex min-h-32 w-full items-center justify-items-stretch md:w-2/3">
            <FadeIn delay={0} exitDelay={0.7}>
              <video autoPlay loop playsInline preload="auto">
                <source
                  src="/work/nypl-design-system/install.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </FadeIn>
          </div>
        }
        sideBar={[
          {
            alt: "moderntreasury.com",
            height: 3248,
            src: "/work/nypl-design-system/reservoir.png",
            width: 2112,
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
              name: "Crystal Ngai",
              role: "Tech Lead",
            },
            {
              name: "Kathy Lac, Jack Kim, and others",
              role: "Designers",
            },
          ],
          year: "2023",
        }}
        title={{
          children: "The New York Public Library Design System",
          destination: "external",
          href: "https://github.com/nypl/nypl-design-system",
        }}
      >
        <div>
          <p>Imma build artifacts</p>
        </div>
      </WorkLayout>
    </>
  );
}
