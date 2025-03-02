"use client";

import React from "next";

import { Clickable, FadeIn, WorkLayout } from "~/components";

export default function NYPLDesignSystem() {
  return (
    <>
      <WorkLayout
        hero={
          <div className="flex min-h-32 w-full items-center justify-items-stretch md:w-2/3">
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
              name: "Kathy Lac, Ellen Li, Willa Armstrong, and others",
              role: "Designers",
            },
          ],
          year: "2019–2021",
        }}
        title={{
          children: "The New York Public Library Design System",
          destination: "external",
          href: "https://github.com/nypl/nypl-design-system",
        }}
      >
        <div>
          <p>
            <Clickable href="https://www.nypl.org/" destination="external">
              The New York Public Library
            </Clickable>{" "}
            has dozens of apps that power its various digital entities. When I
            joined in 2019 they had had a few false starts getting a design
            system up and running. I was brought on to pioneer, evangelize, and
            build out a system. I owned producing the React library other
            engineers used, evangelization of the system, running the working
            group, onboarding apps to the system, and follow-ups on its
            adoption.
          </p>
        </div>
      </WorkLayout>
    </>
  );
}
