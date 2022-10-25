

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const staticPageTemplate = require.resolve('./src/pages/staticPage.js')

  const result = await graphql(`
    query {
      allSanityStaticPage {
        nodes {
          _id
          slug {
            current
          }
          pageData {
            _key
            _type
            style
            list
            _rawChildren
          }
        }
      }
    }
  `)

  const pages = result.data.allSanityStaticPage.nodes;
  pages.forEach((page) => {
    createPage({
      path: page.slug.current,
      component: staticPageTemplate,
      context: {
        slug: page,
      },
    })
  })
}
