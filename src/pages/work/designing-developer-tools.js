import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

import Layout from '../../components/Layout'
import DesigningDevtoolsStyles from './designing-developer-tools.module.css'
import HeaderStyles from '../../components/Headers.module.css'
import DevtoolsIcons from '../../img/work/designingDeveloperTools/devtoolsIcons.svg'

export const DesigningDeveloperToolsTemplate = ({
  cssGridImage,
  rdmImage,
  fredImage,
}) => {
  return (
    <div>
      <section className={DesigningDevtoolsStyles.section + ' ' + DesigningDevtoolsStyles.white}>
        <h1 className={HeaderStyles.projectTitle + ' ' + DesigningDevtoolsStyles.title}>
            Designing <br />
            Developer Tools
        </h1>

        <div className={DesigningDevtoolsStyles.p1}>
          <p>In the Fall of 2015 I joined the <a href="https://developer.mozilla.org/en-US/docs/Tools" target="_blank" rel="noopener noreferrer">Developer Tools team</a> at <a href="https://www.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">Mozilla</a> <a href="https://www.mozilla.org/en-US/firefox/" target="_blank" rel="noopener noreferrer">Firefox</a>. It was a whirlwind of learning about the complexities of browsers, developer tooling, the people writing our web specs, and open source community. </p>

          <p>As lead (and only) designer on the team it was a challenging adjustment to the slow and meticulous speed of design necessitated by a product used by millions of people worldwide, even if I was managing the design of there tools used by the small subset of people who build websites as a hobby or for a living. I made a lot of mistakes, got a very unique look into how people use their browsers and their computers, and learned a great deal about how passionate people are about the fox program on their desktop.</p>
        </div>

        <div className={DesigningDevtoolsStyles.p2}>
          <p>In my time at Firefox I shipped new color palettes for the Developer Tools, redesigned the panel icons, designed the <a href="https://hacks.mozilla.org/2016/12/css-grid-and-grid-highlighter-now-in-firefox-developer-edition/" target="_blank" rel="noopener noreferrer">first iteration of CSS Grid tooling</a>, redesigned the <a href="https://hacks.mozilla.org/2016/11/new-responsive-design-mode-rdm-lands-in-firefox-dev-tools/" target="_blank" rel="noopener noreferrer">Responsive Design Mode</a>, and redesigned the Debugger*, in addition to consulting the developers and brainstorming numerous small usability enhancements. I assisted the User Research team as a fly on the wall for their research on <a href="https://blog.mozilla.org/ux/2015/04/task-continuity/" target="_blank" rel="noopener noreferrer">task continuity</a>, spoke at <a href="https://viewsourceconf.org/berlin-2016/#typography_summary" target="_blank" rel="noopener noreferrer">ViewSourc.es</a> thanks to the community team, and facilitated a <a href="https://twitter.com/firefox/status/800738574555578368" target="_blank" rel="noopener noreferrer">social media campaign</a> as an illustrator.</p>

          <em>* While I made some small commits in the Firefox codebase, I primarily contributed to these projects as a designer, not as a developer.</em>
        </div>
      </section>

      <section className={DesigningDevtoolsStyles.cssGrid}>
        <div className={DesigningDevtoolsStyles.cssGridImage}>
          <a href="https://hacks.mozilla.org/2016/12/css-grid-and-grid-highlighter-now-in-firefox-developer-edition/" target="_blank" rel="noopener noreferrer">
            <PreviewCompatibleImage imageInfo={cssGridImage} />
          </a>
        </div>

        <div className={DesigningDevtoolsStyles.cssGridText}>
          <p>As part of my job I designed and wrote spec guidelines for developers to follow as we researched and coded new features. These would operate as living specs on something like <a href="https://www.invisionapp.com/" target="_blank" rel="noopener noreferrer">Invision</a> before being codified via git commits and an article on the Mozilla Hacks blog.</p>

          <p>I worked with fellow Mozillians to design tooling for CSS Grid, which has been iterated on and is still in use today. Of all the things I accomplished at Firefox this is by far the most exciting—as a designer, CSS Grid is really changing the way I write CSS, so I was very happy to be a part of creating developer tools for it. You can read the Hacks article <a href="https://hacks.mozilla.org/2016/12/css-grid-and-grid-highlighter-now-in-firefox-developer-edition/" target="_blank" rel="noopener noreferrer">here.</a></p>
        </div>
      </section>

      <section className={DesigningDevtoolsStyles.iconsSection + ' ' + DesigningDevtoolsStyles.white}>
        <div className={DesigningDevtoolsStyles.iconsParagraph}>
          <p>Redesigning icons for the developer tools proved more challenging than I thought it would be. I had expected it to be simple: design them as vectors in Illustrator, export them as SVGs and then load them in the codebase: done. Quickly however the team noticed the icons appeared blurry at the small sizes they appear at within the browser, even on our 300dpi MacBook Pros. It turned out they needed to be <a href="https://helpx.adobe.com/illustrator/using/pixel-perfect.html"  target="_blank" rel="noopener noreferrer"><em>pixel-snapped</em></a>, a process of aligning color data exactly within the grid computers use to display pixels. This put me literally back at the drawing board to modify the icons so that this was possible.</p>

          <p>I ultimately learned a lot about Adobe Illustrator and SVGs in the process and some of my other small projects (such as the This Week in Hardware interactive illustration) are thanks to the things I learned designing these very little icons. A big thanks to my colleague <a href="http://www.bryanbell.com/tagged/Icons"  target="_blank" rel="noopener noreferrer">Bryan Bell</a> for the help with this work. The final set contained 54 icons.</p>
        </div>

        <div className={DesigningDevtoolsStyles.icons}>
          <DevtoolsIcons />
        </div>
      </section>

      <section className={DesigningDevtoolsStyles.rdmDebuggerSection}>
        <p className={DesigningDevtoolsStyles.rdmParagraph}>During my time at Firefox I also redesigned the Responsive Design Mode in the Developer Tools, which allows developers to mock up mobile environments on websites. With 77% of Americans carrying a smartphone in their pockets as of 2018<Link to="#citations">¹</Link>, the need for these tools to grow and adapt to a changing marketplace is becoming more and more vital—so I was glad I got to work on and ship this.</p>

        <p className={DesigningDevtoolsStyles.debuggerParagraph}>I also worked closely with my colleagues <a href="https://jlongster.com/"  target="_blank" rel="noopener noreferrer">James Long</a> and <a href="https://github.com/jasonlaster"  target="_blank" rel="noopener noreferrer">Jason Laster</a> to redesign the Debugger. While I feel my own contributions to this project were small in comparison to the projects above, this ended up being a great case study in how the team could set up codebases so that stylistic and visual changes could be made more easily. The project is nearing 5k commits at this point and has 4,309 stars.</p>

        <div className={DesigningDevtoolsStyles.rdmDebuggerImage}>
          <PreviewCompatibleImage imageInfo={rdmImage} className={DesigningDevtoolsStyles.icons} />
        </div>
      </section>

      <section className={DesigningDevtoolsStyles.mediaCampaignSection + ' ' + DesigningDevtoolsStyles.white}>
        <div className={DesigningDevtoolsStyles.socialParagraph}>
          <p>One of the wilder things I got to work on at Firefox was a social media campaign run by the mysterious humans behind <a href="https://twitter.com/firefox" target="_blank" rel="noopener noreferrer">@Firefox</a>, a handle with over 1million followers. I sat down with them for a day to run a “Twitter takeover” where we polled followers for an internet mascot to turn into a sticker. Besides the usual inappropriate nonsense one might get on Twitter we got some hilarious suggestions, such as: A complicated pizza. A flying tesseract. A foxdragon.</p>

          <p>Fred, our dragon, won the day. I drew him breathing wifi fire, because he is after all, a mascot for the internet. The social media team very happily met their goals for the quarter. I’m not saying I had anything to do with it, but I am saying Fred might.</p>
        </div>

        <div className={DesigningDevtoolsStyles.socialImagery}>
          <PreviewCompatibleImage imageInfo={fredImage} className={DesigningDevtoolsStyles.icons} />
        </div>
      </section>
    </div>
  )
}

DesigningDeveloperToolsTemplate.propTypes = {
  cssGridImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  rdmImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fredImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const DesigningDeveloperTools = ({ data }) => {
  return (
    <Layout>
      <DesigningDeveloperToolsTemplate
        cssGridImage={data.cssGridImage}
        rdmImage={data.rdmImage}
        fredImage={data.fredImage}
      />
    </Layout>
  )
}

DesigningDeveloperTools.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DesigningDeveloperTools

export const DesigningDeveloperToolsQuery = graphql`
  query {
    cssGridImage: file(
      relativePath: { regex: "/cssGrid/" }
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
    rdmImage: file(
      relativePath: { regex: "/rdmReleaseImage/" }
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
    fredImage: file(
      relativePath: { regex: "/fredPSD/" }
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