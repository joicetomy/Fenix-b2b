const path = require('path');
const config = require('./src/config/config');

const { sanity} = config;

module.exports = {
  siteMetadata: {
    title: `Fenix-b2b`,
    siteUrl: `https://fenixb2b.gatsbyjs.io`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      ...sanity
    }
    
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      '@src': path.join(__dirname, 'src'),
      '@api': path.join(__dirname, 'src/apis'),
      '@i18n': path.join(__dirname, 'src/i18n'),
      '@images': path.join(__dirname, 'src/images'),
      '@components': path.join(__dirname, 'src/components'),
      '@core': path.join(__dirname, 'src/components/core'),
      '@partials': path.join(__dirname, 'src/components/partials'),
      '@common_components': path.join(__dirname, 'src/components/common'),
      '@widgets': path.join(__dirname, 'src/widgets'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@utils': path.join(__dirname, 'src/utils'),
      '@pagelayouts': path.join(__dirname, 'src/layouts'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@routes': path.join(__dirname, 'src/routes'),
    },
  },
   "gatsby-plugin-image", 
   "gatsby-plugin-sharp", 
   "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
]
};