module.exports = {
  siteMetadata: {
    title: "Joakim Olsen Portfolio",
    description: "Personal portfolio for Joakim Olsen"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/projects/`
      }
    }
  ]
};
