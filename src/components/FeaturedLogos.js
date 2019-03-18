import React from 'react'
import FeaturedLogosStyles from "./FeaturedLogos.module.css"
import HeadersStyles from "./Headers.module.css"
import CIPLogo from '../img/featured-logos/CIP-logo.svg'
import YGLLogo from '../img/featured-logos/YGL-logo.svg'
import WiltedYardsLogo from '../img/featured-logos/WiltedYards-logo.svg'
import FastlyFestivalLogo from '../img/featured-logos/FastlyFestival-logo.svg'
import AltitudeLogo from '../img/featured-logos/Altitude-logo.svg'

const FeaturedLogos = class extends React.Component {

  render() {
    return (
      <section className={FeaturedLogosStyles.section}>
        <h2 className={[HeadersStyles.featured, HeadersStyles.rotate].join(' ')}>Logos</h2>
        <h2 className={HeadersStyles.featured}>+</h2>
        <h2 className={HeadersStyles.featured}>Additional Projects</h2>

        <div className={FeaturedLogosStyles.logosGrid}>
          <CIPLogo style={{ width: '60%' }} />
          <span className={FeaturedLogosStyles.logoGridVerticalSeparator1}></span>
          <YGLLogo style={{ width: '60%' }} />
          <span className={FeaturedLogosStyles.logoGridVerticalSeparator2}></span>
          <WiltedYardsLogo style={{ width: '60%' }} />
          <FastlyFestivalLogo style={{ width: '50%' }} />
          <span className={FeaturedLogosStyles.logoGridVerticalSeparator3}></span>
          <AltitudeLogo style={{ width: '150%' }} />
          <span className={FeaturedLogosStyles.logoGridHorizontalSeparator}></span>
        </div>
      </section>
    )
  }
}

export default FeaturedLogos
