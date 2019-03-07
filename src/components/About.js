import React from 'react'
import AboutStyles from "./About.module.css"
import HeadersStyles from "./Headers.module.css"

const About = class extends React.Component {

  render() {
    return (
      <section className={AboutStyles.section}>
        <h2 className={[HeadersStyles.featured, HeadersStyles.rotate, AboutStyles.aboutHeader].join(' ')}>About</h2>

        <div className={AboutStyles.platitudes}>Be brave. La nuit est à nous.</div>

        <div className={AboutStyles.partOne}>
          <p>Before going solo she worked for <a href="https://friendlydesign.co/">
          Friendly Design Co.</a>, a military contrator in Northern Virginia, <a href="https://www.capitalone.com/">Capital One</a>, and <a href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a>. At university she studied graphic design with a concentration in interaction and learned to code through a collection of computer science classes, internships, and jobs. In her time freelancing she's worked with companies like Github, Heroku, and Fastly, among others. She continues to do a little bit of everything.</p>
        </div>

        <div className={AboutStyles.partTwo}>
          <p>Nowadays the kinds of projects that excite her and her freelancing team are projects that need wholistic branding solutions such as conferences, off-sites, parties, restaurants, and any other client that’s looking for weird, interesting solutions to brand everything from their invite to their space.</p>

          <p>She can get you started with your first logo, your company website, your community conference, your restaurant menu, your app design, or whatever other wild, exciting project you're cooking up. If you have a project you’re looking for design assistance on, you can contact Helen at <a href="mailto:sayhi@helenvholmes.com">sayhi@helenvholmes.com</a>.</p>

          <p>As of 2019 she's not taking on speaking engagements—that's a lotta work, man.</p>
        </div>
      </section>
    )
  }
}

export default About
