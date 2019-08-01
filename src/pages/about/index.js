import React from 'react'
import { Link, graphql } from 'gatsby'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import AboutStyles from './about.module.css'

import Logo from '../../img/logo.svg'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Header />

      <div className={AboutStyles.headshot}>
        <PreviewCompatibleImage imageInfo={data.headshot} />
      </div>

      <div className={[AboutStyles.section, AboutStyles.white].join(" ")} style={{paddingBottom: 0}}>
        <p className={AboutStyles.dropCap}>
          As a designer/developer hybrid I have nine years of industry experience. I’ve worked in finance, in advertising, and in tech. I’m currently looking for full time employment in New York City. If you have a position you feel I would be good for, please reach out to me at <a href="mailto:sayhi@helenvholmes.com">sayhi@helenvholmes.com</a>. (I’m also fine with you just saying hey.)
        </p>
      </div>

      <section className={[AboutStyles.section, AboutStyles.white].join(" ")}>
        <h3 className={AboutStyles.full} id="professional">Professional Accomplishments</h3>

        <div>
          <p>I started my career at a small design shop a former professor started. It was flattering to be asked to be the first employee, and it gave me my first glimpse into what it was like working at a design firm and running your own business. When later I would start my own I shifted through my memories of this place to remember how to present to clients, how they handled the struggles they had, and tried to learn from the mistakes they made.</p>

          <p>For my next position I prioritized being allowed to code and ended up with a small military contractor. Here I was thrown in the deep end—I quickly had to learn how to install developer environments, work within them, and how to solve my own roadblocks. As the only designer, I had to advocate for design as a concept—its importance, its relevance, its history, its concepts. I had to learn to talk to developers and find equal ground in understanding the problems we both faced in making a product come to life.</p>
        </div>

        <div>
          <p>I worked with a design temp agency where I did a lot of production print work, mostly for clients like the AARP. While not glamorous it taught me the ins and outs of preparing files for printers , pixel-perfect precision, and empathy for users that were very different than myself.</p>

          <p>I started to venture out into the D.C. tech space to find other women learning and coding professionally. I became a founding member of the <a href="https://www.womenwhocode.com/" target="_blank" rel="noopener noreferrer">Women Who Code</a> D.C. chapter.</p>

          <p>I moved to Central Virginia with <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer">Capital One</a> on their design team as a prototyper. My time there showed me to what it was like to work at a huge, corporate company with a massive hierarchy. I expanded my engineering boundaries: I built small hardware prototypes, prototypes of user flows for research, and webapps, executing on projects that had high visibility among higher ups in the company.</p>
        </div>

        <div>
          <p>In 2015 I began <a href="#speaking">speaking</a> at conferences. I traveled the globe about design and technology—actionable advice for developers on making their codebases more accessible, graphic design history and typography, and progressive enhancement loading techniques for webfonts.</p>

          <p>I moved to <a href="https://www.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">Mozilla</a> where I worked for the <a href="https://developer.mozilla.org/en-US/docs/Tools" target="_blank" rel="noopener noreferrer">Developer Tools Team</a> on <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel="noopener noreferrer">Firefox</a>. I designed the initial tooling for <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noopener noreferrer">CSS Grid</a>, helped in the <a href="https://hacks.mozilla.org/2016/09/introducing-debugger-html/" target="_blank" rel="noopener noreferrer">Debugger redesign</a>, redesigned the <a href="https://hacks.mozilla.org/2016/11/new-responsive-design-mode-rdm-lands-in-firefox-dev-tools/" target="_blank" rel="noopener noreferrer">Responsive Design Mode</a>, among other things which I’ve written about <Link to="/work/designing-developer-tools">here</Link>.</p>

          <p>In 2017 I went freelance. I’ve learned about taxes, managing subcontractors, presenting to clients, moving projects to completion, getting clients onboard, working for family&friends, and designing in lots of interesting and atypical scenarios. I’ve branded companies, designed collateral for conferences, designed iPhone apps, and of course, designed and built websites. I got to work with big companies with big names I could have only dreamed of having on my resume. I've learned a lot about how to position and set up expectations, and manage client relations when things go well and when they go south.</p>
        </div>
      </section>

      <section className={AboutStyles.keyMoments}>
        <h3 className={AboutStyles.full}>Key Moments</h3>

        <div className={AboutStyles.keyMoment1}>Sole creator of a webapp shown to the CEO directly by my VP that secured additional funding to the design team<a href="#citation-1">¹</a></div>

        <div className={AboutStyles.keyMoment2}>Branding a company’s entire yearly conference<a href="#citation-2">²</a></div>

        <div className={AboutStyles.keyMoment3}>My conference work being an inspiration to others, notably Font Style Matcher<a href="#citation-3">³</a></div>

        <div className={AboutStyles.keyMoment4}>Designing the initial tooling for CSS Grid, subsequently studied by all other major browsers for their own implementations<a href="#citation-4">⁴</a></div>

        <div className={AboutStyles.keyMomentCitations}>
          <span id="citation-1">¹ Rich Fairbanks, Capital One</span> <br />
          <span id="citation-2">² Altitude 2018</span> <br />
          <span id="citation-3">³ Monica Dinescu, Web Fonts, boy, I don’t know</span> <br />
          <span id="citation-4">⁴ CSS Grid and Grid Highlighter Now in Firefox Developers Edition</span> <br />
        </div>
      </section>

      <section className={AboutStyles.section}>
        <div>
          <h3 id="elsewhere">Interviews</h3>
          <ul>
            <li><a href="https://interfacelovers.com/interviews/helen-holmes" target="_blank" rel="noopener noreferrer">Interface Lovers interview</a>, March 2019</li>
            <li><a href="https://design-work.simplecast.com/episodes/ep05-helen-v-holmes-on-why-your-grandma-f31cf374" target="_blank" rel="noopener noreferrer">DovetailX interview with Kate Darby</a>, October 2018</li>
            <li><a href="https://devchat.tv/js-jabber/mjs-025-helen-v-holmes/" target="_blank" rel="noopener noreferrer">JSJabber Interview</a>, July 2017</li>
            <li><a href="http://inspect.fm/episodes/08/" target="_blank" rel="noopener noreferrer">InspectFM Interview</a>, May 2017</li>
            <li><a href="https://simplecast.com/s/71dcf40a" target="_blank" rel="noopener noreferrer">Friends Talk Frontend Interview</a>, December 2016</li>
            <li><a href="https://spec.fm/podcasts/toolsday/105715" target="_blank" rel="noopener noreferrer">Toolsday Interview</a>, June 2016</li>
            <li><a href="https://player.fm/series/viewsources-podcast/client-side-mvcs" target="_blank" rel="noopener noreferrer">Viewsourc.es Interview</a>, July 2015</li>
          </ul>
        </div>

        <div>
          <h3>Articles</h3>
          <ul>
            <li><a href="https://meowni.ca/font-style-matcher/" target="_blank" rel="noopener noreferrer">Font-style-matcher</a>, December 2016</li>
            <li><a href="https://meowni.ca/posts/web-fonts/" target="_blank" rel="noopener noreferrer">Webfonts, boy I don’t know</a>, November 2016</li>
            <li><a href="https://www.natashatherobot.com/i-heart-storyboards-nibs/" target="_blank" rel="noopener noreferrer">I Heart Storyboards + Nibs</a>, March 2016</li>
          </ul>

          <h3>Featured</h3>
          <ul>
            <li><a href="https://www.designernews.co/stories/51687-site-design-helen-v-holmes-designer-" target="_blank" rel="noopener noreferrer">Designer News</a>, August 2017</li>
            <li><a href="https://www.typewolf.com/site-of-the-day/helen-v-holmes" target="_blank" rel="noopener noreferrer">Typewolf</a>, July 2015</li>
            <li><a href="http://unmatchedstyle.com/gallery/helen-v-holmes.php" target="_blank" rel="noopener noreferrer">Unmatchedstyle</a>, July 2015</li>
          </ul>
        </div>

        <div>
          <h3 id="speaking">Speaking</h3>
          <ul>
            <li><a href="https://jsconf.co/#home" target="_blank" rel="noopener noreferrer">JSConf Columbia</a>, Medellín, November 2017</li>
            <li><a href="https://academy.realm.io/posts/tryswift-helen-holmes-10-ways-designers-swift-codebase/" target="_blank" rel="noopener noreferrer">try!Swift</a>, Tokyo, March 2016</li>
            <li><a href="https://revolutionconf.com/" target="_blank" rel="noopener noreferrer">RevolutionConf</a>, June 2017</li>
            <li><a href="https://viewsourceconf.org/berlin-2016/#typography_summary" target="_blank" rel="noopener noreferrer">Viewsource Conf</a>, September 2016</li>
            <li><a href="https://www.youtube.com/watch?v=VFU1r8uNtQk" target="_blank" rel="noopener noreferrer">BrazilJS</a>, August 2016</li>
            <li><a href="https://2015.cascadiajs.com/" target="_blank" rel="noopener noreferrer">CascadiaJS</a>, July 2015</li>
          </ul>
        </div>
      </section>

      <section className={[AboutStyles.section, AboutStyles.white].join(" ")}>
        <div className={AboutStyles.personalPassions}>
          <h3 id="personal">Personal Values & Passions</h3>

          <p>My passions outside of design are food, sewing, and reading.</p>

          <p>In 2014 I moved into my first apartment. I had complete domain over my kitchen, and I was determined to make the most of it out of it.</p>

          <p>Charlottesville has a strong farming and food culture, boasting more restaurants per capita than New York City. I learn to bake new things, cook new meals, and source my ingredients differently. I began researching where my food came from: the classic <a href="https://www.goodreads.com/book/show/315425.In_Defense_of_Food" target="_blank" rel="noopener noreferrer"><em>In Defense of Food</em></a> by Michael Pollan, the more bohemian <a href="https://www.goodreads.com/book/show/25460.Animal_Vegetable_Miracle" target="_blank" rel="noopener noreferrer"><em>Animal, Vegetable, Miracle</em></a> by Barbara Kingsolver, <a href="https://www.goodreads.com/book/show/30517560-food-fights-culture-wars" target="_blank" rel="noopener noreferrer"><em>Food Fights and Culture Wars</em></a> by Tom Nealon, <a href="https://www.goodreads.com/book/show/13498683-why-calories-count?ac=1" target="_blank" rel="noopener noreferrer"><em>Why Calories Count</em></a> by Nestle and Nesheim. I worked part-time in a local bakery to learn the tricks of the trade, which I wrote about in my article <Link to="/writing/on-critique">On Critique</Link>. These days I am trying to figure out what my own food culture is while baking bread from starter and brewing my own kombucha.</p>

          <p>My interest in fashion is relatively new. In January I began Overdressed by Elizabeth Cline. I became so riled up by the abuses the mainstream fast fashion industry has on our environment, our workforce, and our wallets that I took the sewing machine I had purchased, five months prior, out of its box. (Before this, I had been too scared of it to use it.)</p>

          <p>Since then I've used Youtube to teach myself how to put darts into pants, taken in blazers, heightened hemlines, and sewn myself a winter puffer out of a recycled sleeping bag (in between some less exciting failures). Learning to sew has given me new perspective when buying clothing and confidence in my own ability to alter my own clothing to suit my own personal style better. I am attempting to only buy locally, make, or thrift my clothing in 2019 and intend to do a financial breakdown of how this goes at the end of the year.</p>

          <p>Beyond these things I enjoy reading. Golden Krishna's <a href="https://www.goodreads.com/book/show/22758923-the-best-interface-is-no-interface" target="_blank" rel="noopener noreferrer"><em>The Best Interface is No Interface</em></a> best describes the North Star I strive for as a designer. Nir Eyal's <a href="https://www.goodreads.com/book/show/25359653-hooked" target="_blank" rel="noopener noreferrer"><em>Hooked</em></a> provides the opposite. Alain de Botton's <a href="https://www.goodreads.com/book/show/18282869-the-news" target="_blank" rel="noopener noreferrer"><em>The News: A Manual</em></a>, my desire to understand the world around me less through the news app on my phone and more via longford literature. <a href="https://www.goodreads.com/book/show/36480951-the-view-from-flyover-country" target="_blank" rel="noopener noreferrer"><em>The View from Flyover Country</em></a> by Sarah Kendzior the country surrounding where I spent summers growing up. <a href="https://www.goodreads.com/book/show/32191677-american-fire" target="_blank" rel="noopener noreferrer"><em>American Fire: Love, Arson, and Life in a Vanishing Land</em></a> by Monica Hesse and <a href="https://www.goodreads.com/book/show/27161156-hillbilly-elegy" target="_blank" rel="noopener noreferrer"><em>Hillbilly Elegy: A Memoir of a Family and Culture in Crisis</em></a> by J.D. Vance, the people I hope wish to keep in mind as our users.</p>

          <div className={AboutStyles.logo}>
            <Logo />
          </div>
        </div>

        <div className={AboutStyles.imageGroupOne}>
          <div className={AboutStyles.passionImage}>
            <PreviewCompatibleImage imageInfo={data.streusel} />
          </div>
          <div className={AboutStyles.passionImage}>
            <PreviewCompatibleImage imageInfo={data.ricotta} />
          </div>
          <span>Strawberry streusel and lemon ricotta, respectively.</span>
        </div>

        <div className={AboutStyles.imageGroupTwo}>
          <div className={AboutStyles.passionImage}>
            <PreviewCompatibleImage imageInfo={data.jacketfront} />
          </div>
          <div className={AboutStyles.passionImage}>
            <PreviewCompatibleImage imageInfo={data.jacketback} />
          </div>
          <span>New winter coat for a new city.</span>
        </div>

      </section>
    </Layout>
  )
}

export const query = graphql`
  query AboutPageQuery {
    headshot: file(
      relativePath: { regex: "/about-headshot/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 2048
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    streusel: file(
      relativePath: { regex: "/strawberry-streusel/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 2048
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ricotta: file(
      relativePath: { regex: "/ricotta/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 2048
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jacketfront: file(
      relativePath: { regex: "/jacketfront/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 2048
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jacketback: file(
      relativePath: { regex: "/jacketback/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 2048
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
