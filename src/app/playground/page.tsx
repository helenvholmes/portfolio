"use client";

import React from "react";

import {
  Clickable,
  Columns,
  Container,
  FadeIn,
  Float,
  Label,
  // PlaygroundCard,
  // PlaygroundCardProps,
} from "~/components";
// import Toggle from "~/components/Playground/Toggle";

export default function Playground() {
  // const firstColLinks = [
  //   {
  //     children: <Toggle value={false} onChange={() => {}} />,
  //     clickableProps: { href: "/playground/toggle" },
  //     label: "Toggle",
  //     technology: "Framer Motion",
  //   },
  //   {
  //     children: <>hahahahha</>,
  //     clickableProps: { href: "toggle" },
  //     label: "Pin Code",
  //     technology: "React",
  //   },
  // ] as unknown as PlaygroundCardProps[];

  const str = "coming soon";
  const chars = str.split("");

  return (
    <Container>
      <FadeIn delay={0} exitDelay={0.4}>
        <Clickable href="/" type="index" direction="backwards">
          Back
        </Clickable>
      </FadeIn>
      <Columns
        collapseBehavior="twoCol"
        firstColumn={
          <FadeIn delay={0} exitDelay={0.4} className="flex flex-col gap-12">
            <div className="flex gap-2">
              {chars &&
                chars.map((char, index) =>
                  char === " " ? (
                    <Float key={index} delay={index / 10} className="mr-1">
                      {" "}
                    </Float>
                  ) : (
                    <Float delay={index / 10} key={index}>
                      {char}
                    </Float>
                  ),
                )}
            </div>
            <div className="flex gap-2">
              {chars &&
                chars.map((char, index) =>
                  char === " " ? (
                    <Float key={index} delay={index / 10} className="mr-1">
                      {" "}
                    </Float>
                  ) : (
                    <Float delay={index / 10} key={index}>
                      {char}
                    </Float>
                  ),
                )}
            </div>
          </FadeIn>
        }
        hideOnCollapse={0}
        label={
          <FadeIn delay={0.2}>
            <Label>Playground</Label>
          </FadeIn>
        }
        numberOfColumns={2}
        secondColumn={
          <FadeIn delay={0.1} exitDelay={0.3} className="flex flex-col gap-12">
            <div className="flex gap-2">
              {chars &&
                chars.map((char, index) =>
                  char === " " ? (
                    <Float key={index} delay={index / 10} className="mr-1">
                      {" "}
                    </Float>
                  ) : (
                    <Float delay={index / 10} key={index}>
                      {char}
                    </Float>
                  ),
                )}
            </div>
            <div className="flex gap-2">
              {chars &&
                chars.map((char, index) =>
                  char === " " ? (
                    <Float key={index} delay={index / 10} className="mr-1">
                      {" "}
                    </Float>
                  ) : (
                    <Float delay={index / 10} key={index}>
                      {char}
                    </Float>
                  ),
                )}
            </div>
          </FadeIn>
        }
      />
    </Container>
  );
}
