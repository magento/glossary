/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = `/${path.basename(node.fileAbsolutePath, '.md')}/`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      allTagListJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/term.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    result.data.allTagListJson.edges.forEach(node => {
      createPage({
        path: `/tag/${node.node.slug}/`,
        component: path.resolve('./src/templates/tag.js'),
        context: {
          slug: node.node.slug
        },
      })
    })
  })
}