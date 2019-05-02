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
