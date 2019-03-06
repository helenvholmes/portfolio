import React from 'react'
import AboutStyles from "./About.module.css"

const About = class extends React.Component {

  render() {
    return (
      <section className={AboutStyles.section}>
        <p>This is the about</p>
      </section>
    )
  }
}

export default About
