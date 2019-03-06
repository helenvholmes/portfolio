import React from 'react'
import FeaturedWorkStyles from "./FeaturedWork.module.css"

const FeaturedWork = class extends React.Component {

  render() {
    return (
      <section className={FeaturedWorkStyles.section}>
        <p>The featured work section</p>
      </section>
    )
  }
}

export default FeaturedWork
