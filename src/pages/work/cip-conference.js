import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

import CIPConferenceStyles from './cip-conference.module.css'
import HeaderStyles from '../../components/Headers.module.css'

import CIPIllustrationSnippets from '../../img/work/cip/cipIllustrationSnippets.svg'

export const CIPConferenceTemplate = ({
  websiteImage,
  stampsImage,
  buildingImage,
  livingRoomImage,
  spaImage,
  smokingRoomImage,
}) => {
  return (
    <div>
      <section className={CIPConferenceStyles.section + ' ' + CIPConferenceStyles.white}>
        <h1 className={HeaderStyles.projectTitle + ' ' + CIPConferenceStyles.title}>Fastly’s <br />
            Customer <br />
            Insights Panel
        </h1>

        <CIPIllustrationSnippets className={CIPConferenceStyles.cipIllustrationSnippets} />

        <p className={CIPConferenceStyles.p1}>Fastly approached me in 2017 to help them rebrand their Customer Insights Panel, a small conference that disseminated information about their product and allowed customers a chance to work with the key players on their team in shaping their product’s future.</p>

        <p className={CIPConferenceStyles.p2}>We settled on a series of illustrations inspired by the conference venue (a beautiful hotel in Denver that had a smoking-room-post-dinner sort of aesthetic) and by the local landscape to create the conference brand, as skiing was on the agenda after the conference. Little easter eggs appeared throughout—server stacks and speedometers appeared in places one wouldn’t expect.</p>

        <p>In the end we shipped:</p>

        <table className={CIPConferenceStyles.cipTable}>
          <tbody>
            <tr>
              <td className={CIPConferenceStyles.tableNumbers}>1</td>
              <td style={{borderLeft: 5 + 'px solid white'}}>Branding system</td>
              <td className={CIPConferenceStyles.tableNumbers}>1</td>
              <td>Presentation template for presenters</td>
            </tr>
            <tr>
              <td className={CIPConferenceStyles.tableNumbers}>1</td>
              <td>Website*</td>
              <td className={CIPConferenceStyles.tableNumbers}>19</td>
              <td>Different signage designs for the event and venue</td>
            </tr>
            <tr>
              <td className={CIPConferenceStyles.tableNumbers}>1</td>
              <td>Printed invitation</td>
              <td className={CIPConferenceStyles.tableNumbers}>3</td>
              <td>Custom giveaways for the event</td>
            </tr>
            <tr>
              <td className={CIPConferenceStyles.tableNumbers}>8</td>
              <td>Custom illustrations</td>
            </tr>
            <tr>
              <td className={CIPConferenceStyles.tableNumbers}>1</td>
              <td>Informational presentation</td>
            </tr>
          </tbody>
        </table>

        <em className={CIPConferenceStyles.cipCaveat}>* I was responsible for the design—Fastly’s internal developer team handled the build-out.</em>
      </section>

      <section className={[CIPConferenceStyles.section, CIPConferenceStyles.red, CIPConferenceStyles.website].join(' ')}>
        <div className={CIPConferenceStyles.websiteImage}>
          <PreviewCompatibleImage imageInfo={websiteImage} />
        </div>

        <p>The website was designed to work on both desktop and mobile.</p>
      </section>

      <section className={CIPConferenceStyles.stamps + ' ' + CIPConferenceStyles.white}>
        <div className={CIPConferenceStyles.stampsImage}>
          <PreviewCompatibleImage imageInfo={stampsImage} />
        </div>
        <p className={CIPConferenceStyles.stampsParagraph}>The first set of illustrations, inspired by the local landscape of Aspen, were used in a variety of swag items, one of which was stickers die-cut to look like stamps.</p>
      </section>

      <section className={CIPConferenceStyles.section + ' ' + CIPConferenceStyles.white}>
        <div className={CIPConferenceStyles.smokingRoomImage}>
          <PreviewCompatibleImage imageInfo={smokingRoomImage} />
        </div>

        <p className={CIPConferenceStyles.signage}>The second set of illustrations was used for the website, signage, and promotional material. It was a fun opportunity to show off the venue while hiding little bits of Fastly in plain sight.</p>

        <div className={CIPConferenceStyles.spaImage}>
          <PreviewCompatibleImage imageInfo={spaImage} />
        </div>

        <div className={CIPConferenceStyles.buildingImage}>
          <PreviewCompatibleImage imageInfo={buildingImage} />
        </div>

        <div className={CIPConferenceStyles.livingRoomImage}>
          <PreviewCompatibleImage imageInfo={livingRoomImage} />
        </div>
      </section>

      {/* <section className={CIPConferenceStyles.section}>
        <p>My favorite piece of swag to produce was this informational booklet that folded out and included a welcome to attendees, the schedule, and a map of the venue.</p>
      </section> */}
    </div>
  )
}

CIPConferenceTemplate.propTypes = {
  websiteImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  stampsImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  buildingImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  livingRoomImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  spaImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  smokingRoomImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const CIPConference = ({ data }) => {
  return (
    <Layout>
      <CIPConferenceTemplate
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

CIPConference.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CIPConference

export const CIPConferenceQuery = graphql`
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