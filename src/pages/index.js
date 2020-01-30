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
import { graphql } from 'gatsby'
import App from '../components/App'

const IndexPage = ({ data }) => <App data={data} />

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [fields___slug] }) {
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
  }
`
