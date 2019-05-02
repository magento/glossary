import React from 'react'
import Term from './term'
import styles from './termsList.module.css'
import PropTypes from 'prop-types'

const TermsList = ({ filesList }) => {
  let glossaryTerms = filesList.map(node => {
    return (
      <Term
        anchorId={node.file.name}
        key={node.file.publicURL}
        publicURL={node.file.publicURL}
      />
    )
  })

  return <div className={styles.list}>{glossaryTerms}</div>
}

TermsList.propTypes = {
  filesList: PropTypes.array.isRequired
}

export default TermsList
