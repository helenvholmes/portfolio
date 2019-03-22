import React from 'react'
import Img from 'gatsby-image'
// eslint-disable-next-line
import VariousSwagStyles from './VariousSwag.module.css'
import HeadersStyles from './Headers.module.css'
import Slider from 'react-slick'
// eslint-disable-next-line
import SliderStyles from "slick-carousel/slick/slick.css"
// eslint-disable-next-line
import SliderCarouselStyles from "slick-carousel/slick/slick-theme.css"
import { StaticQuery, graphql } from 'gatsby'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  className: 'variousSwagSlider',
  slidesToShow: 3,
  slidesToScroll: 3
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
      <div>
        <h2 className={HeadersStyles.regular}>Various Swag</h2>
        <Slider {...settings}>
          {data.allFile.edges.map((node, i)=>(
            <div key={i}>
              <Img fluid={node.node.childImageSharp.fluid} />
            </div>
          ))}
        </Slider>
      </div>
    )}
  />
)

export default VariousSwag