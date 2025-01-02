"use client";

import React from "next";

import { FadeIn, WorkLayout } from "~/components";

export default function FastlyFestival() {
  return (
    <>
      <WorkLayout
        hero={
          <div className="-z-10 flex min-h-32 w-full items-center justify-items-stretch md:w-2/3">
            <FadeIn delay={0} exitDelay={0.7}>
              <video autoPlay loop playsInline preload="auto">
                <source src="/work/fastly-festival/bend.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </FadeIn>
          </div>
        }
        sideBarVideo={[
          {
            height: 687,
            src: "/work/fastly-festival/icons-2.mp4",
            width: 633,
          },
        ]}
        sideBar={[
          {
            alt: "Signage",
            height: 895,
            src: "/work/fastly-festival/festivalSignage.png",
            width: 991,
          },
        ]}
        subMenu={{
          children: "Work",
          destination: "internal",
          direction: "backwards",
          href: "/work",
          type: "index",
        }}
        title={{
          children: "Fastly Festival",
        }}
        team={{
          members: [
            {
              name: "Margaret Hayford",
              role: "Motion Graphics Designer",
            },
          ],
          year: "2018",
        }}
      >
        <div>
          <p>
            Fastly asked me to help brand their holiday party so they could end
            the year with a bang. The team was inspired by music festivals and
            wanted a solution that worked across their six international
            locations—everywhere from Tokyo to London.
          </p>
          <p>
            We ended up with a versatile brand that included icons and ribbons
            that could be juxtaposed and played with in a variety of ways to
            create different signage and swag. The icons mapped to each of the
            locations so each location&apos;s party felt custom and unique.
          </p>
        </div>
      </WorkLayout>
    </>
  );
}
