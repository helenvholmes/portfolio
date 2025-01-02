"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { Clickable, Container, Float } from "~/components";

export default function Custom404() {
  const str = "not found";
  const chars = str.split("");

  const pathname = usePathname();

  console.log(pathname);

  return (
    <Container className="flex h-3/4 w-full items-center justify-center">
      <motion.ul className="flex list-none gap-px">
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
      </motion.ul>
      <div className="text-muted">
        do me a favor, will you? let me know you{" "}
        <Clickable
          href={`mailto:sayhi@helenvholmes.com?subject=Error on your website&body=I wanted to let you know I ran into an error trying to load this page: ${pathname}`}
        >
          found this error?
        </Clickable>
      </div>
    </Container>
  );
}
