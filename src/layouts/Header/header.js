import React from 'react'

import Logo from '../Logo'
import MenuButton from '../MenuButton'
import Search from '../Search'

import styles from './header.module.css'

const Header = ({ siteTitle, menuClickAction }) => (
  <div className={styles.container}>
    <MenuButton
      text="Menu"
      menuClick={() => {
        menuClickAction()
      }}
      additionalClasses={styles.menu}
    />

    <Logo text={siteTitle} additionalClasses={styles.title} />

    <Search />
  </div>
)

export default Header
