import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Header, Panel } from '../../layouts'
import Navigation from '../Navigation'
import '../../static/css/reset.css'
import '../../templates/globals.css'

import styles from './layout.module.css'

const Favicon = () => {
  return(
    <Helmet>
      <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="https://magento.com/favicon.ico" />
      <link rel="apple-touch-icon" type="image/png" href="https://magento.com/apple-touch-icon.png" />
      <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="https://magento.com/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="https://magento.com/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="https://magento.com/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="https://magento.com/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="https://magento.com/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="https://magento.com/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="https://magento.com/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="https://magento.com/apple-touch-icon-180x180.png" />
    </Helmet>
  );
}

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
      <Favicon />

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
