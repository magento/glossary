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
