/* eslint-disable */
import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Slider from 'react-slick'
// eslint-disable-next-line
import SliderStyles from "slick-carousel/slick/slick.css"
// eslint-disable-next-line
import SliderCarouselStyles from "slick-carousel/slick/slick-theme.css"

import VariousSwagStyles from './VariousSwag.module.css'
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
  className: 'variousSwagSlider',
  slidesToShow: 4,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const VariousSwag = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {extension: {regex: "/jpg/"}, relativeDirectory: {eq: "various-swag"}}) {
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
      <section className={VariousSwagStyles.section}>
        <h2 className={HeadersStyles.regular}>Various Swag</h2>
        <Slider {...settings}>
          {data.allFile.edges.map((node, i)=>(
            <div key={i}>
              <div className={VariousSwagStyles.slide}>
                <span className={VariousSwagStyles.spacer}></span>
                <Img fluid={node.node.childImageSharp.fluid} />
              </div>
            </div>
          ))}
        </Slider>
      </section>
    )}
  />
)

export default VariousSwag