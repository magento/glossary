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
import Term from '../../components/Term'
import PropTypes from 'prop-types'
import styles from './termsList.module.css'

const TermsList = ({ termsData }) => {
  return termsData.map(child => {
    return (
      <Term
        key={child.node.id}
        data={{ markdownRemark: child.node }}
        titleStyle={styles.termTitle}
      />
    )
  })
}

TermsList.propTypes = {
  termsData: PropTypes.array,
}

export default TermsList
