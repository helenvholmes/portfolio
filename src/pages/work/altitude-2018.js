import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import LayoutStyles from '../../components/Layout.module.css'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

import Altitude2018Styles from './altitude-2018.module.css'
import HeaderStyles from '../../components/Headers.module.css'

import AltitudeLogo from '../../img/work/altitude2018/altitudeLogo.svg'

export const Altitude2018Template = ({
  londonImage,
  outdoorImage,
  stairsImage,
  stageOneImage,
  stageTwoImage,
  newYorkImage,
  sfImage,
  londonMapImage,
}) => {
  return (
    <div>
      <section className={Altitude2018Styles.section + ' ' + Altitude2018Styles.white}>
        <h1 className={HeaderStyles.projectTitle + ' ' + Altitude2018Styles.title}>
            Altitude <br />
            2018
        </h1>

        <AltitudeLogo className={Altitude2018Styles.cipIllustrationSnippets} />

        <div className={Altitude2018Styles.p1}>
          <p><a href="https://www.fastly.com/" target="_blank" rel="noopener noreferrer">Fastly</a> approached me in 2017 to help them create the design experience for their Altitude conference series, their large annual conference that happens in London, New York, and San Francisco. Altitude is an incredibly important part of the Fastly brand, allowing them to connect with their users and developers, hear from the top engineers in the industry on edge computing, cloud networking, and security, and share the latest developments in their own software.</p>

          <p>While I had done production work and branded conferences before, Altitude was unique in both of these not only from its complexity (happening across three different cities globally) but also its scale. Save a little help from my favorite contractors in production work near the end, the design for all of the swag, websites, signage, speaker templates, and anything else that needed to be done was done by me.</p>
        </div>

        <div className={Altitude2018Styles.p2}>
          <p>In the end we produced:</p>

          <table className={Altitude2018Styles.cipTable}>
            <tbody>
              <tr>
                <td className={Altitude2018Styles.tableNumbers}>3</td>
                <td style={{borderLeft: 5 + 'px solid white'}}>Conferences</td>
                <td className={Altitude2018Styles.tableNumbers}>3</td>
                <td style={{borderLeft: 5 + 'px solid white'}}>Presentation templates for speakers</td>
              </tr>
              <tr>
                <td className={Altitude2018Styles.tableNumbers}>3</td>
                <td style={{borderLeft: 5 + 'px solid white'}}>Brand systems</td>
                <td className={Altitude2018Styles.tableNumbers}>3</td>
                <td style={{borderLeft: 5 + 'px solid white'}}>Keynotes for day-of information</td>
              </tr>
              <tr>
                <td className={Altitude2018Styles.tableNumbers}>4</td>
                <td style={{borderLeft: 5 + 'px solid white'}}>Website designs*</td>
                <td className={Altitude2018Styles.tableNumbers}>142</td>
                <td>Pieces of signage</td>
              </tr>
              <tr>
                <td className={Altitude2018Styles.tableNumbers}>6</td>
                <td>Pieces of custom swag</td>
                <td className={Altitude2018Styles.tableNumbers}>1</td>
                <td>Custom animation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={Altitude2018Styles.snippetSections}>
        <div className={Altitude2018Styles.londonImage}>
          <PreviewCompatibleImage imageInfo={londonImage} />
          <span className={Altitude2018Styles.captions}>Photo from <a href="https://twitter.com/clive_agency/status/1005063916098129920?s=20" target="_blank" rel="noopener noreferrer">@clive_agency</a> of the London event. I provided the wall graphics and the decals for directional signage.</span>
        </div>

        <div className={Altitude2018Styles.londonParagraph}>
          <p>One of the challenging aspects of this project for me was producing large-scale signage. Much of the artwork I produced was to be vinyl die-cut, and the size of a large wall (such as here), or on huge windows facing the street, and required interpreting spec sheets from the venues or 3rd party contractors. Pixel-perfect was a must, as was developing proper annotations for the printer on each piece of artwork that was produced.</p>
        </div>

        <div className={Altitude2018Styles.interestingPieces1}>
          <PreviewCompatibleImage imageInfo={stairsImage} />
          <span className={Altitude2018Styles.captions}>Screenshot of the stairs from the <a href="https://vimeo.com/267641251" target="_blank" rel="noopener noreferrer">official Vimeo recap</a>.</span>
        </div>

        <div className={Altitude2018Styles.interestingPieces2}>
          <PreviewCompatibleImage imageInfo={outdoorImage} />
          <span className={Altitude2018Styles.captions}>Photo from <a href="https://twitter.com/kimmi8/status/986260163135983616?s=20" target="_blank" rel="noopener noreferrer">@kimmi8</a> of the real-time screen at the NYC  event.</span>
        </div>

        <div className={Altitude2018Styles.interestingPiecesParagraph}>
          <p>A number of these pieces were interesting to produce. Some notable pieces produced for various locations included decals on the stairs that showed the history of the HTTP protocol that you could read as you walked up them, some animations and graphics for a real-time video feed that displayed out to the street in New York, and backdrops for Q&As and stages at each of the locations.</p>
        </div>

        <div className={Altitude2018Styles.interestingPieces3}>
          <PreviewCompatibleImage imageInfo={stageOneImage} />
        </div>

        <div className={Altitude2018Styles.interestingPieces4}>
          <PreviewCompatibleImage imageInfo={stageTwoImage} />
          <span className={Altitude2018Styles.captions}>Photos from the <a href="https://www.facebook.com/pg/FastlyEdgeCloud/photos/?tab=album&album_id=1758297984248050" target="_blank" rel="noopener noreferrer">official Fastly Facebook</a> of the London event’s Q&A and main stages.</span>
        </div>
      </section>

      <section className={Altitude2018Styles.snippetSections + ' ' + Altitude2018Styles.white} style={{paddingTop: 0}}>
        <div className={Altitude2018Styles.mapParagraph}>
          <p>I produced custom-created maps for each city, painstakingly created by tracing Google Map tiles—New York, London, and San Francisco. We used these to show the venue, hotel, and after party locations, but mostly they were for fun. Since I was new to New York at the time I ended up using the NY map as a background for my computer for a time.</p>

          <div className={Altitude2018Styles.downloadMaps}>
            <div className={Altitude2018Styles.downloadMap}>
              <PreviewCompatibleImage imageInfo={sfImage} />
              <span className={Altitude2018Styles.captions}>
                San Francisco
              </span>
            </div>

            <div className={Altitude2018Styles.downloadMap}>
              <PreviewCompatibleImage imageInfo={londonMapImage} />
              <span className={Altitude2018Styles.captions}>London</span>
            </div>
          </div>
        </div>

        <div className={Altitude2018Styles.map}>
          <PreviewCompatibleImage imageInfo={newYorkImage} />
          <span className={Altitude2018Styles.captions}>
            New York
          </span>
        </div>
      </section>

      <section className={[Altitude2018Styles.snippetSections, Altitude2018Styles.red, Altitude2018Styles.circuits].join(" ")}>
        <p>Fastly had really liked the way we’d hidden small elements of their brand in plain sight for the CIP Conference, so when creating assets for their Altitude series I did the same. Keeping with Altitude’s theme I created a circuitry pattern, sprinkled with Fastly speedometers, server racks, and their company mascot.</p>
      </section>

      <section className={LayoutStyles.citations}>
        <Link to="/work" className={LayoutStyles.workLinks}>See other projects ⟶</Link>
      </section>
    </div>
  )
}

