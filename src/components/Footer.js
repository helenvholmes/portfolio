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
                <td><Link to="/work/cip-conference/">Featured</Link></td>
                <td><Link to="/work/altitude-2018/">Physical</Link></td>
              </tr>
              <tr>
                <td><Link to="/work/designing-developer-tools/">Digital</Link></td>
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
                <td><a href="/about#professional">Professional</a></td>
                <td><a href="/about#personal">Personal</a></td>
              </tr>
              <tr>
                <td><a href="/about#elsewhere">Elsewhere on the Web</a></td>
                <td><a href="https://drive.google.com/file/d/1fTj9KM0GC5Yei7-J1-I-MyI_FjNTfnMH/view?usp=sharing" target="_blank">Resume</a></td>
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
                <td><Link to="/tags/long-form/">Longform</Link></td>
                <td><Link to="/tags/conferences/">Conferences</Link></td>
              </tr>
              <tr>
                <td><Link to="/tags/resolutions/">Resolutions</Link></td>
                <td><Link to="/tags/mac/">Mac Guides</Link></td>
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
                <td><a href="mailto:sayhi@helenvholmes.com">Email</a></td>
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