import React from 'react'
import GlossaryTerm from './glossaryTerm'
import PropTypes from 'prop-types'
import styles from './glossaryTerm.module.css'
import useTermData from './useTermData'

const Term = ({ anchorId, publicURL, textFilter }) => {
  const data = useTermData(publicURL)

  if (data == null) {
    return (
      <div id={anchorId} className={styles.loading}>
        Loading term
      </div>
    )
  }

  let { types } = data
  return types.includes('glossary') ? (
    <GlossaryTerm
      anchorId={anchorId}
      styles={styles}
      textFilter={textFilter}
      {...data}
    />
  ) : null
}

Term.propTypes = {
  anchorId: PropTypes.string,
  publicUrl: PropTypes.string,
}
export default Term
