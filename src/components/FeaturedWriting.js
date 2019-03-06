import React from 'react'
import FeaturedWritingStyles from "./FeaturedWriting.module.css"

const FeaturedWriting = class extends React.Component {

  render() {
    return (
      <section className={FeaturedWritingStyles.section}>
        <p>The featured writing section</p>
      </section>
    )
  }
}

export default FeaturedWriting
