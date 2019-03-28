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
                <th>Work</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Featured</td>
                <td>Physical</td>
              </tr>
              <tr>
                <td>Digital</td>
                <td>All Projects</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>About</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Professional</td>
                <td>Personal</td>
              </tr>
              <tr>
                <td>Elsewhere on the Web</td>
                <td>Resume</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={FooterStyles.siteMap + ' ' + FooterStyles.siteMap2}>
          <table>
            <thead>
              <tr>
                <th>Writing</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Essay</td>
                <td>Talk</td>
              </tr>
              <tr>
                <td>Research</td>
                <td>Learning</td>
              </tr>
              <tr>
                <td>Longform</td>
                <td>Conferences</td>
              </tr>
              <tr>
                <td>Resolutions</td>
                <td>Questions Answered</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email</td>
                <td>Form</td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
    )
  }
}

export default Footer
