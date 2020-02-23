module.exports = {
  siteMetadata: {
    title: `Procedure`,
    description: `Website for Procedure`,
    author: `@proceduretech`,
    siteUrl: `https://www.procedure.tech/`,
    menuLinks: [
      {
        name: "Team",
        link: "/team",
      },
      {
        name: "Work",
        link: "/work",
      },
      {
        name: "About us",
        link: "/about-us",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: "Contact us",
        link: "/contact-us",
      },
    ],
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
