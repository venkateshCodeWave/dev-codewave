const path = require(`path`)
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Codewave-gatsby-strapi",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name: `industrie`,
            endpoint: `api/industries?populate=*`,
          },
          {
            name: `service`,
            endpoint: `api/services?populate=*`,
          },
        ],
        singleTypes: [
          {
            name: `industrySingle`,
            endpoint: `api/industry-single?populate=*`,
          },
          {
            name: `serviceSingle`,
            endpoint: `api/service-single?populate=*`,
          },
          {
            name: `shared`,
            endpoint: `api/shared?populate=*`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
