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
