import React from 'react'
import Layout from '../components/Layout'
import TermsList from '../layouts/GlossaryTerms/termsList'
import TagFilter from '../components/Tag/tagFilter'
import { graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <Layout>
      <TagFilter>{data.tagListJson.slug}</TagFilter>
      <TermsList termsData={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$slug] } } }) {
      edges {
        node {
          frontmatter {
            title
            wordClasses
            tags
            synonyms
            relatedTerms
          }
          html
          id
        }
      }
    }
    tagListJson(slug: { eq: $slug }) {
      slug
    }
  }
`
