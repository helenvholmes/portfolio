import React from 'react'
import { Link } from 'gatsby'
import AboutStyles from './AboutComponent.module.css'
import HeadersStyles from './Headers.module.css'

const About = class extends React.Component {
  render() {
    return (
      <section className={AboutStyles.section}>
        <h2
          className={[
            HeadersStyles.featured,
            HeadersStyles.rotate,
            AboutStyles.aboutHeader,
          ].join(' ')}
        >
          About
        </h2>

        <div className={AboutStyles.platitudes}>
          <p>Say hi</p>
        </div>

        <div className={AboutStyles.partOne}>
          <p>
            Before going solo she worked for <a href="https://friendlydesign.co/" target="_blank" rel="noopener noreferrer">Friendly Design Co.</a>, a
            military contrator in Northern Virginia, <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer">Capital One</a>, and <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
            . At university she studied graphic design with a concentration in
            interaction and learned to code through a collection of computer
            science classes, internships, and jobs. In her time freelancing
            she's worked with companies like <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>, <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a>, and <a href="https://www.fastly.com/" target="_blank" rel="noopener noreferrer">Fastly</a>, among
            others. She continues to do a little bit of everything.
          </p>
        </div>

        <div className={AboutStyles.partTwo}>
          <p>
            She can get you started with your first logo, your company website,
            your community conference, your restaurant menu, your app design, or whatever other wild, exciting project you're cooking up. If you have a project you’re looking for design assistance on, you can contact Helen at <a href="mailto:sayhi@helenvholmes.com">sayhi@helenvholmes.com</a>. She is currently looking for full-time employment—please feel free to reach out or see her resume <Link to="/resume/">here</Link>.
          </p>
        </div>
      </section>
    )
  }
}

export default About
