import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content, { HTMLContent } from '../components/Content'
import IndexStyles from './index-page.module.css'

export const IndexPageTemplate = ({ 
  intro, 
  contentComponent,
}) => {
  const IndexContent = contentComponent || Content

  return (
    <div>
      <Header />

      <section className={IndexStyles.intro + " container"}>
        <IndexContent content={intro} />
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  intro: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        heading={post.frontmatter.heading}
        description={post.frontmatter.description}
        intro={post.html}
        contentComponent={HTMLContent}
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
      html
      frontmatter {
        title
        intro
      }
    }
  }
`
