import React from 'react'
import Layout from '../components/Layout'
import Term from '../components/Term'
import { graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <Layout currentPageUrl={data.markdownRemark.fields.slug}>
      <Term data={data} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        wordClasses
        tags
        synonyms
        relatedTerms
      }
      fields {
        slug
      }
    }
  }
`
