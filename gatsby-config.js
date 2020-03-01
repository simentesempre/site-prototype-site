module.exports = {
  siteMetadata: {
    title: `Site Prototype`,
    description: `Site Prototype for Strapi+Gatsby Stack`,
    author: `@simentesempre`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL || 'http://localhost:1337',
        queryLimit: 1000, // Default to 100
        contentTypes: [`post`, `user`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Site Prototype`,
        short_name: `Site Prototype`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `lightcoral`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
