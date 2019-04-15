import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Menu-Layout'
import Anime from 'animejs'
import Logo from '../../img/logo-white.svg'
import LinkUnderline from '../../img/linkunderline.svg'
import MenuStyles from './Menu.module.css'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', function() {
      let linkLines = document.querySelectorAll('svg line')

      linkLines.forEach(function(line) {
        let lineLength = line.getTotalLength() // Get length of its underline
        line.style['stroke-dasharray'] = lineLength + ' ' + lineLength
        line.style['stroke-dashoffset'] = lineLength
      })
    })

    const menu = document.querySelector('#menuOverlay')
    console.log(menu)

    // Anime({
    //   targets: menu,
    //   height: '100vh',
    //   easing: 'easeInOutQuad'
    // });

    let linkLines = document.querySelectorAll('svg line')

    linkLines.forEach(function(line) {
      let lineLength = line.getTotalLength() // Get length of its underline
      line.style['stroke-dasharray'] = lineLength + ' ' + lineLength
      line.style['stroke-dashoffset'] = lineLength
    })

    this.$links = ['#link1', '#link2', '#link3', '#link4']
  }

  handleLinkMouseover(i) {
    let current = this.state.current
    let line = document.querySelector('svg:nth-of-type(' + i + ') line')
    let lineLength = line.getTotalLength() // Get length of its underline

    let subNav = document.querySelector('#link' + i + ' + svg + div')
    let subNavSubItems = document.querySelectorAll(
      '#link' + i + ' + svg + div a'
    )

    if (current) {
      current.pause()
    }

    line.style['stroke-dasharray'] = lineLength + ' ' + lineLength
    line.style['stroke-dashoffset'] = lineLength

    current = Anime({
      targets: line,
      strokeDashoffset: {
        value: 0,
        duration: 700,
        easing: 'easeOutQuart',
      },
      strokeDasharray: {
        value: lineLength + ' ' + lineLength,
        duration: 700,
        easing: 'easeOutQuart',
      },
    })

    if (subNav) {
      subNav.style.opacity = 1
      let delayCounter = 200
      let translateCounter = 0

      subNavSubItems.forEach(
        function($subLink, i) {
          Anime({
            targets: $subLink,
            opacity: 1,
            translateY: translateCounter,
            delay: delayCounter,
            duration: 600,
            easing: 'easeOutQuart',
          })

          delayCounter = delayCounter + 100
          translateCounter = translateCounter + 10
        },
        translateCounter,
        delayCounter
      )
    }

    this.setState = {
      current: current,
    }
  }

  handleLinkMouseout(i) {
    let current = this.state.current
    let line = document.querySelector('svg:nth-of-type(' + i + ') line')
    let lineLength = line.getTotalLength() // Get length of its underline
    line.style['stroke-dasharray'] = lineLength + ' ' + lineLength
    line.style['stroke-dashoffset'] = lineLength

    let subNav = document.querySelector('#link' + i + ' + svg + div')
    let subNavSubItems = document.querySelectorAll(
      '#link' + i + ' + svg + div a'
    )

    if (current) {
      current.pause()
    }

    current = Anime({
      targets: line,
      strokeDashoffset: {
        value: -lineLength,
        duration: 700,
        easing: 'easeOutQuart',
      },
      strokeDasharray: {
        value: lineLength + ' ' + lineLength,
        duration: 700,
        easing: 'easeOutQuart',
      },
      complete: function() {
        Anime({
          targets: line,
          strokeDashoffset: {
            value: lineLength,
            duration: 0,
            easing: 'easeOutQuart',
          },
          strokeDasharray: {
            value: lineLength + ' ' + lineLength,
            duration: 0,
            easing: 'easeOutQuart',
          },
        })
      },
    })

    if (subNav) {
      let delayCounter = 400
      let translateCounter = 0

      subNavSubItems.forEach(
        function($subLink, i) {
          Anime({
            targets: $subLink,
            opacity: 0,
            translateY: translateCounter,
            delay: delayCounter,
            duration: 400,
            easing: 'easeOutQuart',
          })

          delayCounter = delayCounter - 100
          translateCounter = translateCounter - 10
        },
        translateCounter,
        delayCounter
      )
    }

    this.setState = {
      current: current,
    }
  }

  closeButton() {
    window.history.go(-1)
  }

  render() {
    return (
      <Layout>
        <nav className={MenuStyles.menu} id="menuOverlay">
          <div className={MenuStyles.originalNav}>
            <div className={MenuStyles.navbarBrand}>
              <Link to="/" className={MenuStyles.navbarItem} title="Logo">
                <Logo />
              </Link>
            </div>
            <div onClick={this.closeButton} id="closeMenu" className={MenuStyles.navbarMenu}>
              <span className={MenuStyles.closeButton}>Close</span>
              <div className={MenuStyles.navbarBurger}>
                <span className={MenuStyles.closeX1} />
                <span className={MenuStyles.closeX2} />
              </div>
            </div>
          </div>
          <div className={MenuStyles.mainLinks}>
            <Link
              to="/work"
              id="link1"
              className={MenuStyles.link1}
              // this specific bind style, arrow binding: (arg) => method(arg)
              // is mandatory to preserve 'this.state'
              // indices are still hard-coded, for simplicity's sake
              onMouseEnter={i => this.handleLinkMouseover(1)}
              onMouseOut={i => this.handleLinkMouseout(1)}
            >
              Work
            </Link>
            <LinkUnderline
              className={MenuStyles.linkUnderline1}
              alt="link underline"
            />
            {/* <div className={MenuStyles.link1Sublinks}>
              <Link to="/work/featured">Featured</Link>
              <Link to="/work/physical">Physical</Link>
              <Link to="/work/digital">Digital</Link>
              <Link to="/work">All Projects</Link>
            </div> */}
            {/* <Link
              to="/writing"
              id="link2"
              className={MenuStyles.link2}
              onMouseEnter={i => this.handleLinkMouseover(2)}
              onMouseOut={i => this.handleLinkMouseout(2)}
            >
              Writing
            </Link> */}
            <LinkUnderline
              className={MenuStyles.linkUnderline2}
              alt="link underline"
            />
            {/* <div className={MenuStyles.link2Sublinks}>
              <Link to="/work/featured">Featured</Link>
              <Link to="/work/physical">Physical</Link>
              <Link to="/work/digital">Digital</Link>
              <Link to="/work">All Projects</Link>
            </div> */}
            <Link
              to="/about"
              id="link2"
              className={MenuStyles.link2}
              onMouseEnter={i => this.handleLinkMouseover(2)}
              onMouseOut={i => this.handleLinkMouseout(2)}
            >
              About
            </Link>
            <LinkUnderline
              className={MenuStyles.linkUnderline2}
              alt="link underline"
            />
            <Link
              to="/contact"
              id="link3"
              className={MenuStyles.link3}
              onMouseEnter={i => this.handleLinkMouseover(3)}
              onMouseOut={i => this.handleLinkMouseout(3)}
            >
              Contact
            </Link>
            <LinkUnderline
              className={MenuStyles.linkUnderline3}
              alt="link underline"
            />
          </div>
          <div className={MenuStyles.contact}>
            <span className={MenuStyles.getInTouch}>Get in touch</span>
            <a href="mailto:sayhi@helenvholmes.com">sayhi@helenvholmes.com</a>
          </div>
        </nav>
      </Layout>
    )
  }
}
