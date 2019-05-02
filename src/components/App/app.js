import React, { Component } from 'react'
import Layout from '../Layout'
import { TermsList as GlossaryTerms } from '../../layouts'
import '../../static/css/reset.css'
import '../../templates/globals.css'
import styles from './app.module.css'

class App extends Component {
  state = {
    showScrim: false,
    showPanel: false,
    textFilter: null,
  }

  updateTextFilter(value) {
    this.setState({ textFilter: value.toLowerCase() })
  }

  render() {
    const { allMarkdownRemark } = this.props.data
    const { edges } = allMarkdownRemark

    return (
      <Layout>
        <div className={styles.intro}>
          <h1 className={styles.title}>Magento Glossary Project</h1>
          <blockquote className={styles.introDescription}>
            <p>
              The place where all the terminology for Magento products live.
              This project is open source and maintained by documentation team.
            </p>
            <div className={styles.introLinks}>
              <a
                className={styles.introLink}
                href="https://github.com/jcalcaben/gatsby-glossary-app"
              >
                GitHub repository
              </a>
              <a
                className={styles.introLink}
                href="https://github.com/jcalcaben/gatsby-glossary-app/wiki"
              >
                How to contribute
              </a>
            </div>
          </blockquote>
        </div>
        <h2 className={styles.termsListLabel}>Glossary Terms</h2>
        <GlossaryTerms termsData={edges} />
      </Layout>
    )
  }
}

export default App
