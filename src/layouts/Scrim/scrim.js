import React, { useEffect } from 'react'
import styles from './scrim.module.css'

const Scrim = props => {
  const { enabled, clickAction, children, additionalClasses } = props

  // Disable body scrolling if fader is shown
  // Does not work on iOs safari
  useEffect(() => {
    document.body.classList.toggle(styles.noScroll, enabled)
    return () => document.body.classList.remove(styles.noScroll)
  }, [enabled])

  const styleClass = [
    additionalClasses,
    enabled ? styles.scrim : styles.hidden,
  ].join(' ')

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
