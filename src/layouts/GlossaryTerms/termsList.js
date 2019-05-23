import React from 'react'
import Term from '../../components/Term'
import PropTypes from 'prop-types'
import styles from './termsList.module.css'

const TermsList = ({ termsData }) => {
  return termsData.map(child => {
    return (
      <Term
        key={child.node.id}
        data={{ markdownRemark: child.node }}
        titleStyle={styles.termTitle}
      />
    )
  })
}

TermsList.propTypes = {
  termsData: PropTypes.array,
}

export default TermsList
