import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

import WiltedYardsStyles from './wilted-yards.module.css'
import HeaderStyles from '../../components/Headers.module.css'

import FingersCrossed from '../../img/work/wiltedyards/wiltedFingersCrossed.svg'

export const WiltedYardsTemplate = ({
  websiteImage,
  stampsImage,
  buildingImage,
  livingRoomImage,
  spaImage,
  smokingRoomImage,
}) => {
  return (
    <div>
      <section className={WiltedYardsStyles.section + ' ' + WiltedYardsStyles.white}>
        <h1 className={HeaderStyles.projectTitle + ' ' + WiltedYardsStyles.title}>
            Wilted <br />
            Yards
        </h1>

        <FingersCrossed className={WiltedYardsStyles.cipIllustrationSnippets} />

        <div className={WiltedYardsStyles.p1}>
          <p>Wilted Yards is the brainchild of a young entrepreneur in Alexandria, Virginia who needed help creating the aesthetic for her new brand and designing the first run of her products. Inspired by 90s nostalgia and the girl at the post-game you wish you were, the founder had a very strong vision of where she wanted her brand visually to go.</p>

          <p>I ran her through a series of design exercises such as moodboarding on Pinterest and compiling inspirational material to get a clear understanding of the aesthetic she wanted. We then brainstormed over a hundred illustration ideas as possibilities before curating it down to a small series for her first run, launching later this year.</p>
        </div>

        <div className={WiltedYardsStyles.p2}>
          <p>It was an easy project to have fun on—illustrating is always a ball—but it also afforded me my first opportunity to manage a team of other subcontractors to infuse different aesthetics into the brand, which was a learning experience all on its own.</p>

          <table className={WiltedYardsStyles.wiltedTable}>
            <tbody>
              <th>The team:</th>
              <tr>
                <td><a href="https://www.linkedin.com/in/brian-aguirre/" target="_blank">Brian Aguirre</a>, illustrator</td>
                <td><a href="http://margarethayforddesign.com/" target="_blank">Margaret Hayford</a>, illustrator</td>
              </tr>
              <tr>
                <td>Melissa Johannesen, illustrator</td>
                <td>Walter Somerville, illustrator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={[WiltedYardsStyles.section, WiltedYardsStyles.red, WiltedYardsStyles.website].join(' ')}>
        <div className={WiltedYardsStyles.websiteImage}>
          <PreviewCompatibleImage imageInfo={websiteImage} />
        </div>

        <p>The website was designed to work on both desktop and mobile.</p>
      </section>

      <section className={WiltedYardsStyles.stamps + ' ' + WiltedYardsStyles.white}>
        <div className={WiltedYardsStyles.stampsImage}>
          <PreviewCompatibleImage imageInfo={stampsImage} />
        </div>
        <p className={WiltedYardsStyles.stampsParagraph}>The first set of illustrations, inspired by the local landscape of Aspen, were used in a variety of swag items, one of which was stickers die-cut to look like stamps.</p>
      </section>

      <section className={WiltedYardsStyles.section + ' ' + WiltedYardsStyles.white}>
        <div className={WiltedYardsStyles.smokingRoomImage}>
          <PreviewCompatibleImage imageInfo={smokingRoomImage} />
        </div>

        <p className={WiltedYardsStyles.signage}>The second set of illustrations was used for the website, signage, and promotional material. It was a fun opportunity to show off the venue while hiding little bits of Fastly in plain sight.</p>

        <div className={WiltedYardsStyles.spaImage}>
          <PreviewCompatibleImage imageInfo={spaImage} />
        </div>

        <div className={WiltedYardsStyles.buildingImage}>
          <PreviewCompatibleImage imageInfo={buildingImage} />
        </div>

        <div className={WiltedYardsStyles.livingRoomImage}>
          <PreviewCompatibleImage imageInfo={livingRoomImage} />
        </div>
      </section>

      {/* <section className={WiltedYardsStyles.section}>
        <p>My favorite piece of swag to produce was this informational booklet that folded out and included a welcome to attendees, the schedule, and a map of the venue.</p>
      </section> */}
    </div>
  )
}

WiltedYardsTemplate.propTypes = {
  websiteImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  stampsImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  buildingImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  livingRoomImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  spaImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  smokingRoomImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const WiltedYards = ({ data }) => {
  return (
    <Layout>
      <WiltedYardsTemplate
        websiteImage={data.websiteImage}
        stampsImage={data.stampsImage}
        buildingImage={data.buildingImage}
        livingRoomImage={data.livingRoomImage}
        spaImage={data.spaImage}
        smokingRoomImage={data.smokingRoomImage}
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
    websiteImage: file(
      relativePath: { regex: "/cipWebsite/" }
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
    stampsImage: file(
      relativePath: { regex: "/cipStamps/" }
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
    buildingImage: file(
      relativePath: { regex: "/cipBuilding/" }
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
    livingRoomImage: file(
      relativePath: { regex: "/cipLivingRoom/" }
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
    spaImage: file(
      relativePath: { regex: "/cipSpa/" }
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
    smokingRoomImage: file(
      relativePath: { regex: "/cipSmokingRoom/" }
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