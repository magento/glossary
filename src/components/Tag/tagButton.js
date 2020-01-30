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

const tagButton = ({ children, clickAction, className }) => {
  if (children === undefined || children === null) return null

  return (
    <button
      className={className || styles.button}
      type="button"
      onClick={clickAction}
    >
      {children}
    </button>
  )
}

export default tagButton
