"use client";

import React from "react";

import {
  Clickable,
  Columns,
  Container,
  FadeIn,
  Icon,
  Item,
  Label,
} from "~/components";

export default function Resume() {
  return (
    <Container>
      <FadeIn delay={0} exitDelay={0.4} className="flex justify-between">
        <Clickable
          destination="internal"
          direction="backwards"
          href="/"
          type="index"
        >
          Back
        </Clickable>
        {/* <Clickable
          onClick={() => print()}
          data-cursor-size="100px"
          data-cursor-text="print me"
          type="unstyled"
        > */}
        <Clickable
          href="/resume/helenvholmes_resume.pdf"
          destination="internal"
          data-cursor-size="100px"
          data-cursor-text="print me"
          type="unstyled"
        >
          <Icon iconName="printer" size="large" />
        </Clickable>
      </FadeIn>
      <Columns
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
            <FadeIn delay={0.1} exitDelay={0.3}>
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
            <FadeIn delay={0.2} exitDelay={0.2}>
              <Item
                description="Worked with clients such as Fastly and Github to code microsites, produce five conferences, and design an app."
                title={{
                  title: "Product Designer,",
                  titleClickable: {
                    children: "Self-Employed",
                    destination: "internal",
                    href: "/",
                  },
                }}
                year="2017—2019"
              />
            </FadeIn>
          </div>
        }
        hideOnCollapse={0}
        label={
          <FadeIn delay={0}>
            <Label>Past Experience</Label>
          </FadeIn>
        }
        numberOfColumns={2}
        secondColumn={
          <div className="flex flex-col items-end gap-8">
            <FadeIn delay={0.1} exitDelay={0.3}>
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
            <FadeIn delay={0.2} exitDelay={0.2}>
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
        }
      />
      <Columns
        collapseBehavior="twoCol"
        firstColumn={
          <div className="flex flex-col gap-8">
            <FadeIn delay={0} exitDelay={0.4}>
              <Item
                description="Coursework, animation & interior design"
                title={{
                  title: "The New School",
                }}
                year="2018"
              />
            </FadeIn>
            <FadeIn delay={0.1} exitDelay={0.3}>
              <Item
                description="Graphic design (major), French (minor)"
                title={{
                  title: "American University",
                }}
                year="2009—2013"
              />
            </FadeIn>
          </div>
        }
        hideOnCollapse={0}
        label={
          <FadeIn delay={0}>
            <Label>Past Experience</Label>
          </FadeIn>
        }
        numberOfColumns={2}
        secondColumn={
          <div className="flex flex-col gap-8">
            <FadeIn delay={0.2} exitDelay={0.2}>
              <Item
                description="Coursework, drawing, painting, & pottery"
                title={{
                  title: "The Corcoran",
                }}
                year="2009—2013"
              />
            </FadeIn>
            <FadeIn delay={0.2} exitDelay={0.2}>
              <Item
                description="Coursework, Russian language studies"
                title={{
                  title: "University of Virginia",
                }}
                year="2008"
              />
            </FadeIn>
          </div>
        }
      />
      <Columns
        className="pb-16"
        collapseBehavior="twoCol"
        firstColumn={
          <FadeIn delay={0} exitDelay={0.4}>
            <Item
              description="Typescript, React, JavaScript, GraphQL, CSS, Tailwind, HTML"
              title={{
                title: "Technologies",
              }}
            />
          </FadeIn>
        }
        hideOnCollapse={0}
        label={
          <FadeIn delay={0}>
            <Label>Capabilities</Label>
          </FadeIn>
        }
        numberOfColumns={2}
        secondColumn={
          <FadeIn delay={0.2} exitDelay={0.2}>
            <Item
              description="UI/UX design, Animation, Graphic design"
              title={{
                title: "Disciplines",
              }}
            />
          </FadeIn>
        }
      />
    </Container>
  );
}
