/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/

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
