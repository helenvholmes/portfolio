"use client";

import React from "next";

import {
  Clickable,
  Columns,
  Container,
  FadeIn,
  Item,
  Label,
} from "~/components";

export default function Home() {
  return (
    <Container>
      <Columns
        collapseBehavior="twoCol"
        firstColumn={
          <FadeIn delay={0} exitDelay={0.4}>
            I&apos;m a UX designer based in Philadelphia with a focus in
            building UI for web apps. Over my career I&apos;ve worked with
            different companies to create design systems, bridging the gap
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
              I&apos;m currently looking for my next position. If you think
              I&apos;d be a good fit for your company, please reach out at{" "}
              <Clickable
                destination="external"
                href="mailto:sayhi@helenvholmes.com"
                type="inline"
              >
                sayhi@helenvholmes.com
              </Clickable>
              .
            </p>
          </FadeIn>
        }
      />
      <Columns
        alignLabel
        collapseBehavior="oneCol"
        firstColumn={
          <div className="flex flex-col items-end gap-8">
            <FadeIn delay={0.2} exitDelay={0.3}>
              <Item
                description="Built out the AI Mapping UI tool for Modern Treasury's reconciliation engine, which allowed users to visualize and connect data columns in their own software against MT's. Unveiled at Transfer 2024."
                title={{
                  clickableProps: {
                    children: "AI Mapping UI, Transfer 2024",
                    destination: "internal",
                    href: "/work/ai-mapping-ui",
                    openInNewTab: false,
                  },
                }}
                year="2024"
              />
            </FadeIn>
            <FadeIn delay={0.3} exitDelay={0.2}>
              <Item
                // cursorImage="https://placehold.co/600x400/EEE/31343C"
                description="Built out the redesign for ModernTreasury.com in a quarter with a hard deadline for the yearly Transfer conference. Built with NextJS, Sanity, Tailwind, and TypeScript, and was completely self-serve for the content team upon finish."
                title={{
                  clickableProps: {
                    children: "ModernTreasury.com Redesign",
                    destination: "internal",
                    href: "/work/modern-treasury-dot-com",
                    openInNewTab: false,
                  },
                }}
                year="2023"
              />
            </FadeIn>
            <FadeIn delay={0.4} exitDelay={0}>
              <Clickable
                type="index"
                direction="forwards"
                className="block pt-4"
                destination="internal"
                href="/work"
              >
                See more
              </Clickable>
            </FadeIn>
          </div>
        }
        label={
          <FadeIn delay={0.2}>
            <Label>Notable Projects</Label>
          </FadeIn>
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
      <Columns
        className="pb-16"
        collapseBehavior="twoCol"
        firstColumn={
          <div className="flex flex-col gap-8">
            <FadeIn delay={0} exitDelay={0.4}>
              <Item
                description="Maintained the design system, built app UI, and redesigned the marketing website for Modern Treasury, a company modernizing money movement."
                title={{
                  title: "Staff Design Engineer,",
                  titleClickable: {
                    children: "Modern Treasury",
                    destination: "external",
                    href: "https://www.moderntreasury.com",
                    openInNewTab: true,
                  },
                }}
                year="2022—2024"
              />
            </FadeIn>
            <FadeIn delay={0} exitDelay={0.4}>
              <Item
                description="Built the NYPL design system overseeing a team of seven. Evangelized the system internally."
                title={{
                  title: "Senior Design Technologist,",
                  titleClickable: {
                    children: "New York Public Library",
                    destination: "external",
                    href: "https://www.nypl.org/",
                    openInNewTab: true,
                  },
                }}
                year="2019—2021"
              />
            </FadeIn>
            <FadeIn delay={0} exitDelay={0.4}>
              <Item
                description="Worked with clients such as Fastly and Github to code microsites, produce five conferences, and design an app."
                title={{
                  title: "Product Designer,",
                  titleClickable: {
                    children: "Self-Employed",
                    destination: "external",
                    href: "https://www.moderntreasury.com",
                    openInNewTab: true,
                  },
                }}
                year="2017—2019"
              />
            </FadeIn>
          </div>
        }
        hideOnCollapse={0}
        label={
          <FadeIn delay={0} exitDelay={0.4}>
            Past Experience
          </FadeIn>
        }
        numberOfColumns={2}
        secondColumn={
          <div className="flex h-full flex-col items-end justify-between">
            <div className="flex flex-col gap-8">
              <FadeIn delay={0} exitDelay={0.4}>
                <Item
                  description="Designed in close collaboration with the developers to build out better user experiences on Firefox’s Developer Tools."
                  title={{
                    title: "Senior UX Designer,",
                    titleClickable: {
                      children: "Developer Tools, Mozilla Firefox",
                      destination: "external",
                      href: "https://www.mozilla.org/en-US/firefox/new/",
                      openInNewTab: true,
                    },
                  }}
                  year="2015—2016"
                />
              </FadeIn>
              <FadeIn delay={0} exitDelay={0.4}>
                <Item
                  description="Built out web, iOS, and IoT prototypes for the design team for experiences that needed more than Invision."
                  title={{
                    title: "Front End Developer,",
                    titleClickable: {
                      children: "Capital One",
                      destination: "external",
                      href: "https://www.capitalone.com/",
                      openInNewTab: true,
                    },
                  }}
                  year="2014—2015"
                />
              </FadeIn>
            </div>
            <FadeIn delay={0.4} exitDelay={0}>
              <Clickable
                type="index"
                direction="forwards"
                className="block pt-4"
                destination="internal"
                href="/resume"
              >
                See résumé
              </Clickable>
            </FadeIn>
          </div>
        }
      />
    </Container>
  );
}
