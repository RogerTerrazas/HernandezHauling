/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Personal Website`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-remark`, 
    `gatsby-transformer-sharp`, 
  {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
    },
  },
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  }
],
}
