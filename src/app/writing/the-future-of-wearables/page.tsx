"use client";

import Image from "next/image";

import { Clickable, WorkLayout } from "~/components";
import { ClickableProps } from "~/components/Clickable";

export default function TheFutureOfWearables() {
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
        children: "Future of wearables",
      }}
      year="March 2015"
    >
      <div className="flex flex-col gap-4">
        <p className="italic opacity-80">
          <em>No telemarketers need call, please.</em>
        </p>
        <p>
          A non-mechanical watch beeps on my bedside table, demanding attention.
          I&apos;m immediately angry: how <em>dare</em> it presume to be worthy
          of <em>my</em> attentions without me expressly giving them. I sometimes
          talk to tech this way. They&apos;re supposed to be peasants but more
          often they&apos;re the 3 ounce rock of heroin sitting in my pocket.
        </p>
        <p>
          I hunt my phone down and turn off all the notifications for the damn
          thing. This, I should mention, renders the watch useless. I give it
          back to my employer the next day so someone <em>else</em> can complain
          of their ever-draining attention span.{" "}
          <em>I wanted to win against the machine.</em>
        </p>

        <blockquote className="border-l-2 border-current pl-4 text-lg italic opacity-80">
          Notifications are the telemarketers of the 21st century.
        </blockquote>

        <p>
          When I was growing up I&apos;d eat at my grandparents&apos; house for
          dinner at least once a week. They always got a lot of calls, and those
          calls were always, <em>always</em> from telemarketers. They donated a
          lot of money because they considered it their duty as good Christians
          and as a result there was always someone knocking.
        </p>
        <p>
          Their voicemail message is the most hilarious thing I&apos;ve ever
          heard. I think it provides some unique insight into what my grandfather
          is like:
        </p>

        <audio controls className="w-full">
          <source
            src="/writing/the-future-of-wearables/grampy-voicemail.mp4"
            type="audio/mp4"
          />
          Your browser does not support the audio element.
        </audio>

        <figure className="my-6">
          <Image
            alt="A tape recorder"
            className="w-full object-cover"
            height={600}
            src="/writing/the-future-of-wearables/tape-recorder.jpg"
            width={900}
          />
        </figure>

        <p className="italic opacity-80">
          &ldquo;… We are unable, or perhaps unwilling, to answer the telephone
          right now. Please leave your name and telephone number, and we will
          return your call [BEEP]&rdquo;
        </p>
        <p>
          That&apos;s a generation that doesn&apos;t want to be bothered. That
          man will never own an iPhone, believe me.
        </p>
        <p>
          This is in contrast to one of my friends at work, who has a smart watch
          and <em>checks it mid-conversation because he can&apos;t help it.</em>{" "}
          He at least says he likes the boondoggle; maybe I just have an aversion
          to anything Pavlovian?
        </p>
        <p>
          These things interrupt you while you&apos;re having dinner. They
          prevent you from having meaningful conversations with friends. They
          demand your attention at odd hours: when you are falling asleep, or
          reading things, or watching Netflix in bed with your husband. Wait,
          who? Telemarketers?
        </p>
        <p>No. Notifications. Notifications do these things.</p>

        <figure className="my-6">
          <Image
            alt="A bed"
            className="w-full object-cover"
            height={600}
            src="/writing/the-future-of-wearables/sheets.jpg"
            width={900}
          />
          <figcaption className="mt-2 text-sm italic">
            A bed where I would rather spend my time.
          </figcaption>
        </figure>

        <p>
          Unlike telemarketers, however, who are easy to hate as an external
          force interrupting our daily routines, notifications are both an{" "}
          <strong>internal</strong> and <strong>external</strong> force. This
          means that part of the problem is <em>us.</em> We want validation,
          importance; so we keep paying attention to our notifications. We
          become addicted to the services demanding our attention. We refresh our
          email inboxes to make sure no one needs us right now. It&apos;s a
          battle of our own willpower against the machines in our pockets.{" "}
          <em>I swear to god, I want to win.</em> But I still have Twitter
          installed, so...
        </p>

        <blockquote className="border-l-2 border-current pl-4 text-lg italic opacity-80">
          We are in danger of this being our conception of the future.
        </blockquote>

        <p>
          I shouldn&apos;t assume anything of you; maybe you don&apos;t feel
          addicted. Maybe you have more willpower than I. Maybe you see this
          through a different lenses and see the good in it.
        </p>
        <p>
          I pull out my phone, reply to a text, check Twitter, refresh refresh
          refresh put it back. I pull out my phone, Twitter Snapchat Twitter
          Instagram Twitter refresh refresh put it back. I pull out my phone,
          work email personal email refresh refresh Twitter text Twitter
          refresh...
        </p>
        <p>It&apos;s 8am, and I&apos;m only just leaving for work.</p>
        <p>
          And the worst part is that it&apos;s the notification drawing me in at
          first, then the heroin making me check over and over. I love the
          communities I am a part of; I&apos;m also scared of the implications
          of this kind of addiction. A machine on my wrist then a machine
          embedded in my arm to a machine on my eyeballs.
        </p>
        <p>
          <em>You&apos;ll never escape my clutches,</em> whispers Twitter.
        </p>
        <p>
          Notifications are like telemarketers on our wrists and in our pockets.
          Or maybe more like a drug dealer and you&apos;re getting really,
          really into speed. Checking your phone during a conversation is rude;
          so is checking your watch. But{" "}
          <em>we have trouble being polite because we&apos;re addicted.</em> This
          may be the future we&apos;re living in but I don&apos;t think
          it&apos;s the future we should be striving for.
        </p>

        <figure className="my-6">
          <Image
            alt="An Apple Watch"
            className="w-full object-cover"
            height={600}
            src="/writing/the-future-of-wearables/apple-watch.jpg"
            width={900}
          />
          <figcaption className="mt-2 text-sm italic">I disapprove.</figcaption>
        </figure>

        <h2 className="text-lg font-medium">
          Seems like you hate notifications, Helen, not a particular product.
          Except for maybe Twitter.
        </h2>
        <p>
          Man, that&apos;s loaded. I love the things that connect me to other
          people. Twitter&apos;s like that. Hi Twitter friends. I think
          you&apos;re rad. And that&apos;s the Internet! I remember posting on
          Final Fantasy forums and chat rooms and AIM and feeling like{" "}
          <em>there was no where in the world I couldn&apos;t go,</em> assuming
          my mom and dad didn&apos;t need to make a call. It was glorious and it
          is glorious and that&apos;s why I feel so conflicted. What the hell
          are we all doing? Who do I talk to about this problem that feels
          encapsulated to the now? Who understands this? Who can help me answer
          these questions?
        </p>
        <p>
          I hate notifications. Smart watches are <em>notification machines,</em>{" "}
          so I feel confident when I poo-poo them as unnecessary extravagences
          that I&apos;m better without. When I come to my phone, though, and the
          services on it, I just can&apos;t say. That&apos;s my honest answer.
          There are things I like better, though, like the{" "}
          <Clickable
            href="http://www2.withings.com/us/en/products/activite?"
            {...linkProps}
          >
            Withings Activité
          </Clickable>
          :
        </p>

        <video controls className="w-full">
          <source
            src="/writing/the-future-of-wearables/withings.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>There are a few things about this watch I think are important to call out directly:</p>
        <ol className="list-decimal pl-5">
          <li>
            It does not have a screen. It never receives notifications, thus it
            cannot greedily demand your attention. In order to get information
            from it other than the time, you need to go look for it on your
            phone.
          </li>
          <li>
            Its features are subtle. It automatically updates the time when you
            change time zones. A double tap shows you when you&apos;ve set your
            alarm. It tracks your step count. Its feature set is small but
            include vast, intuitive improvements over a &ldquo;dumb&rdquo; watch.
          </li>
          <li>
            It&apos;s waterproof. As it markets itself as an activity monitor,
            this is an important ability to close.
          </li>
          <li>
            I included this last because it&apos;s arguably less important than
            the other points but it&apos;s attractive. It&apos;s an extension
            of what is currently considered attractive in a watch. The Apple
            Watch&apos;s charm lies in how cartoony it is. The Withings
            Activité&apos;s charm lies in its sophistication.
          </li>
        </ol>

        <blockquote className="border-l-2 border-current pl-4 text-lg italic opacity-80">
          The Future That We Need
        </blockquote>

        <p>
          The Apple Watch has already been covered so much by the media that
          predictions of its success are probably true. I currently imagine that
          it will play out a little bit like the iPad: a curiosity that few need
          but that works for certain things and that some people really enjoy.
          I&apos;ve discussed what I believe are the biggest arguments against
          moving into a future where notifications light up on our wrists, but
          I&apos;ll reiterate them again: Distraction. Time-wasting. Not being
          fully present in moments that matter. Etc.
        </p>
        <p>
          I&apos;d encourage the future proposed by Withings instead: one where
          technology is working to improve our lives and at the same time,
          remain unintrusive. The watch that updates when you change time zones.
          The car that opens when your key is in your pocket. The thermometer
          that learns what temperature is the most comfortable for you at what
          times of day.
        </p>
        <p>
          Notifications will have their place. But only in the places where I
          want them. And more importantly, on devices I can always turn off if I
          want.
        </p>
      </div>
    </WorkLayout>
  );
}
