module.exports = {
  siteMetadata: {
    title: "Bits"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    }
  ]
};
