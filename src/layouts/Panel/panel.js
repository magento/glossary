/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/

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
