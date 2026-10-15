"use client";

import React from "react";
import Image from "next/image";

import { Clickable, WorkLayout } from "~/components";
import { ClickableProps } from "~/components/Clickable";

function EssayImage({
  alt,
  caption,
  src,
}: {
  alt: string;
  caption?: React.ReactNode;
  src: string;
}) {
  return (
    <figure className="my-6">
      <Image
        alt={alt}
        className="w-full object-cover"
        height={900}
        src={src}
        width={1200}
      />
      {caption && (
        <figcaption className="mt-2 text-sm italic">{caption}</figcaption>
      )}
    </figure>
  );
}

export default function TheThingsWeOwn() {
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
        children: "The things we own",
      }}
      year="July 2016"
    >
      <div className="flex flex-col gap-4">
        <p>
          This is a story about the aftermath. This is a story about{" "}
          <em>stuff</em>.
        </p>
        <p>
          In November of last year my grandmother died. It wasn&apos;t sudden —
          she came down with a disease named{" "}
          <Clickable
            href="https://en.wikipedia.org/wiki/Amyotrophic_lateral_sclerosis"
            {...linkProps}
          >
            ALS
          </Clickable>
          , a disease that is currently untreatable and fatal. Your body breaks
          down until you can&apos;t breathe. I miss her all the time.
        </p>
        <p>
          I&apos;ve already written about that some. This story is less about
          that, and more about what was happening in parallel: my grandfather
          became depressed and then ill as this happened, and he ended up in a
          nursing home. This is a story about the aftermath. This is a story
          about <em>stuff</em>.
        </p>

        <p>
          When I was 19, I did something that made my father not speak to me for
          a year. I cleared out the basement and the attic.
        </p>

        <EssayImage
          alt="A pit of discarded belongings"
          src="/writing/the-things-we-own/glorious-pit.jpg"
        />
        <EssayImage
          alt="A telescope among clutter"
          src="/writing/the-things-we-own/telescope-chillin.jpg"
        />

        <p>
          Well, that&apos;s not <em>quite</em> what I did. When I was 19, I
          threw away, donated, and sold an entire basement and attic&apos;s worth
          of rocks, paperback books, receipts, trash I&apos;d tried to throw
          away years ago, the inside pamphlets of video game boxes, and a million
          other equally random and inane things that one accumulates as one
          lives. My mother convinced my father to go away and spend time with
          family and while they were away my sister, husband and I threw away
          mountains of things.
        </p>
        <p>
          We had equal parts fun and were equal parts creeped out by it all. We
          found a box labeled &ldquo;Jews&rdquo;, that didn&apos;t have anything
          related to being part of the religion or the history of Judaism in it,
          but Sega Saturns. We found a box labeled &ldquo;Good rocks&rdquo; that
          was also a misnomer. We also found a box labeled &ldquo;Trash&rdquo;
          that… well, had trash in it. You could hardly blame us for doubling
          over in laughter after the first two redirects.
        </p>
        <p>
          It was creepy because I&apos;d find things I <em>knew</em>, I god damn{" "}
          <em>knew</em> I&apos;d thrown away years ago. My father would go
          through the trash and pull out shoes or clothing with holes I&apos;d
          throw away, too damaged to be donated, stuff of that nature. It was
          uncanny to find things I never expected to find again in a jumble in
          the basement, having never left.
        </p>

        <EssayImage
          alt="A dark hallway"
          src="/writing/the-things-we-own/darkest-hallway-ever.jpg"
        />
        <EssayImage
          alt="Packing tape"
          src="/writing/the-things-we-own/packing-tape.jpg"
        />

        <p>
          When my father came back from visiting family after we had done this,
          he was so furious he didn&apos;t speak to me for a year. I&apos;d
          gotten rid of things that served no purpose other than to make our
          house less liveable but to him, I&apos;d thrown away security blankets
          what made his house feel <em>safe</em>. If you asked him why we needed
          those things, he&apos;d mutter something about the apocalypse, or get
          angry that I was suggesting we get rid of these things. And while I
          knew I was strong enough to take it, it still hurt, being the villian
          that my mother could not be. The mother, who I have not yet mentioned,
          who browses through <em>Southern Living</em> wistfully and wants large
          french doors and lots of light and joy in her house but instead fought
          and is still fighting against the large, oppressive shadow in her
          house.
        </p>
        <p>This is a story about mental illness, and the things we own.</p>

        <p>
          I&apos;m not 19 anymore, but demons don&apos;t really fade away so
          easily. After my grandmother died and my grandfather was moved into a
          nursing home, there became the issue of their house. A house, like my
          mother&apos;s, which was full of <em>stuff</em>. I&apos;m not even the
          first to come in and clean it — my mother has, my aunt and her husband
          have, but it&apos;s impossible to fight both the current of things
          that my grandmother and grandfather acquired through the years and my
          father, who latches on to free space and fills it. I&apos;d hoped
          cleaning the house would be a big, daring project I&apos;d embark on
          and complete in some sense with a big, exciting blog post at the end,
          but alas. I find myself in a state of maintenance. I find letters,
          and signs of how much my grandmother loved me and my sister. I find
          trash. I find ugly art, and framed posters from art museums. I find
          books and books and books. I find painted, damaged furniture. I find
          food past its expiration date. I find broken dishes, and tarnished
          silver, and army metals, and rewards, and plaques, and the signs of a
          life well-lived by someone many people other than me loved and
          respected.
        </p>

        <EssayImage
          alt="A television setup"
          caption="&ldquo;Sick setup,&rdquo; says my friend Dennis."
          src="/writing/the-things-we-own/tv-setup.jpg"
        />
        <EssayImage
          alt="Mugs celebrating royal jubilees"
          caption={
            <>
              My grandmother <span className="underline">loved</span> the Royal
              Family. These are mugs celebrating various jubilees.
            </>
          }
          src="/writing/the-things-we-own/the-queens-mugs.jpg"
        />
        <EssayImage
          alt="Good Housekeeping magazine"
          caption="Concerns for any modern housewife."
          src="/writing/the-things-we-own/good-housekeeping.jpg"
        />

        <p>And each thing gets sorted. Keep. Donate. Throw away.</p>
        <p>Weirdly, this is not dissimilar from my actual job.</p>
        <p>
          The things you keep needs to be a small pile. That&apos;s because you
          need to know what you&apos;re going to do with it — the artwork needs
          to be displayed, the silver should be polished, the things should be
          kept and loved and used. It is impossible to throw away everything
          when you loved someone so much and these things are <em>part of them</em>
          , part of that person you loved so dearly, and shaped their identity.
        </p>
        <p>
          You also cannot keep everything. So much of what a person uses and
          owns are part of the day-to-day of keeping oneself alive and
          functioning and getting things done.
        </p>
        <p>
          Of the remaining pile of <em>things</em>, you must sort the wheat from
          the chaff. Some things, while you do not need them, others will. And
          it&apos;s important to know the different between, &ldquo;I need this
          now&rdquo;, and, &ldquo;I might need this in the future.&rdquo;
          I-might-need-this-in-the-future things must go. You cannot keep
          everything, and someone less fortunate than you probably needs it now,
          and you do not. Give it to{" "}
          <Clickable
            href="https://donate.salvationarmyusa.org"
            {...linkProps}
          >
            those
          </Clickable>{" "}
          <Clickable href="http://www.goodwill.org/" {...linkProps}>
            who
          </Clickable>{" "}
          <Clickable href="https://www.dressforsuccess.org/" {...linkProps}>
            need
          </Clickable>{" "}
          <Clickable href="http://www.onewarmcoat.org/" {...linkProps}>
            it
          </Clickable>
          .
        </p>

        <EssayImage
          alt="Books including The Queens of England"
          caption={
            <>
              Sampling:
              <br />
              —The Complete Works of William Shakespeare
              <br />
              —The History of Greece
              <br />
              —The Queens of England
            </>
          }
          src="/writing/the-things-we-own/queens-of-england.jpg"
        />
        <EssayImage
          alt="A parrot figurine"
          caption="Baas really loved this bird."
          src="/writing/the-things-we-own/parrot.jpg"
        />

        <p>
          The rest should go. You put it in trash bags, and you watch as you
          begin to see counterspace and flooring again. You watch as rooms that
          felt small become large. You find room to breathe. You welcome the
          light in again.
        </p>

        <EssayImage
          alt="Enchanted Us book"
          src="/writing/the-things-we-own/enchanted-us.jpg"
        />

        <p>
          You get tired from it. It&apos;s exhausting sorting through the life
          of someone else. You have to shred documents and bag up donations and
          deliver them and haul trash to the curb over and over and over again.
          But mostly, you open up space.
        </p>
        <p>
          You also get better at it. You learn, quickly, that photographs can
          live on your phone. You learn that memories can be written down, and
          that the thing that prompted that memory can leave once you&apos;ve
          released the story. You learn that you can keep everything a person
          ever owned and it won&apos;t bring them back. You have to let things
          go, and talk about them, and cry, and write, and host big Irish
          farewells with your cousins at 3 in the morning swapping stories about
          the person you&apos;ve lost. But the physical objects leave, as they
          should. They were never what was important anyway.
        </p>
        <p>
          My family has struggled with mental illness for generations, and I find
          myself as one member of a more complex puzzle than myself. I
          can&apos;t reason with some of my family members on why the house
          needs to be cleaned because they have blockers that I do not. They are
          not governed by reason when it comes to this.
        </p>
        <p>
          I also empathize. I&apos;m also attached to things, and use them to
          shape my identity, just not as many things. We all do just to varying
          degrees and my own tolerance for number of things I can own is low,
          which my family benefits from in some small way when it comes to
          projects like this one. I donate with abandon.
        </p>
        <p>
          If you have read this, and thought, &ldquo;I must organize myself as
          well,&rdquo; my advice to you is:
        </p>

        <ol className="list-decimal pl-5">
          <li>
            <strong>Curate.</strong> You must maintain what you have, so only
            keep the things you truly wish to maintain.
          </li>
          <li>
            <strong>Save, but in new ways.</strong> I saved memories of my
            grandmother in an atypical way that meant a lot to me. Sometimes all
            you want is to be able to see those things again, not actually hold
            them.
          </li>
          <li>
            <strong>
              Identify what ails you, and see how you feel a week later.
            </strong>{" "}
            If you are struggling to let go of something, ask yourself why.
            Because you think you might need it? Because you feel you are
            betraying someone by giving it away? Things can be repurchased in
            the future, and you betray no one by giving something away if it can
            bring someone else joy. Own things that bring you joy. It might hurt
            to give away something that once upon a time brought you joy, and it
            might hurt the next. But it probably won&apos;t in a week.
          </li>
        </ol>

        <p>
          My father is very angry with me yet again, and I so desperately wish I
          could not be the bad person. I wish there was a way to explain this to
          my father, that things are not the same as love. But instead, I am
          here, throwing and sorting and cleaning one thing at a time. Because I
          know I can take it, as does my mother, who knew of my cleaning
          expedition all those years ago. Because I know that with the things
          gone, we&apos;ll be free to leave, and make new memories elsewhere.
          And because I know it&apos;s gonna look good when I&apos;m done.
        </p>
      </div>
    </WorkLayout>
  );
}
