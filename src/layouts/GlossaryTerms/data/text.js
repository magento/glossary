/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/

import PropTypes from 'prop-types'
import React from 'react'

const Text = ({ id, Element = 'span', className, children }) => {
  if (children === null) {
    return null
  }
  return (
    <Element id={id} className={className}>
      {children}
    </Element>
  )
}

Text.propTypes = {
  Element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
}

export default Text
