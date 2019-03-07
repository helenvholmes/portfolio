import React from 'react'
import FeaturedLogosStyles from "./FeaturedLogos.module.css"
import HeadersStyles from "./Headers.module.css"
import logo from '../img/logo.svg'

const FeaturedLogos = class extends React.Component {

  render() {
    return (
      <section className={FeaturedLogosStyles.section}>
        <h2 className={[HeadersStyles.featured, HeadersStyles.rotate].join(' ')}>Logos</h2>
        <h2 className={HeadersStyles.featured}>+</h2>
        <h2 className={HeadersStyles.featured}>Additional Projects</h2>

        <div className={FeaturedLogosStyles.logosGrid}>
          <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
          <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
          <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
          <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
          <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
        </div>
      </section>
    )
  }
}

export default FeaturedLogos
