import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Header, Panel } from '../../layouts'
import Navigation from '../Navigation'
import '../../static/css/reset.css'
import '../../templates/globals.css'

import styles from './layout.module.css'

const Layout = props => {
  const { children, currentPageUrl } = props
  const [showPanel, setPanel] = useState(false)

  const { site, navigation } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        navigation: allMarkdownRemark(sort: { fields: [fields___slug] }) {
          termsList: edges {
            term: node {
              frontmatter {
                title
              }
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className={styles.default}>
      <Helmet
        title={site.siteMetadata.title}
        meta={[{ name: 'description', content: site.siteMetadata.description }]}
      />

      <div className={styles.container}>
        <header>
          <Header
            siteTitle={site.siteMetadata.title}
            menuClickAction={() => {
              setPanel(true)
            }}
          />
        </header>

        <main className={styles.main}>{children}</main>

        <Panel
          active={showPanel}
          additionalClasses={styles.nav}
          clickAction={() => {
            setPanel(false)
          }}
        >
          <Navigation termsList={navigation.termsList} currentPageUrl={currentPageUrl} />
        </Panel>
      </div>
    </div>
  )
}

export default Layout
