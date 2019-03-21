import React from 'react'
import VariousLogosStyles from './VariousLogos.module.css'
import HeadersStyles from './Headers.module.css'
import CIPLogo from '../img/featured-logos/CIP-logo.svg'
import YGLLogo from '../img/featured-logos/YGL-logo.svg'
import WiltedYardsLogo from '../img/featured-logos/WiltedYards-logo.svg'
import FastlyFestivalLogo from '../img/featured-logos/FastlyFestival-logo.svg'
import Illustrations from '../img/illustrations.svg'

const VariousLogos = class extends React.Component {
  render() {
    return (
      <section className={VariousLogosStyles.section}>
        <h2
          className={[HeadersStyles.featured, HeadersStyles.rotate].join(' ')}
        >
          Various Logos
        </h2>
        <h2 className={HeadersStyles.featured}>+</h2>
        <h2 className={HeadersStyles.featured}>Illustrations</h2>

        <div className={VariousLogosStyles.illustrations}>
          <Illustrations />
        </div>
      </section>
    )
  }
}

export default VariousLogos
