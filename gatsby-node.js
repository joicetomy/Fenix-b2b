

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const staticPageTemplate = require.resolve('./src/pages/staticPage.js')

  const result = await graphql(`
    query {
      allSanityStaticPage {
        nodes {
          id
          name
          _rawPageData
          _rawSlug
        }
      }
    }
  `)

  const pages = result.data.allSanityStaticPage.nodes;
  pages.forEach((page) => {
    createPage({
      path: page._rawSlug.current,
      component: staticPageTemplate,
      context: {page},
    })
  })
}
