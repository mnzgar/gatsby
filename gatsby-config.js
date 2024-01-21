/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `jsonData`,
        path: `${__dirname}/src/data`,
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        url: 'https://demo7895686.mockable.io/api/listAssets',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
        name: 'apiData',
        entityLevel: false
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
      },
    },
  ],
}
