import React from "react";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";

import Clickable, { ClickableProps } from "./Clickable";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Team, { TeamProps } from "./Team";

interface WorkLayoutProps {
  className?: string;
  hero?: React.ReactNode;
  sideBar?: ImageProps[];
  sideBarVideo?: {
    width?: number;
    height?: number;
    src?: string;
  }[];
  subMenu?: ClickableProps;
  team?: TeamProps;
  title?: ClickableProps;
  year?: string;
}

/** Generates a work page. [Documentation](http://localhost:6006/?path=/docs/layouts-worklayout--docs) */
export default function WorkLayout({
  children,
  className,
  hero,
  sideBar,
  sideBarVideo,
  subMenu,
  team,
  title,
  year,
}: React.PropsWithChildren<WorkLayoutProps>) {
  return (
    <>
      <Container subPageSideBar className="pb-0">
        <FadeIn delay={0} exitDelay={0.4}>
          <Clickable {...subMenu} />
        </FadeIn>
      </Container>
      <Container subPageSideBar className={clsx("pt-12 md:pt-0", className)}>
        {hero && (
          <FadeIn
            delay={0.1}
            exitDelay={0.3}
            className="flex justify-center gap-12 md:pr-12 md:pt-6"
          >
            {hero}
          </FadeIn>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col items-start gap-4 lg:pr-12 xl:pr-0">
            <FadeIn delay={0.2} exitDelay={0.2}>
              {title && <Clickable {...title} />}
            </FadeIn>
            {team && (
              <FadeIn delay={0.3} exitDelay={0.1}>
                <Team {...team} />
              </FadeIn>
            )}
            {!team && (
              <FadeIn delay={0.3} exitDelay={0.1}>
                <br />
                <span className="text-sm italic">{year}</span>
              </FadeIn>
            )}
            <FadeIn delay={0.4} exitDelay={0}>
              {children}
            </FadeIn>
          </div>
          <div className="flex flex-col gap-8 lg:items-center">
            {sideBarVideo &&
              sideBarVideo.map((videoProps, index) => (
                <FadeIn delay={0.2} exitDelay={0.2} key={index}>
                  <video
                    width={videoProps.width}
                    height={videoProps.height}
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src={videoProps.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </FadeIn>
              ))}
            {sideBar &&
              sideBar.map((imageProps, index) => (
                <FadeIn delay={0.2} exitDelay={0.2} key={index}>
                  <Image
                    {...imageProps}
                    alt={imageProps.alt || ""}
                    className="w-max object-none object-left-top md:object-cover"
                  />
                </FadeIn>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
}
WorkLayout.displayName = "WorkLayout";
