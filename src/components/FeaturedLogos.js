import React from 'react'
import { Link } from 'gatsby'
import FeaturedLogosStyles from './FeaturedLogos.module.css'
import HeadersStyles from './Headers.module.css'
import CIPLogo from '../img/featured-logos/CIP-logo.svg'
import YGLLogo from '../img/featured-logos/YGL-logo.svg'
import WiltedYardsLogo from '../img/featured-logos/WiltedYards-logo.svg'
import FastlyFestivalLogo from '../img/featured-logos/FastlyFestival-logo.svg'
import AltitudeLogo from '../img/featured-logos/Altitude-logo.svg'

const FeaturedLogos = class extends React.Component {
  render() {
    return (
      <section className={FeaturedLogosStyles.section}>
        <h2
          className={[HeadersStyles.featured, HeadersStyles.rotate].join(' ')}
        >
          Logos
        </h2>
        <h2 className={HeadersStyles.featured}>+</h2>
        <h2 className={HeadersStyles.featured}>Additional Projects</h2>

        <div className={FeaturedLogosStyles.logosGrid}>
          <Link to="/work/cip-conference">
            <CIPLogo style={{ width: '60%' }} />
          </Link>

          <span className={FeaturedLogosStyles.logoGridVerticalSeparator1} />

          <YGLLogo style={{ width: '60%' }} />

          <span className={FeaturedLogosStyles.logoGridVerticalSeparator2} />

          <Link to="/work/wilted-yards">
            <WiltedYardsLogo style={{ width: '60%' }} />
          </Link>

          <Link to="/work/fastly-festival">
            <FastlyFestivalLogo style={{ width: '50%' }} />
          </Link>

          <span className={FeaturedLogosStyles.logoGridVerticalSeparator3} />

          <Link to="/work/altitude-2018">
            <AltitudeLogo style={{ width: '150%' }} />
          </Link>

          <span className={FeaturedLogosStyles.logoGridHorizontalSeparator} />
        </div>
      </section>
    )
  }
}

export default FeaturedLogos
