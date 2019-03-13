import React from "react";
import { Link } from 'gatsby';
import Layout from '../../components/Menu-Layout'
import Anime from 'animejs'
import Logo from '../../img/logo-white.svg'
import LinkUnderline from '../../img/linkunderline.svg'
import MenuStyles from "./Menu.module.css"

export default class Menu extends React.Component {

  componentDidMount() {
    // Get the "#navbarMenu" element
    const $LinkOne = document.querySelector('#link1');
    const $LinkOneUnderline = document.querySelector('.Menu-module--linkUnderline1--Yj1ic line');
    const $length = $LinkOneUnderline.getTotalLength(); // Get length of its underline

    Anime({
      targets: $LinkOneUnderline,
      strokeDashoffset: {
        value: -400,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: $length + ' ' + $length,
        duration: 700,
        easing: 'easeOutQuart'
      }
    });

    // Add a mouseover event to menu
    $LinkOne.addEventListener('mouseover', (e) => {
      console.log("Moused");
      Anime({
        targets: $LinkOneUnderline,
        strokeDashOffset: {
          value: 400,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: $length + ' ' + $length,
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  };

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
            <div id="closeMenu" className={MenuStyles.navbarMenu}>
              <span className={MenuStyles.closeButton}>Close</span>
              <div className={MenuStyles.navbarBurger}>
                <span className={MenuStyles.closeX1}></span>
                <span className={MenuStyles.closeX2}></span>
              </div>
            </div>
          </div>
          <div className={MenuStyles.mainLinks}>
            <Link to="/work" id="link1" className={MenuStyles.link1}>
              Work
            </Link>
            <LinkUnderline className={MenuStyles.linkUnderline1} alt="link underline" />
            <div className={MenuStyles.link1Sublinks}>
              <Link to="/work/featured">Featured</Link>
              <Link to="/work/physical">Physical</Link>
              <Link to="/work/digital">Digital</Link>
              <Link to="/work">All Projects</Link>
            </div>
            <Link to="/writing" className={MenuStyles.link2}>
              Writing
            </Link>
            <LinkUnderline className={MenuStyles.linkUnderline2} alt="link underline" />
            <div className={MenuStyles.link2Sublinks}>
              <Link to="/work/featured">Featured</Link>
              <Link to="/work/physical">Physical</Link>
              <Link to="/work/digital">Digital</Link>
              <Link to="/work">All Projects</Link>
            </div>
            <Link to="/contact" className={MenuStyles.link3}>
              About
            </Link>
            <LinkUnderline className={MenuStyles.linkUnderline3} alt="link underline" />
            <Link to="/contact" className={MenuStyles.link4}>
              Contact
            </Link>
            <LinkUnderline className={MenuStyles.linkUnderline4} alt="link underline" />
          </div>
          <div className={MenuStyles.contact}>
            <span className={MenuStyles.getInTouch}>Get in touch</span>
            <a href="mailto:sayhi@helenvholmes.com">
              sayhi@helenvholmes.com
            </a>
          </div>
        </nav>
        </Layout>
    );
  }
}