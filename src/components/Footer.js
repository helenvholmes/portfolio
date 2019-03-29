import React from 'react'
import { Link } from 'gatsby'
import Logo from '../img/logo.svg'
import FooterStyles from './Footer.module.css'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={FooterStyles.footer}>

        <div className={FooterStyles.footerBrand}>
          <Link to="/" className={FooterStyles.footerItem} title="Logo">
            <Logo style={{width: 60 + 'px'}} />
          </Link>
        </div>

        <h1>Building fun <br />
            digital experiences <br />
            a few pixels at a time.</h1>
        
        <div className={FooterStyles.footerCopyright}>© Helen V. Holmes, {(new Date().getFullYear())}.</div>

        <div className={FooterStyles.siteMap + ' ' + FooterStyles.siteMap1}>
          <table>
            <thead>
              <tr>
                <th><Link to="/work/">Work</Link></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/tags/featured/">Featured</Link></td>
                <td><Link to="/tags/physical/">Physical</Link></td>
              </tr>
              <tr>
                <td><Link to="/tags/digital/">Digital</Link></td>
                <td><Link to="/work/">All Projects</Link></td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th><Link to="/about">About</Link></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/about#professional">Professional</Link></td>
                <td><Link to="/about#personal">Personal</Link></td>
              </tr>
              <tr>
                <td><Link to="/work/me-elsewhere/">Elsewhere on the Web</Link></td>
                <td><Link to="/resume">Resume</Link></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={FooterStyles.siteMap + ' ' + FooterStyles.siteMap2}>
          <table>
            <thead>
              <tr>
                <th><Link to="/writing/">Writing</Link></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/tags/essay/">Essay</Link></td>
                <td><Link to="/tags/talks/">Talks</Link></td>
              </tr>
              <tr>
                <td><Link to="/tags/research/">Research</Link></td>
                <td><Link to="/tags/learning/">Learning</Link></td>
              </tr>
              <tr>
                <td><Link to="/tags/longform/">Longform</Link></td>
                <td><Link to="/tags/conferences/">Conferences</Link></td>
              </tr>
              <tr>
                <td><Link to="/tags/resolutions/">Resolutions</Link></td>
                <td><Link to="/tags/questions-answered/">Questions Answered</Link></td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th><Link to="/contact">Contact</Link></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/contact#email">Email</Link></td>
                <td><Link to="/contact#form">Form</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
    )
  }
}

export default Footer