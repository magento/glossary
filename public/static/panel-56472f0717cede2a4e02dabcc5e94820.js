import React from 'react'
import styles from './panel.module.css'

function Panel({ active, children }) {
  let classes = active ? styles.panel : styles.hidden

  return (
      <div className={classes}>{children}</div>
  )
}

export default Panel
