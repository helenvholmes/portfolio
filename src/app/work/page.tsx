"use client";

import {
  Clickable,
  Columns,
  Container,
  FadeIn,
  IndexClickable,
  Label,
} from "~/components";

export default function Work() {
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
              <FadeIn delay={0} exitDelay={0.8}>
                <IndexClickable
                  // cursorImage="work/ai-mapping-ui/reconcile.mp4"
                  href="/work/ai-mapping-ui"
                >
                  AI Mapping UI
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.1} exitDelay={0.7}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/tables-tables-tables"
                >
                  Tables
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.2} exitDelay={0.6}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/approvals-timeline"
                >
                  Approvals Timeline
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.3} exitDelay={0.5}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/modern-treasury-dot-com"
                >
                  ModernTreasury.com
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.4} exitDelay={0.4}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/nypl-design-system"
                >
                  NYPL Design System
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.5} exitDelay={0.3}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/altitude"
                >
                  Altitude
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.6} exitDelay={0.2}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/designing-developer-tools"
                >
                  Designing Developer Tools
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.7} exitDelay={0.1}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/fastly-festival"
                >
                  Fastly Festival
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.8} exitDelay={0}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/cip-conference"
                >
                  CIP Conference
                </IndexClickable>
              </FadeIn>
              {/* <FadeIn delay={0.8} exitDelay={0.1}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/logos-illustrations"
                >
                  Logo & Illustration Work
                </IndexClickable>
              </FadeIn>
              <FadeIn delay={0.9} exitDelay={0}>
                <IndexClickable
                  // cursorImage="https://placehold.co/600x400/EEE/31343C"
                  href="/work/swag"
                >
                  Swag
                </IndexClickable>
              </FadeIn> */}
            </div>
          }
          label={
            <FadeIn delay={0.2}>
              <Label>Work</Label>
            </FadeIn>
          }
          numberOfColumns={1}
        />
      </Container>
    </>
  );
}
