import React from "react";
import { Link } from 'gatsby';
import Layout from '../../components/Menu-Layout'
import Anime from 'animejs'
import Logo from '../../img/logo-white.svg'
import LinkUnderline from '../../img/linkunderline.svg'
import MenuStyles from "./Menu.module.css"

export default class Menu extends React.Component {

  componentDidMount() {
    const $links = [
      '#link1',
      '#link2',
      '#link3',
      '#link4',
    ]

    $links.forEach(function ($link) {
      let current = null;
      let linkElement = document.querySelector($link);
      let line = document.querySelector($link + ' + svg line');
      let lineLength = line.getTotalLength(); // Get length of its underline
      line.style['stroke-dasharray'] = (lineLength + ' ' + lineLength);
      line.style['stroke-dashoffset'] = lineLength;

      let subNav = document.querySelector($link + ' + svg + div');
      let subNavSubItems = document.querySelectorAll($link + ' + svg + div a');

      linkElement.addEventListener('mouseover', (e) => {
        if (current) current.pause();
        line.style['stroke-dasharray'] = (lineLength + ' ' + lineLength);
        line.style['stroke-dashoffset'] = lineLength;

        current = Anime({
          targets: line,
          strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: lineLength + ' ' + lineLength,
            duration: 700,
            easing: 'easeOutQuart'
          }
        });

        if (subNav) {
          subNav.style.opacity = 1;
          let delayCounter = 200;
          let translateCounter = 0;

          subNavSubItems.forEach(function ($subLink, i) {
            Anime({
              targets: $subLink,
              opacity: 1,
              translateY: translateCounter,
              delay: delayCounter,
              duration: 600,
              easing: 'easeOutQuart'
            });

            delayCounter = (delayCounter + 100);
            translateCounter = (translateCounter + 10);
          }, translateCounter, delayCounter);
        }
      });

      linkElement.addEventListener('mouseout', () => {
        if (current) current.pause();
        current = Anime({
          targets: line,
          strokeDashoffset: {
            value: -lineLength,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: lineLength + ' ' + lineLength,
            duration: 700,
            easing: 'easeOutQuart'
          },
          complete: function() {
            Anime({
                targets: line,
                strokeDashoffset: {
                  value: lineLength,
                  duration: 0,
                  easing: 'easeOutQuart'
                },
                strokeDasharray: {
                  value: lineLength + ' ' + lineLength,
                  duration: 0,
                  easing: 'easeOutQuart'
                }
            });
          }
        });
        if (subNav) {
          let delayCounter = 400;
          let translateCounter = 0;

          subNavSubItems.forEach(function ($subLink, i) {
            Anime({
              targets: $subLink,
              opacity: 0,
              translateY: translateCounter,
              delay: delayCounter,
              duration: 400,
              easing: 'easeOutQuart'
            });

            delayCounter = (delayCounter - 100);
            translateCounter = (translateCounter - 10);
          }, translateCounter, delayCounter);
        }
      });
    });
  };

  closeButton() {
    window.history.go(-1);
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
              <span className={MenuStyles.closeButton} onClick={this.closeButton}>Close</span>
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
            <Link to="/writing" id="link2" className={MenuStyles.link2}>
              Writing
            </Link>
            <LinkUnderline className={MenuStyles.linkUnderline2} alt="link underline" />
            <div className={MenuStyles.link2Sublinks}>
              <Link to="/work/featured">Featured</Link>
              <Link to="/work/physical">Physical</Link>
              <Link to="/work/digital">Digital</Link>
              <Link to="/work">All Projects</Link>
            </div>
            <Link to="/contact" id="link3" className={MenuStyles.link3}>
              About
            </Link>
            <LinkUnderline className={MenuStyles.linkUnderline3} alt="link underline" />
            <Link to="/contact" id="link4" className={MenuStyles.link4}>
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