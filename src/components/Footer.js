import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import FooterStyles from "./Navbar.module.css"

const Footer = class extends React.Component {
  render() {
    return (
      <nav className={FooterStyles.navbar} role="navigation" aria-label="main-navigation">
        <div className={FooterStyles.navbarBrand}>
          <Link to="/" className={FooterStyles.navbarItem} title="Logo">
            <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
          </Link>
        </div>
        <div id="navMenu" className={FooterStyles.navbarMenu}>
          <Link className={FooterStyles.navbarItem} to="/writing">
            Writing
          </Link>
          <Link className={FooterStyles.navbarItem} to="/work">
            Work
          </Link>
          <Link className={FooterStyles.navbarItem} to="/contact">
            Contact Me
          </Link>
        </div>
      </nav>
    )
  }
}

export default Footer
