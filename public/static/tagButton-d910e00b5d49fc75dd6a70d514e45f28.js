import React from 'react'
import styles from './tagButton.module.css'

const tagButton = ({ children, clickAction }) => {
  if (children === undefined || children === null) return null

  return (
    <button className={styles.button} type="button" onClick={clickAction}>
      {children}
    </button>
  )
}

export default tagButton
