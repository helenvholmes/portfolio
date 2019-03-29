import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

import Layout from '../../components/Layout'
import DesigningDevtoolsStyles from './designing-developer-tools.module.css'
import HeaderStyles from '../../components/Headers.module.css'

export const DesigningDeveloperToolsTemplate = ({
  moodboardImage,
  collectionImage,
}) => {
  return (
    <div>
      <section className={DesigningDevtoolsStyles.section + ' ' + DesigningDevtoolsStyles.white}>
        <h1 className={HeaderStyles.projectTitle + ' ' + DesigningDevtoolsStyles.title}>
            Designing <br />
            Developer Tools
        </h1>

        <div className={DesigningDevtoolsStyles.p1}>
          <p>Wilted Yards is the brainchild of a young entrepreneur in Alexandria, Virginia who needed help creating the aesthetic for her new brand and designing the first run of her products. Inspired by 90s nostalgia and the girl at the post-game you wish you were, the founder had a very strong vision of where she wanted her brand visually to go.</p>

          <p>I ran her through a series of design exercises such as moodboarding on Pinterest and compiling inspirational material to get a clear understanding of the aesthetic she wanted. We then brainstormed over a hundred illustration ideas as possibilities before curating it down to a small series for her first run, launching later this year.</p>
        </div>

        <div className={DesigningDevtoolsStyles.p2}>
          <p>It was an easy project to have fun on—illustrating is always a ball—but it also afforded me my first opportunity to manage a team of other subcontractors to infuse different aesthetics into the brand, which was a learning experience all on its own.</p>

          <table className={DesigningDevtoolsStyles.wiltedTable}>
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

      <section className={[DesigningDevtoolsStyles.white, DesigningDevtoolsStyles.moodboard].join(' ')}>
        <p>I encouraged the client to use Pinterest to create moodboards. Together we talked through the images and curated them to get a good sense of the brand.</p>

        <div className={DesigningDevtoolsStyles.moodboardImage}>
        </div>
      </section>

      <section className={DesigningDevtoolsStyles.wiltedLogoSection}>

        <p className={DesigningDevtoolsStyles.logoParagraph}>The logo went through a few iterations before being developed from a neon sign the client saw in her neighborhood.</p>
      </section>

      <section className={DesigningDevtoolsStyles.illustrationsSection + ' ' + DesigningDevtoolsStyles.white}>

        <p className={DesigningDevtoolsStyles.illustrationsParagraph}>While we brainstormed over 100 different illustration ideas, we ended up launching the ten that felt like they embodied the brand.</p>

        <div className={DesigningDevtoolsStyles.collection}>
          <PreviewCompatibleImage imageInfo={collectionImage} />
        </div>
      </section>
    </div>
  )
}

DesigningDeveloperToolsTemplate.propTypes = {
  moodboardImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  collectionImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const DesigningDeveloperTools = ({ data }) => {
  return (
    <Layout>
      <DesigningDeveloperToolsTemplate
        moodboardImage={data.moodboardImage}
        collectionImage={data.collectionImage}
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