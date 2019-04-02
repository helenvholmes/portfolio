import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

import FastlyFestivalStyles from './fastly-festival.module.css'
import HeaderStyles from '../../components/Headers.module.css'

import CIPIllustrationSnippets from '../../img/work/cip/cipIllustrationSnippets.svg'

export const FastlyFestivalTemplate = ({
  websiteImage,
  stampsImage,
  buildingImage,
  livingRoomImage,
  spaImage,
  smokingRoomImage,
}) => {
  return (
    <div>
      <section className={FastlyFestivalStyles.section + ' ' + FastlyFestivalStyles.white}>
        <h1 className={HeaderStyles.projectTitle + ' ' + FastlyFestivalStyles.title}>
            Fastly <br />
            Festival
        </h1>

        <CIPIllustrationSnippets className={FastlyFestivalStyles.cipIllustrationSnippets} />

        <div className={FastlyFestivalStyles.p1}>
          <p>In 2018 Fastly asked me to help brand their holiday party so they could end the year with a bang. The team was inspired by music festivals and wanted a solution that worked across their six international locations—everywhere from Tokyo to London.</p>

          <p>We ended up with a versatile brand that included icons and ribbons that could be juxtaposed and played with in a variety of ways to create different signage and swag. The icons mapped to each of the locations so each location’s party felt custom and unique.</p>

          <p>The team included <a href="http://margarethayforddesign.com" target="_blank" rel="noopener noreferrer">Margaret Hayford</a> as animator and <a href="https://www.linkedin.com/in/luke-richardson-636476117/" target="_blank" rel="noopener noreferrer">Luke Richardson</a> for some of the email templates.</p>
        </div>

        <p>In the end we shipped:</p>

        <table className={FastlyFestivalStyles.cipTable}>
          <tbody>
            <tr>
              <td className={FastlyFestivalStyles.tableNumbers}>1</td>
              <td style={{borderLeft: 5 + 'px solid white'}}>Branding system</td>
              <td className={FastlyFestivalStyles.tableNumbers}>8</td>
              <td style={{borderLeft: 5 + 'px solid white'}}>Animations</td>
            </tr>
            <tr>
              <td className={FastlyFestivalStyles.tableNumbers}>1</td>
              <td style={{borderLeft: 5 + 'px solid white'}}>Keynote file for announcement</td>
              <td className={FastlyFestivalStyles.tableNumbers}>3</td>
              <td style={{borderLeft: 5 + 'px solid white'}}>Pieces of customizeable signagee for the event and venue(s)</td>
            </tr>
            <tr>
              <td className={FastlyFestivalStyles.tableNumbers}>6</td>
              <td style={{borderLeft: 5 + 'px solid white'}}>Email teemplates, designed and coded</td>
              <td className={FastlyFestivalStyles.tableNumbers}>1</td>
              <td>Photobooth backdrop</td>
            </tr>
            <tr>
              <td className={FastlyFestivalStyles.tableNumbers}>7</td>
              <td>Custom illustrations</td>
            </tr>
            <tr>
              <td className={FastlyFestivalStyles.tableNumbers}>2</td>
              <td>Pieces of custom swag</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={FastlyFestivalStyles.section}>
        <div className={FastlyFestivalStyles.styleTilesParagraph}>
          <p>After sitting down with the client and listening to their inspiration, we created a series of <a href="http://styletil.es/" target="_blank" rel="noopener noreferrer">style tiles</a> to suss out the general vibe, color scheme, and logo style they were after for the event.</p>

          <p>They ended up liking the third the most—went most clearly with the Fastly brand styles, and they liked the jazz-y feel of the red strips.</p>
        </div>
      </section>

      <section className={FastlyFestivalStyles.section + ' ' + FastlyFestivalStyles.white}>
        <div className={FastlyFestivalStyles.signage}>
          <p>After tightening up the logo that they liked, I sent this to Margaret Hayford to animate, who also generated a series of animations for them to choose from.</p>

          <p>I also had her animate the strips so we could use them as a system, mixing and matching as needed. We left them purposefully subtle as these were used as backgrounds in keynotes and photo booths—a fun surprise when they’d go off.</p>
        </div>

        <div className={FastlyFestivalStyles.p2}>
          <p>I also designed a series of icons that Margaret then animated. All of the icons were used across all of the Fastly cities, but each city was “assigned” an icon the team felt most represented it in some way, and served as the dominant artwork for the party.</p>

          <p>The client was really pleased with these, as was I. They were just too dang cute. The van, featured at the top of the page, was one that sadly didn’t make the cut but was still delightful in its own way.</p>
        </div>
      </section>

      <section className={FastlyFestivalStyles.section + ' ' + FastlyFestivalStyles.white}>
        <p>Community managers in each location needed to create custom signage for the event—food description cards, flow posters, etc. of each party. We gave the team a series of customizable PDFs that they could send to each location and print, filling out whatever that particular location needed.</p>
      </section>
    </div>
  )
}

FastlyFestivalTemplate.propTypes = {
  websiteImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  stampsImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  buildingImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  livingRoomImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  spaImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  smokingRoomImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const FastlyFestival = ({ data }) => {
  return (
    <Layout>
      <FastlyFestivalTemplate
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

FastlyFestival.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FastlyFestival

export const FastlyFestivalQuery = graphql`
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