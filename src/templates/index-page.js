import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Header from '../components/Header'
import IndexStyles from './index-page.module.css'

export const IndexPageTemplate = ({ title, content, contentComponent, intro }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Header />

      <section className={IndexStyles.intro + " container"}>
        {intro.description}
      </section>

      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <PageContent className="container" content={content} />
    </div>
  )
}

IndexPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  intro: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        intro={post.html}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro {
          heading
          description
        }
      }
    }
  }
`
