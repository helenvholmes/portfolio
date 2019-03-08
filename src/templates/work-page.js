import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WorkStyles from "./work.module.css"
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const WorkPageTemplate = ({ 
  title, 
  content, 
  contentComponent,
  project1, 
}) => {
  const PageContent = contentComponent || Content

  return (
    <main>
      <section className={WorkStyles.video}>
        <PreviewCompatibleImage imageInfo={project1.image1} />
        <p>{project1.background1}</p>
      </section>

      <section>
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
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background1:PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
          background1
        }
      }
    }
  }
`
