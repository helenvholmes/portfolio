"use client";

import React from "next";

import { Clickable, FadeIn, WorkLayout } from "~/components";
import { ClickableProps } from "~/components/Clickable";

export default function DesigningDeveloperTools() {
  const linkProps = {
    destination: "external",
    openInNewTab: true,
    type: "inline",
  } as ClickableProps;

  return (
    <>
      <WorkLayout
        hero={
          <div className="flex min-h-32 w-full items-center justify-items-stretch md:w-2/3">
            <FadeIn delay={0} exitDelay={0.7}>
              <video autoPlay loop playsInline preload="auto">
                <source
                  src="/work/designing-developer-tools/grid.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </FadeIn>
          </div>
        }
        sideBar={[
          {
            alt: "CSS Grid",
            height: 687,
            src: "/work/designing-developer-tools/cssGrid.png",
            width: 633,
          },
          {
            alt: "Responsive Design Mode",
            height: 700,
            src: "/work/designing-developer-tools/rdm.png",
            width: 632,
          },
          {
            alt: "Devtools icons",
            height: 534,
            src: "/work/designing-developer-tools/fredSticker.jpg",
            width: 340,
          },
          {
            alt: "MF'ing devtools",
            height: 534,
            src: "/work/designing-developer-tools/motherfuckingdevtools-1.jpg",
            width: 340,
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
          children: "Designing Developer Tools",
          destination: "external",
          href: "TBD",
          openInNewTab: true,
        }}
      >
        <div>
          <p>
            In the Fall of 2015 I joined the{" "}
            <Clickable
              href="https://firefox-source-docs.mozilla.org/devtools-user/index.html"
              {...linkProps}
            >
              Developer Tools team
            </Clickable>{" "}
            at{" "}
            <Clickable href="https://www.mozilla.org/en-US/" {...linkProps}>
              Mozilla
            </Clickable>{" "}
            <Clickable
              href="https://www.mozilla.org/en-US/firefox/"
              {...linkProps}
            >
              Firefox
            </Clickable>
            . It was a whirlwind of learning about the complexities of browsers,
            developer tooling, the people writing our web specs, and open source
            community.
          </p>
          <p>
            As sole designer on the team it was unlike any environment I&apos;d
            ever been in before: Firefox is used by millions of people workwide,
            and the process for launching and shipping rock solid features (and
            design for those features) was imperative.
          </p>
          <p>
            In my time at Firefox I got a very unique look into how people use
            their browsers, their computers and other devices, and learned a
            great deal about how passionate people are about the fox program on
            their desktop.
          </p>
          In my time at Firefox I shipped new color palettes for the Developer
          Tools, redesigned the panel icons, designed the{" "}
          <Clickable
            href="https://hacks.mozilla.org/2016/12/css-grid-and-grid-highlighter-now-in-firefox-developer-edition/"
            {...linkProps}
          >
            first iteration of CSS Grid tooling
          </Clickable>
          , redesigned the
          <Clickable
            href="https://hacks.mozilla.org/2016/11/new-responsive-design-mode-rdm-lands-in-firefox-dev-tools/"
            {...linkProps}
          >
            Responsive Design Mode
          </Clickable>
          , redesigned the Debugger, all in addition to consulting the
          developers and brainstorming numerous small usability enhancements. I
          assisted the User Research team as a fly on the wall for their{" "}
          <Clickable
            href="https://blog.mozilla.org/ux/2015/04/task-continuity/"
            {...linkProps}
          >
            research on task continuity
          </Clickable>
          , spoke at{" "}
          <Clickable href="https://stage.viewsourceconf.org/" {...linkProps}>
            ViewSourc.es
          </Clickable>{" "}
          thanks to the community team, and{" "}
          <Clickable
            href="https://x.com/firefox/status/800738574555578368"
            {...linkProps}
          >
            facilitated a social media campaign as an illustrator
          </Clickable>
          .
        </div>
      </WorkLayout>
    </>
  );
}
