import React from "react";
import { Link } from 'gatsby';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import logo from '../../img/logo-white.svg'
import linkUnderline from '../../img/linkunderline.svg'
import MenuStyles from "./Menu.module.css"

const Menu = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MenuOverlayQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>

        <nav className={MenuStyles.menu} id="menuOverlay">
          <div className={MenuStyles.originalNav}>
            <Link to="/" className={MenuStyles.navbarItem} title="Logo">
              <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
            </Link>
            <div id="closeMenu" className={MenuStyles.navbarMenu}>
              <span className={MenuStyles.closeButton}>Close</span>
              <div className={MenuStyles.navbarBurger}>
                <span className={MenuStyles.closeX1}></span>
                <span className={MenuStyles.closeX2}></span>
              </div>
            </div>
          </div>
          <div className={MenuStyles.mainLinks}>
            <Link to="/work" className={MenuStyles.link1}>
              Work
            </Link>
            <img src={linkUnderline} className={MenuStyles.linkUnderline1} alt="link underline" />
            <div className={MenuStyles.link1Sublinks}>
              <Link to="/work/featured">Featured</Link>
              <Link to="/work/physical">Physical</Link>
              <Link to="/work/digital">Digital</Link>
              <Link to="/work">All Projects</Link>
            </div>
            <Link to="/writing" className={MenuStyles.link2}>
              Writing
            </Link>
            <img src={linkUnderline} className={MenuStyles.linkUnderline2} alt="link underline" />
            <div className={MenuStyles.link2Sublinks}>
              <Link to="/work/featured">Featured</Link>
              <Link to="/work/physical">Physical</Link>
              <Link to="/work/digital">Digital</Link>
              <Link to="/work">All Projects</Link>
            </div>
            <Link to="/contact" className={MenuStyles.link3}>
              About
            </Link>
            <img src={linkUnderline} className={MenuStyles.linkUnderline3} alt="link underline" />
            <Link to="/contact" className={MenuStyles.link4}>
              Contact
            </Link>
            <img src={linkUnderline} className={MenuStyles.linkUnderline4} alt="link underline" />
          </div>
          <div className={MenuStyles.contact}>
            <span className={MenuStyles.getInTouch}>Get in touch</span>
            <a href="mailto:sayhi@helenvholmes.com">
              sayhi@helenvholmes.com
            </a>
          </div>
        </nav>
      </div>
    )}
  />
)

export default Menu