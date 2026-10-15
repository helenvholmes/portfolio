"use client";

import Image from "next/image";

import { Clickable, WorkLayout } from "~/components";
import { ClickableProps } from "~/components/Clickable";

export default function OnCritique() {
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
        children: "On critique",
      }}
      year="March 2017"
    >
      <div className="flex flex-col gap-4">
        <p>
          Chloe asks from in front of the oven, &ldquo;What are these on the
          second rack?&rdquo;
        </p>
        <p>&ldquo;I don&apos;t know, sorry,&rdquo; I shout back.</p>
        <p>
          She pulls out the tin of cupcakes and pulls them onto the trash can
          and beckons me over. I am already sensing that this is related to me,
          and that I&apos;ve done something wrong.
        </p>
        <p>
          &ldquo;Are these the vegan cupcakes,&rdquo; she says. It&apos;s not a
          question.
        </p>
        <p>
          They&apos;re incredibly black and shiny, but I&apos;m not certain
          that&apos;s wrong, per se. I&apos;ve never really made anything{" "}
          <em>vegan</em> before. I&apos;m not vegan. I did think they were
          awfully oily when I scooped them into the tiny little paper cups. Hm.
          Not good.
        </p>
        <p>
          Chloe&apos;s expression is unreadable — she isn&apos;t one for small
          talk, doesn&apos;t say much at all really, and I have the worst time
          figuring out whether or not she likes me or abhors me, whether
          she&apos;s younger or older than me — and she says, &ldquo;You forgot
          to add the sugar.&rdquo;
        </p>
        <p>
          She flips the tray over and dumps 24 cupcakes into the trash can
          underneath it unceremoniously. Cupcakes in trash bins look very, very
          sad. It&apos;s a sight I&apos;m getting used to.
        </p>

        <hr className="my-6 border-current opacity-20" />

        <p>
          Getting the job took no effort on my part, really. A textbook
          definition of &ldquo;falling into [one]&apos;s lap&rdquo;. After months
          of <em>talking</em> about maybe getting a job at a bakery, or a
          coffeeshop, or <em>something</em> where I wasn&apos;t sitting alone in
          my studio apart coding I appeared well situated to continue sitting
          alone in my studio apartment not knowing anybody while coding. Remote
          life is very strange.
        </p>
        <p>
          Life had other plans: my husband, at a party*, happened upon an old
          acquaintance who was known in our circle as &ldquo;the sweet girl who
          works at the bakery.&rdquo; Having been actually <em>listening</em> to
          his wife of seven years who kept saying{" "}
          <em>I want a job at a bakery or something</em> went about getting his
          wife a job at a bakery. When he came home that night, triumphant, with
          the news that I had an <em>in</em>, the lazy girl lying in bed
          reading a book and eating cookies and who did very little menial labor
          these days went, <em>Oh dear</em>.
        </p>
        <p>
          <em>
            * I was too lazy to go out that night. I stayed in, read a book, and
            ate cookies. You know the type.
          </em>
        </p>

        <hr className="my-6 border-current opacity-20" />

        <p>
          I&apos;m not sure what you&apos;d call my part-time job I do for three
          hours on Wednesday and Thursday mornings. Moonlighting? Do I moonlight
          as a baker, even though I work in the early morning? Even that seems
          to imply a certain degree of &ldquo;I really love this work&rdquo;
          fanaticism that I&apos;m not sure I have for the bakery. I like baking
          for myself a great deal. I am normally tired at the bakery after I
          stumble out of bed at 6 in the morning, which doesn&apos;t really
          scream &ldquo;I LOVE MY JOB&rdquo; in quite the way I&apos;ve
          romanticized loving one&apos;s job I have in my head.
        </p>
        <p>
          My first day I work all day, on my feet, without eating. The woman who
          owns the bakery cuts me a check for $60 and says she&apos;d love to
          hire me. I agree to the arrangement and keep the check in a drawer
          after I deposit it. It was exhausting earning that check, and I&apos;m
          proud of it.
        </p>

        <hr className="my-6 border-current opacity-20" />

        <p>
          I&apos;m a student again, still in university. I&apos;m in a fancy
          coworking space with two men who have just started their design firm.
          We are having a &ldquo;meeting&rdquo; about a &ldquo;client&rdquo;.
          These are the words, I&apos;ve learned, we use to describe doodling
          near the coffee machine because the area over by our desks is too
          cramped and the one meeting space is taken most of the time.
        </p>
        <p>
          My drawings are, well… bad. I can see this the second I put pen to
          paper, and I&apos;m reluctant to discuss my ideas because they sound
          so terrible. One of my bosses seems to be spitting out better looking,
          more logical designs with a blue ballpoint pen in comparison to the{" "}
          <em>design microns</em> that were required for one of my classes,
          which is discouraging.
        </p>
        <p>
          Later we show our designs to the client and as three logo choices and
          the client agrees that he likes directions 1 &amp; 2. &ldquo;Option 3
          is… intriguing, I&apos;ll say that.&rdquo;
        </p>
        <p>
          Option 3 is mine, of course. I shrink inwardly into a small, wrinkled
          ball.
        </p>

        <hr className="my-6 border-current opacity-20" />

        <p>
          At the bakery, I know where to find soy milk, eggs, flour, sugar,
          gluten free sugar, gluten free flour, buttermilk, whole milk, and jam.
          That said, I do not know where the jam refills are, nor brown sugar,
          confectioner&apos;s sugar, graters, cornstarch, nonpareils, paring
          knives, the juicer, frozen molasses cookies, decorative sugar, cinnamon
          sugar, the blocks of cream cheese, nor anything else on seemingly
          endless list of things that Nicole, the baker I am sous-baker to,
          seems to have stored in her head are.
        </p>
        <p>
          &ldquo;Vegan. I hate vegan. Make one times coconut lime, prep
          bag&apos;s out, and two times vegan chocolate, but chocolate are
          Mexican chocolate today so mix in just a dash of cayenne and cinnamon
          at the end.&rdquo;
        </p>
        <p>&ldquo;Um, so —&rdquo;</p>
        <p>
          I am a little further in, but for having been here as long as I have I
          feel like I ask too many questions.
        </p>
        <p>
          These cupcakes I <em>almost</em> mess up beyond repair by forgetting
          to add grated coconut to the first batch and forgetting the cayenne
          and cinnamon bit for the others. Nicole catches the first mistake and
          I catch the second about a minute after the cupcakes have been put in
          the oven. I end up stirring tiny sprinkles of cinnamon and cayenne
          pepper into each chocolate cupcake individually with a teaspoon,
          trying not to spill them.
        </p>

        <hr className="my-6 border-current opacity-20" />

        <p>
          I&apos;m fresh out of university and interning at an agency where{" "}
          <em>they care about front end development</em>, a classmate tells me.
          Because front end development I think is a thing I want to do, I apply
          even though I feel weirdly old in comparison to the other interns.
        </p>
        <p>
          &ldquo;We do code reviews here, so when you&apos;re ready with the
          assignment create a pull request so we can review your changes,&rdquo;
          a man is saying to me. I feel confident I understand the gist of that,
          even if some of the particulars elude me. Mostly, however, the idea
          that I am <em>to write some code</em> and have another human{" "}
          <em>look over it for mistakes</em> grips me with fear.
        </p>
        <p>
          I finish the assignment within the hour but spend more than that time
          going over it again and again, blind to what I&apos;m missing.
        </p>
        <p>
          <em>I&apos;m going to be critiqued on this</em>, is the blind panic
          going through my head.
        </p>
        <p>
          Mistakes are found once I open the pull request, and then I fix them.
          I seethe inwardly. <em>Ugh, you are an idiot!</em> I think to myself.{" "}
          <em>Those were so easy!</em>
        </p>
        <p>
          They were easy, which is why a second pair of eyes helped find them.
        </p>

        <figure className="my-6">
          <Image
            alt="Strawberry streusel."
            className="w-full object-cover"
            height={800}
            src="/writing/on-critique/strawberry-streusel.jpeg"
            width={1200}
          />
          <figcaption className="mt-2 text-sm italic">
            <Clickable
              href="https://food52.com/recipes/54840-nigella-lawson-s-very-smart-strawberry-streusel-cake"
              {...linkProps}
            >
              Strawberry streusel.
            </Clickable>
          </figcaption>
        </figure>

        <p>
          As the internship draws to a close the code reviews get sparser and
          sparser as my presence is either less exciting, or work gets busy, or
          people start to trust me — a little from column A, a little from
          column B, it&apos;s hard to tell. Most people seem generally pleased
          with the work I do and start to leave me to go about my day.
        </p>
        <p>
          My mentor — who had been busy for most of the internship with real
          work and notably absent from my day-to-day — looks over the
          application and gives me a bunch of notes:
        </p>
        <p>
          <em>
            This isn&apos;t going to fly,
          </em>{" "}
          he says.{" "}
          <em>
            Without all of these things done, you&apos;re never going to be able
            to do this as a real job. It looks way too unpolished.
          </em>
        </p>
        <p>
          It is so left-field from the small, incremental advice that thus far
          available that for the first time I&apos;m defiant. Where was this
          critique when it was actionable? Why was I only hearing about it at
          the very end? Why were these small visual tweaks suddenly so important
          that they were preventing an entire career? I don&apos;t push the
          point: I politely write down his points, and on the way home that
          night I throw them in a trash can. I&apos;m upset about it for
          months, but: I get hired to do this stuff as a real job, so.
        </p>

        <hr className="my-6 border-current opacity-20" />

        <p>
          I&apos;m at the bakery Easter weekend and it&apos;s busy. I&apos;m
          making &ldquo;Pearls&rdquo;, the cupcake the bakery is known for that
          has a notoriously challenging meringue icing loaded with coconut
          flakes and topped with a tiny nonpareil. I hate making these cupcakes
          with a passion. Making the icing takes stirring forever manually and
          I&apos;m tired. I&apos;m staring at the clock.
        </p>
        <p>
          <em>I wanna get out of here by 10,</em> I think to myself.
        </p>
        <p>
          The owner of the shop looks over at what I&apos;m doing — icing the
          18th Pearl and packing coconut flakes into it — and says,
          &ldquo;Those aren&apos;t gonna work. Re-do them.&rdquo;
        </p>
        <p>
          A haggard more experienced baker comes over and helps me save the
          three dozen cupcakes I had ruined because I was too caught up in
          finishing to point out that the icing seemed runny. I leave at 11:20
          feeling bad, but also redeemed. At least I fixed it. And people were
          oddly kind through the debacle, as if it was expected to happen, or
          maybe that everyone had made this mistake at one point — they are
          notoriously challenging cupcakes — and as such, they place any blame
          with the lofty idea of the cupcakes in general, as they had done it in
          the past themselves and thus it wasn&apos;t worth taking the time to
          worry over, really.
        </p>
        <p>
          Or maybe not. But I was becoming the queen of midday power naps after
          challenging sessions such as these.
        </p>

        <hr className="my-6 border-current opacity-20" />

        <p>
          The days are becoming whirlwinds of small corrections that are adding
          up to something larger.
        </p>
        <p>
          &ldquo;Just a couple minutes longer,&rdquo; says a baker after testing
          some of my icing.
        </p>
        <p>
          &ldquo;We&apos;d like the background a little darker, but we&apos;re
          loving how things feel like they&apos;re floating,&rdquo; a client
          says.
        </p>
        <p>
          &ldquo;First order of business is to get your site launched,&rdquo; a
          mentor says.
        </p>
        <p>
          &ldquo;So what are you going to work on this next month to get that
          finished?&rdquo; a friend with his own startup asks as I start to get
          distracted.
        </p>

        <figure className="my-6">
          <Image
            alt="Lemon ricotta cake."
            className="w-full object-cover"
            height={800}
            src="/writing/on-critique/1_4nrzd2j99en-bf-dwntwla.png"
            width={1200}
          />
          <figcaption className="mt-2 text-sm italic">
            <Clickable
              href="https://food52.com/recipes/10436-louisa-s-cake"
              {...linkProps}
            >
              Lemon ricotta cake. Ugh so good.
            </Clickable>
          </figcaption>
        </figure>

        <p>
          I start using some of the tips from the bakery in my home baking. I
          buy icing bags, which I had never known how to use before. I realize
          you get richer flavors subbing milk for buttermilk, so I start
          incorporating it into certain recipes. I make scones for the first
          time, which I&apos;ve never made before. A friend and I bake, and I
          direct her for some reason, even though there wasn&apos;t any order
          originally. I just know where everything is.
        </p>
        <p>
          After years of being afraid of critique, of actively avoiding it, of
          hating it when it was given, I find myself surprised to have
          surrounded myself with it, to enjoy it or to be unbothered by it, to
          be improved by it. The critique pokes and prods, but in a good way,
          like the sun telling a small plant, <em>Go this way toward the light.</em>
        </p>

        <hr className="my-6 border-current opacity-20" />

        <p>
          I come back home late one night from studying and stop to chat with the
          night guard. He tells me, &ldquo;You and your husband should have kids
          soon. In my culture, you&apos;d already have kids. Take my advice,
          maybe one more year of fun, but then you should have kids and settle
          down.&rdquo;
        </p>
        <p>
          After months of good critique, advice, of <em>useful, actionable</em>{" "}
          steps that the people I have surrounded myself with have given me to
          improving myself, my craft, my business, my hobbyist skills, I&apos;m
          taken aback by the bad critique.
        </p>
        <p>
          <em>You&apos;re doing it wrong,</em> this person is saying.{" "}
          <em>
            If you don&apos;t do it this way you&apos;ll never be able to be a
            real ______.
          </em>
        </p>
        <p>
          Critique has always been this stalwart entity of good design; code
          reviews, the stalwart of good programming. There are guides about how
          to give good advise, how to critique your students, how to run
          effective code reviews, how to critique your direct reports, and yet
          so, so few on how to take that critique. That advice is and always has
          been immeasurably, frustratingly vague. Buck up kid, you&apos;ll get
          better. The pain you&apos;re feeling you&apos;ll grow hardened to.
          Develop a tough skin, you&apos;re going to need it.
        </p>
        <p>
          Which, if you&apos;ll excuse me, is only useful if the advice being
          given is actually any <em>good</em>.
        </p>
        <p>
          Good critique is painful because it is true. Good critique helps take
          the bad drawings in your sketchbook done around a coffee machine and
          make them better. Good critique can sting because moving yourself
          toward &ldquo;better&rdquo; is a tough process.
        </p>

        <blockquote className="border-l-2 border-current pl-4 italic opacity-80">
          You know vanilla cupcakes are done because the sides are brown and
          there&apos;s no wiggle to them anymore, says Nicole. These need to
          bake a little longer, next time don&apos;t take them out quite so soon.
          Two more minutes.
        </blockquote>

        <p>
          The reason critique is terrifying is because offering your work up for
          critique can be a crapshoot. You don&apos;t know what kind of critique
          you&apos;ll receive. It could be the good critique that moves you
          toward the better you you want to accomplish. It might be the bad
          critique that moves you backward. The hardest thing you will ever do
          is learn to receive critique, and what kind of critique is worth
          taking note of. Half of the game is understanding what you do with it,
          and knowing if the critique was of value. Finding the people who can
          move you forward, give you good critique, is a process you&apos;ll
          continue until you decide you want or need to stand still.
        </p>
        <p>
          I don&apos;t tell him much in response — there&apos;s a lot running
          through my head about how I suspect my family&apos;s culture of
          forcing children out of the house post-school is a must unless you
          want tons of guilt is probably foreign to him, as are the{" "}
          <em>Céad Mile Faílte</em> plaques that plaster our walls and the
          obsession with pretzels and the belief that Sunday mass should only,{" "}
          <em>ever</em>, last an hour. But I don&apos;t want to beleaguer the
          point; he didn&apos;t ask for the advice, so it would be rude to give.
          Instead I tell him it&apos;s time I go to bed, and to have a good
          night.
        </p>
        <p>
          As I take the elevator up I think about the good critique that informs
          my tomorrow, and throw the bad critique in the proverbial trash bin
          with 24 vegan chocolate cupcakes, made without sugar.
        </p>
        <p>
          <em>
            My favorite cake recipes, you say? A toss up between this{" "}
            <Clickable
              href="https://food52.com/recipes/34893-almond-coffee-cake"
              {...linkProps}
            >
              almond coffee cake
            </Clickable>{" "}
            and this{" "}
            <Clickable
              href="https://food52.com/recipes/10436-louisa-s-cake"
              {...linkProps}
            >
              lemon ricotta cake
            </Clickable>
            . When it comes to cupcakes I&apos;m a fan of a good ol&apos;,
            make-your-teeth-ache-it&apos;s-so-sweet{" "}
            <Clickable
              href="https://www.geniuskitchen.com/recipe/magnolia-bakerys-vanilla-birthday-cake-and-frosting-139518"
              {...linkProps}
            >
              Magnolia cake
            </Clickable>
            .
          </em>
        </p>
      </div>
    </WorkLayout>
  );
}
