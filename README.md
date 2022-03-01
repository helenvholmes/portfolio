# helenvholmes.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

This repo contains my portfolio website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[helenvholmes.com](https://helenvholmes.com/)**.

I'm actually working on a redesign of this site that uses Remix.run and Notion. You can check that work out over on my [notion](https://github.com/scooooooooby/portfolio/tree/notion) branch.

### Access Locally
```
$ git clone https://github.com/helenvholmes/portfolio.git
$ cd portfolio
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Purgecss
This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.
