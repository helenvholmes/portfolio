import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import LayoutStyles from '../../components/Layout.module.css'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

import WiltedYardsStyles from './wilted-yards.module.css'
import HeaderStyles from '../../components/Headers.module.css'

import WiltedLogo from '../../img/work/wiltedYards/wiltedLogo.svg'

import FingersCrossed from '../../img/work/wiltedYards/wiltedFingersCrossed.svg'
import Fireworks from '../../img/work/wiltedYards/wiltedFireworks.svg'
import TV from '../../img/work/wiltedYards/wiltedTV.svg'
import Eye from '../../img/work/wiltedYards/wiltedAllSeeingEye.svg'

export const WiltedYardsTemplate = ({
  moodboardImage,
  collectionImage,
}) => {
  return (
    <div>
      <section className={WiltedYardsStyles.section + ' ' + WiltedYardsStyles.white}>
        <h1 className={HeaderStyles.projectTitle + ' ' + WiltedYardsStyles.title}>
            Wilted <br />
            Yards
        </h1>

        <FingersCrossed className={WiltedYardsStyles.wiltedIllustration} style={{width: 50 + 'px'}}/>

        <div className={WiltedYardsStyles.p1}>
          <p>Wilted Yards is the brainchild of a young entrepreneur in Alexandria, Virginia who needed help creating the aesthetic for her new brand and designing the first run of her products. Inspired by 90s nostalgia and the girl at the post-game you wish you were, the founder had a very strong vision of where she wanted her brand visually to go.</p>

          <p>I ran her through a series of design exercises such as moodboarding on Pinterest and compiling inspirational material to get a clear understanding of the aesthetic she wanted. We then brainstormed over a hundred illustration ideas as possibilities before curating it down to a small series for her first run, launching later this year.</p>
        </div>

        <div className={WiltedYardsStyles.p2}>
          <p>It was an easy project to have fun on—illustrating is always a ball—but it also afforded me my first opportunity to manage a team of other subcontractors to infuse different aesthetics into the brand, which was a learning experience all on its own.</p>

          <table className={WiltedYardsStyles.wiltedTable}>
            <thead>
              <tr>
                <th>The team:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://www.linkedin.com/in/brian-aguirre/" target="_blank" rel="noopener noreferrer">Brian Aguirre</a>, illustrator</td>
                <td><a href="http://margarethayforddesign.com/" target="_blank" rel="noopener noreferrer">Margaret Hayford</a>, illustrator</td>
              </tr>
              <tr>
                <td>Melissa Johannesen, illustrator</td>
                <td><a href="http://www.waltersomerville.com/" target="_blank" rel="noopener noreferrer">Walter Somerville</a>, illustrator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={[WiltedYardsStyles.white, WiltedYardsStyles.moodboard].join(' ')}>
        <p>I encouraged the client to use Pinterest to create moodboards. Together we talked through the images and curated them to get a good sense of the brand.</p>

        <div className={WiltedYardsStyles.moodboardImage}>
          <PreviewCompatibleImage imageInfo={moodboardImage} />
        </div>
      </section>

      <section className={WiltedYardsStyles.wiltedLogoSection}>
        <WiltedLogo className={WiltedYardsStyles.wiltedLogo} />

        <p className={WiltedYardsStyles.logoParagraph}>The logo went through a few iterations before being developed from a neon sign the client saw in her neighborhood.</p>
      </section>

      <section className={WiltedYardsStyles.illustrationsSection + ' ' + WiltedYardsStyles.white}>
        <Fireworks className={WiltedYardsStyles.fireworks} />
        <FingersCrossed className={WiltedYardsStyles.fingersCrossed} />
        <TV className={WiltedYardsStyles.tv} />
        <Eye className={WiltedYardsStyles.eye} />

        <p className={WiltedYardsStyles.illustrationsParagraph}>While we brainstormed over 100 different illustration ideas, we ended up launching the ten that felt like they embodied the brand.</p>

        <div className={WiltedYardsStyles.collection}>
          <PreviewCompatibleImage imageInfo={collectionImage} />
        </div>
      </section>

      <section className={LayoutStyles.citations}>
        <Link to="/work" className={LayoutStyles.workLinks}>See other projects ⟶</Link>
      </section>
    </div>
  )
}

WiltedYardsTemplate.propTypes = {
  moodboardImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  collectionImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const WiltedYards = ({ data }) => {
  return (
    <Layout>
      <WiltedYardsTemplate
        moodboardImage={data.moodboardImage}
        collectionImage={data.collectionImage}
      />
    </Layout>
  )
}

WiltedYards.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WiltedYards

export const WiltedYardsQuery = graphql`
  query {
    moodboardImage: file(
      relativePath: { regex: "/wiltedMoodBoard/" }
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
    collectionImage: file(
      relativePath: { regex: "/wiltedCollection/" }
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