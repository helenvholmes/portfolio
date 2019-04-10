/* eslint-disable */
import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Slider from 'react-slick'
// eslint-disable-next-line
import SliderStyles from "slick-carousel/slick/slick.css"
// eslint-disable-next-line
import SliderCarouselStyles from "slick-carousel/slick/slick-theme.css"

import AdditionalProjectStyles from './AdditionalProjects.module.css'
import HeadersStyles from './Headers.module.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const SitesDesigned = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {extension: {regex: "/jpg/"}, relativeDirectory: {eq: "sitesDesigned"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section className={AdditionalProjectStyles.section}>
        <h2 className={HeadersStyles.regular}>Sites Designed & Built</h2>
        <Slider {...settings}>
          {data.allFile.edges.map((node, i)=>(
            <div key={i}>
              <div className={AdditionalProjectStyles.slide}>
                <span className={AdditionalProjectStyles.spacer}></span>
                <Img fluid={node.node.childImageSharp.fluid} />
              </div>
            </div>
          ))}
        </Slider>
      </section>
    )}
  />
)

export default SitesDesigned