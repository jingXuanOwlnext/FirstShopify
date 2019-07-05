 module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        resolve: 'gatsby-source-contentful',
        options:{
          spaceId: `qcozo1h3g8hu`,
          accessToken: `nbyXsR1Q91PfCKRIBn8rpCtzDEoDqSdygkkbCazfdzo`,
        }
        
      },
      {
          resolve: `gatsby-source-shopify2`,
          options: {
            shopName: "owlnext-store",
            accessToken: "fd6aeaa2c35144ed12b52a312b99c4fe",
            verbose: true,
           // paginationSize: 250,
          }

        }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
