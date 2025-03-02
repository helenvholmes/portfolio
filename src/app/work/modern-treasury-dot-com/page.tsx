"use client";

import React from "next";

import { Clickable, WorkLayout } from "~/components";

export default function ModernTreasuryDotCom() {
  return (
    <>
      <WorkLayout
        hero={
          <div className="flex min-h-32 w-full items-center justify-items-stretch md:w-2/3">
            <video
              width="2112"
              height="3248"
              autoPlay
              loop
              playsInline
              preload="auto"
            >
              <source
                src="/work/modern-treasury-dot-com/page.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
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
              name: "Jason Barone",
              role: "Tech Lead",
            },
            {
              name: "Frank Chimero, Ryan Essmaker",
              role: "Designers",
            },
          ],
          year: "2023",
        }}
        title={{
          children: "ModernTreasury.com Redesign",
          destination: "external",
          href: "https://www.moderntreasury.com/",
          openInNewTab: true,
        }}
      >
        <div>
          <p>
            ModernTreasury.com is a more-or-less completely self-serve system
            that allows members of the content team to publish modules, pages,
            and routes without the help of engineers. In 2023, we completely
            redesigned it, a huge effort from everyone involved.
          </p>
          <p>
            My part included building out the design system, building blocks
            that the content team would add and reorder to create pages on the
            website. This involved building out the items and then hooking them
            up to the content management system,{" "}
            <Clickable destination="external" href="https://www.sanity.io/">
              Sanity
            </Clickable>
            . One of the more inspired pieces in this, while seemingly small,
            was our &apos;Clickable&apos; component, which was a simple factory
            that would spit out the correct element for things you could click
            based on the props you sent it. The reason this was exciting was
            that we were able to then pass our analytics handler through it,
            which meant that we could track every click that went through the
            system, anywhere, regardless if it was an external link or a button
            in an image carousel.
            {/* You can check out an example in the <Clickable destination="internal" href="/playground">
              Playground
            </Clickable>
            . */}
          </p>
          <p>
            Should go without saying, but: fully responsive, obviously. Also
            highly performant, although I will point to my tech lead for much of
            the work done on that front.
          </p>
          <p>
            Unfortunately, not all projects go smoothly: for various reasons
            this project went from three engineers to two, and for a cycle from
            two engineers to one (me, eep). All&apos;s well that ends well,
            though. Completed in a quarter(-ish) to be all spick and span for
            Transfer 2023.
          </p>
        </div>
      </WorkLayout>
    </>
  );
}
