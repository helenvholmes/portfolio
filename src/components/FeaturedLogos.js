import React from 'react'
import FeaturedLogosStyles from "./FeaturedLogos.module.css"
import HeadersStyles from "./Headers.module.css"
import Logo from '../img/logo.svg'

const FeaturedLogos = class extends React.Component {

  render() {
    return (
      <section className={FeaturedLogosStyles.section}>
        <h2 className={[HeadersStyles.featured, HeadersStyles.rotate].join(' ')}>Logos</h2>
        <h2 className={HeadersStyles.featured}>+</h2>
        <h2 className={HeadersStyles.featured}>Additional Projects</h2>

        <div className={FeaturedLogosStyles.logosGrid}>
          <Logo style={{ width: '60px' }} />
          <Logo style={{ width: '60px' }} />
          <Logo style={{ width: '60px' }} />
          <Logo style={{ width: '60px' }} />
          <Logo style={{ width: '60px' }} />
        </div>
      </section>
    )
  }
}

export default FeaturedLogos
