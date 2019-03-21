import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import VariousLogos from '../components/VariousLogos'
import '../components/all.css'
import WorkStyles from './work.module.css'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const WorkPageTemplate = ({
  title,
  content,
  contentComponent,
  project1,
  project2,
  project3,
}) => {
  const PageContent = contentComponent || Content

  return (
    <main>
      <section className={WorkStyles.reel}>reel</section>

      <Link to={project1.url}>
        <section className={WorkStyles.project}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project1.image1} />
          </div>
        </section>
      </Link>

      <Link to={project2.url}>
        <section className={WorkStyles.project + ' ' + WorkStyles.red}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project2.image2} />
          </div>
        </section>
      </Link>

      <VariousLogos />

      <Link to={project3.url}>
        <section className={WorkStyles.project}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project3.image3} />
          </div>
        </section>
      </Link>

      <section className="container">
        <h2>{title}</h2>
        <PageContent className="content" content={content} />
      </section>
    </main>
  )
}

WorkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  project1: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background: PropTypes.string,
  }),
  project2: PropTypes.shape({
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background: PropTypes.string,
  }),
  project3: PropTypes.shape({
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background: PropTypes.string,
  }),
}

const WorkPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorkPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        project1={post.frontmatter.project1}
        project2={post.frontmatter.project2}
        project3={post.frontmatter.project3}
      />
    </Layout>
  )
}

WorkPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorkPage

export const WorkPageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        project1 {
          image1 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background
          url
        }
        project2 {
          image2 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background
          url
        }
        project3 {
          image3 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background
          url
        }
      }
    }
  }
`
