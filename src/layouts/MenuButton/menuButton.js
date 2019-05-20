import React from 'react'

import styles from './menuButton.module.css'
import menuIcon from './menu-icon.svg'

const MenuButton = ({ text, menuClick, additionalClasses }) => {
  let className = [styles.button, additionalClasses].join(' ')

  return (
    <button
      className={className}
      onClick={event => {
        event.preventDefault()
        menuClick()
      }}
      aria-label={text}
    >
      <img src={menuIcon} alt="" />
    </button>
  )
}

export default MenuButton