Altitude2018Template.propTypes = {
  londonImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  outdoorImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  stairsImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  stageOneImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  stageTwoImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  newYorkImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  sfImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  londonMapImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const Altitude2018 = ({ data }) => {
  return (
    <Layout>
      <Altitude2018Template
        londonImage={data.londonImage}
        outdoorImage={data.outdoorImage}
        stairsImage={data.stairsImage}
        stageOneImage={data.stageOneImage}
        stageTwoImage={data.stageTwoImage}
        newYorkImage={data.newYorkImage}
        sfImage={data.sfImage}
        londonMapImage={data.londonMapImage}
      />
    </Layout>
  )
}

Altitude2018.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Altitude2018

export const Altitude2018Query = graphql`
  query {
    londonImage: file(
      relativePath: { regex: "/altitudeLondonLivingRoom/" }
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
    stairsImage: file(
      relativePath: { regex: "/altitudeStairs/" }
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
    outdoorImage: file(
      relativePath: { regex: "/altitudeOutdoorsSpace/" }
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
    stageOneImage: file(
      relativePath: { regex: "/altitudeStage1/" }
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
    stageTwoImage: file(
      relativePath: { regex: "/altitudeStage2/" }
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
    newYorkImage: file(
      relativePath: { regex: "/altitudeNYCMap/" }
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
    sfImage: file(
      relativePath: { regex: "/altitudeSFMap/" }
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
    londonMapImage: file(
      relativePath: { regex: "/altitudeLondonMap/" }
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