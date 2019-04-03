import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import LayoutStyles from '../../components/Layout.module.css'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

import FastlyFestivalStyles from './fastly-festival.module.css'
import HeaderStyles from '../../components/Headers.module.css'

export const FastlyFestivalTemplate = ({
  moodboardsImage,
  logoAnimation,
  signageImage,
}) => {
  return (
    <div>
      <section className={FastlyFestivalStyles.section + ' ' + FastlyFestivalStyles.white}>
        <h1 className={HeaderStyles.projectTitle + ' ' + FastlyFestivalStyles.title}>
            Fastly <br />
            Festival
        </h1>

        <video
          src="/img/videos/ff_icons_van.mp4"
          videoTitle="Fastly Festival logo animation"
          loop="true"
          autoPlay="autoplay"
          className={FastlyFestivalStyles.cipIllustrationSnippets}
        />

        <div className={FastlyFestivalStyles.p1}>
          <p>In 2018 Fastly asked me to help brand their holiday party so they could end the year with a bang. The team was inspired by music festivals and wanted a solution that worked across their six international locations—everywhere from Tokyo to London.</p>

          <p>We ended up with a versatile brand that included icons and ribbons that could be juxtaposed and played with in a variety of ways to create different signage and swag. The icons mapped to each of the locations so each location’s party felt custom and unique.</p>

          <p>The team included <a href="http://margarethayforddesign.com" target="_blank" rel="noopener noreferrer">Margaret Hayford</a> as animator and <a href="https://www.linkedin.com/in/luke-richardson-636476117/" target="_blank" rel="noopener noreferrer">Luke Richardson</a> for some of the email templates.</p>
        </div>

        <div className={FastlyFestivalStyles.p2}>
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
        </div>
      </section>

      <section className={FastlyFestivalStyles.snippetSections}>
        <div className={FastlyFestivalStyles.styletiles}>
          <PreviewCompatibleImage imageInfo={moodboardsImage} />
        </div>

        <div className={FastlyFestivalStyles.styleTilesParagraph}>
          <p>After sitting down with the client and listening to their inspiration, we created a series of <a href="http://styletil.es/" target="_blank" rel="noopener noreferrer">style tiles</a> to suss out the general vibe, color scheme, and logo style they were after for the event.</p>

          <p>They ended up liking the third the most—went most clearly with the Fastly brand styles, and they liked the jazz-y feel of the red strips.</p>
        </div>
      </section>

      <section className={FastlyFestivalStyles.snippetSections + ' ' + FastlyFestivalStyles.white}>
        <video
          src="/img/videos/ff_festivallogo.mp4"
          videoTitle="Fastly Festival logo animation"
          loop="true"
          autoPlay="autoplay"
          className={FastlyFestivalStyles.logo}
        />

        <video
          src="/img/videos/ff_strips.mp4"
          videoTitle="Fastly Festival logo animation"
          loop="true"
          autoPlay="autoplay"
          className={FastlyFestivalStyles.stripes}
        />

        <div className={FastlyFestivalStyles.logoParagraph}>
          <p>After tightening up the logo that they liked, I sent this to Margaret Hayford to animate, who also generated a series of animations for them to choose from.</p>

          <p>I also had her animate the strips so we could use them as a system, mixing and matching as needed. We left them purposefully subtle as these were used as backgrounds in keynotes and photo booths—a fun surprise when they’d go off.</p>
        </div>

        <video
          src="/img/videos/ff_icons.mp4"
          videoTitle="Fastly Festival logo animation"
          loop="true"
          autoPlay="autoplay"
          className={FastlyFestivalStyles.icons}
        />

        <div className={FastlyFestivalStyles.iconsParagraph}>
          <p>I also designed a series of icons that Margaret then animated. All of the icons were used across all of the Fastly cities, but each city was “assigned” an icon the team felt most represented it in some way, and served as the dominant artwork for the party.</p>

          <p>The client was really pleased with these, as was I. They were just too dang cute. The van, featured at the top of the page, was one that sadly didn’t make the cut but was still delightful in its own way.</p>
        </div>
      </section>

      <section className={FastlyFestivalStyles.snippetSections}>
        <p className={FastlyFestivalStyles.signageParagraph}>Community managers in each location needed to create custom signage for the event—food description cards, flow posters, etc. of each party. We gave the team a series of customizable PDFs that they could send to each location and print, filling out whatever that particular location needed.</p>

        <div className={FastlyFestivalStyles.signage}>
          <PreviewCompatibleImage imageInfo={signageImage} />
        </div>
      </section>

      <section className={LayoutStyles.citations}>
        <video
          src="/img/videos/ff_icons_guitar.mp4"
          videoTitle="Fastly Festival guitar icon animation"
          loop="true"
          autoPlay="autoplay"
          className={FastlyFestivalStyles.guitar}
        />

        <Link to="/work" className={LayoutStyles.workLinks}>See other projects ⟶</Link>
      </section>
    </div>
  )
}

FastlyFestivalTemplate.propTypes = {
  moodboardsImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  logoAnimation: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  signageImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const FastlyFestival = ({ data }) => {
  return (
    <Layout>
      <FastlyFestivalTemplate
        moodboardsImage={data.moodboardsImage}
        logoAnimation={data.logoAnimation}
        signageImage={data.signageImage}
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
    moodboardsImage: file(
      relativePath: { regex: "/festivalMoodboards/" }
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
    signageImage: file(
      relativePath: { regex: "/festivalSignage/" }
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
    logoAnimation: file(
      relativePath: { regex: "/ff_festivallogo/" }
    ) {
      relativePath
    }
  }
`