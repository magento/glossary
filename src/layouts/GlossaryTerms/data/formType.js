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
import PropTypes from 'prop-types'

const FormType = ({ form, wordClasses, className }) => {
  return (
    <div className={className}>
      <i>{form}</i>&nbsp;<span>[ {wordClasses.join(', ')} ]</span>
    </div>
  )
}

FormType.propTypes = {
  form: PropTypes.string,
  wordClasses: PropTypes.array,
}

export default FormType
