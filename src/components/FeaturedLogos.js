import React from 'react'
import FeaturedLogosStyles from "./FeaturedLogos.module.css"

const FeaturedLogos = class extends React.Component {

  render() {
    return (
      <section className={FeaturedLogosStyles.section}>
        <p>The featured logos section</p>
      </section>
    )
  }
}

export default FeaturedLogos
