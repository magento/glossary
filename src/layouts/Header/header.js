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
