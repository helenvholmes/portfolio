"use client";

import React from "next";
import Image from "next/image";

import { WorkLayout } from "~/components";

export default function CIPConference() {
  return (
    <>
      <WorkLayout
        hero={
          <div className="-z-10 flex min-h-32 w-full items-center justify-items-stretch md:w-2/3">
            <Image
              alt=""
              src="/work/cip-conference/cipIntro.svg"
              height={3360}
              width={1373}
            />
          </div>
        }
        sideBar={[
          {
            alt: "Hotel illustrations",
            height: 611,
            src: "/work/cip-conference/cipIllustrationSnippets.svg",
            width: 1280,
          },
          {
            alt: "Stamps illustrations",
            height: 611,
            src: "/work/cip-conference/cipStamps.png",
            width: 1280,
          },
          {
            alt: "Website",
            height: 1080,
            src: "/work/cip-conference/cipWebsite.png",
            width: 1789,
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
          year: "2017",
        }}
        title={{
          children: "Fastly's Customer Insights Panel",
        }}
      >
        <div>
          <p>
            Fastly approached me in 2017 to help them rebrand their Customer
            Insights Panel, a small conference that disseminated information
            about their product and allowed customers a chance to work with the
            key players on their team in shaping their product&apos;s future.
          </p>
          <p>
            We settled on a series of illustrations inspired by the conference
            venue (a beautiful hotel in Denver that had a
            smoking-room-post-dinner sort of aesthetic) and by the local
            landscape to create the conference brand, as skiing was on the
            agenda after the conference. Little easter eggs appeared
            throughout—server stacks and speedometers appeared in places one
            wouldn&apos;t expect. I also designed all of the marketing materials
            and the marketing website.
          </p>
        </div>
      </WorkLayout>
    </>
  );
}
