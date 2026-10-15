"use client";

import React from "next";

import {
  Clickable,
  Columns,
  Container,
  FadeIn,
  IndexClickable,
} from "~/components";

export default function Home() {
  return (
    <Container>
      <Columns
        collapseBehavior="twoCol"
        firstColumn={
          <FadeIn delay={0} exitDelay={0.4}>
            I&apos;m a designer with a focus in systems. Over my career I&apos;ve worked with
            different companies to facilitate design enablement, bridging the gap
            between design and engineering to ensure best-in-class user
            experience.
          </FadeIn>
        }
        hideOnCollapse={0}
        label={""}
        numberOfColumns={2}
        secondColumn={
          <FadeIn delay={0.1} exitDelay={0.3}>
            {/* <p>
              I&apos;m currently working on{" "}
              <Clickable
                href="https://buildingdesignsystems.com"
                destination="external"
              >
                Building Design Systems
              </Clickable>
              , an irreverent technical blog, and{" "}
              <Clickable href="https://arrtifaacts.com" destination="external">
                arrtifaacts
              </Clickable>
              , a marketing website solution for people who need a marketing
              website but really, really don&apos;t want to agonize over it.
            </p> */}
            <p>
              These days I write about how AI is rapidly changing our industry.
              If you&apos;d like to discuss AI or see my work samples,
              please reach out at{" "}
              <Clickable
                destination="external"
                href="mailto:sayhi@helenvholmes.com"
                type="inline"
              >
                sayhi@helenvholmes.com
              </Clickable>
              . See my resume{" "}
              <Clickable destination="internal" href="/resume" type="inline">
                here
              </Clickable>
              .
            </p>
          </FadeIn>
        }
      />
      <Columns
        className="pb-16"
        collapseBehavior="oneCol"
        firstColumn={
          <div className="flex flex-col">
            <FadeIn delay={0.2} exitDelay={0.8}>
              <IndexClickable href="/writing/industry-predictions">
                Industry predictions you didn&apos;t ask for
              </IndexClickable>
            </FadeIn>
            <FadeIn delay={0.25} exitDelay={0.7}>
              <IndexClickable href="/writing/code-ownership-and-ai">
                Let&apos;s discuss code ownership
              </IndexClickable>
            </FadeIn>
            <FadeIn delay={0.3} exitDelay={0.6}>
              <IndexClickable href="/writing/on-critique">On critique</IndexClickable>
            </FadeIn>
            <FadeIn delay={0.35} exitDelay={0.5}>
              <IndexClickable href="/writing/the-things-we-own">
                The things we own
              </IndexClickable>
            </FadeIn>
            <FadeIn delay={0.4} exitDelay={0.4}>
              <IndexClickable href="/writing/the-future-of-wearables">
                Future of wearables
              </IndexClickable>
            </FadeIn>
          </div>
        }
        numberOfColumns={1}
      />
      {/* <Columns
        collapseBehavior="twoCol"
        firstColumn={
          <FadeIn delay={0} exitDelay={0.4}>
            I maintain a collection of code snippets for challenging/interesting
            components when I build them.
          </FadeIn>
        }
        hideOnCollapse={0}
        label={"Playground"}
        numberOfColumns={2}
        secondColumn={
          <div className="flex flex-col gap-8 items-end">
            <FadeIn delay={0.1} exitDelay={0.3}>
              I don&apos;t like to sit on good ideas, so please, have at them.
            </FadeIn>
            <FadeIn delay={0.4} exitDelay={0}>
              <Clickable
                type="index"
                direction="forwards"
                className="block pt-4"
                destination="internal"
                href="/playground"
              >
                See more
              </Clickable>
            </FadeIn>
          </div>
        }
      /> */}
    </Container>
  );
}
