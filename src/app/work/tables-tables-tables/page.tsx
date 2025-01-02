"use client";

import React from "next";

import { Clickable, FadeIn, WorkLayout } from "~/components";

export default function TablesTablesTables() {
  return (
    <>
      <WorkLayout
        hero={
          <div className="-z-10 flex min-h-44 w-full items-center justify-items-stretch md:w-2/3">
            <FadeIn delay={0} exitDelay={0.7}>
              <video autoPlay loop playsInline preload="auto">
                <source
                  src="/work/table-improvements/table-updates.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </FadeIn>
          </div>
        }
        sideBar={[
          {
            alt: "Table screenshot",
            height: 3462,
            src: "/work/table-improvements/different-view.png",
            width: 2460,
          },
          {
            alt: "Table screenshot",
            height: 3462,
            src: "/work/table-improvements/table-screenshot-full.png",
            width: 2460,
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
              name: "Stephane Young",
              role: "Tech Lead",
            },
            {
              name: "Nayantara Jain, Michael Hari",
              role: "Engineering Colleagues",
            },
            {
              name: "Cristiana Ortiz, Alden Spence",
              role: "Designers",
            },
          ],
          year: "2024",
        }}
        title={{
          children: "Table Feature Additions",
        }}
      >
        <div>
          <p>
            When I first joined MT the design team wanted to update the tables.
            This is because as a financial application the UI of MT was mostly,
            well, tables. Tables all the way down, really. (That and forms.)
          </p>
          <p>
            Tables are a generated view in the MT app, built with a ruby service
            that my tech lead had set up. Ot allowed the backend engineers to
            set up a model with specialized key/value pairings that would create
            columns for the data. In my time there I set up a number of these
            custom display columns that allowed engineers to set things like
            associated content (allowed users to click a pill and have that
            entity open in a side drawer), short-hand statuses as icons with
            hover keys, favoriting, and some really basic stuff like long-form
            content rows, right-aligning the amount fields, giving the checkbox
            an indeterminate state when only a few rows were selected, along
            with basic spacing and color changes from the design team.
          </p>
          <p>
            The table changes I did on spanned many months of work. You can see
            a lot of them in the Transfer 2024 product demonstration on
            MT&apos;s site at{" "}
            <Clickable
              href="https://www.moderntreasury.com/resources/money-movement-goes-beyond-payments"
              destination="external"
              openInNewTab
            >
              35m00
            </Clickable>
            .
          </p>
        </div>
      </WorkLayout>
    </>
  );
}
