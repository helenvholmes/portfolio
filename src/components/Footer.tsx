import React from "react";

import Clickable, { ClickableProps } from "./Clickable";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  const clickableProps = {
    destination: "internal" as ClickableProps["destination"],
    type: "unstyled" as ClickableProps["type"],
  };

  const columnClasses = "flex flex-col gap-2 lg:gap-8";
  const labelClasses = "font-bold text-lg lg:text-2xl border-b-4 pb-2";
  const gridClasses = "grid grid-cols-2 gap-x-4 gap-y-1 lg:gap-y-4";

  return (
    <div
      className="relative h-[525px] bg-surface"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-6 h-[525px] w-full lg:bottom-0">
        <Container>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-24">
            <div className={columnClasses}>
              <Clickable href="/" type="unstyled" destination="internal">
                <Logo width={40} height={40} />
              </Clickable>
              <div
                className="text-lg font-black lg:text-6xl"
                data-cursor-text="i am primordial"
                data-cursor-size="150px"
              >
                <span className="inline xl:hidden">Having fun m</span>
                <span className="hidden xl:inline">M</span>aking a mess on the
                internet
                <span className="hidden xl:inline"> since 1492</span>.
              </div>
              <div className="text-xs opacity-65">
                © Helen V. Holmes, {new Date().getFullYear()}.
              </div>
            </div>
            <div className={columnClasses}>
              <div className={gridClasses}>
                <div className={labelClasses}>
                  <Clickable href="/work" {...clickableProps}>
                    Work
                  </Clickable>
                </div>
                <div className="border-b-4" />
                <Clickable href="/work/ai-mapping-ui" {...clickableProps}>
                  AI Mapping UI
                </Clickable>
                <Clickable
                  href="/work/tables-tables-tables"
                  {...clickableProps}
                >
                  Tables
                </Clickable>
                <Clickable
                  href="/work/modern-treasury-dot-com"
                  {...clickableProps}
                >
                  MT.com
                </Clickable>
                <Clickable href="/work/artifacts" {...clickableProps}>
                  Artifacts
                </Clickable>
              </div>
              <div className={gridClasses}>
                <div className={labelClasses}>
                  <Clickable href="/about" {...clickableProps}>
                    About
                  </Clickable>
                </div>
                <div className="border-b-4" />
                <Clickable href="/about" {...clickableProps}>
                  Read
                </Clickable>
                <Clickable href="/resume" {...clickableProps}>
                  Résumé
                </Clickable>
              </div>
            </div>
            <div className={columnClasses}>
              <div className={gridClasses}>
                <div className={labelClasses}>
                  <Clickable href="/playground" {...clickableProps}>
                    Playground
                  </Clickable>
                </div>
                <div className="border-b-4" />
                <span className="italic">Coming soon</span>
                <span className="italic">Coming soon</span>
                <span className="italic">Coming soon</span>
                <span className="italic">Coming soon</span>
              </div>
              <div className={gridClasses}>
                <div className={labelClasses}>Contact</div>
                <div className="border-b-4" />
                <Clickable
                  href="mailto:sayhi@helenvholmes.com"
                  {...clickableProps}
                >
                  Email
                </Clickable>
                <Clickable
                  href="https://www.linkedin.com/in/helen-v-holmes-29bb04322/"
                  type="unstyled"
                  destination="external"
                  openInNewTab
                >
                  LinkedIn
                </Clickable>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
