import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import WritingStyles from './writing.module.css'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className={WritingStyles.section}>
          {posts.map(({ node: post }) => (
            <div
              className="content"
              key={post.id}
            >
              <p>
                <Link className={WritingStyles.title} to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &nbsp;&nbsp;&bull;&nbsp;&nbsp; </span>
                <small>{post.frontmatter.date}</small>
              </p>
            </div>
          ))}
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
