import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import IndexStyles from './index-page.module.css'

export const IndexPageTemplate = ({ 
  intro, 
}) => {
  return (
    <div>
      <Header />

      <section className={IndexStyles.intro + " container"}>
        {intro}
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  intro: PropTypes.node.isRequired,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  console.log(data)

  return (
    <Layout>
      <IndexPageTemplate
        intro={post.frontmatter.intro}
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
        intro
      }
    }
  }
`
