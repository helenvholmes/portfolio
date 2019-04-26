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
            In the past she's helped people get started with their first logo, their company websites, their community conferences, restaurant menus, app designs, and other wild, exciting projects. She's currently looking for her next full-time opportunity in-house in New York, NY. If you have a position you think she would be good for you can contact Helen at <a href="mailto:sayhi@helenvholmes.com">sayhi@helenvholmes.com</a>. See her resume <Link to="/resume/">here</Link>.
          </p>
        </div>
      </section>
    )
  }
}

export default About
