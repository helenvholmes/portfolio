import React from 'react'
import { Link } from 'gatsby'
import Logo from '../img/logo-white.svg'
import NavbarStyles from './Navbar.module.css'
import { navigate } from 'gatsby'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get the "#navbarMenu" element
    const $navbarMenu = document.querySelector('#navbarMenu')

    // Add a click event to menu
    $navbarMenu.addEventListener('click', () => {
      // Navigate to the menu route
      navigate('/menu/')
      // $navbarMenu.classList.toggle('is-active');
    })
  }

  render() {
    return (
      <nav
        className={NavbarStyles.navbar}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={NavbarStyles.navbarBrand}>
          <Link to="/" className={NavbarStyles.navbarItem} title="Logo">
            <Logo />
          </Link>
        </div>
        <div id="navbarMenu" className={NavbarStyles.navbarMenu}>
          <span className={NavbarStyles.navbarBurger} />
          <span className={NavbarStyles.navbarBurger} />
          <span className={NavbarStyles.navbarBurger} />
        </div>
      </nav>
    )
  }
}

export default Navbar
