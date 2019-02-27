import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import NavbarStyles from "./Navbar.module.css"

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
 
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
 
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
 
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <nav className={NavbarStyles.navbar} role="navigation" aria-label="main-navigation">
        <div className={NavbarStyles.navbarBrand}>
          <Link to="/" className={NavbarStyles.navbarItem} title="Logo">
            <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
          </Link>
        </div>
        <div id="navMenu" className={NavbarStyles.navbarMenu}>
          <Link className={NavbarStyles.navbarItem} to="/writing">
            Writing
          </Link>
          <Link className={NavbarStyles.navbarItem} to="/work">
            Work
          </Link>
          <Link className={NavbarStyles.navbarItem} to="/contact">
            Contact Me
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navbar
