import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-white.svg'
import NavbarStyles from "./Navbar.module.css"

const Navbar = class extends React.Component {

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    // Get the "#navbarMenu" element
    const $navbarMenu = document.querySelector('#navbarMenu');

    // Add a click event to menu
    $navbarMenu.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = $navbarMenu.dataset.target;

      // Toggle the "is-active" class on "#navbarMenu"
      $navbarMenu.classList.toggle('is-active');
    });

    if (($navbarMenu.classList.contains('is-active')) === "true") {
      console.log('ooo-gah boo-gah!');
    }
  }

  render() {
    console.log('I was triggered during render')
    return (
      <nav className={NavbarStyles.navbar} role="navigation" aria-label="main-navigation">
        <div className={NavbarStyles.navbarBrand}>
          <Link to="/" className={NavbarStyles.navbarItem} title="Logo">
            <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
          </Link>
        </div>
        <div id="navbarMenu" className={NavbarStyles.navbarMenu}>
          <span className={NavbarStyles.navbarBurger}></span>
          <span className={NavbarStyles.navbarBurger}></span>
          <span className={NavbarStyles.navbarBurger}></span>
        </div>

        {/* <Link className={NavbarStyles.navbarItem} to="/writing">
            Writing
          </Link>
          <Link className={NavbarStyles.navbarItem} to="/work">
            Work
          </Link>
          <Link className={NavbarStyles.navbarItem} to="/contact">
            Contact Me
          </Link> */}
      </nav>
    )
  }
}

export default Navbar
