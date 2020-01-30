/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/

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
