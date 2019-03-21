import React from 'react'
import { Link } from 'gatsby'
import FeaturedWritingStyles from './FeaturedWriting.module.css'
import HeadersStyles from './Headers.module.css'

const FeaturedWriting = class extends React.Component {
  render() {
    return (
      <section className={FeaturedWritingStyles.section}>
        <h2
          className={[HeadersStyles.featured, HeadersStyles.rotate].join(' ')}
        >
          Featured Writing
        </h2>

        <div className={FeaturedWritingStyles.articles}>
          <Link
            className={FeaturedWritingStyles.link}
            to="/writing/the-things-we-own"
          >
            The Things We Own
          </Link>

          <Link
            className={FeaturedWritingStyles.link}
            to="/writing/the-future-of-wearables"
          >
            The Future of Wearables
          </Link>

          <Link
            className={FeaturedWritingStyles.link}
            to="/writing/critique-is-terrifying"
          >
            Critique is Terrifying
          </Link>
        </div>
      </section>
    )
  }
}

export default FeaturedWriting
