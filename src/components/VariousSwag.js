import React from 'react'
// eslint-disable-next-line
import VariousSwagStyles from './VariousSwag.module.css'
import HeadersStyles from './Headers.module.css'
import Slider from 'react-slick'
// eslint-disable-next-line
import SliderStyles from "slick-carousel/slick/slick.css"
// eslint-disable-next-line
import SliderCarouselStyles from "slick-carousel/slick/slick-theme.css"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { StaticQuery, graphql } from 'gatsby'

const VariousSwag = ({ children }) => (
  <StaticQuery
    query={graphql`
      query VariousSwagQuery {
        file(relativePath: { eq: "img/various-swag/fred.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
    <div>
      <h2 className={HeadersStyles.regular}>Various Swag</h2>
      {/* <Slider {...settings}> */}
      <Slider>
        <div>
          <PreviewCompatibleImage imageInfo={data.file.childImageSharp.fixed} />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
    )}
  />
)

export default VariousSwag
