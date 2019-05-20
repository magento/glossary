import React from 'react'

import Scrim from '../Scrim'
import styles from './panel.module.css'

const Panel = props => {
  const { active, children, additionalClasses, clickAction } = props

  const className = [
    styles.panel,
    additionalClasses,
    active ? null : styles.hidden,
  ].join(' ')

  return (
    <div className={className}>
      <Scrim enabled={active} clickAction={clickAction} />
      <div className={styles.panelContent}>{children}</div>
    </div>
  )
}

export default Panel
