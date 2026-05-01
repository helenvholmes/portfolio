"use client";

import { Clickable, WorkLayout } from "~/components";
import { ClickableProps } from "~/components/Clickable";

export default function IndustryPredictions() {
  const linkProps = {
    destination: "external",
    openInNewTab: true,
    type: "inline-article",
  } as ClickableProps;

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
        children:
          "Ya gurl loves making industry predictions you didn't ask for",
      }}
      year="May 2026"
    >
      <div>
        <p>
          Last week if you&apos;d asked me how I felt about Figma I&apos;d have
          been kind of an asshole about it. &ldquo;Oh, they&apos;ve spent the
          last year doing everything wrong, you can&apos;t use AI to generate
          stuff on the canvas, like just look at their stock price, everyone
          agrees with me on this, I am of course right about
          everything.&rdquo;
        </p>
        <p>And then Claude Design came out.</p>
        <p>AND I THINK I WAS COMPLETELY WRONG.<sup><a className="underline" href="#fn-1">*</a></sup></p>
        <hr className="my-6 border-current opacity-20" />
        <p>
          I want to say I am still incredibly bullish on Anthropic.{" "}
          <Clickable
            href="https://removepaywalls.com/https://www.newyorker.com/magazine/2026/02/16/what-is-claude-anthropic-doesnt-know-either"
            {...linkProps}
          >
            Have you heard their headquarters are basically a skiff?
          </Clickable>{" "}
          They know they&apos;re on to something. I&apos;ve been trying to put
          it like this:
        </p>
        <p>
          Claude <em>connects</em> everything. Give Claude access to all of
          your things (haha, fun, privacy, idk what to tell you<sup><a className="underline" href="#fn-2">†</a></sup>) and you can
          do stuff like, &ldquo;Pull this PRD from Atlassian, look at this epic
          in Jira, grab context from the latest DMs with my manager in Slack,
          and put together a flowchart for how this new feature should
          work.&rdquo; And it&apos;ll do it. It&apos;s super neat. If
          I never have to write another bug ticket myself ever again it will be
          too soon. I like how the little robot dances in my terminal.{" "}
          <Clickable
            href="https://docs.github.com/en/copilot/reference/copilot-billing/model-multipliers-for-annual-plans#model-multipliers-for-annual-copilot-pro-and-copilot-pro-subscribers"
            {...linkProps}
          >
            I&apos;m looking at new token multipliers across the industry
          </Clickable>{" "}
          with a tear in my eye because I suspect my license is about to become
          a lot less useful. I ♥ Claude.
        </p>
        <p>
          But I&apos;m a designer, and designers hang out in Figma. So let me
          take you on the saga of how I{" "}
          ~how I wasted all my <s>fucking</s> time for the last three months~~~
        </p>
        <hr className="my-6 border-current opacity-20" />
        <p>
          B2B SaaS right now feels like like some weird psychological experiment where
          every week or so someone in a meeting demos some tool you&apos;ve
          never heard of, says it&apos;s the best thing since sliced bread and
          we should all begin using it, and so you try to start using it and
          then get burnt out because you have no time to play with stuff because
          you have your regular work. This then repeats ad infinitum until{" "}
          <em>you lose your goddamn mind</em>. The tool exhaustion is{" "}
          real. If you&apos;re a designer, it feels like every
          engineer around you has been given a machine gun and you&apos;re
          showing up to every meeting with like, a knife or something (idk
          I&apos;m bad at analogies). You get the picture.
        </p>
        <p>
          Design tools are just... slow. As an industry we&apos;ve moved away
          from pencil wireframes because they&apos;re hard to track digitally,
          which I think has been a detriment to testing ideas in low-fidelity.
          That said, they were also really awkward. &ldquo;Hey stranger, wanna
          test out my mobile app? Pretend you&apos;re clicking this app icon I
          drew on a piece of paper.&rdquo;<sup><a className="underline" href="#fn-3">‡</a></sup> You spend a lot of time as a UX
          designer moving pixels around really slowly. It&apos;s just kinda a bitch.
        </p>
        <p>
          Which is why access to AI for in-browser prototyping is{" "}
          <em>so awesome</em>. You can actually move with some speed, and demo
          and feel how something looks and operates{" "}
          <em>
            in the environment it will actually deploy in when it&apos;s
            finished
          </em>
          . I myself have completely switched over to vibe coding because
          I&apos;m a terrible engineer and the code I write is no better,
          typically, than your average new engineer fresh out of college.
          It&apos;s made coding a lot of fun again.
        </p>
        <p>
          However! Brute-forcing learning just enough of something means that I
          am one of those, &ldquo;Should Designers Learn to Code?&rdquo;-types
          who said <em>sure i guess</em> and is living with the consequences.
        </p>
        <p>Which is my fun little segue into Helen lore you didn&apos;t ask for.</p>
        <hr className="my-6 border-current opacity-20" />
        <p>
          The year is 2015. I am at my first corporate job. I am a &ldquo;Front
          End Developer&rdquo; (heavy emphasis on the quotes for that) on a
          Design team. I build prototypes for ideas that Invision doesn&apos;t
          work for. I am learning what web sockets are so I can make mocks of
          2-step authentication because that wasn&apos;t really a thing yet. I
          am learning just how much coffee I can consume on no sleep before I
          vibrate out of my skin. Etc., etc.
        </p>
        <p>
          There is heavy discussion in the industry of, &ldquo;Should designers
          code?&rdquo; and so every so often, as a person who knows how to find
          the terminal on her computer, I sit down with a designer in my office,
          install Xcode on their Mac, and get them set up with a repo where they
          &ldquo;just want to make a few CSS changes&rdquo; which they will
          inevitably not do, but want to, because their Design QA ticket has
          been sitting untouched in Jira for three weeks post-launch and
          it&apos;s driving them batty. (I actually really empathize with this,
          so if anyone in Product has stumbled upon this article, please be kind
          to your designers. Give your engineers some time to address these sorts
          of things.)
        </p>
        <p>
          I say they will inevitably not do these CSS changes because
          engineering tends to have <em>ever so slightly</em> more to it,
          so it&apos;s not uncommon I imagine as an engineer to receive a PR
          from a designer where you go, &ldquo;Neat&rdquo;, and then close it
          and re-do it because it&apos;s just easier. No shame in the
          game.{" "}
          <Clickable
            href="https://www.helenvholmes.com/writing/code-ownership-and-ai"
            {...linkProps}
          >
            I&apos;ve already ranted about this.
          </Clickable>{" "}
          There&apos;s utility in having the people who are good at the thing
          you pay them to be good at doing that thing, which in the case of
          engineering, is... an engineer.
        </p>
        <p>
          BUT, since this is all just a ton of context for how I wasted a bunch
          of time over the last three months, guess what I spent a bunch of time
          doing in the year of our Lord 2026?
        </p>
        <p>
          Did you guess attempting to set up dev environments on a bunch of
          designers&apos; computers remotely???? BECAUSE THAT&apos;S WHAT I
          DID!!!! And I have learned a very painful lesson that somehow I
          didn&apos;t learn a decade ago, which is that the designers who want
          to get good at this sort of thing are just going to do it, and the
          ones who don&apos;t won&apos;t. Which is... fine.
        </p>
        <hr className="my-6 border-current opacity-20" />
        <p>
          All right, so back to the top of this post, which is that truly, all
          of a week ago, I was <em>so</em> excited about Claude Design.{" "}
          <Clickable
            href="https://www.lobsterpack.com/blog/claude-design-trenchcoat/"
            {...linkProps}
          >
            And to be frank I think it&apos;s still really, really neat that
            they basically just made a 30,000 word prompt and turned it into an
            entire tool.
          </Clickable>{" "}
          Talk about dogfooding your own product. Geez.
        </p>
        <p>
          That said, I&apos;m recommending to people for now that like... you
          should just keep using Figma Make. Which is wild. A week ago I was so
          gung-ho for Claude Design. Everything in that one little Mac app? Hell
          yeah!
        </p>
        <p>
          I think{" "}
          <Clickable
            href="https://southleft.substack.com/p/claude-design-is-not-a-design-systems"
            {...linkProps}
          >
            TJ at Southleft
          </Clickable>{" "}
          has done a better job of summarizing this than I can do justice
          here. Basically: if you&apos;re trying to build prototypes that are
          grounded in your company&apos;s <em>actual</em> design system...
          Claude Design just isn&apos;t it yet. I imagine that could change over
          time: it&apos;ll be interesting to see how Anthropic decides to
          position this tool. Chipping away at Adobe and Figma&apos;s market
          share is fun for me to watch as a consumer, I&apos;ll say at the very
          least.
        </p>
        <p>
          But for now: if you&apos;re trying to use design systems, need
          enterprise-level protected password prototype sharing, need tooling
          that abstracts away the development environment set up for designers,
          need tooling that meets designers where they <em>actually</em> are...
          I think the right tool for now is still Figma Make.
        </p>
        <p>
          (The messy bitch who lives for drama in me though cannot{" "}
          <em>wait</em> to go to Config this year.)
        </p>
        <p>
          <Clickable
            href="mailto:sayhi@helenvholmes.com"
            destination="external"
            type="inline-article"
          >
            Hmu if you wanna argue with me about this. Or just want to breathe
            into a paper bag where I tell you we&apos;re all gonna be fine,
            this kind of tool insanity can&apos;t last forever.
          </Clickable>
        </p>
        <p>What a fun and stressful time to be in tech.</p>
        <hr className="my-6 border-current opacity-20" />
        <p id="fn-1">
          <em>* Always fun and humbling, obviously</em>
        </p>
        <p id="fn-2">
          <em>† I feel like I&apos;ve sold my soul at this point</em>
        </p>
        <p id="fn-3">
          <em>‡ idk i kinda miss 2015</em>
        </p>
      </div>
    </WorkLayout>
  );
}
