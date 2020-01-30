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
import FormType from './formType'

const FormTypes = ({ formTypes, className }) => {
  if (formTypes == null) {
    return null
  }
  let forms = formTypes.map(formType => {
    const { form, wordClasses } = formType
    return (
      <FormType
        key={form}
        form={form}
        className={className}
        wordClasses={wordClasses}
      />
    )
  })

  return <>{forms}</>
}

FormTypes.propTypes = {
  formTypes: PropTypes.array,
}

export default FormTypes
