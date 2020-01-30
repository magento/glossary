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

import style from './navigationItem.module.css'

const NavigationItem = props => {
  const { anchorName, title, active, classes } = props
  const anchorLink = '#' + anchorName

  const className = [
    style.navigationItem,
    classes,
    active ? style.active : null,
  ].join(' ')

  return (
    <a className={className} href={anchorLink}>
      {title}
    </a>
  )
}

export default NavigationItem
