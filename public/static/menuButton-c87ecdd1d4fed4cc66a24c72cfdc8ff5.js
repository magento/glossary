import React from 'react'

import styles from './menuButton.module.css'

const MenuButton = ({ text, menuClick, additionalClasses }) => {
  let className = styles.button
  if (additionalClasses != null) {
    className += ' ' + additionalClasses
  }
  return (
    <button
      className={className}
      onClick={event => {
        event.preventDefault()
        menuClick()
      }}
    >
      {text}
    </button>
  )
}

export default MenuButton
