"use client";

import { Clickable, WorkLayout } from "~/components";

export default function CodeOwnershipAndAI() {
  return (
    <WorkLayout
      subMenu={{
        children: "Writing",
        destination: "internal",
        direction: "backwards",
        href: "/writing",
        type: "index",
      }}
      title={{
        children: "I'm ready to rant about code ownership in the world of AI",
      }}
      year="April 2026"
    >
      <div>
        <p>
          I don&apos;t think designers should be producing production-ready code
          at large(r) institutions.
        </p>
        <p>There! I said it!</p>
        <p>
          I think the goal of Figma Make/Claude Design/whatever
          Opus-4.7-driven-thing-to-kill-them-all you&apos;re using is to
          produce prototypes that look like your company is to do the following:
        </p>
        <ul className="list-disc pl-5">
          <li>Help with requirement handoff to engineers</li>
          <li>Explore North Star-type work</li>
          <li>
            Perform light-weight, <em>not</em>-in-app user testing before doing the
            laborious work of building new product.
          </li>
        </ul>
        <br />
        <p>
          I feel like there&apos;s this belief out there right now that these
          new tools mean designers should be shipping production code and
          it&apos;s the wrong use of everyone&apos;s skill sets. I think the{" "}
          <em>packaging</em> around how we want these tools to unlock designer
          workflows is the part that&apos;s confusing to everyone right now.
        </p>
        <p>
          Most places I&apos;ve worked, engineers are expected to own the code
          they author. This means that if something goes wrong, you&apos;re on
          the hook for fixing it. If you&apos;re a designer vibe-coding and
          shipping production code, who owns the code? Sonnet? (I&apos;m being
          facetious.) (<Clickable href="/writing/llm-maintainable-code-meme.jpg" destination="external" openInNewTab type="inline-article">I mean AI is a better programmer than I am though.</Clickable>)
        </p>
        <p>
          The burden of maintenance is ultimately going to fall to an
          engineer. So the right call is not expecting designers to vibe-code
          your production app, which dilutes engineering ownership in odd ways,
          but to use prototypes to understand the problem you&apos;re trying to
          solve.*
        </p>
        <p>
          I think the odd designer in collaboration with their engineering team
          may occasionally ship vibe-coded work into
          production. I&apos;m this kind of designer. It happens. But I
          don&apos;t think it should be the expectation, or the norm.
        </p>
        <p>
          —Signed, a person who&apos;s been a &ldquo;prototyper&rdquo; at a
          bunch of places before AI made us all prototypers (the future will be pretty cool) (assuming the robots don&apos;t
          kill us all).
        </p>
        <p>Should designers code 2026?</p>
        <p>Happy vibe-coding!</p>
        <p>
          <em>
            * If you work at a 4 person startup, feel free to ignore
            everything I&apos;m saying
          </em>
        </p>
      </div>
    </WorkLayout>
  );
}
