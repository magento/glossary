import React from 'react'

const NavigationItem = ({ classes, anchorName, title }) => {
  const anchorLink = '#' + anchorName

  return (
    <a className={classes} href={anchorLink}>
      {title}
    </a>
  )
}

export default NavigationItem
