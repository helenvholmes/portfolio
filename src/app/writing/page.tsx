"use client";

import {
  Clickable,
  Columns,
  Container,
  FadeIn,
  IndexClickable,
  Label,
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
          alignLabel
          collapseBehavior="oneCol"
          firstColumn={
            <div className="flex flex-col">
              <FadeIn delay={0} exitDelay={0.6}>
                <IndexClickable href="/writing/industry-predictions">
                  Ya gurl loves making industry predictions you didn&apos;t ask for
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.2} exitDelay={0.4}>
                <IndexClickable href="/writing/code-ownership-and-ai">
                  I&apos;m ready to rant about code ownership in the world of AI
                </IndexClickable>
              </FadeIn>
            </div>
          }
          label={
            <FadeIn delay={0.2}>
              <Label>Writing</Label>
            </FadeIn>
          }
          numberOfColumns={1}
        />
      </Container>
    </>
  );
}
