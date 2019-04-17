import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import '../components/all.css'
import Header from '../components/Header'
import FeaturedWriting from '../components/FeaturedWriting'
import FeaturedWork from '../components/FeaturedWork'
import FeaturedLogos from '../components/FeaturedLogos'
import AboutComponent from '../components/AboutComponent'
import IndexStyles from './index-page.module.css'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  intro1,
  intro2,
  intro3,
  helenHeadshots,
}) => {
  return (
    <div>
      <Header />

      <main>
        <section className={IndexStyles.intro}>
          <div className={IndexStyles.introParagraph}>
            <p>{intro1}</p>
            <p>{intro2}</p>
            <p>{intro3}</p>
          </div>

          <div className={IndexStyles.headshotsSection}>
            <div className={IndexStyles.headshots}>
              <div className={IndexStyles.headshot2}>
                <PreviewCompatibleImage imageInfo={helenHeadshots.image2} />
              </div>
              <div className={IndexStyles.headshot1}>
                <PreviewCompatibleImage imageInfo={helenHeadshots.image1} />
              </div>
              <div className={IndexStyles.headshot3}>
                <PreviewCompatibleImage imageInfo={helenHeadshots.image3} />
              </div>
              <div className={IndexStyles.headshotBorder1} />
              <div className={IndexStyles.headshotBorder2} />
              <div className={IndexStyles.headshotBorder3} />
            </div>
            <div className={IndexStyles.learnMore}>
              <Link to="/about" className={IndexStyles.learnMoreLink}>
                Read more about Helen ⟶
              </Link>
            </div>
          </div>
        </section>

        <FeaturedWriting />
        <FeaturedWork />
        <FeaturedLogos />
        <AboutComponent />
      </main>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  intro1: PropTypes.node.isRequired,
  intro2: PropTypes.node.isRequired,
  intro3: PropTypes.node.isRequired,
  helenHeadshots: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        intro1={post.frontmatter.intro1}
        intro2={post.frontmatter.intro2}
        intro3={post.frontmatter.intro3}
        helenHeadshots={post.frontmatter.helenHeadshots}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        intro1
        intro2
        intro3
        helenHeadshots {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
