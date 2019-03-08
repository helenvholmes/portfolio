import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WorkStyles from "./work.module.css"
import Content, { HTMLContent } from '../components/Content'

export const WorkPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <main>
      <section className={WorkStyles.video}>
        <p>video here</p>
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
}

const WorkPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorkPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
            background1
          }
        }
      }
    }
  }
`
