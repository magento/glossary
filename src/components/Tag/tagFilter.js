import React from 'react'
import styles from './tagButton.module.css'
import TagButton from './tagButton'
import { navigate } from 'gatsby'

const tagFilter = ({ children }) => {
  if (children === undefined || children === null) return null

  return (
    <div className={styles.tagFilter}>
      <span className={styles.tagFilterLabel}>
        Filtering by:
        <TagButton
          className={styles.tagButtonFilter}
          clickAction={() => navigate('/')}
        >
          {children}
        </TagButton>
      </span>
    </div>
  )
}

export default tagFilter
