 /*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/

const path = require(`path`)
const fs = require('fs')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = `/${path.basename(node.fileAbsolutePath, '.md')}/`
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
            excerpt
            html
            fields {
              slug
            }
            frontmatter {
              title
              wordClasses
              tags
              synonyms
              relatedTerms
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
    // Create individual html pages for each markdown file
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/term.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    // Create tag pages
    result.data.allTagListJson.edges.forEach(node => {
      createPage({
        path: `/tag/${node.node.slug}/`,
        component: path.resolve('./src/templates/tag.js'),
        context: {
          slug: node.node.slug,
        },
      })
    })

    // Create JSON data from markdown and frontmatter for external service consumption
    fs.mkdir(path.join('public', 'data'), { recursive: true }, err => {
      if (err) {
        console.error(err)
        return
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        let data = {
          path: node.fields.slug,
          tags: node.frontmatter.tags,
          excerpt: node.excerpt,
          title: node.frontmatter.title,
          wordClasses: node.frontmatter.wordClasses,
          synonyms: node.frontmatter.synonyms,
          relatedTerms: node.frontmatter.relatedTerms,
        }
        fs.writeFile(
          path.join('public', 'data', path.basename(data.path) + '.json'),
          JSON.stringify(data),
          err => {
            if (err) {
              console.error(err)
            }
          }
        )
      })
    })
  })
}
