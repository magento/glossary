import React from 'react'
import styles from './scrim.module.css'

const Scrim = ({ enabled, clickAction, children }) => {
  let styleClass = enabled ? styles.scrim : styles.hidden

  return (
    <div
      tabIndex="0"
      className={styleClass}
      onClick={event => {
        event.preventDefault()
        clickAction()
      }}
    >
      {children}
    </div>
  )
}

export default Scrim
