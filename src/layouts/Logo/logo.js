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
import Link from 'gatsby-link'

import style from './logo.module.css'
import mLogo from './m-logo.svg'
import magentoLogo from './magento-logo.svg'

const Logo = props => {
  const { text, additionalClasses } = props
  const className = [style.logo, additionalClasses].join(' ')

  return (
    <div className={className}>
      <Link to="/" className={style.link}>
        <img src={mLogo} className={style.mLogo} alt="" />
        <img src={magentoLogo} className={style.magentoLogo} alt="" />
        <span className={style.siteTitle}>{text}</span>
      </Link>
    </div>
  )
}

export default Logo
