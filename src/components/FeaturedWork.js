import React from 'react'
import { Link } from 'gatsby'
import FeaturedWorkStyles from "./FeaturedWork.module.css"

const FeaturedWork = class extends React.Component {

  render() {
    return (
      <section className={FeaturedWorkStyles.section}>
        <h2>Featured Work</h2>

        <div className={FeaturedWorkStyles.work}>
          <Link className={FeaturedWorkStyles.link} to="/writing/the-things-we-own">
            Welcome to Aspen. <br />
            We're glad you're here.
          </Link>
        </div>
      </section>
    )
  }
}

export default FeaturedWork
