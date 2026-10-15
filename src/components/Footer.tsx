import React from "react";

import Clickable from "./Clickable";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div
      className="relative h-[525px] bg-surface"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-6 h-[525px] w-full lg:bottom-0">
        <Container>
          <div className="flex flex-col gap-4 lg:gap-8">
            <Clickable href="/" type="unstyled" destination="internal">
              <Logo width={40} height={40} />
            </Clickable>
            <div
              className="text-lg font-black lg:text-6xl"
              data-cursor-text="i am primordial"
              data-cursor-size="150px"
            >
              Making a mess on the internet.
            </div>
            <div className="text-xs opacity-65">
              © Helen V. Holmes, {new Date().getFullYear()}.
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
