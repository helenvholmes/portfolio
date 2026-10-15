"use client";

import {
  Clickable,
  Columns,
  Container,
  FadeIn,
  IndexClickable,
} from "~/components";

export default function Writing() {
  return (
    <>
      <Container subPageSideBar className="pb-0">
        <FadeIn delay={0} exitDelay={0.4}>
          <Clickable
            destination="internal"
            direction="backwards"
            href="/"
            type="index"
          >
            Back
          </Clickable>
        </FadeIn>
      </Container>
      <Container>
        <Columns
          collapseBehavior="oneCol"
          firstColumn={
            <div className="flex flex-col">
              <FadeIn delay={0} exitDelay={0.8}>
                <IndexClickable href="/writing/industry-predictions">
                  Industry predictions you didn&apos;t ask for
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.1} exitDelay={0.7}>
                <IndexClickable href="/writing/code-ownership-and-ai">
                  Let&apos;s discuss code ownership
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.2} exitDelay={0.6}>
                <IndexClickable href="/writing/on-critique">On critique</IndexClickable>
              </FadeIn>
              <FadeIn delay={0.3} exitDelay={0.5}>
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
      </Container>
    </>
  );
}
