"use client";

import React from "next";
import Image from "next/image";

import { WorkLayout } from "~/components";

export default function Altitude() {
  return (
    <>
      <WorkLayout
        hero={
          <div className="flex min-h-32 w-full items-center justify-items-stretch">
            <Image
              alt="Altitude 2018"
              height={3360}
              src="/work/altitude/altitude-2018.png"
              width={1373}
            />
          </div>
        }
        sideBar={[
          {
            alt: "London sitting room",
            height: 2048,
            src: "/work/altitude/altitudeLondonLivingRoom.jpg",
            width: 1365,
          },
          {
            alt: "London sitting room",
            height: 1875,
            src: "/work/altitude/altitudeStage1.jpg",
            width: 1250,
          },
          {
            alt: "London sitting room",
            height: 1875,
            src: "/work/altitude/altitudeStage2.jpg",
            width: 1250,
          },
          {
            alt: "London sitting room",
            height: 2573,
            src: "/work/altitude/altitudeWebsite.png",
            width: 2039,
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
          children: "Altitude 2018",
          destination: "external",
          href: "https://www.fastly.com/",
          openInNewTab: true,
        }}
        year="2018"
      >
        <div>
          <p>
            Fastly approached me in 2017 to create the design experience for
            their Altitude conference series, their largest annual conference
            that happens in London, New York, and San Francisco. Altitude is an
            incredibly important part of the Fastly brand, allowing them to
            connect with their users and developers, hear from the top engineers
            in the industry on edge computing, cloud networking, and security,
            and share the latest developments in their own software.
          </p>
          <p>
            While I had done production work and branded conferences before,
            Altitude was unique in both of these not only from its complexity
            (happening across three different cities globally) but also its
            scale. I created all signage, their conference websites, and swag
            for each of the conferences in the series.
          </p>
        </div>
      </WorkLayout>
    </>
  );
}
